import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

export default function Header() {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image
                        src="/icon.png"
                        alt="CoinSeek"
                        width={140}
                        height={32}
                    />
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
}