import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/CourseCard";

import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import course7 from "@/assets/course-7.jpg";
import course8 from "@/assets/course-8.jpg";
import course9 from "@/assets/course-9.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const filterCategories = [
  { label: "Art", count: 118 },
  { label: "Exercise", count: 112, checked: true },
  { label: "Software Development", count: 213, checked: true },
  { label: "Music", count: 67 },
  { label: "Material Design", count: 74 },
  { label: "Photography", count: 112 },
];

const filterRatings = [
  { stars: 4.5, count: 1991 },
  { stars: 4.0, count: 2003 },
  { stars: 3.5, count: 3003 },
  { stars: 3.0, count: 5001 },
];

const filterInstructors = [
  { label: "Jane Cooper", count: 118, checked: false },
  { label: "Jenny Wilson", count: 112, checked: true },
  { label: "Robert Fox", count: 213 },
  { label: "Jacob Jones", count: 67, checked: true },
  { label: "Albert Flores", count: 74 },
];

const filterPrices = ["All", "Free", "Paid"];
const filterLevels = ["All Levels", "Beginner", "Intermediate", "Expert"];
const filterLanguages = ["English", "French", "German", "Italian", "Turkish"];
const filterDurations = ["Less than 3 hours", "5 - 7 hours", "8 -18 hours", "20 + Hours"];

const allCourses = [
  { image: course1, title: "Complete Python Bootcamp From Zero To Hero In Python", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "POPULAR", badgeColor: "bg-primary" },
  { image: course2, title: "Angular - The Complete Guide (2024 Edition)", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 50m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "NEW", badgeColor: "bg-accent" },
  { image: course3, title: "The Ultimate Drawing Course Beginner To Advanced", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "POPULAR", badgeColor: "bg-primary" },
  { image: course4, title: "Instagram Marketing 2024: Complete Guide To Instagram Growth", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course5, title: "Complete Blender Creator: Learn 3D Modelling For Beginners", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 55m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "BEST SELLER", badgeColor: "bg-primary" },
  { image: course6, title: "The Complete Financial Analyst Training & Investing Course", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course7, title: "Learn Figma - UI/UX Design Essential Training", rating: 4.5, reviews: 1991, lessons: 6, duration: "2h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "NEW", badgeColor: "bg-accent" },
  { image: course8, title: "Photography Masterclass: A Complete Guide To Photography", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 50m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "BEST SELLER", badgeColor: "bg-primary" },
  { image: course9, title: "Photography Masterclass: A Complete Guide To Photography", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 50m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "NEW", badgeColor: "bg-accent" },
  { image: course1, title: "Complete Python Bootcamp From Zero To Hero In Python", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course2, title: "Angular - The Complete Guide (2024 Edition)", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 50m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179, badge: "BEST SELLER", badgeColor: "bg-primary" },
  { image: course3, title: "The Ultimate Drawing Course Beginner To Advanced", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
];

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border pb-4 mb-4">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-base font-semibold text-foreground">
        {title}
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

export default function Courses() {
  const [mobileFilters, setMobileFilters] = useState(false);

  return (
    <Layout>
      {/* Breadcrumb header */}
      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-primary-dark-foreground/50 mb-4">
            <Link to="/" className="hover:text-primary-dark-foreground">Home</Link>
            <span>›</span>
            <span>All courses</span>
            <span>›</span>
            <span>User Experience Design</span>
            <span>›</span>
            <span className="text-primary-dark-foreground">User Interface</span>
          </div>
          <h1 className="text-3xl font-bold text-primary-dark-foreground">User Interface Courses</h1>
          <p className="text-sm text-primary-dark-foreground/60">Write An Introductory Description Of The Category.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Mobile filter toggle */}
          <button
            className="mb-4 lg:hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            onClick={() => setMobileFilters(!mobileFilters)}
          >
            {mobileFilters ? "Hide Filters" : "Show Filters"}
          </button>

          <div className="flex gap-8">
            {/* Sidebar filters */}
            <aside className={`w-64 shrink-0 ${mobileFilters ? "block" : "hidden"} lg:block`}>
              <FilterSection title="Category">
                {filterCategories.map((cat) => (
                  <label key={cat.label} className="flex items-center justify-between py-1.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked={cat.checked} className="h-4 w-4 rounded border-border text-primary" />
                      <span className="text-sm text-foreground">{cat.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({cat.count})</span>
                  </label>
                ))}
                <button className="mt-1 text-xs font-medium text-primary">Show more</button>
              </FilterSection>

              <FilterSection title="Ratings">
                {filterRatings.map((r) => (
                  <label key={r.stars} className="flex items-center justify-between py-1.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="rating" className="h-4 w-4 text-primary" />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(r.stars) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
                        ))}
                        <span className="text-xs text-foreground ml-1">{r.stars} & up</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">({r.count})</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Instructors">
                {filterInstructors.map((inst) => (
                  <label key={inst.label} className="flex items-center justify-between py-1.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked={inst.checked} className="h-4 w-4 rounded border-border text-primary" />
                      <span className="text-sm text-foreground">{inst.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({inst.count})</span>
                  </label>
                ))}
                <button className="mt-1 text-xs font-medium text-primary">Show more</button>
              </FilterSection>

              <FilterSection title="Price">
                {filterPrices.map((p, i) => (
                  <label key={p} className="flex items-center justify-between py-1.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="price" defaultChecked={i === 2} className="h-4 w-4 text-primary" />
                      <span className={`text-sm ${i === 2 ? "text-primary font-medium" : "text-foreground"}`}>{p}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({[118, 112, 213][i]})</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Level">
                {filterLevels.map((l, i) => (
                  <label key={l} className="flex items-center justify-between py-1.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4 rounded border-border text-primary" />
                      <span className="text-sm text-foreground">{l}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({[118, 112, 212, 67][i]})</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Language">
                {filterLanguages.map((l, i) => (
                  <label key={l} className="flex items-center justify-between py-1.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4 rounded border-border text-primary" />
                      <span className="text-sm text-foreground">{l}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({[118, 112, 213, 67, 74][i]})</span>
                  </label>
                ))}
                <button className="mt-1 text-xs font-medium text-primary">Show more</button>
              </FilterSection>

              <FilterSection title="Duration">
                {filterDurations.map((d, i) => (
                  <label key={d} className="flex items-center justify-between py-1.5 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                      <span className="text-sm text-foreground">{d}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({[118, 112, 213, 67][i]})</span>
                  </label>
                ))}
              </FilterSection>
            </aside>

            {/* Course grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">250</span> total results
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground">
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {allCourses.map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                  >
                    <Link to="/course/1">
                      <CourseCard {...course} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex items-center justify-center gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">‹</button>
                {[1, 2, 3, "...", 67].map((p, i) => (
                  <button
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors ${
                      p === 2 ? "border-2 border-primary text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
