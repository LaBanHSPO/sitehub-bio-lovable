import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Menu, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { bioConfig } from "@/config/bio-config";

const NextLinkBioPage: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${bioConfig.contactInfo?.contactName || "Alex Johnson"}
TITLE:${bioConfig.contactInfo?.role || ""}
TEL:${bioConfig.contactInfo?.phone || ""}
EMAIL:${bioConfig.contactInfo?.email || ""}
ADR:;;${bioConfig.contactInfo?.location || ""}
END:VCARD`;

    return (
        <div className="min-h-screen relative">
            {/* Background */}
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bio-card rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Top Navbar */}
                        <div className="flex items-center justify-between px-5 py-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={bioConfig.profile.avatar}
                                    alt={bioConfig.profile.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span
                                    className="text-lg font-bold tracking-widest font-serif"
                                    style={{ color: "hsl(var(--bio-card-foreground))" }}
                                >
                                    {bioConfig.profile.name}
                                </span>
                            </div>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Hero Photo */}
                        <div className="px-4">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src={bioConfig.profile.avatar}
                                    alt={bioConfig.profile.name}
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                        </div>

                        {/* Name & Role */}
                        <div className="text-center px-6 pt-6 pb-2">
                            <h1
                                className="text-2xl font-bold font-serif"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {bioConfig.contactInfo?.contactName || "Alex Johnson"}
                            </h1>
                            <p
                                className="text-sm mt-1 font-serif"
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                {bioConfig.contactInfo?.role || "CEO at Hopp"}
                            </p>
                            <p
                                className="text-base mt-3 font-serif italic"
                                style={{ color: "hsl(var(--bio-card-foreground))" }}
                            >
                                {bioConfig.profile.tagline}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="px-6 py-4">
                            <div className="w-full h-px" style={{ backgroundColor: "hsl(var(--bio-card-divider))" }} />
                        </div>

                        {/* Contact Info */}
                        <div className="px-6 space-y-5">
                            {/* Work Email */}
                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(var(--bio-card-muted))" }} />
                                <div>
                                    <p className="text-sm font-bold font-serif" style={{ color: "hsl(var(--bio-card-foreground))" }}>
                                        Work Email
                                    </p>
                                    <a
                                        href={`mailto:${bioConfig.contactInfo?.email}`}
                                        className="text-sm font-serif"
                                        style={{ color: "hsl(var(--bio-card-muted))" }}
                                    >
                                        {bioConfig.contactInfo?.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(var(--bio-card-muted))" }} />
                                <div>
                                    <p className="text-sm font-bold font-serif" style={{ color: "hsl(var(--bio-card-foreground))" }}>
                                        Phone
                                    </p>
                                    <a
                                        href={`tel:${bioConfig.contactInfo?.phone}`}
                                        className="text-sm font-serif"
                                        style={{ color: "hsl(var(--bio-card-muted))" }}
                                    >
                                        {bioConfig.contactInfo?.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="px-6 pt-8 space-y-3">
                            <button
                                className="w-full py-4 rounded-full text-base font-bold font-serif transition-colors"
                                style={{
                                    backgroundColor: "hsl(var(--bio-card-foreground))",
                                    color: "hsl(var(--bio-card))",
                                }}
                            >
                                Save as contact
                            </button>
                            <button
                                className="w-full py-4 rounded-full text-base font-bold font-serif transition-colors"
                                style={{
                                    backgroundColor: "hsl(var(--bio-card-foreground))",
                                    color: "hsl(var(--bio-card))",
                                }}
                            >
                                Contact Me
                            </button>
                        </div>

                        {/* QR Code */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-6 pt-6 pb-8 flex flex-col items-center gap-3"
                        >
                            <div className="w-full h-px" style={{ backgroundColor: "hsl(var(--bio-card-divider))" }} />
                            <p
                                className="text-sm font-serif mt-3"
                                style={{ color: "hsl(var(--bio-card-muted))" }}
                            >
                                Scan to save contact
                            </p>
                            <div className="bg-white p-3 rounded-xl">
                                <QRCodeSVG
                                    value={vCard}
                                    size={160}
                                    level="M"
                                    bgColor="#ffffff"
                                    fgColor="#2d1f14"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NextLinkBioPage;
