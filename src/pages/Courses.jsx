import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Star,
  Clock,
  ChevronDown,
  X,
  Check,
  Heart
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  CATEGORIES,
  LEVELS,
  allCourses,
  CATEGORY_COLORS,
  LEVEL_BADGE,
} from "@/data/courses";

/* ──────────────────── mini card ──────────────────── */
function CourseCard2({ course, index }) {
  const cardContent = (
    <div className="h-full overflow-hidden rounded-2xl bg-card border border-border/40 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 flex flex-col">
      {/* thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* body */}
      <div className="flex flex-col flex-1 p-5">
        <p className={`mb-1 text-xs font-bold tracking-widest uppercase ${CATEGORY_COLORS[course.category] ?? "text-primary"}`}>
          {course.category}
        </p>
        <h3 className="mb-3 text-sm font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* level + duration */}
        <div className="mb-4 flex items-center gap-3">
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${LEVEL_BADGE[course.level]}`}>
            {course.level}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {course.weeks} weeks
          </span>
        </div>

        {/* spacer */}
        <div className="mt-auto" />

        {/* rating + enroll */}
        <div className="flex items-center justify-between border-t border-border/40 pt-3">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-foreground">{course.rating}</span>
            <span className="text-xs text-muted-foreground">({course.reviews.toLocaleString()})</span>
          </div>
          <span className="text-sm font-semibold text-primary group-hover:underline">
            Enroll →
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Link to={`/course/${course.id}`} state={{ course }} className="group block h-full">
            {cardContent}
          </Link>
        </HoverCardTrigger>

        <HoverCardContent side="right" align="start" sideOffset={16} className="w-80 p-5 z-50 rounded-xl shadow-xl border-border bg-card">
          <h3 className="font-bold text-lg leading-tight mb-2 text-foreground">{course.title}</h3>

          <div className="flex gap-2 mb-2 text-xs font-semibold uppercase">
            <span className="px-2 py-0.5 rounded bg-primary text-primary-foreground">Premium</span>
            {course.badge && <span className={`px-2 py-0.5 rounded ${course.badgeColor || 'bg-accent'} text-primary-foreground bg-opacity-90`}>{course.badge}</span>}
          </div>

          <p className="text-xs text-muted-foreground mb-2">
            Updated <span className="font-semibold text-foreground">{course.lastUpdated || "February 2026"}</span>
          </p>

          <p className="text-xs text-muted-foreground mb-3 font-medium">
            {course.totalDuration || course.duration} · {course.level} Levels · Subtitles
          </p>

          <p className="text-sm text-foreground mb-4 line-clamp-3 leading-relaxed">
            {course.subtitle || "Master this course by building real-world projects. Learn the essential skills to take your career to the next level."}
          </p>

          <ul className="space-y-3 mb-6">
            {(course.whatYoullLearn?.length ? course.whatYoullLearn.slice(0, 3) : [
              "Master the programming language by building unique projects.",
              "Learn automation, game, app and web development, data science.",
              "You will be able to program professionally."
            ]).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                <Check className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <button className="flex-1 bg-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
              Add to cart
            </button>
            <button className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:bg-muted transition-colors shrink-0">
              <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
            </button>
          </div>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
}

/* ──────────────────── main page ──────────────────── */
export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

  /* derived filtered list */
  const filtered = useMemo(() => {
    return allCourses
      .filter((c) => {
        const matchCat = category === "All" || c.category === category;
        const matchLevel = level === "All" || c.level === level;
        const matchQ = c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.category.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchLevel && matchQ;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return b.reviews - a.reviews; // popular
      });
  }, [search, category, level, sortBy]);

  const hasActiveFilters = category !== "All" || level !== "All" || search !== "";

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setLevel("All");
  }

  return (
    <Layout>
      {/* ── hero header ── */}
      <section className="bg-gradient-hero py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark-foreground mb-1">Explore Courses</h1>
            <p className="text-sm text-primary-dark-foreground/60">Find the perfect course to advance your career</p>
          </motion.div>
        </div>
      </section>

      {/* ── filter bar ── */}
      <section className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-border/40 py-4 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">

          {/* row 1 — search + filters toggle */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* search */}
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
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

            {/* filters button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showFilters
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              )}
            </button>

            {/* clear */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground border border-border hover:border-border/70 transition-colors"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>

          {/* row 2 — category + level pill groups (always visible) */}
          <div className="flex flex-wrap items-start gap-6">
            {/* Category */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-1">Category</span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${category === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-1">Level</span>
              {LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${level === lvl
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* row 3 — advanced sort (collapsible) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Sort by</span>
                  {[
                    { value: "popular", label: "Most Popular" },
                    { value: "rating", label: "Top Rated" },
                    { value: "price-asc", label: "Price: Low → High" },
                    { value: "price-desc", label: "Price: High → Low" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSortBy(opt.value)}
                      className={`rounded-full px-3 py-1 text-xs font-medium border transition-all duration-200 ${sortBy === opt.value
                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30"
                        : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── course grid ── */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* result count */}
          <p className="mb-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{filtered.length}</span> course{filtered.length !== 1 ? "s" : ""} found
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((course, i) => (
                <CourseCard2 key={`${course.title}-${i}`} course={course} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
              <p className="text-lg font-semibold text-foreground mb-1">No courses found</p>
              <p className="text-sm text-muted-foreground mb-4">Try adjusting your filters or search term</p>
              <button
                onClick={clearFilters}
                className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* pagination (static) */}
          {filtered.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors">‹</button>
              {[1, 2, 3, "…", 12].map((p, i) => (
                <button
                  key={i}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${p === 1 ? "border-2 border-primary text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {p}
                </button>
              ))}
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors">›</button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
