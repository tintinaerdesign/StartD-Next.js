const GENESIS_DATE = new Date("2009-01-03T00:00:00Z").getTime();

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export function daysSinceGenesis(timestamp: number): number {
    return Math.max(
        (timestamp - GENESIS_DATE) / DAY_IN_MS,
        1
    );
}

export function timestampFromDate(date: string): number {
    return new Date(date).getTime();
}

export function dateFromTimestamp(timestamp: number): string {
    return new Date(timestamp)
        .toISOString()
        .slice(0, 10);
}

export { GENESIS_DATE };