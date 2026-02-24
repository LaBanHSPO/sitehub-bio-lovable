import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, UserPlus } from "lucide-react";
import type { ContactInfo } from "@/types/bio-types";

interface ContactInfoSectionProps {
    contactInfo: ContactInfo;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ contactInfo }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 space-y-4"
        >
            {/* Divider */}
            <div className="w-full h-px" style={{ backgroundColor: "hsl(var(--bio-card-divider))" }} />

            {/* Email */}
            <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--bio-card-muted))" }} />
                <div>
                    <p className="text-xs font-serif" style={{ color: "hsl(var(--bio-card-muted) / 0.7)" }}>Email</p>
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm font-serif hover:underline"
                        style={{ color: "hsl(var(--bio-card-foreground))" }}
                    >
                        {contactInfo.email}
                    </a>
                </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--bio-card-muted))" }} />
                <div>
                    <p className="text-xs font-serif" style={{ color: "hsl(var(--bio-card-muted) / 0.7)" }}>Phone</p>
                    <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-sm font-serif hover:underline"
                        style={{ color: "hsl(var(--bio-card-foreground))" }}
                    >
                        {contactInfo.phone}
                    </a>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--bio-card-muted))" }} />
                <div>
                    <p className="text-xs font-serif" style={{ color: "hsl(var(--bio-card-muted) / 0.7)" }}>Location</p>
                    <p className="text-sm font-serif" style={{ color: "hsl(var(--bio-card-foreground))" }}>{contactInfo.location}</p>
                </div>
            </div>

            {/* Save as Contact */}
            <button
                className="flex items-center gap-2 transition-colors text-sm font-serif mt-2"
                style={{ color: "hsl(var(--bio-card-muted))" }}
            >
                <UserPlus className="w-4 h-4" />
                Save as Contact
            </button>

            {/* Divider */}
            <div className="w-full h-px" style={{ backgroundColor: "hsl(var(--bio-card-divider))" }} />
        </motion.div>
    );
};

export default ContactInfoSection;
