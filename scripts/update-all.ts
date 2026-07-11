import { execSync } from "node:child_process";

function run(title: string, command: string) {
    console.log("");
    console.log("======================================");
    console.log(title);
    console.log("======================================");

    execSync(command, {
        stdio: "inherit",
    });
}

try {
    run(
        "1. Download BTC History",
        "tsx scripts/fetch-history.ts"
    );

    run(
        "2. Fit Regression",
        "tsx scripts/fit-regression.ts"
    );

    run(
        "3. Build Rainbow Dataset",
        "tsx scripts/build-rainbow.ts"
    );

    console.log("");
    console.log("✅ Everything completed successfully.");
} catch (error) {
    console.error("");
    console.error("❌ Update failed.");
    process.exit(1);
}