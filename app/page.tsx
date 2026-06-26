import Hero from "@/components/home/Hero";
import MarketOverview from "@/components/home/MarketOverview";
import FeatureSection from "@/components/home/FeatureSection";
import StorySection from "@/components/home/StorySection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
    return (
        <>
            <Hero />

            <MarketOverview />

            <FeatureSection />

            <StorySection />

            <CTASection />
        </>
    );
}