import localFont from "next/font/local";

export const lineSeed = localFont({
    src: [
        {
            path: "./fonts/LINESeedSansTH_A_Th.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/LINESeedSansTH_A_Rg.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/LINESeedSansTH_A_Bd.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/LINESeedSansTH_A_XBd.ttf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-line-seed",
    display: "swap",
});