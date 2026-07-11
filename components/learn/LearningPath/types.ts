export interface Path {
    id: number;
    chapter: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    duration: string;
    lessons: number;
    difficulty: string;
    reward: string;
    progress: number;
    status: "completed" | "current" | "locked";
    color: string;
    href: string;
}