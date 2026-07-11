import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import LearnCarousel from "@/components/home/Carousel/LearnCarousel";
import LearningPath from "@/components/learn/LearningPath/LearningPath";
import DailyQuest from "@/components/learn/DailyQuest";
import RewardSection from "@/components/learn/RewardSection";
import ContinueLearning from "@/components/learn/ContinueLearning";

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#120712] to-[#2c0918] text-white">

            <Navbar />

            <main className="space-y-32">


                <LearningPath />
                <DailyQuest />
                <RewardSection />

            </main>

            <Footer />

        </div>
    );
}