"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselButtonProps = {
    direction: "left" | "right";
    onClick: () => void;
};

export default function CarouselButton({
                                           direction,
                                           onClick,
                                       }: CarouselButtonProps) {
    const Icon = direction === "left" ? ChevronLeft : ChevronRight;

    return (
        <button
            onClick={onClick}
            aria-label={direction === "left" ? "Previous" : "Next"}
            className={`
        group
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-black/50
        backdrop-blur-xl
        transition-all
        duration-300

        hover:scale-110
        hover:border-pink-500/60
        hover:bg-white/10
        active:scale-95
      `}
        >
            <Icon
                size={24}
                className="
          text-white
          transition-transform
          duration-300
          group-hover:scale-110
        "
            />
        </button>
    );
}