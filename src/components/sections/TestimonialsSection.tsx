import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import type { Testimonial } from "@/types/bio-types";

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="rounded-xl p-4"
            style={{ backgroundColor: "hsl(var(--bio-card-divider) / 0.3)" }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-sm font-serif font-semibold" style={{ color: "hsl(var(--bio-card-foreground))" }}>{testimonial.name}</h4>
                    <p className="text-xs font-serif italic" style={{ color: "hsl(var(--bio-card-muted))" }}>"{testimonial.title}"</p>
                </div>
            </div>

            {/* Content */}
            <AnimatePresence>
                {expanded && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs font-serif leading-relaxed mb-3 overflow-hidden"
                        style={{ color: "hsl(var(--bio-card-muted))" }}
                    >
                        {testimonial.content}
                    </motion.p>
                )}
            </AnimatePresence>

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                ))}
            </div>

            {/* Show More/Less */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-xs font-serif transition-colors"
                style={{ color: "hsl(var(--bio-card-muted) / 0.7)" }}
            >
                {expanded ? (
                    <>Show Less <ChevronUp className="w-3 h-3" /></>
                ) : (
                    <>Show More <ChevronDown className="w-3 h-3" /></>
                )}
            </button>
        </div>
    );
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 space-y-4"
        >
            {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
            ))}
        </motion.div>
    );
};

export default TestimonialsSection;
