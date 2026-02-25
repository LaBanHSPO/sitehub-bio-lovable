import React from "react";
import { motion } from "framer-motion";
import { bioConfig } from "@/config/bio-config";
import BioNavbar from "@/components/bio/BioNavbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What is your home selling process?",
        answer: (
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li><strong>Initial Consultation:</strong> We begin with a free, no-obligation meeting to discuss your goals, timeline, and current market conditions.</li>
                <li><strong>Pricing Strategy:</strong> We perform a Comparative Market Analysis (CMA) to determine the optimal listing price.</li>
                <li><strong>Preparation:</strong> We advise on staging, minor repairs, and professional photography/video.</li>
                <li><strong>Listing &amp; Marketing:</strong> Your home is listed on the MLS, Zillow and aggressively marketed across social media and targeted campaigns.</li>
                <li><strong>Negotiation &amp; Closing:</strong> We manage all showings, negotiate offers, and guide you through inspections and closing paperwork.</li>
            </ul>
        ),
    },
    {
        question: "How do you determine my home's list price?",
        answer: (
            <p>We use a combination of comparative market analysis (CMA), current market trends, your home's unique features, and our deep knowledge of the local market to recommend the optimal listing price.</p>
        ),
    },
    {
        question: "How long does it take to sell a house?",
        answer: (
            <p>The timeline varies based on market conditions, pricing, and property type. On average, well-priced homes in our market sell within 30-60 days, but we've closed deals in as little as a week.</p>
        ),
    },
    {
        question: "Do I need to make repairs before selling?",
        answer: (
            <p>Not always. We'll do a walkthrough and recommend only the repairs that will give you the best return on investment. Sometimes minor cosmetic updates can significantly boost your sale price.</p>
        ),
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
                        <BioNavbar />

                        {/* FAQ Content */}
                        <div className="px-6 md:px-10 pt-8 pb-10">
                            {/* Title */}
                            <h1
                                className="text-3xl md:text-4xl font-bold font-sans text-center mb-4"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                FAQ
                            </h1>

                            {/* Subtitle */}
                            <p
                                className="text-sm md:text-base font-sans text-center leading-relaxed mb-8"
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                Getting into the real estate market - whether buying or selling - can feel
                                overwhelming. We've compiled the most common questions our clients ask to
                                provide you with clear, straightforward answers.
                            </p>

                            {/* Welcome heading */}
                            <h2
                                className="text-base md:text-lg font-bold font-sans text-center mb-5"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                Welcome to the Marcus Thorne Real Estate FAQ
                            </h2>

                            {/* Hero image */}
                            <div className="mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=600&fit=crop"
                                    alt="FAQ Hero"
                                    className="w-full aspect-[16/9] object-cover rounded-lg"
                                />
                            </div>

                            {/* Welcome section body */}
                            <h2
                                className="text-base md:text-lg font-bold font-sans mb-3"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                Welcome to the Marcus Thorne Real Estate FAQ
                            </h2>
                            <p
                                className="text-sm md:text-base font-sans leading-relaxed mb-8"
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                Buying or selling a home is one of life's biggest decisions. This page
                                provides clear, straightforward answers to the most common questions we
                                receive, covering everything from the initial consultation and pricing
                                strategy to closing costs and timelines. If you can't find your answer
                                here,{" "}
                                <strong style={{ color: "hsl(var(--bio-card-foreground))" }}>
                                    don't hesitate to reach out to Marcus Thorne directly!
                                </strong>
                            </p>

                            {/* FAQ Accordion */}
                            <Accordion type="single" collapsible className="w-full space-y-0">
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border-0 border-b"
                                        style={{ borderColor: "hsl(var(--bio-card-divider))" }}
                                    >
                                        <AccordionTrigger
                                            className="py-4 font-sans font-bold text-left text-sm md:text-base hover:no-underline [&[data-state=open]>svg]:rotate-180"
                                            style={{ color: "hsl(var(--bio-card-foreground))" }}
                                        >
                                            {index + 1}. {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent
                                            className="text-sm font-sans leading-relaxed pb-5"
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
