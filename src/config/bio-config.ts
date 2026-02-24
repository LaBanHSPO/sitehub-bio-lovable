import type { BioData } from '@/types/bio-types';

export const bioConfig: BioData = {
    profile: {
        name: "SAGOGA",
        tagline: "Feel free to get in touch with me!",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
        socialLinks: [
            { name: "Phone", url: "tel:+1666444555", icon: "Phone" },
            { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
            { name: "Website", url: "https://example.com", icon: "Globe" },
        ],
    },
    services: [
        { id: 1, name: "Acupuncture", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=500&fit=crop" },
        { id: 2, name: "Reflexology", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=500&fit=crop" },
        { id: 3, name: "Traditional Chinese Medicine", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=500&fit=crop" },
        { id: 4, name: "Reiki", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=500&fit=crop" },
    ],
    ctaButton: {
        label: "Schedule a treatment",
        url: "https://www.example.com/booking",
    },
    team: [
        { id: 1, name: "Dr. Emily Lee", role: "Chinese Medicine", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop" },
        { id: 2, name: "Ethan Miller", role: "Reflexology Specialist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop" },
        { id: 3, name: "Dr. Anya Teal", role: "Founder & Lead Therapist", image: "https://images.unsplash.com/photo-1594824476967-48c8b964f90c?w=300&h=300&fit=crop" },
    ],
    contactInfo: {
        contactName: "Alex Johnson",
        role: "CEO at Hopp",
        email: "my-email@gmail.com",
        phone: "+9870123456",
        location: "500 Terry Francine St, San Francisco",
    },
    testimonials: [
        {
            id: 1,
            name: "Ashley Martinez",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            title: "Truly relaxing",
            content: "Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Bill",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            title: "Life changing",
            content: "Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.",
            rating: 5,
        },
        {
            id: 3,
            name: "Dona Johnson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            title: "Beyond professional",
            content: "Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.",
            rating: 5,
        },
    ],
    instagramFeed: {
        handle: "DIKUR",
        followers: "100k followers",
        posts: "240 posts",
        profileImage: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=100&h=100&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=450&fit=crop",
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&h=450&fit=crop",
            "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=350&fit=crop",
        ],
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
