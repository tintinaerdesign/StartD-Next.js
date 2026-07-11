import React from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/home/CTASection";
import WalletLevels from "@/components/home/WalletLevels";
import Hero from "@/components/home/Hero";
import LearnExplore from "@/components/home/LearnExplore";
import LearnCarousel from "@/components/home/Carousel/LearnCarousel";
import RainbowChart from "@/components/home/Carousel/RainbowChart";
import PurchasingPower from "@/components/home/Carousel/PurchasingPower";
import FearGreedCard from "@/components/home/FearGreedCard";


import { fetchFearGreed } from "@/src/lib/fetchFearGreed";


export default async function HomePage() {

    const fearGreed = await fetchFearGreed();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-[#2c0918] overflow-hidden">

            <Navbar />

            <main>

                <FearGreedCard
                    value={fearGreed.value}
                    updatedAt={fearGreed.updatedAt}
                />

                <RainbowChart />

                <LearnCarousel />
                <Hero />
                <WalletLevels />
                <LearnExplore />


            </main>

            <Footer />

        </div>
    );
}