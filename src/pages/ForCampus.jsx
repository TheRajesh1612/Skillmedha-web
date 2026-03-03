import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    School, CheckCircle, ArrowRight, Megaphone, ClipboardCheck,
    Briefcase, Users, Building2, Trophy, FileText, Code,
    Mic, BookOpen, GraduationCap, Target, Lightbulb,
    ChevronRight, Sparkles
} from "lucide-react";
import Layout from "@/components/layout/Layout";

import campusHero from "@/assets/campus-hero.png";
import campusHeroSecondary from "@/assets/campus-hero-secondary.png";
import about1 from "@/assets/about-1.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
    { value: "500+", label: "Campus Partners" },
    { value: "50,000+", label: "Students Placed" },
    { value: "200+", label: "Hiring Companies" },
    { value: "1,000+", label: "Mock Tests Completed" },
];

const placementItems = [
    { icon: Building2, text: "Company placement announcements" },
    { icon: Users, text: "Campus recruitment drives" },
    { icon: Briefcase, text: "Internship opportunities" },
    { icon: Megaphone, text: "Job alerts" },
    { icon: Trophy, text: "Hackathons and competitions" },
    { icon: Lightbulb, text: "Participate in innovation challenges" },
];

const mockAssessmentItems = [
    { icon: Code, text: "Technical mock tests" },
    { icon: Target, text: "Aptitude practice tests" },
    { icon: FileText, text: "Coding assessments" },
    { icon: ClipboardCheck, text: "Placement readiness reports" },
];

const careerPrepItems = [
    { icon: FileText, text: "Resume preparation workshops" },
    { icon: Mic, text: "Interview preparation sessions" },
    { icon: Users, text: "Industry mentoring" },
    { icon: BookOpen, text: "Career guidance" },
];

const treeNodes = [
    {
        id: "placement",
        title: "Placement Drives",
        icon: Megaphone,
        desc: "Stay informed about upcoming placement opportunities and campus recruitment drives.",
        color: "text-violet-400",
        bg: "bg-violet-400/10",
        border: "border-violet-400/30",
        shadow: "shadow-violet-400/20",
        items: placementItems,
    },
    {
        id: "assessments",
        title: "Mock Assessments",
        icon: ClipboardCheck,
        desc: "Prepare for placements with realistic technical, aptitude, and coding assessments.",
        color: "text-sky-400",
        bg: "bg-sky-400/10",
        border: "border-sky-400/30",
        shadow: "shadow-sky-400/20",
        items: mockAssessmentItems,
    },
    {
        id: "career",
        title: "Career Preparation",
        icon: Briefcase,
        desc: "Help students become job-ready with resume workshops, interview prep and mentoring.",
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/30",
        shadow: "shadow-accent/20",
        items: careerPrepItems,
    }
];

export default function ForCampus() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeNode, setActiveNode] = useState(treeNodes[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const tabs = [
        { title: "Placement Drives", items: placementItems, icon: Megaphone, color: "text-violet-400", bg: "bg-violet-400/10" },
        { title: "Mock Assessments", items: mockAssessmentItems, icon: ClipboardCheck, color: "text-sky-400", bg: "bg-sky-400/10" },
        { title: "Career Preparation", items: careerPrepItems, icon: Briefcase, color: "text-accent", bg: "bg-accent/10" },
    ];

    return (
        <Layout>
            {/* ═══════════════════════════════════
          1. HERO
      ═══════════════════════════════════ */}
            <section className="relative overflow-hidden bg-gradient-hero">
                {/* Decorative elements */}
                <div className="absolute left-8 top-20 h-3 w-3 text-accent opacity-40">✕</div>
                <div className="absolute left-[20%] top-[40%] h-2 w-2 rounded-full bg-primary opacity-30" />
                <div className="absolute right-[15%] top-16 h-3 w-3 text-primary-dark-foreground/15">✕</div>
                <div className="absolute left-8 bottom-[40%] text-accent opacity-40">+</div>
                <div className="absolute right-[30%] bottom-[20%] text-primary-dark-foreground/15">☆</div>

                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
                        {/* Left – text */}
                        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20">
                                    <School className="h-5 w-5 text-amber-400" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Campus Programme</span>
                            </div>
                            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-dark-foreground">
                                Empowering Students with{" "}
                                <span className="text-gradient-primary">Career Opportunities</span>
                            </h1>
                            <p className="mb-8 max-w-lg text-sm md:text-base leading-relaxed text-primary-dark-foreground/60">
                                SkillMedha connects students with industry opportunities through campus drives, hackathons, mock assessments, and career readiness programs.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="rounded-xl bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-105">
                                    Register Your Campus
                                </Link>
                                <a href="#offerings" className="rounded-xl border-2 border-accent px-8 py-4 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground">
                                    Explore Opportunities
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-10 flex flex-wrap gap-6">
                                {["Campus Drives", "Hackathons", "Mock Tests", "Career Guidance"].map((b) => (
                                    <div key={b} className="flex items-center gap-1.5 text-xs text-primary-dark-foreground/60">
                                        <CheckCircle className="h-3.5 w-3.5 text-accent" /> {b}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right – image */}
                        <div className="relative mt-8 lg:mt-0 min-h-[380px] sm:min-h-[420px] lg:min-h-0">
                            <motion.div className="relative z-10" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <img src={campusHero} alt="Campus students celebrating success" className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:w-[450px] lg:ml-auto lg:mx-0 object-cover" />
                            </motion.div>
                            <motion.div className="hidden lg:block absolute -bottom-8 right-72 z-20" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                                <img src={campusHeroSecondary} alt="Student graduate" className="h-56 w-44 rounded-2xl object-cover shadow-xl border-4 border-background" />
                            </motion.div>

                            {/* Floating cards */}
                            <motion.div className="absolute left-0 bottom-24 z-30 animate-float sm:bottom-40 xl:left-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                                <div className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-card-hover border border-border/50">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-accent">500+</p>
                                        <p className="text-xs text-muted-foreground">Campus Partners</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" className="w-full">
                        <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0V40Z" fill="hsl(240, 20%, 98%)" />
                    </svg>
                </div>
            </section>

            {/* ═══════════════════════════════════
          2. CAMPUS OFFERINGS — Circular Tree
      ═══════════════════════════════════ */}
            <section id="offerings" className="py-24 bg-background overflow-hidden relative">
                {/* Background glow lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">SkillMedha Offerings</p>
                        <h2 className="mb-3 text-3xl lg:text-4xl font-bold text-foreground">Campus Ecosystem</h2>
                        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                            A comprehensive suite of services designed to bridge the gap between academic learning and industry readiness. Click on a node to explore.
                        </p>
                    </motion.div>

                    {isMobile ? (
                        // Mobile Fallback: Stacked cards
                        <div className="space-y-6 max-w-md mx-auto">
                            {treeNodes.map((node, i) => (
                                <div key={node.id} className="rounded-2xl bg-card border border-border shadow-md overflow-hidden">
                                    <div
                                        className={`p-5 flex items-center gap-4 cursor-pointer hover:bg-muted/50 transition-colors ${activeNode.id === node.id ? 'bg-muted/50' : ''}`}
                                        onClick={() => setActiveNode(node)}
                                    >
                                        <div className={`flex shrink-0 h-12 w-12 items-center justify-center rounded-xl ${node.bg}`}>
                                            <node.icon className={`h-6 w-6 ${node.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg">{node.title}</h3>
                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{node.desc}</p>
                                        </div>
                                        <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform ${activeNode.id === node.id ? 'rotate-90' : ''}`} />
                                    </div>

                                    <AnimatePresence>
                                        {activeNode.id === node.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="border-t border-border bg-card/50"
                                            >
                                                <div className="p-5 grid gap-3">
                                                    {node.items.map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-3">
                                                            <div className={`h-6 w-6 rounded-md flex shrink-0 items-center justify-center ${node.bg}`}>
                                                                <item.icon className={`h-3 w-3 ${node.color}`} />
                                                            </div>
                                                            <span className="text-sm text-foreground">{item.text}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Desktop: Circular Tree Layout
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[500px]">
                            {/* Left Side: Interactive Circular Graph */}
                            <div className="relative w-full lg:w-[50%] h-[500px] lg:translate-x-[-20%] xl:translate-x-[-20%]">
                                {/* Central Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center h-40 w-40 rounded-full bg-card border border-primary/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-gradient-to-br from-card to-muted p-6 text-center ring-4 ring-background">
                                    <Sparkles className="h-8 w-8 text-primary mb-2" />
                                    <span className="font-bold text-sm tracking-tight leading-tight">Campus<br />Offerings</span>
                                </div>

                                {/* Connecting Lines SVG */}
                                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%">
                                    <defs>
                                        <linearGradient id="grad-active" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                                        </linearGradient>
                                        <linearGradient id="grad-inactive" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>

                                    {/* Lines from center to nodes */}
                                    <g>
                                        {/* Top node path */}
                                        <line
                                            x1="50%" y1="50%"
                                            x2="calc(50% + 80px)" y2="calc(50% - 120px)"
                                            stroke={activeNode.id === "placement" ? "url(#grad-active)" : "url(#grad-inactive)"}
                                            strokeWidth={activeNode.id === "placement" ? "3" : "2"}
                                            strokeDasharray={activeNode.id === "placement" ? "none" : "5,5"}
                                            className="transition-all duration-500"
                                        />
                                        {/* Middle node path */}
                                        <line
                                            x1="50%" y1="50%"
                                            x2="calc(50% + 140px)" y2="calc(50% + 0.1px)"
                                            stroke={activeNode.id === "assessments" ? "url(#grad-active)" : "url(#grad-inactive)"}
                                            strokeWidth={activeNode.id === "assessments" ? "3" : "2"}
                                            strokeDasharray={activeNode.id === "assessments" ? "none" : "5,5"}
                                            className="transition-all duration-500"
                                        />
                                        {/* Bottom node path */}
                                        <line
                                            x1="50%" y1="50%"
                                            x2="calc(50% + 80px)" y2="calc(50% + 120px)"
                                            stroke={activeNode.id === "career" ? "url(#grad-active)" : "url(#grad-inactive)"}
                                            strokeWidth={activeNode.id === "career" ? "3" : "2"}
                                            strokeDasharray={activeNode.id === "career" ? "none" : "5,5"}
                                            className="transition-all duration-500"
                                        />
                                    </g>
                                </svg>

                                {/* Orbit Nodes */}
                                {treeNodes.map((node, i) => {
                                    // Positioning logic for beautiful arc (right hemisphere)
                                    let x, y;
                                    if (i === 0) { x = 'calc(50% + 80px)'; y = 'calc(50% - 120px)'; }
                                    else if (i === 1) { x = 'calc(50% + 140px)'; y = 'calc(50%)'; }
                                    else { x = 'calc(50% + 80px)'; y = 'calc(50% + 120px)'; }

                                    const isActive = activeNode.id === node.id;

                                    return (
                                        <div
                                            key={node.id}
                                            onClick={() => setActiveNode(node)}
                                            className="absolute z-30 transition-all duration-300 group cursor-pointer"
                                            style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                                        >
                                            <div className={`relative flex items-center gap-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}>
                                                {/* Node Circle */}
                                                <div className={`flex shrink-0 h-16 w-16 items-center justify-center rounded-full border-2 bg-card transition-all duration-300 
                          ${isActive ? `border-[hsl(var(--primary))] shadow-[0_0_20px_rgba(59,130,246,0.3)]` : `border-border hover:border-[hsl(var(--muted-foreground))]`}
                        `}>
                                                    <node.icon className={`h-6 w-6 transition-colors duration-300 ${isActive ? node.color.replace('text-', 'text-') : 'text-muted-foreground group-hover:text-foreground'}`} />
                                                </div>

                                                {/* Label Badge */}
                                                <div className={`absolute left-full ml-4 whitespace-nowrap rounded-lg px-4 py-2 border backdrop-blur-sm transition-all duration-300
                          ${isActive ? `bg-card border-border shadow-lg opacity-100 translate-x-0` : `bg-background/80 border-transparent opacity-70 -translate-x-2 group-hover:opacity-100 group-hover:bg-card group-hover:border-border`}
                        `}>
                                                    <span className={`font-semibold text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                                        {node.title}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Side: Detailed Content Pane based on active node */}
                            <div className="w-full lg:w-50% relative min-h-[400px] z-40 flex flex-col items-right">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeNode.id}
                                        initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                                        transition={{ duration: 0.3 }}
                                        className="w-[70%] bg-card rounded-2xl border border-border shadow-xl p-8 overflow-hidden absolute left-10% right-0"
                                    >
                                        {/* Floating decorative icon background */}
                                        <div className="absolute right-8 top-8 opacity-[0.03] scale-150 transform-gpu pointer-events-none">
                                            <activeNode.icon className="w-64 h-64" />
                                        </div>

                                        <div className="relative z-10 w-full flex flex-col">
                                            <div className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${activeNode.bg} mb-6`}>
                                                <activeNode.icon className={`h-7 w-7 ${activeNode.color}`} />
                                            </div>

                                            <h3 className="text-2xl font-bold text-foreground mb-3">{activeNode.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-8 leading-relaxed lg:pr-8">
                                                {activeNode.desc}
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 content-start pb-2">
                                                {activeNode.items.map((item, i) => (
                                                    <motion.div
                                                        key={item.text}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                                                        className="flex items-start gap-3 group/item border border-transparent p-2 -m-2 rounded-lg hover:bg-muted/30 transition-colors"
                                                    >
                                                        <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${activeNode.bg}`}>
                                                            <item.icon className={`h-3.5 w-3.5 ${activeNode.color}`} />
                                                        </div>
                                                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">{item.text}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ═══════════════════════════════════
          3. STATS BAR
      ═══════════════════════════════════ */}
            <section className="bg-gradient-primary py-14">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <p className="text-3xl lg:text-4xl font-bold text-primary-foreground">{s.value}</p>
                                <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
          4. DETAILED SERVICES — Tabs (Legacy section kept as "How We Help")
      ═══════════════════════════════════ */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="mb-3 text-3xl lg:text-4xl font-bold text-foreground">How We Help Your Campus</h2>
                        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                            Explore the detailed services we offer to make your students career-ready.
                        </p>
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex w-full justify-center mb-10 overflow-x-auto pb-4 hide-scrollbar px-2 sm:px-0">
                        <div className="flex w-full sm:w-auto gap-1 sm:gap-2 rounded-xl bg-card border border-border/50 p-1.5 shadow-sm">
                            {tabs.map((tab, i) => (
                                <button
                                    key={tab.title}
                                    onClick={() => setActiveTab(i)}
                                    className={`flex items-center justify-center gap-1.5 sm:gap-2 flex-1 rounded-lg px-2 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-sm font-semibold transition-all duration-300 ${activeTab === i
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                >
                                    <tab.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                                    <span className="whitespace-normal sm:whitespace-nowrap text-center leading-tight">{tab.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab content */}
                    <motion.div
                        key={tabs[activeTab].title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl border border-border shadow-sm p-6 sm:p-10"
                    >
                        {/* Left – items */}
                        <div>
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${tabs[activeTab].bg} mb-5`}>
                                {(() => { const Icon = tabs[activeTab].icon; return <Icon className={`h-6 w-6 ${tabs[activeTab].color}`} />; })()}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{tabs[activeTab].title}</h3>
                            <p className="text-sm text-muted-foreground mb-8 max-w-md">
                                {activeTab === 0
                                    ? "Stay informed about upcoming placement opportunities and never miss a career-changing chance."
                                    : activeTab === 1
                                        ? "Prepare for placements with realistic assessments designed to match actual hiring tests."
                                        : "Help students become job-ready with comprehensive career preparation programs."}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tabs[activeTab].items.map((item, i) => (
                                    <motion.div
                                        key={item.text}
                                        className="flex items-start gap-3 rounded-xl bg-muted/40 border border-border/40 p-4 hover:bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.06 }}
                                    >
                                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tabs[activeTab].bg}`}>
                                            <item.icon className={`h-4 w-4 ${tabs[activeTab].color}`} />
                                        </div>
                                        <span className="text-sm font-medium text-foreground leading-snug">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right – image */}
                        <div className="hidden lg:block">
                            <img
                                src={about1}
                                alt={tabs[activeTab].title}
                                className="rounded-2xl shadow-xl object-cover w-full h-full min-h-[400px] max-h-[500px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════
          5. CTA SECTION
      ═══════════════════════════════════ */}
            <section className="py-24 bg-gradient-hero relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center max-w-2xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/20 mb-6 shadow-inner">
                            <School className="h-8 w-8 text-amber-400" />
                        </div>
                        <h2 className="mb-4 text-3xl lg:text-5xl font-bold text-primary-dark-foreground tracking-tight">
                            Register Your Campus Today
                        </h2>
                        <p className="mb-10 text-sm md:text-base text-primary-dark-foreground/70 max-w-lg mx-auto leading-relaxed">
                            Join 500+ campuses already empowering their students with SkillMedha's career readiness programs. Get started in minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto flex items-center justify-center rounded-xl bg-gradient-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-105"
                            >
                                Get Started <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                            <Link
                                to="/about"
                                className="w-full sm:w-auto flex items-center justify-center rounded-xl border-2 border-primary-dark-foreground/20 px-10 py-4 text-sm font-semibold text-primary-dark-foreground transition-all hover:border-accent hover:text-accent hover:bg-accent/10"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
