import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import BrandPartnershipsSection from "@/components/sections/BrandPartnershipsSection";
import VideoSection from "@/components/sections/VideoSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import { bioConfig } from "@/config/bio-config";

interface NextLinkBioPageProps {
    productId?: string;
}

const NextLinkBioPage: React.FC<NextLinkBioPageProps> = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* 1. Full-screen Hero */}
            <HeroSection profile={bioConfig.profile} />

            {/* 2. About Section */}
            {bioConfig.about && (
                <AboutSection about={bioConfig.about} />
            )}

            {/* 3. Gallery Section */}
            {bioConfig.gallery && (
                <GallerySection gallery={bioConfig.gallery} />
            )}

            {/* 4. Brand Partnerships */}
            {bioConfig.brandPartnerships && (
                <BrandPartnershipsSection data={bioConfig.brandPartnerships} />
            )}

            {/* 5. Video Section */}
            {bioConfig.video && (
                <VideoSection video={bioConfig.video} />
            )}

            {/* 6. Contact / CTA */}
            {bioConfig.contact && (
                <ContactSection contact={bioConfig.contact} />
            )}

            {/* 7. Footer */}
            <FooterSection socialLinks={bioConfig.profile.socialLinks} />
        </div>
    );
};

export default NextLinkBioPage;
