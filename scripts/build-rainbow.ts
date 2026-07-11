import fs from "node:fs/promises";
import path from "node:path";
import { parse } from "csv-parse/sync";

const ROOT = process.cwd();

const INPUT = path.join(ROOT, "data", "btc-history.csv");
const OUTPUT = path.join(ROOT, "data", "rainbow.json");

const GENESIS = new Date("2009-01-03").getTime();

type Candle = {
    timestamp: number;
    price: number;
};

function daysSinceGenesis(timestamp: number) {
    return Math.max((timestamp - GENESIS) / 86400000, 1);
}

async function loadHistory(): Promise<Candle[]> {
    const csv = await fs.readFile(INPUT, "utf8");

    const rows = parse(csv, {
        columns: true,
        skip_empty_lines: true,
    });

    return rows.map((row: any) => ({
        timestamp: new Date(row.date).getTime(),
        price: Number(row.close),
    }));
}

function fitRegression(history: Candle[]) {
    const x: number[] = [];
    const y: number[] = [];

    for (const item of history) {
        const days = daysSinceGenesis(item.timestamp);

        x.push(Math.log10(days));
        y.push(Math.log10(item.price));
    }

    const n = x.length;

    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);

    const sumXY = x.reduce((s, xi, i) => s + xi * y[i], 0);
    const sumXX = x.reduce((s, xi) => s + xi * xi, 0);

    const slope =
        (n * sumXY - sumX * sumY) /
        (n * sumXX - sumX * sumX);

    const intercept =
        (sumY - slope * sumX) / n;

    return { slope, intercept };
}

function regressionPrice(
    timestamp: number,
    slope: number,
    intercept: number
) {
    const days = daysSinceGenesis(timestamp);

    return Math.pow(
        10,
        slope * Math.log10(days) + intercept
    );
}

async function main() {
    const history = await loadHistory();

    console.log(`Loaded ${history.length} candles`);

    const { slope, intercept } = fitRegression(history);

    console.log("Slope:", slope);
    console.log("Intercept:", intercept);

    const rows = history.map((item) => {
        const fairPrice = regressionPrice(
            item.timestamp,
            slope,
            intercept
        );

        const deviation = Math.log10(
            item.price / fairPrice
        );

        return {
            timestamp: item.timestamp,
            price: item.price,
            fairPrice,
            deviation,
        };
    });

    const min = Math.min(...rows.map(r => r.deviation));
    const max = Math.max(...rows.map(r => r.deviation));

    const rainbow = rows.map((r) => {

        const score =
            (r.deviation - min) /
            (max - min);

        let band: string;

        if (score < 1 / 7) {
            band = "fire-sale";
        } else if (score < 2 / 7) {
            band = "buy";
        } else if (score < 3 / 7) {
            band = "accumulate";
        } else if (score < 4 / 7) {
            band = "hold";
        } else if (score < 5 / 7) {
            band = "hodl";
        } else if (score < 6 / 7) {
            band = "sell";
        } else {
            band = "bubble";
        }

        return {
            timestamp: r.timestamp,
            price: Number(r.price.toFixed(2)),
            fairPrice: Number(r.fairPrice.toFixed(2)),
            deviation: Number(r.deviation.toFixed(6)),
            rainbow: Number(score.toFixed(6)),
            band,
        };

    });

    await fs.writeFile(
        OUTPUT,
        JSON.stringify(rainbow, null, 2)
    );

    console.log(`Saved ${OUTPUT}`);
}

main().catch(console.error);