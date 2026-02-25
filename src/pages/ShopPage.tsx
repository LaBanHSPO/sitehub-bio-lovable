import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { bioConfig } from "@/config/bio-config";
import BioNavbar from "@/components/bio/BioNavbar";

const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?w=600&h=600&fit=crop",
        badge: "SALE",
        title: "Worth Every Penny: The Only Serum Truly Worth the Investment",
        price: "$54.99",
        url: "#",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop",
        badge: "SALE",
        title: "My secret to a smooth, makeup-ready canvas.",
        price: "$59.99",
        url: "#",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&h=600&fit=crop",
        badge: "SALE",
        title: "The Only Eye Cream I Actually Use",
        price: "$30.99",
        url: "#",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
        badge: "SALE",
        title: "The non-negotiable product for healthy, protected skin.",
        price: "$34.99",
        url: "#",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop",
        badge: "SALE",
        title: "The quick-win product for all-day freshness.",
        price: "$39.99",
        url: "#",
    },
];

type Product = typeof products[0];

const ShopPage: React.FC = () => {
    const { profile } = bioConfig;
    const [selected, setSelected] = useState<Product | null>(null);

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
                        className="md:rounded-2xl shadow-2xl overflow-hidden min-h-screen md:min-h-0 relative"
                        style={{ backgroundColor: "hsl(var(--bio-card))" }}
                    >
                        <BioNavbar />

                        {/* Hero image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&h=500&fit=crop"
                                alt="My Top Offers & Must-Haves"
                                className="w-full aspect-[4/3] md:aspect-[16/9] object-cover object-top"
                            />
                        </div>

                        {/* Title + subtitle */}
                        <div className="px-6 pt-6 pb-2 text-center">
                            <h1
                                className="text-2xl md:text-4xl font-bold font-serif mb-3"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                My Top Offers &amp; Must-Haves
                            </h1>
                            <p
                                className="text-sm md:text-base font-medium opacity-80"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                My Skincare Secrets: The Products I Truly Use
                            </p>
                        </div>

                        {/* Products list */}
                        <div className="px-5 md:px-8 pb-12 pt-4 flex flex-col gap-4">
                            {products.map((product, i) => (
                                <motion.button
                                    key={product.id}
                                    onClick={() => setSelected(product)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="flex gap-4 items-center rounded-xl overflow-hidden group cursor-pointer w-full text-left"
                                    style={{
                                        backgroundColor: "hsl(var(--bio-card-foreground) / 0.06)",
                                        border: "1px solid hsl(var(--bio-card-divider))",
                                    }}
                                >
                                    {/* Product image */}
                                    <div className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {product.badge && (
                                            <span
                                                className="absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm"
                                                style={{
                                                    backgroundColor: "hsl(var(--bio-card-foreground))",
                                                    color: "hsl(var(--bio-card))",
                                                }}
                                            >
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Product info */}
                                    <div className="flex-1 min-w-0 py-4">
                                        <p
                                            className="text-sm md:text-base font-bold font-serif leading-snug line-clamp-2 mb-2"
                                            style={{ color: "hsl(var(--bio-card-foreground))" }}
                                        >
                                            {product.title}
                                        </p>
                                        <p
                                            className="text-base md:text-lg font-bold font-serif"
                                            style={{ color: "hsl(var(--bio-card-foreground))" }}
                                        >
                                            {product.price}
                                        </p>
                                    </div>

                                    {/* Chevron */}
                                    <div className="pr-4 flex-shrink-0">
                                        <ChevronDown
                                            className="w-5 h-5 opacity-50"
                                            style={{ color: "hsl(var(--bio-card-foreground))" }}
                                        />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Product Popup */}
            <AnimatePresence>
                {selected && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 z-50"
                            style={{ backgroundColor: "hsl(0 0% 0% / 0.6)" }}
                        />

                        {/* Modal */}
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 60, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center md:items-center md:inset-0"
                        >
                            <div
                                className="w-full max-w-md rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl"
                                style={{ backgroundColor: "hsl(var(--bio-card))" }}
                            >
                                {/* Header bar */}
                                <div
                                    className="flex items-center justify-between px-5 py-4"
                                    style={{ borderBottom: "1px solid hsl(var(--bio-card-divider))" }}
                                >
                                    <p
                                        className="font-bold text-sm truncate max-w-[80%]"
                                        style={{ color: "hsl(var(--bio-card-foreground))" }}
                                    >
                                        {selected.title}
                                    </p>
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 transition-opacity"
                                        style={{ color: "hsl(var(--bio-card-foreground))" }}
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Product image */}
                                <div className="w-full aspect-[4/3] overflow-hidden">
                                    <img
                                        src={selected.image}
                                        alt={selected.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info + CTA */}
                                <div className="px-6 pt-5 pb-8 space-y-2">
                                    <h2
                                        className="text-lg font-bold font-serif leading-snug"
                                        style={{ color: "hsl(var(--bio-card-foreground))" }}
                                    >
                                        {selected.title}
                                    </h2>
                                    <p
                                        className="text-2xl font-bold font-serif"
                                        style={{ color: "hsl(var(--bio-card-foreground))" }}
                                    >
                                        {selected.price}
                                    </p>
                                    <div className="pt-3">
                                        <a
                                            href={selected.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center py-4 rounded-xl font-bold text-base transition-opacity hover:opacity-90"
                                            style={{
                                                backgroundColor: "hsl(var(--bio-card-foreground) / 0.12)",
                                                color: "hsl(var(--bio-card-foreground))",
                                            }}
                                        >
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ShopPage;
