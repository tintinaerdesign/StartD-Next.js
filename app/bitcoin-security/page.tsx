import react from "react";

import HeroSecurity from "@/components/bitcoin-security/HeroSecurity";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhySelfCustody from "@/components/bitcoin-security/WhySelfCustody";
import CommonMistakes from "@/components/bitcoin-security/CommonMistakes";
import SecurityLevels from "@/components/bitcoin-security/SecurityLevels";
import WalletComparison from "@/components/bitcoin-security/WalletComparison";
import KnowledgeSection from "@/components/bitcoin-security/KnowLedgeSection";

export default function page() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#09090b] to-[#440121]">
            <Navbar />
            <HeroSecurity />
            <WhySelfCustody />
            <CommonMistakes />
            <SecurityLevels />
            <WalletComparison />
            <KnowledgeSection />
            <Footer />
        </section>

    );

}