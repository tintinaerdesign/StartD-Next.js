"use client";

import type { Path } from "./types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Clock3,
    BookOpen,
    Trophy,
    Lock,
    ArrowRight,
} from "lucide-react";


interface Props {
    path: Path;
}

export default function PathCard({ path }: Props) {
    const locked = path.status === "locked";

    return (
        <motion.div
            whileHover={{ scaleX: 1.015 }}
            transition={{ duration: 0.5 }}
            className="
        group hover:border-pink-500/40
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
        >
            {/* IMAGE */}

            <div className="relative h-72 w-full overflow-hidden">

                <Image
                    src={path.image}
                    alt={path.title}
                    width={400}
                    height={800}
                    className={`w-full h-full transition duration-700 z-0
            ${locked ? "grayscale brightness-50" : ""}
          `}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#120712] via-[#120712]/30 to-transparent" />

                {/* Chapter */}

                <div className="absolute left-6 top-6">

                    <div
                        className={`
              rounded-full
              bg-gradient-to-r
              ${path.color}
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-widest
            `}
                    >
                        {path.chapter}
                    </div>

                </div>

                {/* Lock */}

                {locked && (
                    <div className="absolute right-6 top-6 rounded-full bg-black/60 p-3">
                        <Lock size={20} />
                    </div>
                )}
            </div>

            {/* CONTENT */}

            <div className="relative p-8">

                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    {path.subtitle}
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                    {path.title}
                </h3>

                <p className="mt-5 leading-7 text-zinc-400">
                    {path.description}
                </p>

                {/* INFO */}

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">

                    <div className="flex items-center gap-2">
                        <Clock3 size={16} />
                        {path.duration}
                    </div>

                    <div className="flex items-center gap-2">
                        <BookOpen size={16} />
                        {path.lessons} Lessons
                    </div>

                    <div className="flex items-center gap-2">
                        <Trophy size={16} />
                        {path.reward}
                    </div>

                </div>

                {/* Difficulty */}

                <div className="mt-8">

                    <div className="flex items-center justify-between">

            <span className="text-sm text-zinc-500">
              Difficulty
            </span>

                        <span className="font-semibold">
              {path.difficulty}
            </span>

                    </div>

                </div>

                {/* Progress */}

                <div className="mt-6">

                    <div className="flex justify-between text-sm">

            <span className="text-zinc-500">
              Progress
            </span>

                        <span>{path.progress}%</span>

                    </div>

                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">

                        <div
                            style={{
                                width: `${path.progress}%`,
                            }}
                            className={`
                h-full
                rounded-full
                bg-gradient-to-r
                ${path.color}
              `}
                        />

                    </div>

                </div>

                {/* BUTTON */}

                <Link
                    href={locked ? "#" : path.href}
                    className={`
            mt-8
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            py-4
            font-semibold
            transition
            duration-300
            ${
                        locked
                            ? "cursor-not-allowed bg-white/10 text-zinc-500"
                            : `bg-orange-300/40 hover:scale-[1.02]`
                    }
          `}
                >
                    {locked ? "Locked" : "Start Quest"}


                </Link>

            </div>
        </motion.div>
    );
}