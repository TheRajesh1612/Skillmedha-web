import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    BookOpen, Briefcase, Mic, ClipboardCheck,
    Users, ArrowRight, CheckCircle2, MonitorPlay
} from "lucide-react";
import Layout from "@/components/layout/Layout";

import individualsHero from "@/assets/individuals-hero.png";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const individualServices = [
    {
        id: "training",
        icon: MonitorPlay,
        title: "Industry-Focused Training Programs",
        desc: "Gain practical, job-ready skills in high-demand technologies, Our training includes hands-on labs, real-world projects, and mentorship from industry professionals.",
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
    },
    {
        id: "internships",
        icon: Briefcase,
        title: "Internship Programs",
        desc: "Work on real-time projects and gain industry exposure. Live project experience, Mentorship from experienced professionals, Internship certificate. Internships help bridge the gap between academic learning and industry requirements.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        id: "mock-interviews",
        icon: Mic,
        title: "Mock Interviews",
        desc: "Prepare confidently for technical and HR interviews, Technical interview simulation, HR interview preparation, Resume review and feedback.",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
    },
    {
        id: "assessments",
        icon: ClipboardCheck,
        title: "Skill Assessments",
        desc: "Evaluate your readiness and identify improvement areas through Technical skill assessments, Aptitude tests, Coding assessments, AI-based performance reports, Career readiness evaluation.",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
    },
    {
        id: "placement",
        icon: Users,
        title: "Placement Support",
        desc: "We support your job search through structured placement assistance like Resume preparation support, Job referrals and placement drives, Interview scheduling support.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
];

export default function ForIndividuals() {
    return (
        <Layout>
            {/* ═══════════════════════════════════
          1. HERO SECTION (Split Layout)
      ═══════════════════════════════════ */}
            <section className="bg-muted/30 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

                    {/* Left Content */}
                    <div className="flex flex-col justify-center px-6 py-16 lg:px-16 xl:px-24">
                        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                            {/* <div className="flex items-center gap-2 mb-6 text-primary font-semibold tracking-wide uppercase text-sm">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                <span>Individuals Page</span>
                            </div> */}

                            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-foreground tracking-tight">
                                Build Your Career with Industry-Ready Skills
                            </h1>

                            <p className="mb-8 text-lg leading-relaxed text-muted-foreground max-w-[540px]">
                                At SkillMedha, we help individuals transform their careers through hands-on training, real-world internships, career assessments, and placement support. Our programs are designed by industry experts to ensure you gain practical skills required by employers in today's competitive job market.
                            </p>

                            <p className="mb-10 text-xl font-medium text-foreground">
                                Start your career journey with confidence.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    onClick={() => setIsEnrollModalOpen(true)}
                                    className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    Enroll Now
                                </Link>
                                <Link
                                    to="/courses"
                                    className="rounded-lg border-2 border-foreground px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
                                >
                                    Explore Programs
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image Container */}
                    <div className="relative hidden lg:block h-full min-h-[600px]">
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src={individualsHero}
                                alt="Students learning together"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            {/* Optional slight gradient overlay if text readability was an issue, but since it's a split section, no overlay is needed on the image */}
                        </motion.div>
                    </div>

                    {/* Mobile Image (Visible only on small screens) */}
                    <div className="block lg:hidden w-full h-[300px] sm:h-[400px]">
                        <img
                            src={individualsHero}
                            alt="Students learning together"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
          2. OUR SERVICES SECTION
      ═══════════════════════════════════ */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="mb-16 text-center max-w-3xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                    >
                        <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">Our Services for Individuals</h2>
                        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-6 relative">
                            <div className="absolute w-4 h-4 bg-accent rounded-full -right-2 -top-[5px]"></div>
                        </div>
                        <p className="text-base text-muted-foreground">
                            Comprehensive support designed to take you from a learner to an industry professional.
                        </p>
                    </motion.div>

                    {/* Services Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {individualServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={`group relative overflow-hidden rounded-2xl bg-card border ${service.border} transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 ${index >= 3 ? 'lg:col-span-1.5' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Background Hover Decoration */}
                                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${service.bg} opacity-50 blur-2xl transition-all duration-500 group-hover:scale-150`}></div>

                                <div className="relative p-8 h-full flex flex-col">
                                    {/* Icon Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.bg} shadow-sm border border-white/20`}>
                                            <service.icon className={`h-8 w-8 ${service.color}`} />
                                        </div>
                                        <span className="text-5xl font-extrabold text-muted/30 select-none">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Parsing description to make lists looking better */}
                                    <div className="text-sm text-muted-foreground leading-relaxed flex-1">
                                        {service.desc.includes(',') ? (
                                            <ul className="space-y-3 mt-2">
                                                {service.desc.split(/,\s*/).map((point, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${service.color}`} />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{service.desc}</p>
                                        )}
                                    </div>

                                    {/* Bottom linking */}
                                    <div className="mt-8 pt-4 border-t border-border/60">
                                        <Link to="/contact" className={`inline-flex items-center text-sm font-semibold hover:gap-2 transition-all gap-1 ${service.color}`}>
                                            Learn more <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Special alignment for the last two items to be centered if there are 5 total and grid is 3 */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
            @media (min-width: 1024px) {
              .grid-cols-3 > div:nth-child(4) {
                grid-column: 1 / span 1;
                margin-left: 50%;
              }
              .grid-cols-3 > div:nth-child(5) {
                grid-column: 2 / span 1;
                margin-left: 50%;
              }
            }
            @media (min-width: 1280px) {
              /* For wider screens we might want standard centering */
               .grid-cols-3 > div:nth-child(4) {
                grid-column: 1 / span 1;
                margin-left: 50%;
              }
              .grid-cols-3 > div:nth-child(5) {
                grid-column: 2 / span 1;
                margin-left: 50%;
              }
            }
          `}} />
                </div>
            </section>

            {/* ═══════════════════════════════════
          3. CTA SECTION
      ═══════════════════════════════════ */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary"></div>
                {/* Background Patterns */}
                <div className="absolute top-0 right-0 opacity-10">
                    <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Ready to Transform Your Career?
                        </motion.h2>
                        <motion.p
                            className="text-white/80 text-lg mb-10 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Join thousands of individuals who have successfully accelerated their professional growth with SkillMedha's industry-aligned programs.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link to="/signup" className="inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-base font-bold text-primary shadow-lg transition-transform hover:scale-105">
                                Join SkillMedha Today
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
