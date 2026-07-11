import fs from "node:fs";
import path from "node:path";

const csvPath = path.join(
    process.cwd(),
    "data",
    "btc-history.csv"
);

if (!fs.existsSync(csvPath)) {
    console.error("❌ btc-history.csv not found");
    process.exit(1);
}

const csv = fs.readFileSync(csvPath, "utf8");

const lines = csv.trim().split("\n");

if (lines.length <= 1) {
    console.error("❌ CSV is empty");
    process.exit(1);
}

const header = lines.shift();

if (header !== "date,close") {
    console.warn(
        `⚠ Unexpected header: ${header}`
    );
}

let previousTimestamp = 0;
const dateSet = new Set<string>();

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const [date, close] = line.split(",");

    if (!date || !close) {
        throw new Error(
            `Invalid row at line ${i + 2}`
        );
    }

    if (dateSet.has(date)) {
        throw new Error(
            `Duplicate date: ${date}`
        );
    }

    dateSet.add(date);

    const timestamp = new Date(date).getTime();

    if (!Number.isFinite(timestamp)) {
        throw new Error(
            `Invalid date: ${date}`
        );
    }

    if (
        previousTimestamp &&
        timestamp < previousTimestamp
    ) {
        throw new Error(
            `Dates are not sorted at ${date}`
        );
    }

    previousTimestamp = timestamp;

    const price = Number(close);

    if (!Number.isFinite(price)) {
        throw new Error(
            `Invalid price at ${date}`
        );
    }

    if (price <= 0) {
        throw new Error(
            `Price must be > 0 (${date})`
        );
    }
}

console.log("");
console.log("✅ History validation passed");
console.log(`Rows      : ${lines.length}`);
console.log(
    `First Day : ${lines[0].split(",")[0]}`
);
console.log(
    `Last Day  : ${
        lines[lines.length - 1].split(",")[0]
    }`
);