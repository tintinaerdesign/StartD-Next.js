import fs from "node:fs";
import path from "node:path";

import unzipper from "unzipper";
import csv from "csv-parser";

const zipPath = path.join(
    process.cwd(),
    "data",
    "Kraken_OHLCVT.zip"
);

const outputPath = path.join(
    process.cwd(),
    "data",
    "btc-history.csv"
);

async function run() {

    const output = fs.createWriteStream(outputPath);

    output.write("date,close\n");

    const directory = await unzipper.Open.file(zipPath);

    const entry = directory.files.find(file =>
        file.path.endsWith("BTCUSD_Daily_OHLC.csv")
    );

    if (!entry) {
        throw new Error(
            "BTCUSD_Daily_OHLC.csv not found inside zip."
        );
    }

    let rows = 0;

    await new Promise<void>((resolve, reject) => {

        entry
            .stream()

            .pipe(csv())

            .on("data", (row) => {

                const timestamp = Number(row.timestamp);

                if (!Number.isFinite(timestamp)) return;

                const date = new Date(
                    timestamp * 1000
                )
                    .toISOString()
                    .slice(0, 10);

                output.write(
                    `${date},${row.close}\n`
                );

                rows++;

                if (rows % 50000 === 0) {
                    console.log(
                        `${rows.toLocaleString()} rows...`
                    );
                }

            })

            .on("end", () => {

                output.end();

                console.log("");
                console.log(
                    `Finished : ${rows.toLocaleString()} rows`
                );
                console.log(
                    `Saved -> ${outputPath}`
                );
                console.log("");

                resolve();

            })

            .on("error", reject);

    });

}

run().catch(err => {

    console.error(err);

    process.exit(1);

});