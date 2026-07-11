"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Lesson = {
    title: string;
    category: string;
    description: string;
    image: string;
    href: string;
    button: string;
    color: string;
    icon: string;
};

type LearnCardProps = {
    lesson: Lesson;
};

export default function LearnCard({ lesson }: LearnCardProps) {
    return (
        <div
            className="
        group
        relative
        w-[340px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-pink-500/40 mt-3
      "
        >
            {/* Image */}
            <div className="relative h-[240px] overflow-hidden">
                <Image
                    src={lesson.image}
                    alt={lesson.title}
                    fill
                    sizes="340px"
                    className="
            object-cover
            transition-transform
            duration-700

          "
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Category */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2">
          <span
              className={`material-symbols-outlined text-xl ${lesson.color}`}
          >
            {lesson.icon}
          </span>

                    <span
                        className={`text-sm font-bold uppercase tracking-widest ${lesson.color}`}
                    >
            {lesson.category}
          </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">

                <h3
                    className="
            text-3xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-pink-400
          "
                >
                    {lesson.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-8">
                    {lesson.description}
                </p>

                {/* Link */}
                <Link
                    href={lesson.href}
                    className={`
            mt-8
            inline-flex
            items-center
            gap-3
            font-semibold
            transition-all
            duration-300
            ${lesson.color}
          `}
                >
                    {lesson.button}

                    <ArrowRight
                        size={18}
                        className="
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
                    />
                </Link>
            </div>

            {/* Hover Glow */}
            <div
                className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
          bg-gradient-to-t
          from-pink-500/5
          via-transparent
          to-orange-500/5
        "
            />
        </div>
    );
}