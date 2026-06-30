import React from "react";
import StorySection from "@/components/home/StorySection";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <StorySection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}