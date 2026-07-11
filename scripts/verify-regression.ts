import fs from "node:fs/promises";
import path from "node:path";
import { parse } from "csv-parse/sync";

const ROOT = process.cwd();

const INPUT = path.join(ROOT, "data", "btc-history.csv");

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

async function main() {

    const history = await loadHistory();

    const x = history.map(h => Math.log10(daysSinceGenesis(h.timestamp)));
    const y = history.map(h => Math.log10(h.price));

    const n = x.length;

    const sumX = x.reduce((a,b)=>a+b,0);
    const sumY = y.reduce((a,b)=>a+b,0);
    const sumXY = x.reduce((s,v,i)=>s+v*y[i],0);
    const sumXX = x.reduce((s,v)=>s+v*v,0);

    const slope =
        (n*sumXY - sumX*sumY) /
        (n*sumXX - sumX*sumX);

    const intercept =
        (sumY - slope*sumX)/n;

    const yMean = sumY / n;

    let ssRes = 0;
    let ssTot = 0;

    for(let i=0;i<n;i++){

        const pred =
            slope*x[i] + intercept;

        ssRes += (y[i]-pred)**2;
        ssTot += (y[i]-yMean)**2;

    }

    const r2 =
        1 - ssRes/ssTot;

    console.log({
        candles:n,
        slope,
        intercept,
        r2
    });

}

main();