import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star, Clock, X, School, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import course7 from "@/assets/course-7.jpg";

const CATEGORIES = ["All", "Engineering", "Computer Science", "Business", "Design", "Data Science", "Communication"];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

const campusCourses = [
    { image: course1, category: "Computer Science", level: "Beginner", title: "Introduction to Programming with Python", rating: 4.9, reviews: 6200, weeks: 8, price: 0, originalPrice: 0, isFree: true },
    { image: course2, category: "Data Science", level: "Intermediate", title: "Machine Learning for Engineering Students", rating: 4.8, reviews: 2800, weeks: 12, price: 99, originalPrice: 199, isFree: false },
    { image: course3, category: "Design", level: "Beginner", title: "Design Thinking for Campus Innovators", rating: 4.7, reviews: 1900, weeks: 6, price: 0, originalPrice: 0, isFree: true },
    { image: course4, category: "Engineering", level: "Intermediate", title: "Full-Stack Web Development Bootcamp", rating: 4.8, reviews: 3400, weeks: 14, price: 79, originalPrice: 159, isFree: false },
    { image: course5, category: "Business", level: "Beginner", title: "Entrepreneurship & Startup Fundamentals", rating: 4.6, reviews: 1650, weeks: 6, price: 0, originalPrice: 0, isFree: true },
    { image: course6, category: "Communication", level: "Beginner", title: "Professional English & Interview Preparation", rating: 4.7, reviews: 5100, weeks: 4, price: 0, originalPrice: 0, isFree: true },
    { image: course7, category: "Data Science", level: "Advanced", title: "Research Methodology & Data Analysis for Thesis", rating: 4.5, reviews: 890, weeks: 10, price: 49, originalPrice: 99, isFree: false },
];

const LEVEL_BADGE = {
    Beginner: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    Intermediate: "bg-amber-500/20   text-amber-400   border border-amber-500/30",
    Advanced: "bg-rose-500/20    text-rose-400    border border-rose-500/30",
};
const CAT_COLOR = { Engineering: "text-cyan-400", "Computer Science": "text-violet-400", Business: "text-amber-400", Design: "text-emerald-400", "Data Science": "text-sky-400", Communication: "text-rose-400" };

function CourseCard({ course, index }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.04 }}>
            <Link to="/course/1" className="group block h-full">
                <div className="h-full overflow-hidden rounded-2xl bg-card border border-border/40 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col">
                    <div className="relative overflow-hidden">
                        <img src={course.image} alt={course.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {course.isFree && <span className="absolute top-3 right-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground uppercase">FREE</span>}
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                        <p className={`mb-1 text-xs font-bold tracking-widest uppercase ${CAT_COLOR[course.category] ?? "text-primary"}`}>{course.category}</p>
                        <h3 className="mb-3 text-sm font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">{course.title}</h3>
                        <div className="mb-4 flex items-center gap-3">
                            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${LEVEL_BADGE[course.level]}`}>{course.level}</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" />{course.weeks} weeks</span>
                        </div>
                        <div className="mt-auto flex items-center justify-between border-t border-border/40 pt-3">
                            <div className="flex items-center gap-1">
                                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                <span className="text-sm font-semibold text-foreground">{course.rating}</span>
                                <span className="text-xs text-muted-foreground">({course.reviews.toLocaleString()})</span>
                            </div>
                            <span className="text-sm font-bold text-primary">{course.isFree ? "FREE" : `₹${(course.price * 83).toLocaleString()}`} →</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function ForCampus() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [level, setLevel] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");

    const filtered = useMemo(() => campusCourses.filter((c) => {
        const matchCat = category === "All" || c.category === category;
        const matchLevel = level === "All" || c.level === level;
        const matchPrice = priceFilter === "All" || (priceFilter === "Free" ? c.isFree : !c.isFree);
        const matchQ = c.title.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchLevel && matchPrice && matchQ;
    }), [search, category, level, priceFilter]);

    const hasActive = category !== "All" || level !== "All" || search !== "" || priceFilter !== "All";
    const clear = () => { setSearch(""); setCategory("All"); setLevel("All"); setPriceFilter("All"); };

    return (
        <Layout>
            <section className="bg-gradient-hero py-14">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/20"><School className="h-4 w-4 text-amber-400" /></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Campus Programme</span>
                        </div>
                        <h1 className="text-4xl font-bold text-primary-dark-foreground mb-2">For Campus</h1>
                        <p className="text-sm text-primary-dark-foreground/60 max-w-lg">Purpose-built programmes for students, graduates, and faculty. Bridge the gap between campus learning and industry expectations.</p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            {["Internship Tie-ups", "Placement Support", "Faculty Development", "Certification Programmes"].map((b) => (
                                <div key={b} className="flex items-center gap-1.5 text-xs text-primary-dark-foreground/70">
                                    <CheckCircle className="h-3.5 w-3.5 text-accent" /> {b}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="sticky top-16 z-20 bg-background/95 backdrop-blur border-b border-border/40 py-4 shadow-sm">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input type="text" placeholder="Search campus courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg border border-border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                            {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>}
                        </div>
                        <button className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${hasActive ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-foreground hover:border-primary/50"}`}>
                            <SlidersHorizontal className="h-4 w-4" /> Filters {hasActive && <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
                        </button>
                        {hasActive && <button onClick={clear} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground border border-border transition-colors"><X className="h-3 w-3" /> Clear</button>}
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category</span>
                            {CATEGORIES.map((cat) => <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${category === cat ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>{cat}</button>)}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Level</span>
                            {LEVELS.map((lvl) => <button key={lvl} onClick={() => setLevel(lvl)} className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${level === lvl ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>{lvl}</button>)}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Price</span>
                            {["All", "Free", "Paid"].map((p) => <button key={p} onClick={() => setPriceFilter(p)} className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${priceFilter === p ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>{p}</button>)}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <p className="mb-6 text-sm text-muted-foreground"><span className="font-semibold text-foreground">{filtered.length}</span> course{filtered.length !== 1 ? "s" : ""} found</p>
                    {filtered.length > 0
                        ? <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">{filtered.map((c, i) => <CourseCard key={i} course={c} index={i} />)}</div>
                        : <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-20 text-center">
                            <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
                            <p className="text-lg font-semibold text-foreground mb-1">No courses found</p>
                            <button onClick={clear} className="mt-3 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Clear Filters</button>
                        </motion.div>}
                </div>
            </section>
        </Layout>
    );
}
