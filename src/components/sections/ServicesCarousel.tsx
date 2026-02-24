import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Service } from "@/types/bio-types";

interface ServicesCarouselProps {
    services: Service[];
    subtitle?: string;
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ services, subtitle }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 220;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="mt-8">
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm md:text-base font-serif text-center mb-2"
                    style={{ color: "hsl(var(--bio-card-muted))" }}
                >
                    {subtitle}
                </motion.p>
            )}

            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{
                        backgroundColor: "hsl(var(--bio-card-divider) / 0.5)",
                        color: "hsl(var(--bio-card-foreground))",
                    }}
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto px-8 py-2 snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.id * 0.1 }}
                            className="flex-shrink-0 w-40 md:w-48 snap-center"
                        >
                            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark overlay at bottom for text */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                    <h3 className="text-sm font-serif font-semibold text-white text-center">
                                        {service.name}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{
                        backgroundColor: "hsl(var(--bio-card-divider) / 0.5)",
                        color: "hsl(var(--bio-card-foreground))",
                    }}
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default ServicesCarousel;
