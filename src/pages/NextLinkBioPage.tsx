import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { bioConfig } from "@/config/bio-config";

const NextLinkBioPage: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="min-h-screen relative">
            {/* Blurred background */}
            <div
                className="fixed inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bioConfig.profile.avatar})`,
                    filter: "blur(30px) brightness(0.5)",
                    transform: "scale(1.1)",
                }}
            />

            {/* Main card */}
            <div className="relative z-10 flex justify-center px-0 md:px-4 md:py-8 min-h-screen">
                <div className="w-full max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:rounded-2xl shadow-2xl overflow-hidden min-h-screen md:min-h-0"
                    >
                        {/* Navbar */}
                        <div
                            className="flex items-center justify-between px-5 py-4"
                            style={{ backgroundColor: "hsl(var(--bio-card))" }}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={bioConfig.profile.avatar}
                                    alt={bioConfig.profile.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span
                                    className="text-lg font-bold tracking-widest font-serif"
                                    style={{ color: "hsl(var(--bio-card-foreground))" }}
                                >
                                    {bioConfig.profile.name}
                                </span>
                            </div>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Hero Image - full width */}
                        <div>
                            <img
                                src={bioConfig.profile.heroImage || bioConfig.profile.avatar}
                                alt="Hero"
                                className="w-full aspect-[16/9] object-cover"
                            />
                        </div>

                        {/* Our Story Section */}
                        <div
                            className="px-6 md:px-10 py-10"
                            style={{ backgroundColor: "hsl(var(--bio-card))" }}
                        >
                            <h2
                                className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 italic"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {bioConfig.story?.title || "Our Story"}
                            </h2>

                            <h3
                                className="text-xl md:text-2xl font-bold font-serif mb-4"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {bioConfig.story?.subtitle || "Muting the Noise. Amping the Vibe."}
                            </h3>

                            <div
                                className={`text-sm md:text-base font-serif leading-relaxed ${!showMore ? "line-clamp-6" : ""}`}
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                {(bioConfig.story?.paragraphs || []).map((p, i) => (
                                    <p key={i} className={i > 0 ? "mt-3" : ""}>
                                        {p}
                                    </p>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="flex items-center gap-1 mt-4 text-sm font-bold font-serif transition-colors"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {showMore ? "Show Less" : "Show More"}
                                {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>

                            {/* Divider */}
                            <div
                                className="w-full h-px mt-8"
                                style={{ backgroundColor: "hsl(var(--bio-card-divider))" }}
                            />

                            {/* My Sweet Spot Section */}
                            <div className="mt-8">
                                <h3
                                    className="text-xl md:text-2xl font-bold font-serif mb-4"
                                    style={{ color: "hsl(var(--bio-card-foreground))" }}
                                >
                                    {bioConfig.story?.sweetSpotTitle || "My sweet spot?"}
                                </h3>
                                <p
                                    className="text-sm md:text-base font-serif leading-relaxed"
                                    style={{ color: "hsl(var(--bio-card-muted))" }}
                                >
                                    {bioConfig.story?.sweetSpotText ||
                                        "It's the intersection of behavioral psychology, sharp creative, and ruthless data analysis. If you have a business problem, I'm the person who finds the marketing solution that actually moves the needle."}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NextLinkBioPage;
