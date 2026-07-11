export const BAND_MULTIPLIERS = Object.freeze([
    0.35,
    0.50,
    0.70,
    1.00,
    1.45,
    2.00,
    2.80,
    4.00,
    6.00,
]);

export const BAND_LABELS = Object.freeze([
    "Fire Sale",
    "Buy",
    "Accumulate",
    "Fair Value",
    "HODL",
    "Is This A Bubble?",
    "FOMO",
    "Sell",
    "Maximum Bubble",
]);

export type RainbowBand = {
    index: number;
    label: string;
    multiplier: number;
};

export function getRainbowBand(
    price: number,
    regressionPrice: number
): RainbowBand {

    const ratio = price / regressionPrice;

    for (let i = 0; i < BAND_MULTIPLIERS.length; i++) {

        if (ratio <= BAND_MULTIPLIERS[i]) {

            return {
                index: i,
                label: BAND_LABELS[i],
                multiplier: BAND_MULTIPLIERS[i],
            };

        }

    }

    return {
        index: BAND_MULTIPLIERS.length - 1,
        label: BAND_LABELS[BAND_LABELS.length - 1],
        multiplier:
            BAND_MULTIPLIERS[BAND_MULTIPLIERS.length - 1],
    };
}

export function getBandPrice(
    regressionPrice: number,
    multiplier: number
): number {

    return regressionPrice * multiplier;

}