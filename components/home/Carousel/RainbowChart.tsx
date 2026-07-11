"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import rainbowData from "@/data/rainbow.json";

type RainbowBand = {
    key: string;
    label: string;
    labelTh: string;
    offset: number;
    color: string;
    overlay: string;
    bgImage: string;
    bgSize: string | null;
    bgPosition: string;
};

type RainbowEntry = {
    timestamp: number;
    price: number;
    fairPrice: number;
    deviation: number;
    rainbow: number;
    band: string;
};

const GENESIS_DATE = new Date("2009-01-03").getTime();

const PRICE_REFRESH_MS = 60_000;

const DAY_MS = 24 * 60 * 60 * 1000;



const BANDS: RainbowBand[] = [

    {
        key: "fire-sale",
        label: "Fire Sale",
        labelTh: "ราคาถูกสุดขั้ว",
        offset: -1.20,
        color: "from-blue-600 to-blue-500",
        overlay: "from-blue-500 via-blue-500/70 to-transparent",
        bgImage: "/assets/images/path-pow.png",
        bgSize: "70%",
        bgPosition: "120% 15%",
    },

    {
        key: "buy",
        label: "A Chance for Saving",
        labelTh: "โซนน่าซื้อ",
        offset: -0.75,
        color: "from-emerald-600 to-emerald-500",
        overlay: "from-emerald-500 via-emerald-500/30 to-transparent",
        bgImage: "/assets/images/AnimeGold.png",
        bgSize: "70%",
        bgPosition: "140% 50%",
    },

    {
        key: "accumulate",
        label: "Accumulate",
        labelTh: "สะสมได้",
        offset: -0.25,
        color: "from-teal-500 to-green-400",
        overlay: "from-teal-500 via-teal-500/30 to-transparent",
        bgImage: "/assets/images/work.png",
        bgSize: "70%",
        bgPosition: "120% 40%",
    },

    {
        key: "hold",
        label: "Still Cheap",
        labelTh: "ยังถูกอยู่",
        offset: 0.25,
        color: "from-yellow-400 to-lime-400",
        overlay: "from-yellow-500 via-yellow-500/30 to-transparent",
        bgImage: "/assets/images/learn/calculator.png",
        bgSize: "110%",
        bgPosition: "120% 90%",
    },

    {
        key: "hodl",
        label: "HODL",
        labelTh: "โซนกลาง",
        offset: 0.75,
        color: "from-yellow-500 to-amber-400",
        overlay: "from-amber-500 via-amber-500/80 to-transparent",
        bgImage: "/assets/images/aiGold.png",
        bgSize: "50%",
        bgPosition: "10% 50%",
    },

    {
        key: "sell",
        label: "Is This A Bubble?",
        labelTh: "เริ่มแพง",
        offset: 1.25,
        color: "from-orange-500 to-amber-500",
        overlay: "from-orange-500 via-orange-500/70 to-transparent",
        bgImage: "/assets/images/path-inflation.png",
        bgSize: null,
        bgPosition: "60% 25%",
    },

    {
        key: "bubble",
        label: "Maximum Bubble",
        labelTh: "ฟองสบู่สุดขั้ว",
        offset: 1.75,
        color: "from-red-600 to-orange-600",
        overlay: "from-red-500 via-red-500/30 to-transparent",
        bgImage: "/assets/images/inflate.png",
        bgSize: "90%",
        bgPosition: "300% 40%",
    },

];

function getCurrentBand(
    band: string
): RainbowBand {

    return (
        BANDS.find(
            b => b.key === band
        ) ?? BANDS[0]
    );

}

export default function RainbowChart() {

    const [price, setPrice] = useState<number | null>(null);

    const [priceTimestamp, setPriceTimestamp] =
        useState<number>(Date.now());

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        async function fetchPrice() {

            try {

                const response = await fetch(

                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_last_updated_at=true",

                    {
                        signal: controller.signal,
                        cache: "no-store",
                    }

                );

                if (!response.ok) {

                    throw new Error("Failed to fetch");

                }

                const data = await response.json();

                setPrice(data.bitcoin.usd);

                if (data.bitcoin.last_updated_at) {

                    setPriceTimestamp(

                        data.bitcoin.last_updated_at * 1000

                    );

                }

                setError(false);

            } catch (err) {

                if (
                    (err as Error).name !==
                    "AbortError"
                ) {

                    setError(true);

                }

            } finally {

                setLoading(false);

            }

        }

        fetchPrice();

        const interval = setInterval(

            fetchPrice,

            PRICE_REFRESH_MS

        );

        return () => {

            controller.abort();

            clearInterval(interval);

        };

    }, []);

    const latest =
        rainbowData[
        rainbowData.length - 1
            ] as RainbowEntry;

    const currentBand =
        getCurrentBand(
            latest.band
        );

    const currentBandIndex = BANDS.findIndex(
        (band) => band.key === latest.band
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-7xl mx-auto mt-20 mb-10 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1b0b0f] to-[#0c0709] p-6 lg:p-8 shadow-[0_0_60px_rgba(236,72,153,0.05)]"
        >
            {/* Glow accents */}
            <div className="pointer-events-none absolute left-0 top-16 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute right-0 bottom-8 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px]" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-7">
                <div>
                    <p className="font-['Orbitron'] text-3xl text-white uppercase tracking-[0.15em]">
                        Rainbow chart
                    </p>
                    <h3 className="mt-1.5 font-line text-lg lg:text-3xl text-gray-400 tracking-wide">
                        ตอนนี้เราอยู่โซนไหน?
                    </h3>
                </div>

                {currentBand && (
                    <div className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-20 py-2.5 shadow-[0_4px_20px_rgba(236,72,153,0.35)]">
                        <span className="text-2xl font-line text-white">
                            {currentBand.labelTh}
                        </span>
                    </div>
                )}
            </div>

            {loading && (
                <div className="h-40 flex items-center justify-center text-zinc-500 text-sm">
                    กำลังโหลดราคา...
                </div>
            )}

            {error && !loading && (
                <div className="h-40 flex items-center justify-center text-zinc-500 text-5xl font-line">
                    ดึงข้อมูลราคาไม่สำเร็จ ลองใหม่อีกครั้ง
                </div>
            )}

            {!loading && !error && price && (
                <>
                    {/* Bands stack */}
                    <div className="relative z-10 flex flex-col-reverse gap-[3px] rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
                        {BANDS.map((band, index) => {
                            const isActive = index === currentBandIndex;
                            return (
                                <div
                                    key={band.key}
                                    className={`z-0
                                        relative flex items-center justify-between px-5 py-10
                                        bg-gradient-to-r ${band.color}
                                        transition-all duration-300
                                        ${isActive
                                        ? "ring-4 ring-inset animate-pulse ring-white/90 shadow-[0_0_24px_rgba(236,72,153,0.5)] py-4"
                                        : "opacity-60"
                                    }
                                    `}
                                >
                                    {/* Background z-10*/}
                                    {band.bgImage && (
                                        <div
                                            className="absolute z-10 inset-0 opacity-20 pointer-events-none"
                                            style={{
                                                backgroundImage: `url(${band.bgImage})`,
                                                backgroundPosition: band.bgPosition ?? undefined,
                                                backgroundSize: band.bgSize ?? undefined,
                                            }}
                                        />
                                    )}
                                    {/*overlay z-20*/}
                                    <div className={`absolute inset-0 z-20 bg-gradient-to-r ${band.overlay} `}></div>
                                    {/*label z-30*/}
                                    <span className="relative z-30 text-xl font-['Orbitron'] font-bold text-black">
                                        {band.label}
                                    </span>
                                    {isActive && (
                                        <span className="relative font-line flex items-center gap-1.5 text-2xl text-black/90">
                                            <span className="h-2 w-2 rounded-full bg-black/85 shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
                                            คุณอยู่ตรงนี้
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="relative font-line z-10 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            ราคาปัจจุบัน{" "}
                            <span className="font-bold text-white">
                                ${price.toLocaleString()}
                            </span>{" "}
                            อยู่ในโซน{" "}
                            <span className="font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                                {currentBand?.labelTh}
                            </span>{" "}
                            เทียบกับแนวโน้มราคาระยะยาวของ Bitcoin
                        </p>
                    </div>
                </>
            )}
        </motion.div>
    );
}