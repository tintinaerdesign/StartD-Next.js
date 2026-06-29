"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
    ArrowRight,
    ShieldIcon,
    LucideBitcoin,
    PiggyBank,
    ClockAlert,
} from "lucide-react";

const Lessons = [
    {
        title: "The Lesson",
        description: "Why inflation is stealing your future.",
        icon: ClockAlert,
        image: "/assets/images/Boycoin.png",
        link: "/learn/Inflation",
    },
    {
        title: "Sound Money",
        description: "What is sound money and why it matters.",
        icon: PiggyBank,
        image: "/assets/images/Gold.png",
        link: "/learn/Inflation",
    },
    {
        title: "Bitcoin",
        description: "The hardest money ever created.",
        icon: LucideBitcoin,
        image: "/assets/images/Bitcoin.png",
        link: "/learn/Inflation",
    },
    {
        title: "Security",
        description: "Secure your Bitcoin the right way.",
        icon: ShieldIcon,
        image: "/assets/images/Security.png",
        link: "/bitcoin-security",
    }] as const;

export default function StorySection() {
    return (
        <section className="bg-black relative">
            <div className="relative max-w-7xl mx-auto p-8">
                <div className="grid lg:grid-cols-[400px_1fr] items-center gap-10">
                    {/*Left Content*/}
                    <div className="sticky max-w-2xl">
                        <div className="text-3xl text-pink-500 font-['Orbitron']">Learn & Explore</div>
                        <h3 className="text-5xl font-semibold mt-8">Knowledge Is
                            <br />
                            Your Best Defense.</h3>
                        <p className="mt-2 text-2xl text-zinc-400">Dive into thefundamentals of money,Bitcoin and financial sovereignty.</p>
                    </div>

                    {/*Card Content*/}
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {Lessons.map((item, index) => {
                            const IconComponent=item.icon;
                            return (
                                // Each Box content
                                <motion.div key={item.title}
                                            initial={{ y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            className="relative group border border-pink-300/30 bg-zinc-950 rounded-[36px]
                                                        overflow-hidden h-[400px]">
                                    {/*    Link Layer z-30  */}
                                    <Link href={item.link} className="absolute inset-0 z-30 block">

                                    </Link>
                                    {/*OverLay z-10*/}
                                    <div className="absolute inset-0 bg-gradient-to-t
                                    from-black via-black/90 to-transparent z-10"></div>
                                    {/* Image BackGround Z-0  */}
                                    <Image src={item.image}
                                           alt={item.title}
                                           fill
                                           quality="100"
                                           priority
                                           className="object-cover opacity-70 group-hover:scale-110 duration-700 transition"/>
                                    {/*    Icon z-10  */}
                                    <div className="absolute inset-0 z-10 flex flex-col items-start p-6 gap-3 justify-end">
                                        {IconComponent && (
                                            <IconComponent className="text-pink-500" size={24}></IconComponent>
                                        )}
                                        <h3 className="text-3xl whitespace-nowrap">{item.title}</h3>
                                        <p className="text-sm text-zinc-400">{item.description}</p>
                                        {/*    CTA*/}
                                        <div className="flex items-center gap-4">
                                            <span className=" text-pink-300">Read more</span>
                                            <ArrowRight size={14} className="transform group-hover:-translate-x-2 duration-600 transition-transform" />
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