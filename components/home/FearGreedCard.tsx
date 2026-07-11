import Image from "next/image";
import { getFearGreedState } from "@/src/lib/fearGreed";

type FearGreedCardProps = {
    value: number;
    updatedAt: string;
};

export default function FearGreedCard({
                                          value,
                                          updatedAt,
                                      }: FearGreedCardProps) {

    // Clamp ให้อยู่ระหว่าง 0-100
    const fearGreed = Math.max(0, Math.min(100, Number(value) || 0));

    console.log("FearGreedCard value =", value);
    console.log("fearGreed =", fearGreed);

    const state = getFearGreedState(fearGreed);

    return (

        <section className="relative  mt-20 overflow-hidden rounded-3xl border border-black/10">

            {/* Background */}
            <Image
                src={state.image}
                alt={state.label}
                fill quality={100}
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />

            <div className="relative z-10 grid min-h-[600px] lg:grid-cols-2">

                {/* Left */}
                <div className="flex flex-col justify-between p-10">

                    <div className="flex flex-col space-y-4">

                        <p className="mb-6 font-['Orbitron'] tracking-[0.35em] text-5xl text-zinc-400">
                            FEAR & GREED INDEX
                        </p>

                        <h1 className={`font-['Orbitron'] animate-pulse text-5xl font-bold ${state.color}`}>
                            {fearGreed}
                        </h1>

                        <h2
                            className={`mt-2 font-['Orbitron'] text-3xl font-bold tracking-[0.25em] ${state.color}`}
                        >
                            {state.label.toUpperCase()}
                        </h2>

                        <p className="mt-6 max-w-lg leading-8 text-zinc-300">
                            {state.description}
                        </p>

                        {/* Progress */}
                        <div className=" relative mt-12 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">

                            {/* Progress Container */}
                            <div
                                style={{
                                    position: "relative",
                                    marginTop: "24px",
                                }}
                            >

                                {/* Gradient Bar */}
                                <div
                                    style={{

                                        position: "relative",
                                        width: "100%",
                                        height: "24px",
                                        top: "17px",
                                        borderRadius: "999px",
                                        background:
                                            "linear-gradient(90deg,#7f1d1d 0%,#dc2626 15%,#f97316 35%,#facc15 50%,#84cc16 65%,#22c55e 85%,#15803d 100%)",
                                    }}
                                />

                                {/* Marker */}
                                <div
                                    style={{
                                        position: "absolute",

                                        left: `${fearGreed}%`,
                                        top: "-42px",
                                        transform: "translateX(-50%)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        zIndex: 10,
                                    }}
                                >
                                    {/* Value */}
                                    <div className={`animate-pulse ${state.color}`}
                                         style={{
                                                position: "relative",
                                                top: `${fearGreed}%`,
                                                padding: "4px 8px",
                                                fontFamily: "var(--font-orbitron)",
                                                fontWeight: "bold",
                                                fontSize: "50px",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {fearGreed}
                                    </div>

                                    {/* Line */}
                                    <div
                                        style={{
                                            width: "2px",
                                            height: "24px",
                                            background: "#ffffff",
                                            marginTop: "1px",
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="mb-1 mt-10 flex justify-between text-sm font-medium">
                                <span className="text-red-300">Extreme Fear</span>
                                <span className="text-green-300">Extreme Greed</span>
                            </div>
                        </div>
                        {/* Updated */}
                        <div className="mt-10 flex items-center gap-2 text-sm text-zinc-400">

                            <span className="material-symbols-outlined">
                                schedule
                            </span>

                            Updated {updatedAt}

                        </div>

                    </div>



                </div>

                {/* Right */}
                <div />

            </div>

        </section>

    );
}