import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { bioConfig } from "@/config/bio-config";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About me", path: "/about-me" },
    { label: "Our Story", path: "/our-story" },
    { label: "FAQ", path: "/faq" },
    { label: "My Top Offers & Must-Haves", path: "/shop" },
];

const BioNavbar: React.FC = () => {
    const { profile } = bioConfig;
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4">
                <Link to="/" className="flex items-center gap-3">
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
                </Link>
                <button
                    style={{ color: "hsl(var(--bio-card-foreground))" }}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Horizontal scroll nav tabs */}
            <div
                className="flex overflow-x-auto scrollbar-hide border-b px-5 gap-1 pb-0"
                style={{ borderColor: "hsl(var(--bio-card-divider))" }}
            >
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="flex-shrink-0 px-3 py-2 text-xs font-medium font-serif whitespace-nowrap transition-colors"
                            style={{
                                color: isActive
                                    ? "hsl(var(--bio-card-foreground))"
                                    : "hsl(var(--bio-card-muted))",
                                borderBottom: isActive
                                    ? "2px solid hsl(var(--bio-card-foreground))"
                                    : "2px solid transparent",
                            }}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div
                    className="absolute top-0 left-0 right-0 z-50 shadow-xl rounded-b-2xl px-6 py-6"
                    style={{ backgroundColor: "hsl(var(--bio-card))" }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                            <img src={profile.avatar} alt={profile.name} className="w-10 h-10 rounded-full object-cover" />
                            <span className="text-lg font-bold tracking-widest font-serif" style={{ color: "hsl(var(--bio-card-foreground))" }}>
                                {profile.name}
                            </span>
                        </Link>
                        <button style={{ color: "hsl(var(--bio-card-foreground))" }} onClick={() => setMenuOpen(false)}>
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className="py-3 text-base font-serif border-b transition-opacity hover:opacity-70"
                                style={{
                                    color: "hsl(var(--bio-card-foreground))",
                                    borderColor: "hsl(var(--bio-card-divider))",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default BioNavbar;
