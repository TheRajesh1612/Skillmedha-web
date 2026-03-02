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
  CATEGORIES,
  LEVELS,
  allCourses,
} from "@/data/courses";

import CourseCard from "@/components/CourseCard";

/* ──────────────────── main page ──────────────────── */
export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

  /* derived filtered list */
  const filtered = useMemo(() => {
    return allCourses
      .filter((c) => {
        const matchCat = category === "All" || c.category === category;
        const matchLevel = level === "All" || c.level === level;
        const cIsFree = c.price === 0 || c.isFree;
        const matchPrice = priceFilter === "All" || (priceFilter === "Free" ? cIsFree : !cIsFree);
        const matchQ = c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.category.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchLevel && matchPrice && matchQ;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return b.reviews - a.reviews; // popular
      });
  }, [search, category, level, priceFilter, sortBy]);

  const hasActiveFilters = category !== "All" || level !== "All" || priceFilter !== "All" || search !== "";

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setLevel("All");
    setPriceFilter("All");
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

            {/* Price */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-1">Price</span>
              {["All", "Free", "Paid"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPriceFilter(p)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${priceFilter === p
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                >
                  {p}
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
                <motion.div
                  key={`${course.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <CourseCard {...course} />
                </motion.div>
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
