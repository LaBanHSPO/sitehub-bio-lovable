import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Twitter, Mail, Youtube, ChevronUp, ChevronDown } from 'lucide-react';
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
    const [isCollapsed, setIsCollapsed] = useState(false);

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
        <AnimatePresence mode="wait">
            {isCollapsed ? (
                // Collapsed View
                <motion.div
                    key="collapsed"
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ 
                        duration: 0.4, 
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className="bio-card rounded-2xl shadow-lg px-4 py-3"
                >
                    <div className="flex items-center justify-between">
                        {/* Left: Avatar + Name + Socials */}
                        <motion.div 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                        >
                            <motion.img
                                src={avatar}
                                alt={name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-border"
                                layoutId="avatar"
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            />
                            <div>
                                <motion.h2 
                                    className="font-semibold text-foreground text-sm"
                                    layoutId="name"
                                    transition={{ duration: 0.4 }}
                                >
                                    {name}
                                </motion.h2>
                                <motion.div 
                                    className="flex items-center gap-1.5 mt-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                >
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.15 + index * 0.05, duration: 0.2 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-6 h-6 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                                            aria-label={link.name}
                                        >
                                            {getIcon(link.icon)}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right: Controls + Expand */}
                        <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                        >
                            <ThemeToggle />
                            <LanguageSelector />
                            <motion.button
                                onClick={() => setIsCollapsed(false)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 h-8 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Expand profile"
                            >
                                <ChevronDown className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                // Expanded View
                <motion.div 
                    key="expanded"
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.98 }}
                    transition={{ 
                        duration: 0.5, 
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className="relative"
                >
                    {/* Controls - Top Left */}
                    <motion.div 
                        className="absolute top-4 left-4 z-20 flex items-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        <ThemeToggle />
                        <LanguageSelector />
                    </motion.div>

                    {/* Collapse Button - Top Right */}
                    <motion.button
                        onClick={() => setIsCollapsed(true)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-4 right-4 z-20 w-8 h-8 bg-background/30 hover:bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
                        aria-label="Collapse profile"
                    >
                        <ChevronUp className="w-4 h-4" />
                    </motion.button>

                    {/* Cover Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="h-64 relative overflow-hidden rounded-t-3xl"
                    >
                        <img
                            src={coverImage}
                            alt="Cover"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 384px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

                        {/* Avatar */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120, damping: 15 }}
                            className="absolute bottom-4 right-4 z-10"
                        >
                            <div className="relative">
                                <motion.div 
                                    className="w-20 h-20 rounded-full bg-background p-1 shadow-xl"
                                    layoutId="avatar-container"
                                >
                                    <motion.img
                                        src={avatar}
                                        alt={name}
                                        width={72}
                                        height={72}
                                        className="w-full h-full rounded-full object-cover"
                                        loading="eager"
                                        layoutId="avatar"
                                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Decorative elements */}
                        <motion.div 
                            className="absolute top-4 right-16 w-2 h-2 bg-foreground/30 rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        />
                        <motion.div 
                            className="absolute top-8 right-20 w-1 h-1 bg-foreground/20 rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        />
                    </motion.div>

                    {/* Profile Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="text-center px-6 py-6 bio-card rounded-b-3xl shadow-lg"
                    >
                        <motion.h1 
                            className="text-2xl font-bold bio-accent mb-2 tracking-tight"
                            layoutId="name"
                            transition={{ duration: 0.4 }}
                        >
                            {name}
                        </motion.h1>
                        <motion.div 
                            className="max-w-sm mx-auto mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <p className="text-sm text-muted-foreground leading-relaxed font-medium whitespace-pre-line break-words">
                                {tagline}
                            </p>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="flex justify-center space-x-3 pb-2"
                        >
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.55 + index * 0.08, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NextLinkHero;
