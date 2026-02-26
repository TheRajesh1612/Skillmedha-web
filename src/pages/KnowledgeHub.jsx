import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Download, BookMarked, FileText, Video, BookOpen, X, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";

import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";

const RESOURCE_TYPES = ["All", "PDF Guide", "Template", "Case Study", "Video", "Article"];

const resources = [
    {
        image: blog1, type: "PDF Guide", tag: "FREE",
        title: "Python Beginner's Handbook",
        desc: "A comprehensive 80-page guide covering Python fundamentals, functions, OOP, and project ideas.",
        pages: "80 pages", downloads: "12,400",
        color: "text-cyan-400", bg: "bg-cyan-400/10",
    },
    {
        image: blog2, type: "Template", tag: "FREE",
        title: "Career Roadmap Planner",
        desc: "Structure your career goals, milestones, and skill-building timeline with this interactive template.",
        pages: "12 pages", downloads: "8,760",
        color: "text-violet-400", bg: "bg-violet-400/10",
    },
    {
        image: blog3, type: "Case Study", tag: "FREE",
        title: "How SkillMedha Trained 10,000 Professionals",
        desc: "An in-depth look at our corporate training strategy, outcomes, and lessons learned.",
        pages: "32 pages", downloads: "4,200",
        color: "text-amber-400", bg: "bg-amber-400/10",
    },
    {
        image: course1, type: "PDF Guide", tag: "FREE",
        title: "Complete Data Structures & Algorithms Cheat Sheet",
        desc: "Quick-reference guide covering arrays, trees, graphs, sorting, and dynamic programming patterns.",
        pages: "24 pages", downloads: "19,800",
        color: "text-emerald-400", bg: "bg-emerald-400/10",
    },
    {
        image: course2, type: "Template", tag: "FREE",
        title: "Software Developer Resume Templates (3 Styles)",
        desc: "ATS-friendly resume templates designed for freshers, mid-level, and senior software developers.",
        pages: "6 pages", downloads: "31,200",
        color: "text-sky-400", bg: "bg-sky-400/10",
    },
    {
        image: course3, type: "Article", tag: "FREE",
        title: "The 2025 Tech Skills Report — India Edition",
        desc: "Comprehensive analysis of the most in-demand technical skills across Indian industries in 2025.",
        pages: "48 pages", downloads: "9,500",
        color: "text-rose-400", bg: "bg-rose-400/10",
    },
];

const TYPE_ICON = {
    "PDF Guide": FileText,
    "Template": BookMarked,
    "Case Study": BookOpen,
    "Video": Video,
    "Article": BookOpen,
};

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function KnowledgeHub() {
    const [search, setSearch] = useState("");
    const [typeFilter, setType] = useState("All");

    const filtered = useMemo(() => resources.filter((r) => {
        const matchType = typeFilter === "All" || r.type === typeFilter;
        const matchQ = r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase());
        return matchType && matchQ;
    }), [search, typeFilter]);

    const hasActive = typeFilter !== "All" || search !== "";
    const clear = () => { setSearch(""); setType("All"); };

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-hero py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20">
                                <BookMarked className="h-4 w-4 text-accent" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-accent">Free Resources</span>
                        </div>
                        <h1 className="text-4xl font-bold text-primary-dark-foreground mb-2">Knowledge Hub</h1>
                        <p className="text-sm text-primary-dark-foreground/60 max-w-xl">
                            Explore our library of free guides, templates, case studies, and articles — carefully curated to accelerate your professional growth.
                        </p>
                        {/* Stats */}
                        <div className="mt-8 flex flex-wrap gap-8">
                            {[
                                { value: "150+", label: "Free Resources" },
                                { value: "2M+", label: "Downloads" },
                                { value: "50+", label: "Expert Authors" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-2xl font-bold text-accent">{s.value}</p>
                                    <p className="text-xs text-primary-dark-foreground/60">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filter bar */}
            <section className="sticky top-16 z-20 bg-background/95 backdrop-blur border-b border-border/40 py-4 shadow-sm">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search resources..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-lg border border-border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />
                            {search && (
                                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                    <X className="h-3.5 w-3.5" />
                                </button>
                            )}
                        </div>
                        {hasActive && (
                            <button onClick={clear} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground border border-border transition-colors">
                                <X className="h-3 w-3" /> Clear
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                        <Filter className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-1">Type</span>
                        {RESOURCE_TYPES.map((t) => (
                            <button
                                key={t}
                                onClick={() => setType(t)}
                                className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${typeFilter === t
                                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                                        : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource grid */}
            <section className="py-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <p className="mb-6 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{filtered.length}</span> resource{filtered.length !== 1 ? "s" : ""} found
                    </p>

                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filtered.map((res, i) => {
                                const Icon = TYPE_ICON[res.type] ?? FileText;
                                return (
                                    <motion.div
                                        key={i}
                                        initial="hidden"
                                        animate="visible"
                                        variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.35, delay: i * 0.05 } } }}
                                        className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/40 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative overflow-hidden">
                                            <img src={res.image} alt={res.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                            {/* Type badge */}
                                            <div className={`absolute top-3 left-3 flex items-center gap-1.5 rounded-lg ${res.bg} px-2.5 py-1`}>
                                                <Icon className={`h-3.5 w-3.5 ${res.color}`} />
                                                <span className={`text-[10px] font-bold uppercase tracking-wider ${res.color}`}>{res.type}</span>
                                            </div>
                                            <span className="absolute top-3 right-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground uppercase">{res.tag}</span>
                                        </div>

                                        {/* Body */}
                                        <div className="flex flex-col flex-1 p-5">
                                            <h3 className="mb-2 text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                {res.title}
                                            </h3>
                                            <p className="mb-4 text-xs text-muted-foreground leading-relaxed line-clamp-3">{res.desc}</p>

                                            {/* Meta */}
                                            <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-3">
                                                <span className="flex items-center gap-1">
                                                    <FileText className="h-3 w-3" /> {res.pages}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Download className="h-3 w-3" /> {res.downloads}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Download CTA */}
                                        <button className="mx-5 mb-5 flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                            <Download className="h-3.5 w-3.5" /> Download Free
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-20 text-center">
                            <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
                            <p className="text-lg font-semibold text-foreground mb-1">No resources found</p>
                            <p className="text-sm text-muted-foreground mb-4">Try a different search term or filter</p>
                            <button onClick={clear} className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-primary">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-primary-foreground mb-2">Want more exclusive resources?</h2>
                    <p className="text-sm text-primary-foreground/80 mb-6 max-w-lg mx-auto">Sign up for free to get access to 150+ resources, weekly newsletters, and early access to new content.</p>
                    <Link to="/for-individuals" className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform">
                        Create Free Account
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
