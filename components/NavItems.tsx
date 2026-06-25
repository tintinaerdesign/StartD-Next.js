"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <motion.header
            ref={dropdownRef}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
        fixed
        left-1/2
        -translate-x-1/2
        z-50
        border border-[#ec2900]/30
        bg-black/50
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(236,41,0,0.12)]
        transition-all duration-300

        ${isScrolled ? "top-4 w-11/12 rounded-[28px]" : "top-0 w-full"}
      `}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/icon.png"
                        alt="Start D"
                        width={36}
                        height={36}
                        className="h-9 w-auto"
                    />

                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
            Start D
          </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 text-[15px] md:flex">
                    <Link
                        href="/"
                        className="text-zinc-400 transition hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        href="/learn"
                        className="text-zinc-400 transition hover:text-white"
                    >
                        Learn
                    </Link>

                    <Link
                        href="/markets"
                        className="text-zinc-400 transition hover:text-white"
                    >
                        Markets
                    </Link>

                    <Link
                        href="/alerts"
                        className="text-zinc-400 transition hover:text-white"
                    >
                        Alerts
                    </Link>

                    <Link
                        href="/ai"
                        className="text-zinc-400 transition hover:text-white"
                    >
                        AI Insights
                    </Link>
                </div>

                {/* CTA */}
                <Link
                    href="/dashboard"
                    className="
            hidden
            rounded-2xl
            bg-gradient-to-r
            from-pink-500
            to-orange-500
            px-6
            py-3
            text-semibold text-white
            transition
            hover:scale-105
            md:flex
          "
                >
                    Dashboard
                </Link>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex items-center justify-center text-white md:hidden"
                >
          <span className="material-symbols-outlined text-4xl">
            {isOpen ? "close" : "menu"}
          </span>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="
              rounded-b-3xl
              border-t
              border-white/10
              bg-[#0f0f0f]/95
              backdrop-blur-xl
              md:hidden
            "
                    >
                        <ul className="flex flex-col space-y-6 p-6">
                            <li>
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/learn" onClick={() => setIsOpen(false)}>
                                    Learn
                                </Link>
                            </li>

                            <li>
                                <Link href="/markets" onClick={() => setIsOpen(false)}>
                                    Markets
                                </Link>
                            </li>

                            <li>
                                <Link href="/alerts" onClick={() => setIsOpen(false)}>
                                    Alerts
                                </Link>
                            </li>

                            <li>
                                <Link href="/ai" onClick={() => setIsOpen(false)}>
                                    AI Insights
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsOpen(false)}
                                    className="
                    inline-flex
                    rounded-xl
                    bg-gradient-to-r
                    from-[#ec2900]
                    to-orange-400
                    px-5
                    py-3
                  "
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}