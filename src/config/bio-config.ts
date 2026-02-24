import type { BioData } from '@/types/bio-types';

export const bioConfig: BioData = {
    profile: {
        name: "SAGOGA",
        tagline: "Converting Business Goals into Measurable Marketing Success.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
        heroImage: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=1200&h=600&fit=crop",
        socialLinks: [
            { name: "Phone", url: "tel:+1666444555", icon: "Phone" },
            { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
            { name: "Website", url: "https://example.com", icon: "Globe" },
        ],
    },
    story: {
        title: "Our Story",
        subtitle: "Muting the Noise. Amping the Vibe.",
        paragraphs: [
            'We were done with "loud." The world screams enough already. We wanted gear that speaks without shouting.',
            "LOWKEY was born in the gap between vintage soul and digital talk. We obsess over the perfect washed-out hues—colors that feel lived-in from day one. Then, we hit them with precision-stitched emojis.",
            "It's analog comfort meets modern expression. High feelings. Low saturation. Wear what you feel.",
        ],
        sweetSpotTitle: "My sweet spot?",
        sweetSpotText:
            "It's the intersection of behavioral psychology, sharp creative, and ruthless data analysis. If you have a business problem, I'm the person who finds the marketing solution that actually moves the needle.",
    },
    contactInfo: {
        contactName: "Alex Johnson",
        role: "CEO at Hopp",
        email: "my-email@gmail.com",
        phone: "+9870123456",
        location: "500 Terry Francine St, San Francisco",
    },
    links: [],
    products: [],
    aiTools: [],
    settings: {
        defaultCollapsed: true,
        showSegmentTabs: false,
        showAiTools: false,
    },
};

export default bioConfig;
