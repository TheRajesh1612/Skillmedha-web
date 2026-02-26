import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap, Play, BookOpen, Star, CheckCircle, ArrowRight,
  Smartphone, Monitor, Users, Building2, School, Zap, BookMarked,
  Mail, Phone, MapPin, Send, ChevronRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/CourseCard";
import InstructorCard from "@/components/InstructorCard";

import heroPerson1 from "@/assets/hero-person-1.jpg";
import heroPerson2 from "@/assets/hero-person-2.jpg";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import course7 from "@/assets/course-7.jpg";
import course8 from "@/assets/course-8.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";
import instructor4 from "@/assets/instructor-4.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

// ─── data ─────────────────────────────────────────────────────────────────────
const courses = [
  { image: course1, title: "Complete Python Bootcamp From Zero To Hero In Python", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "POPULAR", badgeColor: "bg-primary" },
  { image: course2, title: "Angular - The Complete Guide (2024 Edition)", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 50m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "NEW", badgeColor: "bg-accent" },
  { image: course3, title: "The Ultimate Drawing Course Beginner To Advanced", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "BEST SELLER", badgeColor: "bg-primary" },
  { image: course4, title: "Instagram Marketing 2024: Complete Guide To Growth", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course5, title: "Complete Blender Creator: Learn 3D Modelling For Beginners", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 55m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "BEST SELLER", badgeColor: "bg-primary" },
  { image: course6, title: "The Complete Financial Analyst Training & Investing Course", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course7, title: "Learn Figma - UI/UX Design Essential Training", rating: 4.5, reviews: 1991, lessons: 6, duration: "2h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "NEW", badgeColor: "bg-accent" },
  { image: course8, title: "Photography Masterclass: A Complete Guide To Photography", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 50m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "BEST SELLER", badgeColor: "bg-primary" },
];

const instructors = [
  { image: instructor1, name: "Priya Sharma", role: "Frontend Developer", rating: 4.9, students: 483, courses: 15 },
  { image: instructor2, name: "Cameron Williamson", role: "Web Designer", rating: 4.8, students: 483, courses: 12 },
  { image: instructor3, name: "Brooklyn Simmons", role: "Data Analyst", rating: 4.8, students: 483, courses: 9 },
  { image: instructor4, name: "Wade Warren", role: "Marketing Coordinator", rating: 4.7, students: 483, courses: 11 },
];

const blogs = [
  { image: blog1, category: "Education", date: "Jan 15, 2025", title: "Best Education In Our Lives: Why Our Changes In Times" },
  { image: blog2, category: "Online Learning", date: "Feb 3, 2025", title: "How to design a simple, yet unique and memorable identity" },
  { image: blog3, category: "Design", date: "Mar 10, 2025", title: "Build Creative, 7 tips to enhance your brand identity" },
];

const stats = [
  { value: "350,000+", label: "Students worldwide" },
  { value: "496,000+", label: "Total course views" },
  { value: "19,000+", label: "Free video lessons" },
  { value: "987,000+", label: "Student community" },
];

// ─── Services cards ────────────────────────────────────────────────────────────
const services = [
  {
    icon: Zap,
    title: "Free Trainings",
    desc: "Access 3,000+ high-quality courses at absolutely zero cost. Kick-start your career today.",
    link: "/free-trainings",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Users,
    title: "For Individuals",
    desc: "Personalized learning paths with free and premium courses tailored to your career goals.",
    link: "/for-individuals",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Building2,
    title: "For Corporates",
    desc: "Upskill your workforce with corporate training programs, bulk enrolment & analytics.",
    link: "/for-corporates",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: School,
    title: "For Campus",
    desc: "Empower students and faculty with campus-specific programs, internships and certifications.",
    link: "/for-campus",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

// ─── Resources ────────────────────────────────────────────────────────────────
const resourceHighlights = [
  { image: blog1, tag: "FREE PDF", title: "Python Beginner's Handbook", desc: "A comprehensive 80-page guide to get started with Python programming." },
  { image: blog2, tag: "TEMPLATE", title: "Career Roadmap Template", desc: "Plan your career progression with this easy-to-use structured framework." },
  { image: blog3, tag: "CASE STUDY", title: "How SkillMedha Trained 10,000 Professionals", desc: "An in-depth look at our corporate training success stories." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ─── Contact form component ────────────────────────────────────────────────────
function ContactForm() {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    formRef.current.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required placeholder="Your Name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow" />
        <input required type="email" placeholder="Email Address" className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow" />
      </div>
      <input placeholder="Subject" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow" />
      <textarea required rows={4} placeholder="Your message..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none" />
      <button type="submit" className="flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow-primary hover:scale-105 transition-all">
        {sent ? "Message Sent! ✓" : <><Send className="h-4 w-4" /> Send Message</>}
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <Layout>

      {/* ════════════════════════════════
          1. HOME — Hero
      ════════════════════════════════ */}
      <section id="home" className="relative overflow-hidden bg-gradient-hero">
        {/* Decorative dots */}
        <div className="absolute left-8 top-20 h-3 w-3 text-accent opacity-50">✕</div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 rounded-full bg-primary opacity-40" />
        <div className="absolute right-[15%] top-16 h-3 w-3 text-primary-dark-foreground/20">✕</div>
        <div className="absolute left-8 bottom-[40%] text-accent opacity-50">+</div>
        <div className="absolute left-[45%] bottom-[30%] text-primary-dark-foreground/20">☆</div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-dark-foreground">
                Learn New Skills Online{" "}
                <br />
                With Top{" "}
                <span className="text-primary underline decoration-primary decoration-2 underline-offset-4">Educators</span>
              </h1>
              <p className="mb-8 max-w-lg text-base text-primary-dark-foreground/60">
                Build skills with industry-certified courses, live mentorship, and career-focused programs from top instructors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/for-individuals" className="rounded-xl bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-105">
                  Join For Free
                </Link>
                <Link to="/courses" className="rounded-xl border-2 border-accent px-8 py-4 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground">
                  Find Courses
                </Link>
              </div>
            </motion.div>

            <div className="relative hidden lg:block">
              <motion.div className="relative z-10" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <img src={heroPerson1} alt="Students learning" className="rounded-2xl shadow-2xl w-80 ml-auto" />
              </motion.div>
              <motion.div className="absolute -bottom-4 right-60 z-20" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <img src={heroPerson2} alt="Student" className="h-48 w-36 rounded-2xl object-cover shadow-xl" />
              </motion.div>

              {/* Floating cards */}
              <motion.div className="absolute left-0 bottom-20 z-30 animate-float" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <div className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-card-hover">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-accent">3,000 +</p>
                    <p className="text-xs text-muted-foreground">Free Courses</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="absolute right-0 bottom-0 z-30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <div className="rounded-xl bg-card px-4 py-3 shadow-card-hover">
                  <p className="text-sm font-semibold text-accent">Congrats!</p>
                  <p className="text-xs text-muted-foreground">Your Admission Completed</p>
                </div>
              </motion.div>
              <motion.div className="absolute right-12 top-0 z-30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <div className="flex items-center gap-2 rounded-xl bg-card px-3 py-2 shadow-card-hover">
                  <img src={instructor2} alt="Instructor" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Ali Tufan</p>
                    <p className="text-[10px] text-muted-foreground">UX/UI Designer</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom stats bar */}
            <div className="flex flex-wrap items-center justify-start gap-8 border-t border-primary-dark-foreground/10 py-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary-dark-foreground/60" />
                <span className="text-sm text-primary-dark-foreground/60">Over 12 million students</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary-dark-foreground/60" />
                <span className="text-sm text-primary-dark-foreground/60">More than 60,000 courses</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary-dark-foreground/60" />
                <span className="text-sm text-primary-dark-foreground/60">Learn anything online</span>
              </div>
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

      {/* ════════════════════════════════
          2. ABOUT
      ════════════════════════════════ */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left – image stack */}
            <motion.div className="relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={heroPerson1} alt="About SkillMedha" className="rounded-3xl shadow-2xl object-cover w-full max-h-[420px]" />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-primary px-6 py-4 shadow-card-hover text-primary-foreground">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-xs font-medium text-primary-foreground/80">Years of Excellence</p>
              </div>
            </motion.div>

            {/* Right – text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Who We Are</p>
              <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Empowering Careers Through{" "}
                <span className="text-gradient-primary">Quality Education</span>
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                SkillMedha is a leading ed-tech platform dedicated to bridging the gap between education and industry. We partner with top companies and universities to deliver skill-first programs that transform lives.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Our mission is to make world-class learning accessible to everyone — from fresh graduates to seasoned professionals, corporates to campus communities.
              </p>

              {/* Value pillars */}
              {["Industry-aligned curriculum designed by experts", "Real-world projects & live mentorship sessions", "Certifications recognised by 500+ companies", "Flexible schedules — learn at your own pace"].map((pt) => (
                <div key={pt} className="flex items-start gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{pt}</span>
                </div>
              ))}

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Instructors preview */}
          <motion.div className="mt-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">Meet Our Instructors</h3>
                <p className="text-sm text-muted-foreground">Learn from industry veterans</p>
              </div>
              <Link to="/about" className="hidden md:flex items-center gap-1 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((inst, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                  <InstructorCard {...inst} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          3. SERVICES
      ════════════════════════════════ */}
      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">What We Offer</p>
            <h2 className="mb-3 text-3xl font-bold text-foreground">Our Services</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Whether you're an individual learner, a corporate team, or a campus institution — SkillMedha has a solution crafted just for you.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              >
                <Link to={svc.link} className="group block h-full rounded-2xl bg-card shadow-card p-6 border border-border/40 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${svc.bg} mb-4`}>
                    <svc.icon className={`h-6 w-6 ${svc.color}`} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    Explore <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Popular courses preview */}
          <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">Popular Courses</h3>
              <Link to="/courses" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.slice(0, 4).map((course, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.05 } } }}>
                  <Link to="/course/1"><CourseCard {...course} /></Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why learn */}
          <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {[
              { icon: "🎓", num: "01", title: "Learn", desc: "Build skills with courses, certificates, and programs from world-class universities." },
              { icon: "🚀", num: "02", title: "Graduate", desc: "Achieve your goals with industry-recognised credentials and real-world expertise." },
              { icon: "💼", num: "03", title: "Work", desc: "Get hired with career-focused programs and job-ready skills for the modern workplace." },
            ].map((item, i) => (
              <motion.div key={i} className="rounded-2xl bg-card p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.15 } } }}>
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.num}. {item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          4. RESOURCES
      ════════════════════════════════ */}
      <section id="resources" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Grow Your Knowledge</p>
            <h2 className="mb-3 text-3xl font-bold text-foreground">Resources & Knowledge Hub</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Explore free guides, templates, case studies, and curated articles to accelerate your learning journey.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {resourceHighlights.map((res, i) => (
              <motion.div key={i} className="group overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                <div className="overflow-hidden">
                  <img src={res.image} alt={res.title} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="inline-block mb-2 rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold text-accent tracking-wider">{res.tag}</span>
                  <h3 className="mb-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors">{res.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{res.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blog section */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">Latest Articles</h3>
              <Link to="/knowledge-hub" className="flex items-center gap-1 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <BookMarked className="h-4 w-4" /> Knowledge Hub
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((blog, i) => (
                <motion.div key={i} className="group overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                  <div className="overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs font-medium text-primary">{blog.category}</span>
                      <span className="text-xs text-muted-foreground">{blog.date}</span>
                    </div>
                    <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">{blog.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          5. CONTACT
      ════════════════════════════════ */}
      <section id="contact" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Get In Touch</p>
            <h2 className="mb-3 text-3xl font-bold text-primary-dark-foreground">Contact Us</h2>
            <p className="text-sm text-primary-dark-foreground/60 max-w-xl mx-auto">
              Have a question or want to partner with us? Our team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@skillmedha.com" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: MapPin, label: "Address", value: "Hyderabad, Telangana, India" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary-dark-foreground/50 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-primary-dark-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="mt-10">
                <p className="mb-4 text-sm font-semibold text-primary-dark-foreground">Quick Links</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Free Trainings", to: "/free-trainings" },
                    { label: "For Corporates", to: "/for-corporates" },
                    { label: "For Campus", to: "/for-campus" },
                    { label: "Knowledge Hub", to: "/knowledge-hub" },
                    { label: "Browse Courses", to: "/courses" },
                  ].map((lnk) => (
                    <Link key={lnk.label} to={lnk.to} className="rounded-full border border-primary-dark-foreground/20 px-3 py-1 text-xs font-medium text-primary-dark-foreground/70 hover:border-accent hover:text-accent transition-colors">
                      {lnk.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="rounded-2xl bg-card p-8 shadow-card-hover">
                <h3 className="mb-5 text-lg font-bold text-foreground">Send us a message</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
