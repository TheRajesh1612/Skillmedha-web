import { Link, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  Clock,
  FileText,
  Download,
  Tv,
  Subtitles,
  Award,
  ShoppingCart,
  Zap,
  Check,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/CourseCard";
import { allCourses, generateCourseData } from "@/data/courses";

/* ─────────────────────── Stars component ─────────────────────── */
function Stars({ rating, size = "sm" }) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${starSize} ${i <= Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : i - 0.5 <= rating
              ? "fill-amber-400/50 text-amber-400"
              : "text-muted-foreground/30"
            }`}
        />
      ))}
    </div>
  );
}

/* ─────────────────────── Main page ─────────────────────── */
export default function CourseDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [showAllSections, setShowAllSections] = useState(false);

  let course;
  if (location.state?.course) {
    course = generateCourseData(location.state.course);
  } else {
    course = allCourses.find((c) => c.id === parseInt(id)) || allCourses[0];
  }

  const relatedCourses = allCourses.filter((c) => c.id !== course.id).slice(0, 4);
  const visibleSections = showAllSections ? course.sections : course.sections.slice(0, 7);

  /* ── Sticky Sidebar Card ── */
  const SidebarCard = () => (
    <div className="rounded-xl bg-card border border-border shadow-card overflow-hidden">
      {/* Preview image / video thumbnail */}
      <div className="relative group cursor-pointer">
        <img
          src={course.previewImage}
          alt="Course preview"
          className="w-full h-44 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
          <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <Play className="h-6 w-6 text-gray-900 ml-1" fill="currentColor" />
          </div>
        </div>
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs font-medium whitespace-nowrap">
          Preview this course
        </p>
      </div>

      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-2xl font-bold text-foreground">{course.isFree ? "FREE" : `₹${course.price !== undefined ? (course.price * 83).toLocaleString() : 0}`}</span>
          {course.originalPrice > 0 && (
            <span className="text-base text-muted-foreground line-through">₹{(course.originalPrice * 83).toLocaleString()}</span>
          )}
          {course.discount > 0 && <span className="text-sm font-semibold text-foreground">{course.discount}% off</span>}
        </div>
        <p className="flex items-center gap-1.5 text-xs text-orange-500 font-medium mb-4">
          <Zap className="h-3.5 w-3.5 fill-orange-500" />
          {course.hoursLeft} hours left at this price!
        </p>

        {/* CTA Buttons */}
        <button className="w-full rounded-lg bg-gradient-primary py-3 text-sm font-semibold text-white mb-3 hover:opacity-90 transition-opacity hover:shadow-glow-primary flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
        <button className="w-full rounded-lg border-2 border-primary py-3 text-sm font-semibold text-primary mb-4 hover:bg-primary hover:text-primary-foreground transition-colors">
          Buy now
        </button>

        <p className="text-center text-xs text-muted-foreground mb-4">30-Day Money-Back Guarantee</p>
        <p className="text-center text-xs text-muted-foreground mb-5">Full Lifetime Access</p>

        {/* Share / Gift / Coupon row */}
        <div className="flex items-center justify-between text-xs font-medium border-t border-border pt-4">
          <button className="text-primary hover:underline">Share</button>
          <button className="text-primary hover:underline">Gift this course</button>
          <button className="text-primary hover:underline">Apply Coupon</button>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* ══════════════════ Dark Header ══════════════════ */}
      <section className="bg-gradient-hero py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-4">
              {course.breadcrumb.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span>›</span>}
                  <button className="hover:text-white/80 transition-colors">
                    {crumb}
                  </button>
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              {course.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              {course.subtitle}
            </p>

            {/* Badge + Rating row */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="rounded px-2.5 py-0.5 text-xs font-bold bg-amber-400 text-gray-900">
                {course.badge}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-amber-400">{course.rating}</span>
                <Stars rating={course.rating} />
                <span className="text-xs text-white/50">({course.reviewCount} ratings)</span>
              </div>
              <span className="text-xs text-white/60">
                {course.totalStudents.toLocaleString()} students
              </span>
            </div>

            {/* Instructor */}
            <p className="text-xs text-white/60 mb-3">
              Created by{" "}
              <span className="text-primary underline cursor-pointer hover:text-primary/80">
                {course.instructor}
              </span>
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span>📅 Last updated {course.lastUpdated}</span>
              <span>🌐 {course.language}</span>
              <span>📝 {course.language} [Auto]</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ Main Content + Sidebar ══════════════════ */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Left Main Content ── */}
            <div className="flex-1 min-w-0">

              {/* What you'll learn */}
              <div className="border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-foreground mb-4">What you'll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {course.whatYoullLearn.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore related topics */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Explore related topics</h2>
                <div className="flex flex-wrap gap-2">
                  {course.relatedTopics.map((topic, i) => (
                    <button
                      key={i}
                      className="rounded border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* This course includes */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-4">This course includes:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                  {course.courseIncludes.map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Icon className="h-4 w-4 text-foreground shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Course content */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-2">Course content</h2>
                <p className="text-sm text-muted-foreground mb-1">
                  {course.totalSections} sections • {course.totalLectures} lectures •{" "}
                  {course.totalDuration} total length
                </p>
                <div className="flex items-center justify-end mb-4">
                  <button
                    onClick={() => setExpandedSection(expandedSection === -1 ? 0 : -1)}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {expandedSection === -1 ? "Collapse all sections" : "Expand all sections"}
                  </button>
                </div>

                <div className="border border-border rounded-lg overflow-hidden divide-y divide-border">
                  {visibleSections.map((section, i) => (
                    <div key={i}>
                      {/* Section header */}
                      <button
                        onClick={() => setExpandedSection(expandedSection === i ? -1 : i)}
                        className="w-full flex items-center justify-between px-5 py-3.5 bg-muted hover:bg-muted/80 transition-colors text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          {expandedSection === i ? (
                            <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                          )}
                          <span className="text-sm font-semibold text-foreground">
                            {section.title}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                          {section.lectures} lecture{section.lectures !== 1 ? "s" : ""} • {section.duration}
                        </span>
                      </button>

                      {/* Section items */}
                      {expandedSection === i && section.items.length > 0 && (
                        <div className="divide-y divide-border/50">
                          {section.items.map((item, j) => (
                            <div
                              key={j}
                              className="flex items-center justify-between px-5 py-3 bg-card"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/40 flex items-center justify-center shrink-0">
                                  <Play className="h-2.5 w-2.5 text-muted-foreground" fill="currentColor" />
                                </div>
                                <span className="text-sm text-foreground">{item.title}</span>
                                {item.preview && (
                                  <span className="text-xs text-primary border border-primary rounded px-1.5 py-0.5">
                                    Preview
                                  </span>
                                )}
                              </div>
                              {item.duration && (
                                <span className="text-xs text-muted-foreground ml-4 shrink-0">
                                  {item.duration}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Show more sections */}
                {course.sections.length > 7 && (
                  <button
                    onClick={() => setShowAllSections(!showAllSections)}
                    className="mt-3 w-full rounded-lg border border-border py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
                  >
                    {showAllSections ? (
                      <>
                        <ChevronUp className="h-4 w-4" /> Show fewer sections
                      </>
                    ) : (
                      <>
                        {course.sections.length - 7} more sections
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Requirements</h2>
                <ul className="space-y-2">
                  {course.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 shrink-0">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Description</h2>
                <div
                  className={`text-sm text-muted-foreground leading-relaxed space-y-3 ${!showMore ? "line-clamp-6" : ""
                    }`}
                >
                  {course.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-3 text-sm font-medium text-primary hover:underline flex items-center gap-1"
                >
                  {showMore ? (
                    <>Show less <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>Show more <ChevronDown className="h-4 w-4" /></>
                  )}
                </button>
              </div>
            </div>

            {/* ── Right Sidebar ── */}
            <div className="w-full lg:w-80 xl:w-88 shrink-0">
              {/* Desktop: sticky sidebar */}
              <div className="hidden lg:block">
                <SidebarCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile sidebar (bottom fixed bar) ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border px-4 py-3 flex items-center justify-between shadow-lg">
        <div>
          <span className="text-xl font-bold text-foreground">{course.isFree ? "FREE" : `₹${course.price !== undefined ? (course.price * 83).toLocaleString() : 0}`}</span>
          {course.originalPrice > 0 && (
            <span className="ml-2 text-sm text-muted-foreground line-through">₹{(course.originalPrice * 83).toLocaleString()}</span>
          )}
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
            Buy now
          </button>
          <button className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
            Add to cart
          </button>
        </div>
      </div>

      {/* ══════════════════ Related Courses ══════════════════ */}
      <section className="border-t border-border py-12 pb-24 lg:pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCourses.map((c, i) => (
              <Link key={i} to={`/course/${c.id}`}>
                <CourseCard {...c} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
