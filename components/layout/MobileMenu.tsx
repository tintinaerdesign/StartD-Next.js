import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="
      relative
      overflow-hidden
      border-t
      border-white/10
      bg-gradient-to-br
      from-black
      via-[#0d060d]
      to-[#1a0900]
    "
        >
            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#ec0065]/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#f2a900]/10 blur-[140px]" />

            <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
                    {/* Brand */}

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4">
                            <div
                                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-[#ec0065]
                to-[#f2a900]
              "
                            >
                <span className="material-symbols-outlined text-white">
                  savings
                </span>
                            </div>

                            <div>
                                <h3 className="font-['Orbitron'] text-3xl font-black">
                                    Start D
                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Learn Money • Save Better
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
                            Learn how money works through interactive stories about inflation,
                            scarcity, Bitcoin, and long-term wealth preservation.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Inflation", "Bitcoin", "Scarcity", "Self-Custody"].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                                    >
                                        {item}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Learn */}

                    <div>
                        <h4 className="mb-5 text-lg font-semibold text-white">Learn</h4>

                        <div className="space-y-4 text-zinc-400">
                            <Link href="/LearnPage" className="block transition hover:text-white">
                                The Rise of Rome
                            </Link>

                            <Link href="/NextChapter" className="block transition hover:text-white">
                                The Fall of Glass Beads
                            </Link>

                            <Link href="/learn/gold" className="block transition hover:text-white">
                                Gold Standard
                            </Link>

                            <Link
                                href="/learn/bitcoin-standard"
                                className="block transition hover:text-white"
                            >
                                Bitcoin Standard
                            </Link>
                        </div>
                    </div>

                    {/* Tools */}

                    <div>
                        <h4 className="mb-5 text-lg font-semibold text-white">Tools</h4>

                        <div className="space-y-4 text-zinc-400">
                            <Link href="/calculator" className="block transition hover:text-white">
                                Inflation Calculator
                            </Link>

                            <Link href="/dca" className="block transition hover:text-white">
                                Bitcoin DCA Calculator
                            </Link>

                            <Link href="/tracker" className="block transition hover:text-white">
                                Bitcoin Tracker
                            </Link>

                            <Link
                                href="/wallet-comparison"
                                className="block transition hover:text-white"
                            >
                                Wallet Comparison
                            </Link>
                        </div>
                    </div>

                    {/* Resources */}

                    <div>
                        <h4 className="mb-5 text-lg font-semibold text-white">
                            Resources
                        </h4>

                        <div className="space-y-4 text-zinc-400">
                            <Link
                                href="/BitcoinSecurity"
                                className="block transition hover:text-white"
                            >
                                Self-Custody Guide
                            </Link>

                            <Link
                                href="/BitcoinSecurity"
                                className="block transition hover:text-white"
                            >
                                Bitcoin Security
                            </Link>

                            <Link href="/privacy" className="block transition hover:text-white">
                                Privacy Policy
                            </Link>

                            <Link href="/contact" className="block transition hover:text-white">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="my-12 h-px bg-white/10" />

                <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} Start D. All rights reserved.
                    </p>

                    <p className="max-w-xl text-center text-sm text-zinc-500 lg:text-right">
                        Educational content only. Nothing on this website should be
                        considered financial advice. Always do your own research before
                        making financial decisions.
                    </p>
                </div>
            </div>
        </footer>
    );
}