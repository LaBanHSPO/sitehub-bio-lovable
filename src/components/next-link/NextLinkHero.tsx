import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Twitter, Mail, Youtube } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import type { SocialLink } from '@/types/bio-types';

interface NextLinkHeroProps {
    name: string;
    tagline: string;
    avatar: string;
    coverImage: string;
    socialLinks: SocialLink[];
}

const NextLinkHero: React.FC<NextLinkHeroProps> = ({
    name,
    tagline,
    avatar,
    coverImage,
    socialLinks
}) => {
    const getIcon = (iconName: string) => {
        const icons: Record<string, React.ComponentType<{ className?: string }>> = {
            Globe: Globe,
            Twitter: Twitter,
            Mail: Mail,
            Youtube: Youtube,
        };
        const IconComponent = icons[iconName] || Globe;
        return <IconComponent className="w-4 h-4" />;
    };

    return (
        <div className="relative">
            {/* Controls - Top Left */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <ThemeToggle />
                <LanguageSelector />
            </div>

            {/* Cover Image with Professional Blur Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="h-64 relative overflow-hidden rounded-t-3xl"
            >
                <img
                    src={coverImage}
                    alt="Cover"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 384px"
                />
                {/* Professional Gradient + Blur Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

                {/* Avatar positioned in the center-bottom of cover image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="absolute bottom-4 right-4 z-10"
                >
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-white p-1 shadow-xl dark:bg-gray-800">
                            <img
                                src={avatar}
                                alt={name}
                                width={72}
                                height={72}
                                className="w-full h-full rounded-full object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full"></div>
            </motion.div>

            {/* Profile Info with Professional Typography */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center px-6 py-6 bio-card rounded-b-3xl shadow-lg"
            >
                <h1 className="text-2xl font-bold bio-accent mb-2 tracking-tight">{name}</h1>
                <div className="max-w-sm mx-auto mb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium whitespace-pre-line break-words">
                        {tagline}
                    </p>
                </div>

                {/* Social Links with Professional Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex justify-center space-x-3 pb-2"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 border border-border"
                            aria-label={link.name}
                        >
                            {getIcon(link.icon)}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NextLinkHero;
