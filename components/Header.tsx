import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Header = () => {
    return (
        <Header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/icon.png" alt="CoinSeek" width={140} height={32} className="h-8 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
            {/*   useDropdown*/}
            </div>
        </Header>
    )
}
export default Header;
