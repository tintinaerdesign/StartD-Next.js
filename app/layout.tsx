import "./globals.css";
import React from "react";
import { Orbitron } from "next/font/google";
import { lineSeed } from "./fonts";


const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-orbitron", // สร้างเป็น CSS Variable เอาไว้ใช้ร่วมกับ Tailwind
});

export const metadata = {
    title: "CoinSeek - Learn Money",
    description: "Understand inflation, Bitcoin, and long-term wealth",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            {/*Material Symbols */}

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            />
        </head>
        <body className={`${lineSeed.variable} ${orbitron.variable} bg-black text-white antialiased`}>
        {children}
        </body>
        </html>
    );
}