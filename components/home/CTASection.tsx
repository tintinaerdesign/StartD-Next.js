"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bitcoin } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden bg-[#050505] py-36">

            {/* Glow */}

            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[180px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                <motion.div
                    initial={{ opacity: 0, scale: .95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="
            rounded-[42px]
            border
            border-white/10
            bg-white/5
            p-16
            text-center
            backdrop-blur-xl
          "
                >

                    {/* Icon */}

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400">

                        <Bitcoin
                            size={40}
                            className="text-white"
                        />

                    </div>

                    {/* Heading */}

                    <h2 className="mt-10 text-5xl font-black leading-tight text-white lg:text-6xl">

                        Start Building

                        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">

              {" "}Your Financial Future

            </span>

                    </h2>

                    {/* Description */}

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">

                        Learn how Bitcoin, investing,
                        and long-term thinking can help you
                        preserve wealth and make better financial decisions.

                    </p>

                    {/* Buttons */}

                    <div className="mt-14 flex flex-col justify-center gap-6 sm:flex-row">

                        <Link
                            href="/learn"
                            className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-pink-500
                to-orange-400
                px-10
                py-5
                font-semibold
                text-white
                transition
                hover:scale-105
              "
                        >
                            Start Learning

                            <ArrowRight size={20} />

                        </Link>

                        <Link
                            href="/calculator"
                            className="
                inline-flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                px-10
                py-5
                text-white
                transition
                hover:bg-white/10
              "
                        >
                            Open Calculator
                        </Link>

                    </div>

                    {/* Bottom */}

                    <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">

                        <span>✓ Free Forever</span>

                        <span>✓ No Sign Up Required</span>

                        <span>✓ Open Source</span>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}