import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { InstagramFeed } from "@/types/bio-types";

interface InstagramFeedSectionProps {
    feed: InstagramFeed;
}

const InstagramFeedSection: React.FC<InstagramFeedSectionProps> = ({ feed }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
        >
            {/* Follow button */}
            <div className="flex justify-center mb-6">
                <Button
                    asChild
                    className="bg-primary text-primary-foreground border-0 rounded-full px-6 text-sm font-serif"
                >
                    <a
                        href={`https://www.instagram.com/${feed.handle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram className="w-4 h-4 mr-2" />
                        Follow
                    </a>
                </Button>
            </div>

            {/* Profile info */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        src={feed.profileImage}
                        alt={feed.handle}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-accent text-sm font-serif font-bold">{feed.handle}</h4>
                    <p className="text-accent/60 text-xs font-serif">
                        {feed.followers} · {feed.posts}
                    </p>
                </div>
            </div>

            {/* Masonry-style grid */}
            <div className="columns-3 gap-2 space-y-2">
                {feed.images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="break-inside-avoid rounded-lg overflow-hidden"
                    >
                        <img
                            src={img}
                            alt={`Instagram ${i + 1}`}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default InstagramFeedSection;
