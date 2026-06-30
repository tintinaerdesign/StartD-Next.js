"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import {
    ArrowRight,
    ClockAlert,
    PiggyBank,
    LucideBitcoin,
    Shield,
} from "lucide-react";

const Lessons = [
    {
        title: "Lessons",
        icon: ClockAlert,
        description: "The inflation is stealing your future?",
        link: "/learn/the-lessons",
        image: "/assets/images/Boycoin.png",
    },
    {
        title: "Sound Money",
        icon: PiggyBank,
        description: "why sound money matters?",
        link: "/learn/the-lessons",
        image: "/assets/images/Gold.png",
    },
    {
        title : "Bitcoin",
        icon: LucideBitcoin,
        description: "Hardest money ever created !",
        link: "/learn/the-lessons",
        image: "/assets/images/Bitcoin.png",
    },
    {
        title: "Security",
        icon: Shield,
        description: "Secure Bitcoin the right way",
        link: "/learn/the-lessons",
        image: "/assets/images/Security.png",
    }
] as const;
export default function StorySection(){
    return (
        <section className="bg-black py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] px-8">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">

                        <div className="text-3xl text-pink-500 font-['Orbitron']">Learn& Explore

                        </div>
                        <h3 className="text-3xl font-semibold mt-6">Knowledge is <br />Is your best defence. </h3>
                        <p className="mt-6 text-zinc-400">Dive into the dundamentals of money, bitcoin and money sovereignty.</p>
                    </div>
                    {/* card Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 mt-10">
                        {Lessons.map((item, index) => {
                            const IconComponent = item.icon;
                            return(
                                <motion.div key={item.title}
                                            animation ={{ opacity: 1}}
                                            whileHover={{ y: -10, scale: 1.03}}
                                            transition={{ duration: 0.4 }}
                                            className="group relative h-[400px] border-zinc-950 border border-pink-300 rounded-[36px] overflow-hidden">
                                    {/* Link Layer z-30*/}
                                    <Link href={item.link} className="absolute inset-0 z-30" />


                                    {/*IMG z-0*/}
                                    <Image src={item.image}
                                            alt={item.title}
                                            fill
                                           priority
                                           className="z-0 object-cover opacity-50 group-hover:scale-110 duration-700 transition"


                                    />
                                    {/* Overlay z-10   */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                                    {/*  Content z-20  */}
                                    <div className="z-20 absolute inset-0 flex flex-col items-start justify-end p-5">
                                        {/* Icon   */}
                                        {IconComponent && (
                                            <IconComponent className="text-pink-500 shrink-0" size={24}/>
                                        )}
                                        <h3 className="text-xl">{item.title}</h3>
                                        <p className="text-zinc-400 mt-3">{item.description}</p>
                                        <div className="flex items-center text-pink-500 font-semibold mt-3 text-md group/readmore">
                                            Read more
                                            <span>
                                                <ArrowRight className="ml-4 transition-transform group-hover:translate-x-2" size={13}/>
                                            </span>
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