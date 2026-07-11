export type FearGreedData = {
    value: number;
    label: string;
    updatedAt: string;
};

type AlternativeMeResponse = {
    data: {
        value: string;
        value_classification: string;
        timestamp: string;
        time_until_update?: string;
    }[];
};

export async function fetchFearGreed(): Promise<FearGreedData> {
    try {
        const response = await fetch(
            "https://api.alternative.me/fng/?limit=1",
            {
                next: {
                    revalidate: 300, // รีเฟรชทุก 5 นาที
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch Fear & Greed Index");
        }

        const json: AlternativeMeResponse = await response.json();

        const item = json.data[0];

        const timestamp = Number(item.timestamp);

        return {
            value: Number(item.value),
            label: item.value_classification,
            updatedAt: new Date(timestamp * 1000).toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
            }),
        };
    } catch (error) {
        console.error("Fear & Greed fetch failed:", error);

        // fallback
        return {
            value: 50,
            label: "Neutral",
            updatedAt: "Unavailable",
        };
    }
}