import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import InstructorCard from "@/components/InstructorCard";

import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";
import instructor4 from "@/assets/instructor-4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const testimonials = [
  { name: "Courtney Henry", role: "Web Designer", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
  { name: "Ronald Richards", role: "President of Sales", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
  { name: "Annette Black", role: "Banking Advisor", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
  { name: "Eleanor Pena", role: "Head of Marketing", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
];

const stats = [
  { value: "350,000+", label: "Students worldwide" },
  { value: "496,000+", label: "Course enrollments" },
  { value: "19,000+", label: "Video lessons" },
  { value: "987,000+", label: "Community members" },
];

const instructors = [
  { image: instructor1, name: "Priya Sharma", role: "Frontend Developer", rating: 4.9, students: 483, courses: 15 },
  { image: instructor2, name: "Cameron Williamson", role: "Web Designer", rating: 4.8, students: 483, courses: 12 },
  { image: instructor3, name: "Brooklyn Simmons", role: "Data Analyst", rating: 4.8, students: 483, courses: 9 },
  { image: instructor4, name: "Wade Warren", role: "Marketing Coordinator", rating: 4.7, students: 483, courses: 11 },
];

export default function About() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-gradient-hero py-3">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-primary-dark-foreground/50">
            <Link to="/" className="hover:text-primary-dark-foreground">Home</Link>
            <span>›</span><span>All courses</span><span>›</span>
            <span className="text-primary-dark-foreground">User Interface</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3" initial="hidden" animate="visible" variants={fadeUp}>
            About Us
          </motion.h1>
          <p className="text-sm text-muted-foreground">We're On A Mission To Deliver Engaging, Curated Courses At A Reasonable Price.</p>
        </div>
      </section>

      {/* About content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={about1} alt="Students" className="rounded-2xl object-cover h-52 w-full" />
              <img src={about3} alt="Student" className="rounded-2xl object-cover h-52 w-full mt-8" />
              <img src={about2} alt="Classroom" className="rounded-2xl object-cover h-52 w-full col-span-2" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Welcome to SkillMedha Enhance your skills with best Online courses
              </h2>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                You can start and finish one of these popular courses in under a day – for free! Check out the list below. Take the course for free.
              </p>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                Empowering learners with career-focused, high-quality online education. We believe that everyone deserves access to world-class learning resources.
              </p>
              <Link to="/courses" className="inline-block rounded-xl bg-gradient-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary">
                Start Learning For Free
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why learn */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h2 className="mb-2 text-2xl font-bold text-foreground" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Why learn with our courses?
          </motion.h2>
          <p className="mb-10 text-sm text-muted-foreground">Learn from the best in the industry</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎓", num: "01", title: "Learn", desc: "Build skills with courses, certificates, and programs from world-class educators." },
              { icon: "🚀", num: "02", title: "Graduate", desc: "Achieve your goals with industry-recognized credentials and real-world expertise." },
              { icon: "💼", num: "03", title: "Work", desc: "Get hired with career-focused programs and job-ready skills for the modern workplace." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl bg-card p-8 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.15 } } }}
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.num}. {item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">What People Say</h3>
            <p className="text-sm text-primary-dark-foreground/60">Hear from our learners</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="rounded-2xl bg-card p-6 shadow-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">Great Work</span>
                  <span className="text-2xl text-primary/20">❝</span>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                <p className="mb-1 text-3xl font-bold text-gradient-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="mb-1 text-2xl font-bold text-foreground">Learn from the best instructors</h2>
              <p className="text-sm text-muted-foreground">Top-rated instructors from around the world</p>
            </div>
            <Link to="#" className="hidden md:flex items-center gap-1 rounded-lg border border-primary px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground">
              View All Instructors <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((inst, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                <InstructorCard {...inst} />
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Want to help people learn, grow and achieve more in life?{" "}
            <Link to="#" className="font-medium text-primary underline">Become an Instructor</Link>
          </p>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-t border-border py-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="mb-6 text-sm text-muted-foreground">Trusted by companies of all sizes</p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["amazon", "AMD", "cisco", "dropcom", "logitech", "Spotify"].map((brand) => (
              <span key={brand} className="text-xl font-bold text-foreground">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
