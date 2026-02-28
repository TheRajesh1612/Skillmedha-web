import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star, Clock, X, Building2, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/CourseCard";

import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import course7 from "@/assets/course-7.jpg";
import course8 from "@/assets/course-8.jpg";

const CATEGORIES = ["All", "Leadership", "Data Analytics", "Cloud & DevOps", "Cybersecurity", "Project Management", "Finance"];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

const corporateCourses = [
    { image: course1, category: "Leadership", level: "Intermediate", title: "Executive Leadership & Management Skills", rating: 4.9, reviews: 1820, weeks: 10, price: 199, originalPrice: 399, isFree: false },
    { image: course2, category: "Data Analytics", level: "Intermediate", title: "Business Intelligence & Power BI Masterclass", rating: 4.8, reviews: 2100, weeks: 8, price: 149, originalPrice: 299, isFree: false },
    { image: course4, category: "Cloud & DevOps", level: "Advanced", title: "Enterprise Cloud Architecture on AWS & Azure", rating: 4.7, reviews: 980, weeks: 16, price: 229, originalPrice: 449, isFree: false },
    { image: course5, category: "Project Management", level: "Beginner", title: "PMP Certification Prep — Complete Boot Camp", rating: 4.8, reviews: 1540, weeks: 12, price: 179, originalPrice: 349, isFree: false },
    { image: course6, category: "Cybersecurity", level: "Advanced", title: "Enterprise Security & Risk Management", rating: 4.9, reviews: 760, weeks: 14, price: 249, originalPrice: 499, isFree: false },
    { image: course7, category: "Finance", level: "Beginner", title: "Corporate Finance & Financial Modelling", rating: 4.6, reviews: 1320, weeks: 8, price: 0, originalPrice: 0, isFree: true },
    { image: course8, category: "Data Analytics", level: "Advanced", title: "Machine Learning for Business Decision-Making", rating: 4.8, reviews: 1100, weeks: 12, price: 199, originalPrice: 399, isFree: false },
];

const LEVEL_BADGE = {
    Beginner: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    Intermediate: "bg-amber-500/20   text-amber-400   border border-amber-500/30",
    Advanced: "bg-rose-500/20    text-rose-400    border border-rose-500/30",
};
const CAT_COLOR = { Leadership: "text-violet-400", "Data Analytics": "text-cyan-400", "Cloud & DevOps": "text-sky-400", Cybersecurity: "text-rose-400", "Project Management": "text-amber-400", Finance: "text-emerald-400" };



export default function ForCorporates() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [level, setLevel] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");

    const filtered = useMemo(() => corporateCourses.filter((c) => {
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
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/20"><Building2 className="h-4 w-4 text-sky-400" /></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Corporate Training</span>
                        </div>
                        <h1 className="text-4xl font-bold text-primary-dark-foreground mb-2">For Corporates</h1>
                        <p className="text-sm text-primary-dark-foreground/60 max-w-lg">Upskill your entire workforce with enterprise-grade training programmes. Bulk enrolment, analytics dashboard, and dedicated support.</p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            {["Bulk Enrolment", "Custom Learning Paths", "Progress Analytics", "Dedicated Account Manager"].map((b) => (
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
                            <input type="text" placeholder="Search corporate courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg border border-border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                            {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>}
                        </div>
                        <button onClick={() => { }} className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${hasActive ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-foreground hover:border-primary/50"}`}>
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
                        ? <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">{filtered.map((c, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.04 }}>
                                <Link to={`/course/${i + 1}`} state={{ course: c }}>
                                    <CourseCard
                                        image={c.image}
                                        title={c.title}
                                        rating={c.rating}
                                        reviews={c.reviews}
                                        lessons={c.weeks}
                                        duration={`${c.weeks} weeks`}
                                        level={c.level}
                                        category={c.category}
                                        weeks={c.weeks}
                                        isFree={c.isFree}
                                        price={c.price}
                                        originalPrice={c.originalPrice}
                                        badge={c.isFree ? "FREE" : null}
                                        badgeColor="bg-accent"
                                    />
                                </Link>
                            </motion.div>
                        ))}</div>
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
