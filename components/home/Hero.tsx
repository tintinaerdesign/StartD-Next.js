"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import heroBg from "@/public/assets/hero/kid-future.png";

// import HeroFeatures from "./HeroFeatures";
// import CalculatorCard from "@/components/calculator/CalculatorCard";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden rounded-b-[48px]">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={heroBg}
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32">

                <div className="grid w-full gap-16 lg:grid-cols-2">

                    {/* Left */}
                    <div className="flex flex-col justify-center">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
                        >
                            <div className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />

                            <span className="text-sm text-zinc-200">
                Bitcoin Saving Calculator
              </span>
                        </motion.div>

                        {/* Title */}

                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .7 }}
                            className="max-w-3xl text-5xl leading-tight lg:text-7xl"
                        >
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Inflation Quietly
              </span>

                            <br />

                            <span className="text-white">
                Steals Your Future.
              </span>
                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .15, duration: .7 }}
                            className="mt-8 max-w-xl text-xl leading-8 text-zinc-400"
                        >
                            See how saving in Bitcoin instead of cash can protect your purchasing
                            power and reshape your financial future.
                        </motion.p>

                        {/* Features */}

                        {/* <HeroFeatures /> */}

                    </div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: .2, duration: .7 }}
                        className="flex items-center justify-center"
                    >

                        {/* CalculatorCard */}

                        <div className="flex h-[620px] w-full max-w-md items-center justify-center rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

              <span className="text-zinc-500">
                Calculator Card
              </span>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}