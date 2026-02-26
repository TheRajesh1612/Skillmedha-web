import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, Clock, X, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";

import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course5 from "@/assets/course-5.jpg";
import course7 from "@/assets/course-7.jpg";
import course8 from "@/assets/course-8.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const CATEGORIES = ["All", "Development", "Design", "Marketing", "Data Science", "Business"];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

const freeCourses = [
    { image: course1, category: "Development", level: "Beginner", title: "Complete Python Bootcamp From Zero To Hero", rating: 4.9, reviews: 5120, weeks: 8, instructor: "Ali Tufan" },
    { image: course2, category: "Design", level: "Beginner", title: "UI/UX Fundamentals: Your First Design System", rating: 4.8, reviews: 3200, weeks: 6, instructor: "Jane Cooper" },
    { image: course3, category: "Marketing", level: "Beginner", title: "Digital Marketing Essentials — Free Edition", rating: 4.7, reviews: 2800, weeks: 4, instructor: "Sara Khan" },
    { image: course5, category: "Development", level: "Intermediate", title: "Git & GitHub Mastery for Developers", rating: 4.8, reviews: 4100, weeks: 3, instructor: "Ali Tufan" },
    { image: course7, category: "Data Science", level: "Beginner", title: "Introduction to Data Analysis with Excel", rating: 4.6, reviews: 2100, weeks: 5, instructor: "Robert Fox" },
    { image: course8, category: "Business", level: "Beginner", title: "Professional Communication & Soft Skills", rating: 4.7, reviews: 1980, weeks: 4, instructor: "Jenny Wilson" },
];

const LEVEL_BADGE = {
    Beginner: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    Intermediate: "bg-amber-500/20   text-amber-400   border border-amber-500/30",
    Advanced: "bg-rose-500/20    text-rose-400    border border-rose-500/30",
};
const CAT_COLOR = {
    Development: "text-cyan-400", Design: "text-violet-400", Marketing: "text-amber-400",
    "Data Science": "text-emerald-400", Business: "text-sky-400",
};

function CourseCard({ course, index }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.04 }}>
            <Link to="/course/1" className="group block h-full">
                <div className="h-full overflow-hidden rounded-2xl bg-card border border-border/40 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col">
                    <div className="relative overflow-hidden">
                        <img src={course.image} alt={course.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground uppercase tracking-wider">FREE</span>
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
                            <span className="text-sm font-bold text-accent">FREE →</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function FreeTrainings() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [level, setLevel] = useState("All");
    const [showFilters, setShowFilters] = useState(false);

    const filtered = useMemo(() => freeCourses.filter((c) => {
        const matchCat = category === "All" || c.category === category;
        const matchLevel = level === "All" || c.level === level;
        const matchQ = c.title.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchLevel && matchQ;
    }), [search, category, level]);

    const hasActive = category !== "All" || level !== "All" || search !== "";
    const clear = () => { setSearch(""); setCategory("All"); setLevel("All"); };

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-hero py-14">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20"><Zap className="h-4 w-4 text-accent" /></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-accent">Free Access</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark-foreground mb-2">Free Trainings</h1>
                        <p className="text-sm text-primary-dark-foreground/60 max-w-lg">Kickstart your learning journey with 3,000+ completely free courses. No credit card. No commitment.</p>
                    </motion.div>
                </div>
            </section>

            {/* Filter bar */}
            <section className="sticky top-16 z-20 bg-background/95 backdrop-blur border-b border-border/40 py-4 shadow-sm">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="relative flex-1 min-w-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input type="text" placeholder="Search free courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg border border-border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                            {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>}
                        </div>
                        <button onClick={() => setShowFilters(!showFilters)} className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showFilters ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-foreground hover:border-primary/50"}`}>
                            <SlidersHorizontal className="h-4 w-4" /> Filters {hasActive && <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
                        </button>
                        {hasActive && <button onClick={clear} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground border border-border transition-colors"><X className="h-3 w-3" /> Clear</button>}
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category</span>
                            {CATEGORIES.map((cat) => (
                                <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${category === cat ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>{cat}</button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Level</span>
                            {LEVELS.map((lvl) => (
                                <button key={lvl} onClick={() => setLevel(lvl)} className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${level === lvl ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>{lvl}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <p className="mb-6 text-sm text-muted-foreground"><span className="font-semibold text-foreground">{filtered.length}</span> free course{filtered.length !== 1 ? "s" : ""} found</p>
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
