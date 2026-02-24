import React from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { bioConfig } from "@/config/bio-config";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What is your home selling process?",
        answer:
            "Our process begins with a detailed consultation to understand your goals, followed by a comprehensive market analysis. We then create a tailored marketing plan, manage showings, negotiate offers, and guide you through closing.",
    },
    {
        question: "How do you determine my home's list price?",
        answer:
            "We use a combination of comparative market analysis (CMA), current market trends, your home's unique features, and our deep knowledge of the local market to recommend the optimal listing price.",
    },
    {
        question: "How long does it take to sell a house?",
        answer:
            "The timeline varies based on market conditions, pricing, and property type. On average, well-priced homes in our market sell within 30-60 days, but we've closed deals in as little as a week.",
    },
    {
        question: "Do I need to make repairs before selling?",
        answer:
            "Not always. We'll do a walkthrough and recommend only the repairs that will give you the best return on investment. Sometimes minor cosmetic updates can significantly boost your sale price.",
    },
];

const FAQPage: React.FC = () => {
    const { profile } = bioConfig;

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

                        {/* FAQ Content */}
                        <div className="px-6 md:px-10 pt-6 pb-10">
                            {/* Title */}
                            <h1
                                className="text-3xl md:text-5xl font-bold font-serif text-center mb-5"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                FAQ
                            </h1>

                            {/* Subtitle */}
                            <p
                                className="text-sm md:text-base font-serif text-center leading-relaxed mb-8"
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                Getting into the real estate market - whether buying or selling - can feel
                                overwhelming. We've compiled the most common questions our clients ask to
                                provide you with clear, straightforward answers.
                            </p>

                            {/* Hero image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=600&fit=crop"
                                    alt="FAQ Hero"
                                    className="w-full aspect-[16/9] object-cover rounded-sm"
                                />
                            </div>

                            {/* Welcome section */}
                            <h2
                                className="text-lg md:text-xl font-bold font-serif mb-3"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                Welcome to the SAGOGA FAQ
                            </h2>
                            <p
                                className="text-sm md:text-base font-serif leading-relaxed mb-8"
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                Buying or selling a home is one of life's biggest decisions. This page
                                provides clear, straightforward answers to the most common questions we
                                receive, covering everything from the initial consultation and pricing
                                strategy to closing costs and timelines. If you can't find your answer
                                here,{" "}
                                <strong style={{ color: "hsl(var(--bio-card-foreground))" }}>
                                    don't hesitate to reach out directly!
                                </strong>
                            </p>

                            {/* FAQ Accordion */}
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border-b"
                                        style={{ borderColor: "hsl(var(--bio-card-divider))" }}
                                    >
                                        <AccordionTrigger
                                            className="py-4 font-serif font-bold text-left text-sm md:text-base hover:no-underline"
                                            style={{ color: "hsl(var(--bio-card-foreground))" }}
                                        >
                                            {index + 1}. {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent
                                            className="text-sm font-serif leading-relaxed pb-4"
                                            style={{ color: "hsl(var(--bio-card-muted))" }}
                                        >
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
