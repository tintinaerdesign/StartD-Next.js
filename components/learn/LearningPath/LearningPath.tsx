"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PathCard from "./PathCard";
import { learningPaths } from "./pathData";

export default function LearningPath() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -420,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 420,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative py-12 overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Navigation */}

                <div className="mt-20 flex justify-center-safe gap-4">

                    <button
                        onClick={scrollLeft}
                        className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition
              hover:bg-white/10
            "
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition
              hover:bg-white/10
            "
                    >
                        <ChevronRight />
                    </button>

                </div>

                {/* Carousel */}

                <div
                    ref={scrollRef}
                    className="mt-10 flex flex-nowrap
                                gap-8 overflow-x-auto scroll-smooth no-scrollbar
                                snap-x snap-mandatory p-6 scrollbar-hide">
                    {learningPaths.map((path, index) => (

                        <motion.div
                            key={path.id}
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * .08,
                            }}
                            viewport={{ once: true }}
                            className="
                min-w-[360px]
                snap-center
                max-w-[360px]



                shrink-0
              "
                        >
                            <PathCard path={path} />
                        </motion.div>

                    ))}
                </div>

            </div>

        </section>
    );
}