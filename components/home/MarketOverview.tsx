"use client";

import { motion } from "framer-motion";
import {
    Bitcoin,
    Landmark,
    DollarSign,
    TrendingUp,
} from "lucide-react";

const markets = [
    {
        name: "Bitcoin",
        price: "$118,420",
        change: "+2.14%",
        icon: Bitcoin,
    },
    {
        name: "Gold",
        price: "$3,352",
        change: "-0.35%",
        icon: Landmark,
    },
    {
        name: "S&P 500",
        price: "6,122",
        change: "+0.82%",
        icon: TrendingUp,
    },
    {
        name: "USD / THB",
        price: "34.51",
        change: "+0.12%",
        icon: DollarSign,
    },
];

export default function MarketOverview() {
    return (
        <section className="bg-[#050505] py-32">

            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <h2 className="text-5xl font-bold text-white">

                        Market Overview

                    </h2>

                    <p className="mt-6 text-zinc-400">

                        Real-time prices from the world's most important assets.

                    </p>

                </motion.div>

                {/* Cards */}

                <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {markets.map((market, index) => {

                        const Icon = market.icon;

                        return (

                            <motion.div
                                key={market.name}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * .1,
                                    duration: .5
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8
                                }}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                            >

                                <div className="flex items-center justify-between">

                                    <Icon
                                        className="text-orange-400"
                                        size={28}
                                    />

                                    <span className={`text-sm font-semibold ${
                                        market.change.startsWith("-")
                                            ? "text-red-400"
                                            : "text-green-400"
                                    }`}>

                    {market.change}

                  </span>

                                </div>

                                <h3 className="mt-8 text-lg text-zinc-400">

                                    {market.name}

                                </h3>

                                <p className="mt-2 text-3xl font-bold text-white">

                                    {market.price}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Chart */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    viewport={{ once: true }}
                    className="mt-20 flex h-[420px] items-center justify-center rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
                >

          <span className="text-zinc-500 text-lg">

            Market Performance Chart

          </span>

                </motion.div>

            </div>

        </section>
    );
}