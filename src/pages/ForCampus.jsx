import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    School, CheckCircle, ArrowRight, Megaphone, ClipboardCheck,
    Briefcase, Users, Building2, Trophy, FileText, Code,
    Mic, BookOpen, GraduationCap, Target, Star, Lightbulb,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

import heroPerson1 from "@/assets/hero-person-1.jpg";
import heroPerson2 from "@/assets/hero-person-2.jpg";
import about1 from "@/assets/about-1.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const campusServices = [
    {
        icon: Megaphone,
        title: "Campus Placement Drive Updates",
        desc: "Stay informed about upcoming placement opportunities and campus recruitment drives.",
        color: "text-violet-400",
        bg: "bg-violet-400/10",
        border: "border-violet-400/20",
    },
    {
        icon: ClipboardCheck,
        title: "Mock Assessments",
        desc: "Prepare for placements with realistic technical, aptitude, and coding assessments.",
        color: "text-sky-400",
        bg: "bg-sky-400/10",
        border: "border-sky-400/20",
    },
    {
        icon: Briefcase,
        title: "Career Preparation Programs",
        desc: "Help students become job-ready with resume workshops, interview prep and mentoring.",
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
];

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

export default function ForCampus() {
    const [activeTab, setActiveTab] = useState(0);

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
                            <h1 className="mb-6 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-dark-foreground">
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
                                <a href="#services" className="rounded-xl border-2 border-accent px-8 py-4 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground">
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
                                <img src={heroPerson1} alt="Campus students" className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto lg:w-80 lg:ml-auto lg:mx-0" />
                            </motion.div>
                            <motion.div className="hidden lg:block absolute -bottom-4 right-60 z-20" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                                <img src={heroPerson2} alt="Student" className="h-48 w-36 rounded-2xl object-cover shadow-xl" />
                            </motion.div>

                            {/* Floating cards */}
                            <motion.div className="absolute left-0 bottom-20 z-30 animate-float sm:bottom-40 xl:left-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                                <div className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-card-hover">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-accent">500+</p>
                                        <p className="text-xs text-muted-foreground">Campus Partners</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="absolute right-0 bottom-0 z-30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                                <div className="rounded-xl bg-card px-4 py-3 shadow-card-hover">
                                    <p className="text-sm font-semibold text-accent">50,000+</p>
                                    <p className="text-xs text-muted-foreground">Students Placed</p>
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
          2. CAMPUS SERVICES — Icon cards
      ═══════════════════════════════════ */}
            <section id="services" className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div className="mb-14 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">What We Offer</p>
                        <h2 className="mb-3 text-3xl lg:text-4xl font-bold text-foreground">Campus Services</h2>
                        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                            Everything your campus needs to bridge the gap between academics and industry careers.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {campusServices.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                className={`group rounded-2xl bg-card border ${svc.border} shadow-card p-8 text-center hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.12 } } }}
                            >
                                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${svc.bg} mb-6`}>
                                    <svc.icon className={`h-8 w-8 ${svc.color}`} />
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">{svc.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                            </motion.div>
                        ))}
                    </div>
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
          4. DETAILED SERVICES — Tabs
      ═══════════════════════════════════ */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="mb-3 text-3xl lg:text-4xl font-bold text-foreground">How We Help Your Campus</h2>
                        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                            Explore the detailed services we offer to make your students career-ready.
                        </p>
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="inline-flex gap-1 rounded-xl bg-muted p-1">
                            {tabs.map((tab, i) => (
                                <button
                                    key={tab.title}
                                    onClick={() => setActiveTab(i)}
                                    className={`flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === i
                                            ? "bg-card text-primary shadow-md"
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    <tab.icon className="h-4 w-4" />
                                    <span className="hidden sm:inline">{tab.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
                                        className="flex items-start gap-3 rounded-xl bg-card border border-border/40 p-4 hover:shadow-md hover:border-primary/30 transition-all"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.06 }}
                                    >
                                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tabs[activeTab].bg}`}>
                                            <item.icon className={`h-4 w-4 ${tabs[activeTab].color}`} />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right – image */}
                        <div className="hidden lg:block">
                            <img
                                src={about1}
                                alt={tabs[activeTab].title}
                                className="rounded-2xl shadow-xl object-cover w-full max-h-[420px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════
          5. CTA SECTION
      ═══════════════════════════════════ */}
            <section className="py-20 bg-gradient-hero">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="text-center max-w-2xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/20 mb-6">
                            <School className="h-7 w-7 text-amber-400" />
                        </div>
                        <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-primary-dark-foreground">
                            Register Your Campus Today
                        </h2>
                        <p className="mb-8 text-sm md:text-base text-primary-dark-foreground/60 max-w-lg mx-auto">
                            Join 500+ campuses already empowering their students with SkillMedha's career readiness programs. Get started in minutes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="rounded-xl bg-gradient-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-105"
                            >
                                Get Started <ArrowRight className="inline h-4 w-4 ml-1" />
                            </Link>
                            <Link
                                to="/about"
                                className="rounded-xl border-2 border-primary-dark-foreground/20 px-10 py-4 text-sm font-semibold text-primary-dark-foreground/80 transition-all hover:border-accent hover:text-accent"
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
