import { z } from 'zod';

// Social Link Schema
export const socialLinkSchema = z.object({
    name: z.string().min(1),
    url: z.string().url(),
    icon: z.string().min(1),
});

// Profile Schema
export const profileSchema = z.object({
    name: z.string().min(1),
    tagline: z.string().min(1),
    avatar: z.string().min(1),
    coverImage: z.string().url().optional(),
    socialLinks: z.array(socialLinkSchema),
});

// Service Schema
export const serviceSchema = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string().url(),
});

// Team Member Schema
export const teamMemberSchema = z.object({
    id: z.number(),
    name: z.string(),
    role: z.string(),
    image: z.string().url(),
});

// Testimonial Schema
export const testimonialSchema = z.object({
    id: z.number(),
    name: z.string(),
    avatar: z.string().url(),
    title: z.string(),
    content: z.string(),
    rating: z.number().min(1).max(5),
});

// Contact Info Schema
export const contactInfoSchema = z.object({
    contactName: z.string().optional(),
    role: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    location: z.string().optional(),
});

// Instagram Feed Schema
export const instagramFeedSchema = z.object({
    handle: z.string(),
    followers: z.string(),
    posts: z.string(),
    profileImage: z.string().url(),
    images: z.array(z.string().url()),
});

// CTA Button Schema
export const ctaButtonSchema = z.object({
    label: z.string(),
    url: z.string(),
});

// Link Schema
export const linkSchema = z.object({
    id: z.number(),
    name: z.string().min(1),
    url: z.string().min(1),
    description: z.string().optional(),
    backgroundImage: z.string().url().optional(),
    detailContent: z.object({
        subtitle: z.string().optional(),
        content: z.string(),
        ctaText: z.string(),
        ctaUrl: z.string().optional(),
    }).optional(),
});

// Product Schema
export const productSchema = z.object({
    id: z.number(),
    name: z.string().min(1),
    image: z.string().url(),
    price: z.string().min(1),
    url: z.string().min(1),
});

// AI Tool Schema
export const aiToolSchema = z.object({
    id: z.number(),
    name: z.string().min(1),
    logo: z.string().url(),
    url: z.string().min(1),
});

// Settings Schema
export const settingsSchema = z.object({
    defaultCollapsed: z.boolean().default(false),
    showSegmentTabs: z.boolean().default(true),
    showAiTools: z.boolean().default(true),
});

// Complete Bio Data Schema
export const bioDataSchema = z.object({
    profile: profileSchema,
    services: z.array(serviceSchema).optional(),
    ctaButton: ctaButtonSchema.optional(),
    team: z.array(teamMemberSchema).optional(),
    contactInfo: contactInfoSchema.optional(),
    testimonials: z.array(testimonialSchema).optional(),
    instagramFeed: instagramFeedSchema.optional(),
    links: z.array(linkSchema),
    products: z.array(productSchema),
    aiTools: z.array(aiToolSchema),
    settings: settingsSchema.optional(),
});

// Types
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type ContactInfo = z.infer<typeof contactInfoSchema>;
export type InstagramFeed = z.infer<typeof instagramFeedSchema>;
export type CtaButton = z.infer<typeof ctaButtonSchema>;
export type Link = z.infer<typeof linkSchema>;
export type Product = z.infer<typeof productSchema>;
export type AITool = z.infer<typeof aiToolSchema>;
export type Settings = z.infer<typeof settingsSchema>;
export type BioData = z.infer<typeof bioDataSchema>;
