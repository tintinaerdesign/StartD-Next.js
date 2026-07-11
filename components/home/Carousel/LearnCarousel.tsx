"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import LearnCard from "./LearnCard";
import { lessons } from "./data";

export default function LearnCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: -380,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: 380,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative mt-20 overflow-hidden">
            {/* Glow */}
            <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-pink-500/10 blur-[140px]" />
            <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="text-center"
                >

                    <h2 className="mt-8 font-['Orbitron'] text-5xl lg:text-7xl font-black">

            <span className="text-white">
              Start Your
            </span>

                        <br />

                        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Bitcoin
            </span> Journey

                    </h2>

                    <p className="mt-6 text-xl text-zinc-400">
                        Learn. Understand. Build your future.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative py-4 mt-20">

                    {/* Left Button */}
                    <button
                        onClick={scrollLeft}
                        className="
              absolute
              left-[-24px]
              top-1/2
              -translate-y-1/2
              z-30
              flex
              h-14
              w-14
              items-center cursor-pointer
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/60
              backdrop-blur-xl
              hover:border-pink-500
              transition
            "
                    >
                        <ChevronLeft size={26} />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={scrollRight}
                        className="
              absolute
              right-[-24px]
              top-1/2
              -translate-y-1/2
              z-30
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/60
              backdrop-blur-xl
              hover:border-pink-500
              transition
            "
                    >
                        <ChevronRight size={26} />
                    </button>

                    {/* Scroll Area */}
                    <div
                        ref={scrollRef}
                        className="
              flex
              gap-8
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              pb-6 cursor-pointer

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
                    >
                        {lessons.map((lesson, index) => (
                            <motion.div
                                key={lesson.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .08,
                                    duration: .45,
                                }}
                                className="snap-start shrink-0"
                            >
                                <LearnCard lesson={lesson} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Indicator */}
                    <div className="mt-10 flex justify-center gap-3">

                        <div className="h-[4px] w-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />

                        <div className="h-[4px] w-10 rounded-full bg-zinc-700" />

                        <div className="h-[4px] w-10 rounded-full bg-zinc-700" />

                        <div className="h-[4px] w-10 rounded-full bg-zinc-700" />

                    </div>
                </div>
            </div>
        </section>
    );
}