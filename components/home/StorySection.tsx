"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StorySection() {
    return (
        <section className="relative overflow-hidden bg-black py-36">
            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mx-auto max-w-4xl text-center"
                >
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            A Different Way To Think
          </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
                        Money Isn't Just
                        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}
                            Something You Spend
            </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
                        Every dollar you save is stored time.
                        The question isn't how much money you have today—
                        it's whether your money will still hold its value tomorrow.
                    </p>
                </motion.div>

                {/* Story Card */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                    className="mt-24 rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
                >

                    <div className="grid gap-14 lg:grid-cols-2">

                        {/* Left */}

                        <div>

              <span className="text-sm uppercase tracking-[6px] text-orange-400">
                Imagine
              </span>

                            <h3 className="mt-6 text-4xl font-bold text-white">
                                What If
                                You Could Save
                                Without Losing Value?
                            </h3>

                            <p className="mt-8 leading-8 text-zinc-400">
                                Inflation quietly reduces the purchasing power of cash every year.

                                While your bank balance may increase,
                                what it can actually buy often decreases.

                                Bitcoin introduces a different idea —
                                a scarce digital asset designed for the long term.
                            </p>

                        </div>

                        {/* Right */}

                        <div className="flex flex-col justify-center gap-8">

                            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

                                <h4 className="text-lg font-semibold text-white">
                                    Traditional Saving
                                </h4>

                                <p className="mt-3 text-zinc-400">
                                    Money slowly loses purchasing power because new currency is continually created.
                                </p>

                            </div>

                            <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">

                                <h4 className="text-lg font-semibold text-white">
                                    Bitcoin Saving
                                </h4>

                                <p className="mt-3 text-zinc-300">
                                    A fixed supply encourages long-term thinking and preserving value over time.
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* Button */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <Link
                        href="/learn"
                        className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-orange-400
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
            "
                    >
                        Start Learning

                        <ArrowRight size={20} />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}