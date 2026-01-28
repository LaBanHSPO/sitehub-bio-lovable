import type { BioData } from '@/types/bio-types';

/**
 * Bio Page Configuration
 * 
 * Edit this file to customize your bio page content.
 * All fields are validated at build time via TypeScript.
 * 
 * Icons available for socialLinks.icon:
 * - Globe, Twitter, Mail, Youtube
 */
export const bioConfig: BioData = {
    profile: {
        name: "John Doe",
        tagline: "Digital Creator | Tech Enthusiast | Building the future",
        avatar: "https://github.com/shadcn.png",
        coverImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=400&fit=crop",
        socialLinks: [
            {
                name: "Website",
                url: "https://your-website.com",
                icon: "Globe",
            },
            {
                name: "X (Twitter)",
                url: "https://x.com/yourhandle",
                icon: "Twitter",
            },
            {
                name: "Email",
                url: "mailto:contact@yourdomain.com",
                icon: "Mail",
            },
            {
                name: "YouTube",
                url: "https://youtube.com/@yourchannel",
                icon: "Youtube",
            },
        ],
    },
    links: [
        {
            id: 1,
            name: "Sample Link 1",
            url: "https://example.com/link1",
            description: "Description for your first link or resource.",
            backgroundImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=400&fit=crop",
        },
        {
            id: 2,
            name: "Sample Link 2",
            url: "https://example.com/link2",
            description: "Another important resource or project.",
            backgroundImage: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=400&fit=crop",
        },
    ],
    products: [
        {
            id: 1,
            name: "Sample Product",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=500&fit=crop",
            price: "$49",
            url: "https://example.com/product",
        },
        {
            id: 2,
            name: "Premium Course",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop",
            price: "$99",
            url: "https://example.com/course",
        },
        {
            id: 3,
            name: "Exclusive Bundle",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=500&fit=crop",
            price: "$199",
            url: "https://example.com/bundle",
        },
    ],
    aiTools: [
        {
            id: 1,
            name: "ChatGPT",
            logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=60&h=60&fit=crop",
            url: "https://chatgpt.com"
        },
        {
            id: 2,
            name: "Midjourney",
            logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=60&h=60&fit=crop",
            url: "https://midjourney.com"
        },
        {
            id: 3,
            name: "Claude",
            logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=60&h=60&fit=crop",
            url: "https://claude.ai"
        },
        {
            id: 4,
            name: "Perplexity",
            logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=60&h=60&fit=crop",
            url: "https://perplexity.ai"
        },
    ],
};

// Default export for convenience
export default bioConfig;
