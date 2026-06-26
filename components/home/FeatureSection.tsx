"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Wallet,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const futureItems = [
    {
        icon: TrendingUp,
        title: "Grow Your Wealth",
        description:
            "Build long-term wealth by consistently investing in scarce digital assets.",
    },
    {
        icon: ShieldCheck,
        title: "Protect Purchasing Power",
        description:
            "Reduce the impact of inflation and preserve the value of your savings.",
    },
    {
        icon: Wallet,
        title: "Own Your Money",
        description:
            "Bitcoin gives you full ownership without relying on traditional banks.",
    },
    {
        icon: Sparkles,
        title: "Think Long-Term",
        description:
            "Small decisions today can dramatically change your financial future.",
    },
];

export default function FeatureSection() {
    return (
        <section className="bg-[#080808] py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto max-w-3xl text-center"
                >
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            Your Future Starts Today
          </span>

                    <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
                        Every Decision You Make Today
                        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}
                            Shapes Tomorrow
            </span>
                    </h2>

                    <p className="mt-6 text-lg text-zinc-400">
                        Wealth isn't created overnight.
                        It grows through consistent habits,
                        sound money,
                        and long-term thinking.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {futureItems.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * .12,
                                    duration: .5
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03
                                }}
                                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                "
                            >

                                <div className="
                  mb-8
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-pink-500
                  to-orange-400
                ">

                                    <Icon
                                        size={30}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="text-2xl font-bold text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">

                                    {item.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}