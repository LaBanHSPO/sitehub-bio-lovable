import React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { bioConfig } from "@/config/bio-config";

const NextLinkBioPage: React.FC = () => {
    const { profile, story, contactInfo } = bioConfig;

    return (
        <div className="min-h-screen relative">
            {/* Blurred background */}
            <div
                className="fixed inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${profile.heroImage || profile.avatar})`,
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
                        style={{ backgroundColor: "hsl(var(--bio-card))" }}
                    >
                        {/* Navbar */}
                        <div className="flex items-center justify-between px-5 py-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span
                                    className="text-lg font-bold tracking-widest font-serif"
                                    style={{ color: "hsl(var(--bio-card-foreground))" }}
                                >
                                    {profile.name}
                                </span>
                            </div>
                            <button style={{ color: "hsl(var(--bio-card-foreground))" }}>
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>

                        {/* About me title */}
                        <div className="px-6 md:px-10 pt-6 pb-4">
                            <h1
                                className="text-3xl md:text-5xl font-bold font-serif text-center mb-5"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                About me
                            </h1>

                            {/* Tagline in bordered box */}
                            <div
                                className="border rounded-md px-4 py-3 text-center mb-6"
                                style={{
                                    borderColor: "hsl(var(--bio-card-foreground) / 0.4)",
                                }}
                            >
                                <p
                                    className="text-sm md:text-base font-serif italic"
                                    style={{ color: "hsl(var(--bio-card-muted))" }}
                                >
                                    {profile.tagline}
                                </p>
                            </div>

                            {/* Portrait photo */}
                            <div className="mb-8">
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    className="w-full aspect-[4/5] object-cover object-top rounded-sm"
                                />
                            </div>

                            {/* Intro bold text */}
                            <h2
                                className="text-xl md:text-2xl font-bold font-serif mb-4 leading-snug"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {story?.subtitle || "Hello! I'm a marketing specialist with 15 years of hands-on experience"}
                            </h2>

                            {/* Body paragraphs */}
                            <div
                                className="text-sm md:text-base font-serif leading-relaxed space-y-3"
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                {(story?.paragraphs || []).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            {/* Sweet spot section */}
                            {story?.sweetSpotText && (
                                <p
                                    className="text-sm md:text-base font-serif leading-relaxed mt-3"
                                    style={{ color: "hsl(var(--bio-card-muted))" }}
                                >
                                    {story.sweetSpotText}
                                </p>
                            )}

                            {/* Divider */}
                            <div
                                className="w-full h-px my-8"
                                style={{ backgroundColor: "hsl(var(--bio-card-divider))" }}
                            />

                            {/* Marketing Commandments / Sweet Spot section */}
                            <div className="pb-10">
                                <h3
                                    className="text-xl md:text-2xl font-bold font-serif mb-4"
                                    style={{ color: "hsl(var(--bio-card-foreground))" }}
                                >
                                    {story?.sweetSpotTitle || "My Marketing Commandments"}
                                </h3>
                                <p
                                    className="text-sm md:text-base font-serif leading-relaxed"
                                    style={{ color: "hsl(var(--bio-card-muted))" }}
                                >
                                    I approach every project with a mindset of ownership, curiosity, and relentless optimization.
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
