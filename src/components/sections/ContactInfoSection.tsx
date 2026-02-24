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
            <div className="w-full h-px bg-accent/20" />

            {/* Email */}
            <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent/60 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="text-accent/50 text-xs font-serif">Email</p>
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-accent text-sm font-serif hover:underline"
                    >
                        {contactInfo.email}
                    </a>
                </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent/60 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="text-accent/50 text-xs font-serif">Phone</p>
                    <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-accent text-sm font-serif hover:underline"
                    >
                        {contactInfo.phone}
                    </a>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent/60 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="text-accent/50 text-xs font-serif">Location</p>
                    <p className="text-accent text-sm font-serif">{contactInfo.location}</p>
                </div>
            </div>

            {/* Save as Contact */}
            <button className="flex items-center gap-2 text-accent/70 hover:text-accent transition-colors text-sm font-serif mt-2">
                <UserPlus className="w-4 h-4" />
                Save as Contact
            </button>

            {/* Divider */}
            <div className="w-full h-px bg-accent/20" />
        </motion.div>
    );
};

export default ContactInfoSection;
