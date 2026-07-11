"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Flame,
    Star,
    CircleCheck,
    Trophy,
} from "lucide-react";

const quests = [
    {
        title: "Complete Lesson",
        description: "Finish one Bitcoin lesson.",
        reward: "+100 XP",
        icon: CircleCheck,
        done: true,
    },
    {
        title: "Read 5 Minutes",
        description: "Spend 5 minutes learning.",
        reward: "+50 XP",
        icon: Flame,
        done: false,
    },
    {
        title: "Finish Quiz",
        description: "Answer today's challenge.",
        reward: "+150 XP",
        icon: Trophy,
        done: false,
    },
];

export default function DailyQuest() {
    return (
        <section className="relative">
            {/* Glow */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
                        <Star size={16} className="text-pink-500" />
                        <span className="text-sm uppercase tracking-[0.3em] text-zinc-300">
              Daily Quest
            </span>
                    </div>

                    <h2 className="mt-8 font-['Orbitron'] text-5xl lg:text-6xl font-black">
                        Keep Learning
                        <br />
                        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Every Single Day
            </span>
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-zinc-400 text-lg">
                        Complete daily missions, earn XP and build your Bitcoin
                        knowledge one step at a time.
                    </p>
                </motion.div>

                {/* Quest Card */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2, duration: .5 }}
                    className="mt-16 rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 px-8 py-6">
                        <div>
                            <p className="text-zinc-500 uppercase tracking-[0.25em] text-sm">
                                Today's Progress
                            </p>

                            <h3 className="mt-2 text-3xl font-bold">
                                1 / 3 Quests Completed
                            </h3>
                        </div>

                        <div className="w-full lg:w-72">
                            <div className="flex justify-between text-sm text-zinc-400">
                                <span>Progress</span>
                                <span>33%</span>
                            </div>

                            <div className="mt-3 h-3 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />
                            </div>
                        </div>
                    </div>

                    {/* Quest List */}
                    <div className="divide-y divide-white/10">
                        {quests.map((quest, index) => {
                            const Icon = quest.icon;

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 6 }}
                                    transition={{ duration: .2 }}
                                    className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between px-8 py-6"
                                >
                                    <div className="flex items-start gap-5">
                                        <div
                                            className={`
                        flex h-14 w-14 items-center justify-center rounded-2xl
                        ${
                                                quest.done
                                                    ? "bg-gradient-to-r from-green-500 to-emerald-400"
                                                    : "bg-gradient-to-r from-pink-500 to-orange-400"
                                            }
                      `}
                                        >
                                            <Icon size={24} className="text-white" />
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-semibold">
                                                {quest.title}
                                            </h4>

                                            <p className="mt-2 text-zinc-400">
                                                {quest.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-orange-300">
                      {quest.reward}
                    </span>

                                        {quest.done ? (
                                            <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
                        Completed
                      </span>
                                        ) : (
                                            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-sm text-pink-400">
                        In Progress
                      </span>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between px-8 py-8 border-t border-white/10">
                        <div>
                            <p className="text-zinc-500 uppercase tracking-[0.25em] text-sm">
                                Daily Reward
                            </p>

                            <h4 className="mt-2 text-2xl font-bold">
                                Complete all quests to earn
                            </h4>

                            <p className="mt-2 text-pink-400 font-semibold">
                                +500 XP • Achievement Badge
                            </p>
                        </div>

                        <Link
                            href="/learn"
                            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-4 font-semibold transition hover:scale-105"
                        >
                            Continue Learning
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/*    สเตตัส 4 กล่อง */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .3 }}
                    className="
          mt-16
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        "
                >
                    {[
                        {
                            number: "20+",
                            label: "Lessons",
                            icon: "menu_book",
                        },
                        {
                            number: "4",
                            label: "Learning Paths",
                            icon: "route",
                        },
                        {
                            number: "100%",
                            label: "Free",
                            icon: "favorite",
                        },
                        {
                            number: "∞",
                            label: "Lifetime",
                            icon: "all_inclusive",
                        },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              hover:border-pink-500/40
              transition
            "
                        >
              <span className="material-symbols-outlined text-pink-500">
                {item.icon}
              </span>

                            <h2 className="mt-4 text-4xl font-bold">
                                {item.number}
                            </h2>

                            <p className="mt-2 text-zinc-400">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}