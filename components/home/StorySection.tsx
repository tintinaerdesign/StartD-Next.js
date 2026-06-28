"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Boycoin from "@/public/assets/images/Boycoin.png";
import Gold from "@/public/assets/images/Gold.png";
import Bitcoin from "@/public/assets/images/Bitcoin.png";
import Security from "@/public/assets/images/Security.png";

import {
    ArrowRight,
    ClockAlert,
    OctagonIcon,
    BitcoinIcon,
    ShieldCheck,
} from "lucide-react";

export const Lessons = [
    {
        title: "The Problem",
        description: "Why inflation is stealing your future.",
        icon: ClockAlert,
        image: Boycoin,
        link: "/learn/the-problem",
    },
    {
        title: "Sound Money",
        description: "What is sound money and why it matters.",
        icon: OctagonIcon,
        image: Gold,
        link: "/learn/sound-money",
    },
    {
        title: "Bitcoin",
        description: "The hardest money ever created.",
        icon: BitcoinIcon,
        image: Bitcoin,
        link: "/learn/bitcoin",
    },
    {
        title: "Self-Custody",
        description: "Secure your Bitcoin the right way.",
        icon: ShieldCheck,
        image: Security,
        link: "/learn/self-custody",
    },
] as const;

export default function StorySection() {
    return (
        <section className="bg-black py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start w-full">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:sticky lg:top-10">
                        <span className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
                            Learn & Explore
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mt-4">
                            Knowledge Is
                            <br />
                            Your Best Defense.
                        </h2>

                        <p className="text-zinc-400 mt-5 text-base md:text-lg leading-relaxed">
                            Dive into the fundamentals of money, Bitcoin, and financial
                            sovereignty.
                        </p>
                    </div>

                    {/* CARDS GRID CONTAINER */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 w-full justify-items-center">
                        {Lessons.map((item) => {
                            const IconComponent = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative h-[430px] w-full max-w-[240px] rounded-[32px] overflow-hidden border border-zinc-900 bg-zinc-950 flex flex-col justify-end"
                                >
                                    {/* LINK LAYER (Z-20) */}
                                    <Link href={item.link} className="absolute inset-0 z-20 block">
                                        <span className="sr-only">Read more about {item.title}</span>
                                    </Link>

                                    {/* BACKGROUND IMAGE LAYER (Z-0) */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            quality={95}
                                            priority
                                            sizes="(min-width: 1280px) 240px, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover opacity-90 transition duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                    </div>

                                    {/* CONTENT LAYER (Z-10) */}
                                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end pointer-events-none">
                                        {/* ICON */}
                                        {IconComponent && (
                                            <IconComponent className="text-pink-500 mb-4 shrink-0" size={24} />
                                        )}

                                        {/* TITLE */}
                                        <h3 className="text-2xl font-bold text-white tracking-wide">
                                            {item.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="mt-2 text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                                            {item.description}
                                        </p>

                                        {/* READ MORE CTA */}
                                        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-pink-500 group-hover:text-pink-400 transition-colors">
                                            <span>Read More</span>
                                            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}