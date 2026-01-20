import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProfileHeader from "./ProfileHeader";
import CategoryBadge from "./CategoryBadge";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { useLanguage } from "@/i18n/LanguageContext";

// Demo data
const profileData = {
  name: "SagoZen",
  bio: "Digital Products & Services",
  avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  socials: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
    link: "https://sagozen.digital",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

import type { BadgeType } from "./ProductCard";

export type Product = {
  id: string;
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
  price?: string;
  buttonTextKey: string;
  externalLink?: string;
  detailType?: "whiteLabel" | "personalBrand" | "digitalProducts";
  badge?: BadgeType;
};

const products: Record<string, Product[]> = {
  products: [
    {
      id: "zen-journal",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop",
      titleKey: "zenJournalTitle",
      descriptionKey: "zenJournalDesc",
      buttonTextKey: "joinWaitlist",
      externalLink: "https://sagozen.digital/p/zen-journal",
      badge: "new",
    },
    {
      id: "sitehub",
      imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop",
      titleKey: "siteHubTitle",
      descriptionKey: "siteHubDesc",
      buttonTextKey: "freeOpenSource",
      externalLink: "https://sitehub.bio",
      badge: "hot",
    },
  ],
  services: [
    {
      id: "white-label-mental-health",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
      titleKey: "whiteLabelMentalTitle",
      descriptionKey: "whiteLabelMentalDesc",
      buttonTextKey: "detail",
      detailType: "whiteLabel",
      badge: "limited",
    },
    {
      id: "white-label-pet",
      imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop",
      titleKey: "whiteLabelPetTitle",
      descriptionKey: "whiteLabelPetDesc",
      buttonTextKey: "viewDemo",
      externalLink: "https://sagozen.digital/pet-care-pro",
      badge: "new",
    },
  ],
  consulting: [
    {
      id: "personal-brand",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
      titleKey: "personalBrandCardTitle",
      descriptionKey: "personalBrandCardDesc",
      buttonTextKey: "watchForFree",
      detailType: "personalBrand",
      badge: "hot",
    },
    {
      id: "digital-products",
      imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&h=200&fit=crop",
      titleKey: "digitalProductCardTitle",
      descriptionKey: "digitalProductCardDesc",
      buttonTextKey: "watchForFree",
      detailType: "digitalProducts",
    },
  ],
};

// Helper to find product by ID
const findProductById = (id: string): Product | undefined => {
  for (const category of Object.values(products)) {
    const found = category.find(p => p.id === id);
    if (found) return found;
  }
  return undefined;
};

// Export for use in routing
export { products, findProductById, profileData };

interface BioPageProps {
  productId?: string;
}

const BioPage = ({ productId }: BioPageProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Find selected product from URL parameter
  const selectedProduct = productId ? findProductById(productId) : null;

  // Scroll to top when product changes
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProduct]);

  const handleProductClick = (product: Product) => {
    if (product.externalLink) {
      window.open(product.externalLink, "_blank");
    } else if (product.detailType) {
      navigate(`/p/${product.id}`);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Layout (stacked) / Desktop Layout (side by side) */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Left Sidebar - Profile (sticky on desktop) */}
          <div className={`lg:w-80 lg:flex-shrink-0 ${selectedProduct ? "hidden lg:block" : ""}`}>
            <div className="lg:sticky lg:top-12">
              <ProfileHeader
                name={profileData.name}
                bio={profileData.bio}
                avatarUrl={profileData.avatarUrl}
                socials={profileData.socials}
              />
            </div>
          </div>

          {/* Right Content - Products or Detail */}
          <AnimatePresence mode="wait">
            {selectedProduct ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1"
              >
                <ProductDetail product={selectedProduct} onBack={handleBack} />
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 mt-10 lg:mt-0"
              >
                {/* Products Category */}
                <CategoryBadge label={t("products")} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {products.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      imageUrl={product.imageUrl}
                      title={t(product.titleKey as any)}
                      description={t(product.descriptionKey as any)}
                      price={product.price}
                      buttonText={t(product.buttonTextKey as any)}
                      isExternal={!!product.externalLink}
                      badge={product.badge}
                      badgeText={product.badge ? t(`badge${product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}` as any) : undefined}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>

                {/* Services Category */}
                <CategoryBadge label={t("services")} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {products.services.map((product) => (
                    <ProductCard
                      key={product.id}
                      imageUrl={product.imageUrl}
                      title={t(product.titleKey as any)}
                      description={t(product.descriptionKey as any)}
                      price={product.price}
                      buttonText={t(product.buttonTextKey as any)}
                      isExternal={!!product.externalLink}
                      badge={product.badge}
                      badgeText={product.badge ? t(`badge${product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}` as any) : undefined}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>

                {/* Consulting Category */}
                <CategoryBadge label={t("consulting")} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.consulting.map((product) => (
                    <ProductCard
                      key={product.id}
                      imageUrl={product.imageUrl}
                      title={t(product.titleKey as any)}
                      description={t(product.descriptionKey as any)}
                      price={product.price}
                      buttonText={t(product.buttonTextKey as any)}
                      isExternal={!!product.externalLink}
                      badge={product.badge}
                      badgeText={product.badge ? t(`badge${product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}` as any) : undefined}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            {t("poweredBy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
