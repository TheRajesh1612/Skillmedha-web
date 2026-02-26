import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Play, BookOpen, Star, ChevronRight, CheckCircle, ArrowRight, Smartphone, Monitor } from "lucide-react";
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
import learnAnywhere from "@/assets/learn-anywhere.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const categories = [
  { icon: "🎨", label: "Design", count: "22 Courses" },
  { icon: "💻", label: "Development", count: "19 Courses", active: true },
  { icon: "📊", label: "Business", count: "15 Courses" },
  { icon: "📈", label: "Marketing", count: "12 Courses" },
  { icon: "📸", label: "Photography", count: "10 Courses" },
  { icon: "🎵", label: "Music", count: "8 Courses" },
];

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

const testimonials = [
  { name: "Courtney Henry", role: "Web Designer", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
  { name: "Ronald Richards", role: "President of Sales", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
  { name: "Annette Black", role: "Banking Advisor", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
  { name: "Eleanor Pena", role: "Head of Marketing", text: "I think SkillMedha is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance." },
];

const instructors = [
  { image: instructor1, name: "Priya Sharma", role: "Frontend Developer", rating: 4.9, students: 483, courses: 15 },
  { image: instructor2, name: "Cameron Williamson", role: "Web Designer", rating: 4.8, students: 483, courses: 12 },
  { image: instructor3, name: "Brooklyn Simmons", role: "Data Analyst", rating: 4.8, students: 483, courses: 9 },
  { image: instructor4, name: "Wade Warren", role: "Marketing Coordinator", rating: 4.7, students: 483, courses: 11 },
];

const stats = [
  { value: "350,000+", label: "Students worldwide" },
  { value: "496,000+", label: "Total course views" },
  { value: "19,000+", label: "Free video lessons" },
  { value: "987,000+", label: "Student community" },
];

const blogs = [
  { image: blog1, category: "Education", date: "Jan 15, 2025", title: "Best Education In Our Lives: Why Our Changes In Times" },
  { image: blog2, category: "Online Learning", date: "Feb 3, 2025", title: "How to design a simple, yet unique and memorable identity" },
  { image: blog3, category: "Design", date: "Mar 10, 2025", title: "Build Creative, 7 tips to enhance your brand identity" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Decorative shapes */}
        <div className="absolute left-8 top-20 h-3 w-3 text-accent opacity-50">✕</div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 rounded-full bg-primary opacity-40" />
        <div className="absolute right-[15%] top-16 h-3 w-3 text-primary-dark-foreground/20">✕</div>
        <div className="absolute left-8 bottom-[40%] text-accent opacity-50">+</div>
        <div className="absolute left-[45%] bottom-[30%] text-primary-dark-foreground/20">☆</div>
        <div className="absolute right-[45%] top-[30%] text-primary-dark-foreground/10">☆</div>

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
                <Link
                  to="/courses"
                  className="rounded-xl bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-105"
                >
                  Join For Free
                </Link>
                <Link
                  to="/courses"
                  className="rounded-xl border-2 border-accent px-8 py-4 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  Find Courses
                </Link>
              </div>
            </motion.div>

            <div className="relative hidden lg:block">
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={heroPerson1}
                  alt="Students learning"
                  className="rounded-2xl shadow-2xl w-80 ml-auto"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 right-60 z-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <img
                  src={heroPerson2}
                  alt="Student"
                  className="h-48 w-36 rounded-2xl object-cover shadow-xl"
                />
              </motion.div>

              {/* Floating cards */}
              <motion.div
                className="absolute left-0 bottom-20 z-30 animate-float"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
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

              <motion.div
                className="absolute right-0 bottom-0 z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="rounded-xl bg-card px-4 py-3 shadow-card-hover">
                  <p className="text-sm font-semibold text-accent">Congrats</p>
                  <p className="text-xs text-muted-foreground">Your Admission Completed</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute right-12 top-0 z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-2 rounded-xl bg-card px-3 py-2 shadow-card-hover">
                  <img src={instructor2} alt="Instructor" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Ali Tufan</p>
                    <p className="text-[10px] text-muted-foreground">UX/UI Designer</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom stats */}
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

        {/* Wave bottom */}
        debugger;
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0V40Z" fill="hsl(240, 20%, 98%)" />
          </svg>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="mb-6 text-center text-sm text-muted-foreground">Trusted by companies of all sizes</p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["amazon", "AMD", "cisco", "dropcom", "logitech", "Spotify"].map((brand) => (
              <span key={brand} className="text-xl font-bold text-foreground">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-2 text-2xl font-bold text-foreground">Top Categories</h2>
            <p className="text-sm text-muted-foreground">Explore our popular categories</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                className={`flex flex-col items-center rounded-2xl p-6 text-center transition-all hover:shadow-card-hover hover:-translate-y-1 cursor-pointer ${cat.active ? "bg-primary text-primary-foreground shadow-glow-primary" : "bg-card shadow-card"
                  }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
              >
                <span className="mb-3 text-3xl">{cat.icon}</span>
                <h3 className={`text-sm font-semibold ${cat.active ? "" : "text-foreground"}`}>{cat.label}</h3>
                <p className={`text-xs ${cat.active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-2 text-2xl font-bold text-foreground">Our Most Popular Courses</h2>
            <p className="text-sm text-muted-foreground">Explore our latest and most popular courses</p>
          </motion.div>
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            {["All Courses", "Design", "Development", "Marketing", "Photography"].map((tab, i) => (
              <button
                key={tab}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.05 } } }}
              >
                <Link to="/course/1">
                  <CourseCard {...course} />
                </Link>
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
                className="rounded-2xl bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05 }}
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

        {/* Stats */}
        <section className="py-16 mt-10">
          <div className="container mx-auto px-4 lg:px-8 ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
                >
                  <p className="mb-1 text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-sm text-white">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Learn new skills */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Learn <span className="text-gradient-primary">new skills</span> when and where you like.
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Grow your career with our online courses designed by industry experts.
              </p>
              <ul className="mb-6 space-y-3">
                {["Expert-led video courses", "Hands-on project experience", "Certification programs", "Lifetime access to content"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary">
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={learnAnywhere} alt="Learn anywhere" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why learn */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-2 text-2xl font-bold text-gradient-primary">Why learn with our courses?</h2>
            <p className="text-sm text-muted-foreground">Learn from the best in the industry</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎓", num: "01", title: "Learn", desc: "Build skills with courses, certificates, and programs from world-class universities." },
              { icon: "🚀", num: "02", title: "Graduate", desc: "Achieve your goals with industry-recognized credentials and real-world expertise." },
              { icon: "💼", num: "03", title: "Work", desc: "Get hired with career-focused programs and job-ready skills for the modern workplace." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl bg-card p-8 text-center shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
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

      {/* Instructors */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="mb-1 text-2xl font-bold text-foreground">Learn from the best instructors</h2>
              <p className="text-sm text-muted-foreground">Top-rated instructors from around the world</p>
            </div>
            <Link to="/about" className="hidden md:flex items-center gap-1 rounded-lg border border-primary px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground">
              View All Instructors <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((inst, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              >
                <InstructorCard {...inst} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn From Anywhere */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl bg-primary-dark p-4 shadow-2xl max-w-sm mx-auto">
                <img src={course2} alt="App" className="rounded-xl" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="mb-4 text-3xl font-bold text-primary-dark-foreground">
                Learn From <span className="text-accent">Anywhere</span>
              </h2>
              <p className="mb-6 text-sm text-primary-dark-foreground/60">
                Take courses on the go. Access your courses from any device, anywhere in the world.
              </p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-card transition-all hover:shadow-card-hover">
                  <Smartphone className="h-4 w-4" /> App Store
                </button>
                <button className="flex items-center gap-2 rounded-xl bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-card transition-all hover:shadow-card-hover">
                  <Monitor className="h-4 w-4" /> Play Store
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-1 text-2xl font-bold text-foreground">Resources & News</h2>
            <p className="text-sm text-muted-foreground">Latest articles and updates</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              >
                <div className="overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-1 text-sm text-primary-foreground/80">Join more than 8 million</p>
            <h2 className="mb-6 text-2xl font-bold text-primary-foreground">
              learners <span className="text-accent">worldwide</span>
            </h2>
            <Link
              to="/courses"
              className="inline-block rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:scale-105"
            >
              Start Learning For Free
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
