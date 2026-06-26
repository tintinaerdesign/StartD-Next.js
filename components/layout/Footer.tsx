import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";



export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">

            {/* Glow */}

            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-24">

                {/* Top */}

                <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">

                    <div className="max-w-lg">

                        <h2 className="text-5xl font-black tracking-tight bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                            Start D
                        </h2>

                        <p className="mt-5 text-2xl font-semibold text-white">
                            Learn Money.
                            <br />
                            Own Your Future.
                        </p>

                        <p className="mt-6 leading-8 text-zinc-400">
                            Helping people understand inflation,
                            Bitcoin and long-term wealth
                            through interactive experiences.
                        </p>

                        <div className="mt-10 flex gap-4">

                            <Link
                                href="/learn"
                                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white transition hover:scale-105"
                            >
                                Start Learning
                               S
                            </Link>

                            <Link
                                href="/calculator"
                                className="rounded-xl border border-white/10 px-6 py-3 text-zinc-300 transition hover:border-white hover:text-white"
                            >
                                Calculator
                            </Link>

                        </div>

                    </div>

                    {/* Links */}

                    <div className="grid grid-cols-2 gap-14 lg:grid-cols-3">

                        <div>
                            <h3 className="mb-5 font-semibold text-white">
                                Learn
                            </h3>

                            <div className="space-y-3">

                                <Link href="#">Rise of Rome</Link>
                                <Link href="#">Glass Beads</Link>
                                <Link href="#">Bitcoin Standard</Link>

                            </div>
                        </div>

                        <div>
                            <h3 className="mb-5 font-semibold text-white">
                                Tools
                            </h3>

                            <div className="space-y-3">

                                <Link href="#">Inflation Calculator</Link>
                                <Link href="#">Bitcoin Tracker</Link>
                                <Link href="#">DCA Calculator</Link>

                            </div>
                        </div>

                        <div>
                            <h3 className="mb-5 font-semibold text-white">
                                Resources
                            </h3>

                            <div className="space-y-3">

                                <Link href="#">Bitcoin Security</Link>
                                <Link href="#">About</Link>
                                <Link href="#">Contact</Link>

                            </div>
                        </div>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-14 h-px bg-white/10" />

                {/* Bottom */}

                <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

                    <p className="text-sm text-zinc-500">
                        © 2026 Start D
                    </p>

                    <div className="flex items-center gap-6 text-zinc-400">
                        <FaGithub className="cursor-pointer text-xl transition hover:text-white" />
                        <FaXTwitter className="cursor-pointer text-xl transition hover:text-white" />
                        <Mail className="cursor-pointer transition hover:text-white" />
                    </div>

                    <p className="text-sm text-zinc-500">
                        Made with ❤️ in Thailand
                    </p>

                </div>

            </div>

        </footer>
    );
}