"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Clock3,
    PlayCircle,
    CircleCheck,
} from "lucide-react";

const recentLessons = [
    "What is Money?",
    "The History of Money",
    "Why Inflation Exists",
];

export default function ContinueLearning() {
    return (
        <section className="relative py-8 overflow-hidden">

            {/* Glow */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="text-center"
                >
                    <div
                        className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              backdrop-blur-xl
            "
                    >
                        <BookOpen
                            size={18}
                            className="text-pink-500"
                        />

                        <span
                            className="
                uppercase
                tracking-[0.3em]
                text-sm
                text-zinc-300
              "
                        >
              Continue Learning
            </span>
                    </div>

                    <h2
                        className="
              mt-10
              font-['Orbitron']
              text-5xl
              lg:text-6xl
              font-black
            "
                    >
                        Continue Your

                        <br />

                        <span
                            className="
                bg-gradient-to-r
                from-pink-500
                to-orange-400
                bg-clip-text
                text-transparent
              "
                        >
              Bitcoin Journey
            </span>
                    </h2>

                    <p
                        className="
              mt-6
              max-w-3xl
              mx-auto
              text-zinc-400
              text-lg
              leading-8
            "
                    >
                        Pick up where you left off and continue
                        unlocking the next chapter of your adventure.
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                    className="
            mt-20
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            overflow-hidden
          "
                >
                    <div
                        className="
              grid
              lg:grid-cols-2
            "
                    >

                        {/* LEFT */}
                        <div className="p-10">

                            <p
                                className="
                  uppercase
                  tracking-[0.25em]
                  text-sm
                  text-pink-400
                "
                            >
                                Current Chapter
                            </p>

                            <h3
                                className="
                  mt-4
                  text-5xl
                  font-black
                "
                            >
                                Bitcoin
                                <br />
                                Revolution
                            </h3>

                            <p
                                className="
                  mt-6
                  text-zinc-400
                  leading-8
                "
                            >
                                Continue learning why Bitcoin changed
                                the world forever and how it protects
                                your future purchasing power.
                            </p>

                            {/* Stats */}

                            <div
                                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-8
                "
                            >

                                <div className="flex items-center gap-3">
                                    <Clock3
                                        className="text-orange-400"
                                        size={20}
                                    />

                                    <span className="text-zinc-300">
                    20 min left
                  </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <BookOpen
                                        className="text-pink-400"
                                        size={20}
                                    />

                                    <span className="text-zinc-300">
                    Lesson 5 / 8
                  </span>
                                </div>

                            </div>

                            {/* Progress */}

                            <div className="mt-10">

                                <div className="flex justify-between">

                  <span className="text-zinc-400">
                    Progress
                  </span>

                                    <span className="text-white font-semibold">
                    68%
                  </span>

                                </div>

                                <div
                                    className="
                    mt-3
                    h-3
                    rounded-full
                    overflow-hidden
                    bg-white/10
                  "
                                >
                                    <div
                                        className="
                      h-full
                      w-[68%]
                      rounded-full
                      bg-gradient-to-r
                      from-pink-500
                      to-orange-400
                    "
                                    />
                                </div>

                            </div>
                            {/* CTA */}

                            <Link
                                href="/learn/bitcoin"
                                className="
                  mt-10
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
                  transition
                  duration-300
                  hover:scale-105
                "
                            >
                                <PlayCircle size={20} />

                                Continue Learning

                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        {/* RIGHT */}

                        <div
                            className="
                border-l
                border-white/10
                bg-gradient-to-b
                from-white/[0.03]
                to-transparent
                p-10
              "
                        >

                            <p
                                className="
                  uppercase
                  tracking-[0.25em]
                  text-sm
                  text-zinc-500
                "
                            >
                                Recently Completed
                            </p>

                            <div className="mt-8 space-y-5">

                                {recentLessons.map((lesson) => (

                                    <motion.div
                                        key={lesson}
                                        whileHover={{ x: 8 }}
                                        className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-6
                      py-5
                    "
                                    >

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-r
                          from-green-500
                          to-emerald-400
                        "
                                            >
                                                <CircleCheck
                                                    size={22}
                                                    className="text-white"
                                                />
                                            </div>

                                            <div>

                                                <h4 className="font-semibold">
                                                    {lesson}
                                                </h4>

                                                <p className="mt-1 text-sm text-zinc-500">
                                                    Completed
                                                </p>

                                            </div>

                                        </div>

                                        <ArrowRight
                                            className="text-zinc-500"
                                            size={18}
                                        />

                                    </motion.div>

                                ))}

                            </div>

                            {/* Achievement */}

                            <div
                                className="
                  mt-10
                  rounded-3xl
                  border
                  border-orange-500/20
                  bg-gradient-to-r
                  from-[#1b0b10]
                  to-[#22110f]
                  p-6
                "
                            >

                                <p
                                    className="
                    uppercase
                    tracking-[0.25em]
                    text-xs
                    text-orange-400
                  "
                                >
                                    Next Achievement
                                </p>

                                <h4 className="mt-3 text-2xl font-bold">
                                    Finish Chapter III
                                </h4>

                                <p className="mt-3 text-zinc-400">
                                    Unlock Chapter IV
                                    <br />
                                    <span className="text-pink-400">
                    Proof of Work
                  </span>
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* Bottom CTA */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .25 }}
                    className="
            mt-20
            text-center
          "
                >

                    <h3
                        className="
              text-4xl
              font-black
              font-['Orbitron']
            "
                    >
                        Keep Building Your
                        <span
                            className="
                bg-gradient-to-r
                from-pink-500
                to-orange-400
                bg-clip-text
                text-transparent
              "
                        >
              {" "}Bitcoin Knowledge
            </span>
                    </h3>

                    <p
                        className="
              mt-5
              max-w-2xl
              mx-auto
              text-zinc-400
              leading-8
            "
                    >
                        Every lesson completed brings you one step
                        closer to financial sovereignty.
                    </p>

                </motion.div>

            </div>

        </section>
    );
}