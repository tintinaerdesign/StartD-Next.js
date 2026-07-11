import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Mail, PiggyBank } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">

            {/* Glow BG */}
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-24">

                {/* Top Section */}
                <div className="flex flex-col items-start  gap-10 lg:flex-row">

                    <div className="max-w-lg">
                        {/* โลโก้แบรนด์ */}
                        <div className=" flex gap-4">
                            <div
                                className="flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-gradient-to-r
                                            from-pink-500
                                            to-orange-400
                                          "
                            >
                                <PiggyBank
                                    size={28}
                                    color="white"
                                    strokeWidth={2.2}
                                />
                            </div>
                            <div>
                                <h3 className="font-['Orbitron'] text-4xl font-semibold">Start D</h3>
                                <p className="text-zinc-500 text-sm mt-1">
                                    Learn Money • Save Better
                                </p>

                            </div>

                        </div>

                        <p className="mt-6 text-zinc-400 leading-relaxed max-w-md"
                        >
                            Learn how money works through interactive stories about inflation,
                            scarcity, Bitcoin, and long-term wealth preservation.
                        </p>

                        {/*Tags*/}
                        <div className="flex flex-wrap mt-4 gap-3">
                            {["Inflation", "Scarcity", "Bitcoin", "self-custody"].map((item, index) => (
                                <div key={item}
                                    className="bg-white/5 border border-white/10
                                     px-4 py-2 text-md rounded-2xl text-white">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-14 lg:grid-cols-3">
                        <div>
                            <h3 className="mb-5 font-semibold text-white tracking-wide">
                                Lessons
                            </h3>
                            <div>
                                <div className="space-y-4 text-zinc-400">
                                    <Link
                                        href="#"
                                        className="block hover:text-white transition">
                                        The Rise of Rome
                                    </Link>

                                    <Link href="#" className="block hover:text-white transition">
                                        The Fall of Glass Beads
                                    </Link>

                                    <Link href="#" className="block hover:text-white transition">
                                        Gold Standard
                                    </Link>

                                    <Link
                                        href="#"
                                        className="block hover:text-white transition"
                                    >
                                        Bitcoin Standard
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-5 font-semibold text-white tracking-wide">
                                Tools
                            </h3>
                            <div>
                                <div className="space-y-4 text-zinc-400">
                                    <Link
                                        href="#"
                                        className="block hover:text-white transition">
                                        Inflation Calculator
                                    </Link>

                                    <Link href="#" className="block hover:text-white transition">
                                        Bitcoin DCA Calculator
                                    </Link>

                                    <Link href="#" className="block hover:text-white transition">
                                        Bitcoin Tracker
                                    </Link>

                                    <Link
                                        href="#"
                                        className="block hover:text-white transition"
                                    >
                                        Wallet Comparison
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-5 font-semibold text-white tracking-wide">
                                Resources
                            </h3>
                            <div>
                                <div>
                                    <div className="space-y-4 text-md text-zinc-400">
                                        <Link href="/bitcoin-security" className="block hover:text-white transition">Bitcoin Security</Link>
                                        <Link href="#" className="block hover:text-white transition">Self-custody Guide</Link>
                                        <Link href="#" className="block hover:text-white transition">About</Link>
                                        <Link href="#" className="block hover:text-white transition">Contact</Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-14 h-px bg-white/10" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <p className="text-sm text-zinc-500">
                        © 2026 Start D. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-zinc-400">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="cursor-pointer text-xl transition hover:text-white" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="cursor-pointer text-xl transition hover:text-white" />
                        </a>
                        <a href="mailto:contact@startd.com">
                            <Mail className="cursor-pointer text-xl transition hover:text-white" />
                        </a>
                    </div>

                    <p
                        className="
          text-zinc-500
          text-sm
          text-center
          lg:text-right
          max-w-md
        "
                    >
                        Educational content only. Nothing on this website should be
                        considered financial advice. Always do your own research before
                        making financial decisions.
                    </p>
                </div>

            </div>
        </footer>
    );
}