import fs from "node:fs";
import path from "node:path";
import { linearRegression } from "simple-statistics";

const GENESIS_DATE = new Date("2009-01-03").getTime();

const csvPath = path.join(
    process.cwd(),
    "data",
    "btc-history.csv"
);

const csv = fs.readFileSync(csvPath, "utf8");

const lines = csv.trim().split("\n");

lines.shift();

const regressionData: [number, number][] = [];

for (const line of lines) {

    const [date, close] = line.split(",");

    const price = Number(close);

    if (!Number.isFinite(price)) continue;

    if (price <= 0) continue;

    const timestamp = new Date(date).getTime();

    const days =
        (timestamp - GENESIS_DATE) /
        (1000 * 60 * 60 * 24);

    if (days <= 0) continue;

    regressionData.push([
        Math.log10(days),
        Math.log10(price),
    ]);

}

console.log(
    `Samples : ${regressionData.length.toLocaleString()}`
);

const regression = linearRegression(regressionData);

console.log("");
console.log("Regression Complete");
console.log("----------------------------");
console.log(`Slope      : ${regression.m}`);
console.log(`Intercept  : ${regression.b}`);
console.log("");