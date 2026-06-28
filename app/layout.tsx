import "./globals.css";
import React from "react";

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
        <body className="bg-black text-white antialiased">
        {children}
        </body>
        </html>
    );
}