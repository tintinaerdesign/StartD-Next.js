"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Gift,
    Trophy,
    Star,
    ArrowRight,
    Coins,
} from "lucide-react";

const rewards = [
    {
        title: "Complete Lessons",
        value: "+100 XP",
        icon: Star,
        color: "from-pink-500 to-orange-400",
    },
    {
        title: "Finish Quizzes",
        value: "+250 XP",
        icon: Trophy,
        color: "from-orange-400 to-yellow-400",
    },
    {
        title: "Daily Login",
        value: "+50 XP",
        icon: Gift,
        color: "from-violet-500 to-pink-500",
    },
];

export default function RewardSection() {
    return (
        <section className="relative py-4 overflow-hidden">

            {/* Glow */}
            <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-pink-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
                        <Coins className="text-pink-500" size={18} />

                        <span className="uppercase tracking-[0.3em] text-sm text-zinc-300">
              Rewards
            </span>
                    </div>

                    <h2 className="mt-8 font-['Orbitron'] text-5xl lg:text-6xl font-black">
                        Learn.
                        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}Earn.
            </span>
                        <br />
                        Level Up.
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-zinc-400 text-lg">
                        Every lesson completed brings you closer to becoming
                        a Bitcoin expert. Earn XP, unlock achievements,
                        and build your own learning journey.
                    </p>
                </motion.div>

                {/* Reward Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">

                    {rewards.map((reward, index) => {
                        const Icon = reward.icon;

                        return (
                            <motion.div
                                key={reward.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .1,
                                    duration: .5,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="
                  relative
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  overflow-hidden
                  p-8
                "
                            >
                                <div
                                    className={`
                    absolute inset-0 opacity-10
                    bg-gradient-to-br
                    ${reward.color}
                  `}
                                />

                                <div className="relative">

                                    <div
                                        className={`
                      h-16
                      w-16
                      rounded-2xl
                      bg-gradient-to-r
                      ${reward.color}
                      flex
                      items-center
                      justify-center
                    `}
                                    >
                                        <Icon className="text-white" size={30} />
                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold">
                                        {reward.title}
                                    </h3>

                                    <p className="mt-4 text-zinc-400">
                                        Complete challenges and continue your
                                        learning adventure.
                                    </p>

                                    <div className="mt-8 text-4xl font-black bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                                        {reward.value}
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}

                </div>


            </div>
        </section>
    );
}