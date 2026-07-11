export function getFearGreedState(value: number) {

    if (value <= 24) {
        return {
            label: "Extreme Fear",
            image: "/assets/images/fear-greed/ExtremeFear.png",
            color: "text-red-500",
            dotColor: "bg-red-500",
            description:
                "Investors are extremely fearful. Panic often creates opportunities for long-term investors.",
            quote:
                "Be fearful when others are greedy, and greedy when others are fearful.",
            author: "Warren Buffett",
        };
    }

    if (value <= 44) {
        return {
            label: "Fear",
            image: "/assets/images/fear-greed/fear.png",
            color: "text-orange-400",
            dotColor: "bg-orange-400",
            description:
                "The market remains cautious as uncertainty dominates investor sentiment.",
            quote:
                "Risk comes from not knowing what you're doing.",
            author: "Warren Buffett",
        };
    }

    if (value <= 55) {
        return {
            label: "Neutral",
            image: "/assets/images/fear-greed/neutral.webp",
            color: "text-yellow-400",
            dotColor: "bg-yellow-400",
            description:
                "Market sentiment is balanced between optimism and caution.",
            quote:
                "The stock market is a device for transferring money from the impatient to the patient.",
            author: "Warren Buffett",
        };
    }

    if (value <= 74) {
        return {
            label: "Greed",
            image: "/assets/images/fear-greed/greed.webp",
            color: "text-lime-400",
            dotColor: "bg-lime-400",
            description:
                "Optimism is increasing. Investors are becoming more confident.",
            quote:
                "Price is what you pay. Value is what you get.",
            author: "Warren Buffett",
        };
    }

    return {
        label: "Extreme Greed",
        image: "/assets/images/fear-greed/extreme-greed.webp",
        color: "text-green-500",
        dotColor: "bg-green-500",
        description:
            "The market is euphoric. Historically, excessive greed has often preceded corrections.",
        quote:
            "The four most dangerous words in investing are: this time it's different.",
        author: "Sir John Templeton",
    };
}