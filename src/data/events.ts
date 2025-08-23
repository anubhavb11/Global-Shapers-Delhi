export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    highlights: string[];
    image?: string;
    tags: string[];
    engagement: {
        likes: number;
        comments: number;
        shares: number;
    };
    source: string;
    sourceUrl: string;
}

export const recentEvents: Event[] = [
    {
        id: 1,
        title: "Young Minds for Change - Empowering Youth for Achieving India's SDG Targets",
        date: "2 days ago",
        description: "A youth-led dialogue that brought together youth leaders from across Delhi NCR and India to discuss and work towards India's Sustainable Development Goals.",
        highlights: [
            "Keynote address by Ms. Aastha Khursija, Associate Coordinator, Pravah",
            "Presentation on 'Status of India's SDG Targets' by Shreya and Komal from YOUNG MINDS",
            "Solution-centric youth dialogue on empowering youth for achieving India's SDG targets",
            "Partnership with IILM University, Gurugram as venue partner",
            "Community partnership with Break.The.Ice.",
            "Snacks partner: Aryabhog"
        ],
        image: "/images/MediaUpdates/young_minds_media.jpeg",
        tags: ["#youth", "#youngpeople", "#youthled", "#dialogue", "#solutions", "#leaders"],
        engagement: {
            likes: 21,
            comments: 1,
            shares: 2
        },
        source: "LinkedIn",
        sourceUrl: "https://www.linkedin.com/posts/young-minds26_youth-youngpeople-youthled-activity-7364190265684750336-h2h0"
    }
];

export interface SocialMediaPlatform {
    name: string;
    url: string;
    icon: string;
    color: string;
}

export const socialMedia: SocialMediaPlatform[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/global-shapers-delhi",
        icon: "💼",
        color: "bg-blue-600"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/globalshapersdelhi",
        icon: "📸",
        color: "bg-pink-600"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/GSDelhi",
        icon: "🐦",
        color: "bg-sky-500"
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@globalshapersdelhi",
        icon: "📺",
        color: "bg-red-600"
    }
]; 