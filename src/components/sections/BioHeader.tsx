import React from "react";
import { motion } from "framer-motion";
import { Phone, Facebook, Globe } from "lucide-react";
import type { Profile } from "@/types/bio-types";

interface BioHeaderProps {
    profile: Profile;
}

const iconMap: Record<string, React.ElementType> = {
    Phone,
    Facebook,
    Globe,
};

const BioHeader: React.FC<BioHeaderProps> = ({ profile }) => {
    return (
        <div>
            {/* Brand Name - LEFT aligned like original */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-serif font-bold tracking-wider mb-6"
                style={{ color: "hsl(var(--bio-card-foreground))" }}
            >
                {profile.name}
            </motion.h1>

            {/* Divider */}
            <div className="w-full h-px mb-4" style={{ backgroundColor: "hsl(var(--bio-card-divider))" }} />

            {/* Tagline - centered */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center text-sm md:text-base font-serif mb-4"
                style={{ color: "hsl(var(--bio-card-muted))" }}
            >
                {profile.tagline}
            </motion.p>

            {/* Divider */}
            <div className="w-full h-px mb-5" style={{ backgroundColor: "hsl(var(--bio-card-divider))" }} />

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-6"
            >
                {profile.socialLinks.map((link) => {
                    const Icon = iconMap[link.icon] || Globe;
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors"
                            style={{ color: "hsl(var(--bio-card-foreground))" }}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    );
                })}
            </motion.div>

            {/* Avatar Circle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex justify-center"
            >
                <div
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4"
                    style={{ borderColor: "hsl(var(--bio-card-divider))" }}
                >
                    <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default BioHeader;
