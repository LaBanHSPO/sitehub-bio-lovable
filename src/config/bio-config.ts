import type { BioData } from '@/types/bio-types';

export const bioConfig: BioData = {
    profile: {
        name: "Sheena Olsen\n(sitehub)",
        tagline: "model | actress",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        coverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1920&h=1080&fit=crop",
        socialLinks: [
            {
                name: "YouTube",
                url: "https://youtube.com/@yourchannel",
                icon: "Youtube",
            },
        ],
    },
    about: {
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop",
        paragraphs: [
            "Los Angeles-based Sheena Olsen is a highly sought-after high-fashion model and actress captivating audiences on screen and in print. Gracing the pages of leading fashion publications and walking the runways for prestigious houses, Sheena brings a captivating presence to every campaign.",
            "Her versatility allows her to embody diverse styles, making her a trusted collaborator for luxury brands. Beyond stills, Sheena seamlessly translates her talent to captivating commercial performances, bringing brand narratives to life. She welcomes opportunities to collaborate and elevate brand visions with her dynamic presence.",
            "Notably, her dedication to the craft has led to roles on critically acclaimed HBO productions, showcasing her ability to connect with audiences and deliver impactful performances. Sheena fosters a passion for wellness and mindfulness, a pursuit that brings depth and authenticity to every project she undertakes."
        ],
    },
    gallery: {
        title: "High Fashion Portfolio | Hivanmedia Photography",
        images: [
            { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop", alt: "Fashion portrait 1" },
            { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop", alt: "Fashion portrait 2" },
            { url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop", alt: "Fashion portrait 3" },
        ],
    },
    brandPartnerships: {
        title: "Past Brand Partnerships",
        brands: [
            { name: "People" },
            { name: "BRIT+CO." },
            { name: "POPSUGAR." },
            { name: "GLAMOUR" },
        ],
    },
    video: {
        thumbnailUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=700&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    contact: {
        heading: "Open For Bookings",
        email: "contact@sheenaolsen.com",
        backgroundImage: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1200&h=800&fit=crop",
        profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
        buttons: [
            { label: "Contact Information", url: "mailto:contact@sheenaolsen.com", variant: "primary" },
            { label: "Portfolio", url: "https://example.com/portfolio", variant: "secondary" },
        ],
    },
    links: [
        {
            id: 1,
            name: "My Portfolio",
            url: "https://example.com/portfolio",
            description: "Check out my latest projects and work",
            backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
            detailContent: {
                subtitle: "Showcasing my best work",
                content: "Welcome to my portfolio! Here you'll find a collection of my most impactful projects.",
                ctaText: "View Full Portfolio",
            },
        },
    ],
    products: [],
    aiTools: [],
    settings: {
        defaultCollapsed: true,
        showSegmentTabs: false,
        showAiTools: false,
    },
};

export default bioConfig;
