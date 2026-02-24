import React from "react";
import { motion } from "framer-motion";
import type { TeamMember } from "@/types/bio-types";

interface TeamSectionProps {
    team: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-3 gap-4">
                {team.map((member, i) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="text-center"
                    >
                        <div
                            className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden mb-2 border-2"
                            style={{ borderColor: "hsl(var(--bio-card-divider))" }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs font-serif" style={{ color: "hsl(var(--bio-card-muted))" }}>{member.role}</p>
                        <h4 className="text-sm font-serif font-semibold mt-0.5" style={{ color: "hsl(var(--bio-card-foreground))" }}>{member.name}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
