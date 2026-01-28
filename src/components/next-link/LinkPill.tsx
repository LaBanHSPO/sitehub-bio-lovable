import React from 'react';
import { motion } from 'framer-motion';

interface LinkPillProps {
    name: string;
    url: string;
    avatar?: string;
    icon?: React.ReactNode;
    description?: string;
    backgroundImage?: string;
}

const LinkPill: React.FC<LinkPillProps> = ({
    name,
    url,
    avatar,
    icon,
    description,
    backgroundImage
}) => {
    const handleClick = () => {
        // Haptic feedback for mobile
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        window.open(url, '_blank');
    };

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div
                className="flex w-full h-20 rounded-xl overflow-hidden bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
            >
                {/* IMAGE - Compact square */}
                <div
                    className="w-20 h-20 flex-shrink-0"
                    style={{
                        backgroundImage: backgroundImage
                            ? `url('${backgroundImage}')`
                            : (avatar
                                ? `url('${avatar}')`
                                : 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.7) 100%)'),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-center px-4 py-2 min-w-0">
                    <div className="text-sm font-semibold text-foreground leading-tight truncate">
                        {name}
                    </div>
                    {description && (
                        <div className="text-xs mt-1 text-muted-foreground leading-tight line-clamp-2">
                            {description}
                        </div>
                    )}
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center pr-4 text-muted-foreground/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </motion.a>
    );
};

export default LinkPill;
