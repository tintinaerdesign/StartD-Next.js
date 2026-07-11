export type Lesson = {
    title: string;
    category: string;
    description: string;
    image: string;
    href: string;
    button: string;
    color: string;
    icon: string;
};

export const lessons: Lesson[] = [
    {
        title: "What Is Money?",
        category: "Money",
        description:
            "Discover why money exists, how it evolved, and why sound money matters in today's world.",
        image: "/assets/images/AnimeGold.png",
        href: "/learn/money",
        button: "Start Lesson",
        color: "text-yellow-400",
        icon: "payments",
    },

    {
        title: "The Hidden Cost of Inflation",
        category: "Inflation",
        description:
            "Learn how inflation silently reduces your purchasing power and affects your long-term savings.",
        image: "/assets/images/inflate.png",
        href: "/learn/inflation",
        button: "Read More",
        color: "text-red-400",
        icon: "trending_down",
    },

    {
        title: "Why Bitcoin?",
        category: "Bitcoin",
        description:
            "Understand why Bitcoin is considered the hardest money ever created and how it differs from fiat currency.",
        image: "/assets/images/path-book.png",
        href: "/learn/bitcoin",
        button: "Explore",
        color: "text-orange-400",
        icon: "currency_bitcoin",
    },

    {
        title: "Secure Your Bitcoin",
        category: "Security",
        description:
            "Learn self-custody, private keys, seed phrases, and why hardware wallets are important.",
        image: "/assets/images/path-security.png",
        href: "/learn/security",
        button: "Secure Now",
        color: "text-pink-500",
        icon: "shield_lock",
    },

    {
        title: "Hardware Wallet Guide",
        category: "Wallet",
        description:
            "Compare Trezor and Ledger, understand cold storage, and choose the best wallet for your needs.",
        image: "/assets/images/HardwareRO.png",
        href: "/learn/wallet",
        button: "Compare Wallets",
        color: "text-violet-400",
        icon: "account_balance_wallet",
    },

    {
        title: "Build Your Bitcoin Plan",
        category: "Calculator",
        description:
            "Use interactive tools to estimate future Bitcoin savings and visualize long-term growth.",
        image: "/assets/images/learn/calculator.png",
        href: "/calculator",
        button: "Open Calculator",
        color: "text-cyan-400",
        icon: "calculate",
    },

    {
        title: "Bitcoin AI Assistant",
        category: "AI",
        description:
            "Ask questions about Bitcoin, inflation, and personal finance with an AI-powered learning assistant.",
        image: "/assets/images/learn/ai.png",
        href: "/ai",
        button: "Coming Soon",
        color: "text-emerald-400",
        icon: "smart_toy",
    },

    {
        title: "Bitcoin Journey",
        category: "Adventure",
        description:
            "Follow a step-by-step learning path from beginner to confident Bitcoiner through interactive lessons.",
        image: "/assets/images/path-pow.png",
        href: "/learn/journey",
        button: "Begin Journey",
        color: "text-pink-400",
        icon: "explore",
    },
];