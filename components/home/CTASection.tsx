"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldEllipsisIcon } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden">

            <motion.div whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                className="relative max-w-7xl mx-auto mt-10 mb-20 rounded-3xl
                 overflow-hidden border border-pink-400
                from-pink-400 via-white to-transparent p-8">
                <div className="gap-4 flex flex-col lg:text-left lg:flex-row gap-14 items-center justify-between sm:justify-between">
                {/* Left Content   */}
                    <div className="flex gap-4 items-center justify-start sm:justify-center">
                        <div className="
                                          w-24 h-24
                                          sm:w-28 sm:h-28 rounded-3xl
                                          bg-orange-500 bg-clip-text

                                          flex
                                          items-center
                                          justify-center
                                          shrink-0
                                          shadow-[0_0_50px_rgba(255,180,0,0.4)]
                                             ">
                            <ShieldEllipsisIcon size={100} />
                        </div>
                        <div className="">
                            <h2 className="text-5xl font-semibold">Take control of your future.</h2>
                            <p className="text-zinc-400 text-md mt-4">Learn. Plan. Save. Secure</p>
                            <p className="text-zinc-400 text-md">Start your journey to freedom your financial today.</p>
                        </div>



                    </div>
                    {/*CTA*/}
                    <div className="text-xl bg-gradient-to-r from-pink-500 to-black rounded-2xl font-bold p-6">Protect your Bitcoin</div>
                </div>
            </motion.div>



        </section>
    );
}