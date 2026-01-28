import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NextLinkHero from "@/components/next-link/NextLinkHero";
import SegmentSwitch from "@/components/next-link/SegmentSwitch";
import ShopSection from "@/components/next-link/ShopSection";
import AIToolsCarousel from "@/components/next-link/AIToolsCarousel";
import LinkPill from "@/components/next-link/LinkPill";
import ProductDetail from "@/components/bio/ProductDetail";
import { bioConfig } from "@/config/bio-config";
import { useLanguage } from "@/i18n/LanguageContext";

// Type for product detail (from existing BioPage)
interface NextLinkProduct {
    id: string;
    titleKey: string;
    descriptionKey: string;
    imageUrl: string;
    buttonTextKey: string;
    detailType?: "whiteLabel" | "personalBrand" | "digitalProducts";
    externalLink?: string;
    price?: string;
}

interface NextLinkBioPageProps {
    productId?: string;
}

const NextLinkBioPage: React.FC<NextLinkBioPageProps> = ({ productId }) => {
    const navigate = useNavigate();
    // Safe language context usage (fallback if not available yet)
    const languageContext = useLanguage();
    const t = languageContext?.t || ((key: string) => key);

    const [activeSegment, setActiveSegment] = useState(0);

    // Helper to find product by ID (for product detail routing)
    // Maps bioConfig products to the format ProductDetail expects
    function findProductById(id: string): NextLinkProduct | null {
        const product = bioConfig.products.find(p => p.id.toString() === id);
        if (!product) return null;

        return {
            id: product.id.toString(),
            titleKey: product.name,
            descriptionKey: product.name, // Using name as description key for now, actual description would be better
            imageUrl: product.image,
            buttonTextKey: "Buy Now",
            externalLink: product.url,
            price: product.price
        };
    }

    // Find product for detail view (if productId provided)
    const selectedProduct = productId
        ? findProductById(productId)
        : null;

    // Scroll to top when product changes
    useEffect(() => {
        if (selectedProduct) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [selectedProduct]);

    const handleBack = () => {
        navigate("/");
    };

    // If showing product detail, render that instead
    if (selectedProduct) {
        return (
            <div className="min-h-screen bio-background">
                <div className="max-w-sm mx-auto py-8 px-4">
                    <ProductDetail product={selectedProduct} onBack={handleBack} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bio-background transition-all duration-300">
            <div className="h-12" />

            <div className="max-w-sm mx-auto">
                {/* Hero Section */}
                <NextLinkHero
                    name={bioConfig.profile.name}
                    tagline={bioConfig.profile.tagline}
                    avatar={bioConfig.profile.avatar}
                    coverImage={bioConfig.profile.coverImage}
                    socialLinks={bioConfig.profile.socialLinks}
                />

                {/* Segment Control */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="flex justify-center mt-8 px-6"
                >
                    <SegmentSwitch
                        options={[t("links"), t("shop")]}
                        activeIndex={activeSegment}
                        onChange={setActiveSegment}
                    />
                </motion.div>

                {/* Content Sections */}
                <div className="px-4 sm:px-6 mt-6 sm:mt-8">
                    <AnimatePresence mode="wait">
                        {activeSegment === 0 ? (
                            // Links Section
                            <motion.div
                                key="links"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-3 sm:space-y-4"
                            >
                                {bioConfig.links.map((link, index) => (
                                    <motion.div
                                        key={link.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <LinkPill
                                            name={link.name}
                                            url={link.url}
                                            description={link.description}
                                            backgroundImage={link.backgroundImage}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            // Shop Section
                            <motion.div
                                key="shop"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ShopSection products={bioConfig.products} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* AI Tools Carousel (always visible) */}
                {bioConfig.aiTools.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className="mt-6 sm:mt-8 px-4 sm:px-6"
                    >
                        <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">
                            {t("aiToolsTitle")}
                        </h3>
                        <AIToolsCarousel tools={bioConfig.aiTools} />
                    </motion.div>
                )}

                {/* Bottom Spacing */}
                <div className="h-12" />
            </div>
        </div>
    );
};

export default NextLinkBioPage;
