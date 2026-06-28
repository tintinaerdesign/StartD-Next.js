import React from "react";
import StorySection from "@/components/home/StorySection";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col bg-black overflow-hidden">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <StorySection />
            </main>
            <Footer />
        </div>
    );
}