"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WalletLevels() {
    const Levels = [
        {
            gradient: "bg-gradient-to-r from-red-500 to-orange-400",
            icon: "account_balance",
            badge: "Higher Risk",
            level: "Basic",
            wallet: "Exchange Wallet",
            description: "Your Bitcoin is stored by a third party. Convenient, but you don't control the private keys.",
            pros: [ "Easy to buy & sell", "Simple for beginner", ],
            tradeoffs: [ "Counterparty risk", "Exchange hacks", "withdrawals can freeze", ],
        },
        {
            gradient: "bg-gradient-to-r  from-yellow-500 to-orange-500",
            icon: "smartphone",
            badge: "Moderate Security",
            wallet: "Software Wallet",
            level: "Intermediate",
            description: "You hold your keys yourself, but devices connected to the internet remain vulnerable.",
            pros: [ "You own your keys", "Mobile accessibility", ],
            tradeoffs: [ "Phone malware risk", "Hot wallet exposure", ],
        },
        {
            gradient: "bg-gradient-to-r from-pink-500 to-orange-500",
            icon: "shield_lock",
            badge: "Best Practice",
            wallet: "Hardware Wallet",
            level: "RECOMMEND",
            description: "Private keys stay offline, giving you maximum control and stronger protection for long-term savings.",
            pros: [ "Offline cold storage", "Full self-custody", "Long-term security", ],
            tradeoffs: [ "Small upfront cost", ],
            featured: true,
        },
    ]
    return(
        <section className="relative bg-black/10">
            {/*Glow*/}
            <div className="absolute top-0 left-0 w-26 h-26 bg-[#ec2600]/10 rounded-full blur-3xl overflow-hidden">

            </div>
            <div className="max-w-7xl mx-auto p-1">
                <div className="relative z-10 mt-40">
                    {/* Line 1 */}
                    <motion.h3
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-6 text-start text-6xl md:text-8xl font-black font-['Orbitron'] leading-[0.95]"
                    >
                        Security Isn&apos;t About{" "}
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.25,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-orange-400 inline-block"
                        >
                            Fear.
                        </motion.span>
                    </motion.h3>

                    {/* Line 2 */}
                    <motion.p
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-4 text-end text-4xl text-zinc-300 font-['Orbitron']"
                    >
                        It&apos;s About Reducing Risk.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-40 gap-10">
                    {Levels.map((item,index) => (
                        <motion.div key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.4, }}
                                    className={`relative overflow-hidden hover:-translate-y-2 transition-all duration-700 
                                    p-4 bg-white/5 border border-white/10 rounded-[36px] ${item.featured ? "bg-white/10" : "bg-white/0.03" }`}>
                                        {item.featured && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#ec0065]/10 to-yellow-500/20" />
                                        )}
                                <div className="relative flex items-center justify-between p-6">
                                    <div className={`${item.gradient} flex items-center justify-center w-16 h-16 rounded-2xl`}>
                                        <span className="material-symbols-outlined text-white text-5xl">{item.icon}</span>
                                    </div>
                                    <div className="relative border border-white/10 rounded-3xl bg-white/5 p-3 overflow-hidden">
                                        {item.badge}
                                    </div>
                                </div>
                                {/* Content    */}
                                <div className="relative flex flex-col space-y-2 p-6">
                                    <p className="text-zinc-400">{item.level}</p>
                                    <h2 className="text-3xl mt-2 font-semibold">{item.wallet}</h2>
                                    <p className="text-sm text-zinc-400 mt-2">{item.description}</p>
                                    <h1 className="text-lg font-semibold mt-5">Advantages</h1>
                                    <div>{item.pros.map((pro, i) => (
                                        <div key={i} className="flex gap-3 py-1">
                                            <span className="material-symbols-outlined text-green-400">check_circle</span>
                                            {pro}
                                        </div>
                                    ))}
                                    </div>
                                    <div>
                                        <h1 className="text-lg font-semibold">tradeoffs</h1>
                                        {item.tradeoffs.map((pro, i) => (
                                            <div key={i} className="flex gap-3 mt-2 py-1">
                                                <span className="material-symbols-outlined text-red-400">cancel</span>
                                                {pro}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex relative justify-center px-10">
                                        {item.featured && (
                                            <Link
                                                href="/bitcoin-security"
                                                className="mt-10 flex rounded-2xl px-6 py-4 whitespace-nowrap
                                                    font-semibold bg-gradient-to-r from-[#ec0065] to-[#f2a900]
                                                    hover:scale-[1.02] transition duration-300"
                                            >
                                                Explore Hardware Wallets
                                            </Link>
                                        )}
                                    </div>
                                </div>

                        </motion.div>
                            ))}
                </div>

            </div>

        </section>
    );
}