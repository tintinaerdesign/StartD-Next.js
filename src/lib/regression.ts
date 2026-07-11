const GENESIS_DATE = new Date("2009-01-03").getTime();

export const REGRESSION = Object.freeze({
    slope: 5.200622741902471,
    intercept: -14.757214681790945,
});

export function daysSinceGenesis(timestamp: number): number {
    return Math.max(
        (timestamp - GENESIS_DATE) /
        (1000 * 60 * 60 * 24),
        1
    );
}

export function regressionPrice(
    timestamp: number
): number {

    const days = daysSinceGenesis(timestamp);

    return Math.pow(
        10,
        REGRESSION.slope *
        Math.log10(days) +
        REGRESSION.intercept
    );

}

export function regressionDifference(
    price: number,
    timestamp: number
): number {

    return price / regressionPrice(timestamp);

}