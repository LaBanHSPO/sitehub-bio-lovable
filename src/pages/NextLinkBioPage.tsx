import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { bioConfig } from "@/config/bio-config";
import BioHeader from "@/components/sections/BioHeader";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import TeamSection from "@/components/sections/TeamSection";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramFeedSection from "@/components/sections/InstagramFeedSection";

const NextLinkBioPage: React.FC = () => {
    return (
        <div className="min-h-screen relative">
            {/* Background image - blurred and full */}
            <div
                className="fixed inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bioConfig.profile.avatar})`,
                    filter: "blur(30px) brightness(0.4)",
                    transform: "scale(1.1)",
                }}
            />

            {/* Card container */}
            <div className="relative z-10 flex justify-center px-4 py-8 min-h-screen">
                <div className="w-full max-w-lg">
                    {/* Main dark brown card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bio-card rounded-2xl px-6 py-10 shadow-2xl"
                    >
                        {/* Header: name, tagline, social, avatar */}
                        <BioHeader profile={bioConfig.profile} />

                        {/* Happiness tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-center font-serif italic text-base mt-8"
                            style={{ color: "hsl(var(--bio-card-foreground))" }}
                        >
                            Happiness is here and now
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-center font-serif text-sm mt-2 mb-2"
                            style={{ color: "hsl(var(--bio-card-muted))" }}
                        >
                            We Believe in the Power of a Holistic Approach to Health and Wellness.
                        </motion.p>

                        {/* Services Carousel */}
                        {bioConfig.services && bioConfig.services.length > 0 && (
                            <ServicesCarousel services={bioConfig.services} />
                        )}

                        {/* CTA Button */}
                        {bioConfig.ctaButton && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-8 flex justify-center"
                            >
                                <Button
                                    asChild
                                    className="w-full rounded-full py-6 text-base font-serif"
                                >
                                    <a
                                        href={bioConfig.ctaButton.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {bioConfig.ctaButton.label}
                                    </a>
                                </Button>
                            </motion.div>
                        )}

                        {/* Team Section */}
                        {bioConfig.team && bioConfig.team.length > 0 && (
                            <TeamSection team={bioConfig.team} />
                        )}

                        {/* Contact Info */}
                        {bioConfig.contactInfo && (
                            <ContactInfoSection contactInfo={bioConfig.contactInfo} />
                        )}

                        {/* Testimonials */}
                        {bioConfig.testimonials && bioConfig.testimonials.length > 0 && (
                            <TestimonialsSection testimonials={bioConfig.testimonials} />
                        )}

                        {/* Instagram Feed */}
                        {bioConfig.instagramFeed && (
                            <InstagramFeedSection feed={bioConfig.instagramFeed} />
                        )}

                        {/* Footer */}
                        <p className="text-xs text-center mt-10 font-serif" style={{ color: "hsl(var(--bio-card-muted) / 0.5)" }}>
                            By submitting your contact details, you are providing your data to {bioConfig.profile.name}, who may contact you for marketing purposes.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NextLinkBioPage;
