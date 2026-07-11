import React from 'react'
import Link from 'next/link';

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ComingSoon from "@/components/layout/ComingSoon";

const ai = () => {
    return (

        <section className="relative">
            <Navbar />
            <ComingSoon />
            <Footer />
        </section>
    )
}
export default ai
