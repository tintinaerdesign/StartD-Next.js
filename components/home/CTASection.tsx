"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldEllipsisIcon } from "lucide-react";
import Link from "next/link";

export default function CTASection() {

    return (

        <section className="relative bg-black/20 mt-14 overflow-hidden">

            <motion.div whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                className="relative max-w-7xl mx-auto mt-10 mb-20 rounded-3xl
                 overflow-hidden border border-[#ec4899] cursor-pointer
                bg-gradient-to-r from-[#1a0511] via-[#29061a] to-[#0c0718] p-8">
                <div className="gap-4 flex flex-col lg:text-left lg:flex-row gap-14 items-center justify-between sm:justify-between">
                {/* Left Content   */}
                    <div className="flex gap-4 items-center justify-start sm:justify-center">

                            <ShieldEllipsisIcon size={100} />

                        <div className="text-orange-500">
                            <h2 className="text-3xl md:text-5xl font-semibold">Take control of your future.</h2>
                            <p className="text-zinc-400 text-md mt-4">Learn. Plan. Save. Secure</p>
                            <p className="text-zinc-400 text-md">Start your journey to freedom your financial today.</p>
                        </div>



                    </div>
                    {/*CTA*/}
                    <div className="text-xl bg-gradient-to-r from-pink-500 to-orange-500 border border-red-400 rounded-2xl font-semibold py-5 px-5">Protect your Bitcoin</div>
                </div>
            </motion.div>



        </section>
    );
}