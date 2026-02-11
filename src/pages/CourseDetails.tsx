import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, BookOpen, Clock, Globe, Award, ChevronDown, ChevronUp, Play, ThumbsUp, ThumbsDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/CourseCard";

import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const tabs = ["Overview", "Course Content", "Instructor", "Reviews"];

const whatYoullLearn = [
  "Become a UX designer",
  "Practice with real projects",
  "Build a UX portfolio",
  "Work with design systems",
  "Create mobile app designs",
  "Master wireframing techniques",
  "Conduct user research",
  "Design accessible interfaces",
  "Use industry-standard tools",
  "Create interactive prototypes",
];

const requirements = [
  "No software required in advance of the course (all software used is free or trial)",
  "No design experience is needed",
  "Experience in Adobe XD is recommended",
];

const courseSections = [
  { title: "Course Onboarding", lessons: 3, duration: "47 min", items: [
    { title: "Introduction to the course", type: "video", duration: "06:23" },
    { title: "Getting your software", type: "video", duration: "14:32" },
    { title: "Quick start: UI & UX Design for Beginners", type: "video", duration: "09:18" },
    { title: "Your design workspace", type: "video", duration: "04:11" },
    { title: "How to export images", type: "quiz", duration: "" },
  ]},
  { title: "The Basics", lessons: 6, duration: "1h 20min" },
  { title: "Type, Color & Icon Breakdown", lessons: 5, duration: "1h 15min" },
  { title: "Designing a Mobile App Interface", lessons: 8, duration: "2h 10min" },
  { title: "Wireframe Feedback", lessons: 4, duration: "55min" },
];

const relatedCourses = [
  { image: course1, title: "Complete UI/UX Design Bootcamp For Testing", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course2, title: "Complete Python Bootcamp: From Zero To Hero In Python", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 50m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course3, title: "Angular - The Complete Guide (2024 Edition)", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
  { image: course4, title: "The Ultimate Drawing Course Beginner To Advanced", rating: 4.5, reviews: 1991, lessons: 6, duration: "3h 56m", level: "Beginner", instructor: "Ali Tufan", instructorAvatar: instructor2, price: 79, originalPrice: 179 },
];

export default function CourseDetails() {
  const [searchParams] = useSearchParams();
  const isV2 = searchParams.get("v") === "2";
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  return (
    <Layout>
      {/* Header */}
      <section className={isV2 ? "bg-gradient-hero relative py-12 overflow-hidden" : "bg-muted py-12"}>
        {isV2 && (
          <>
            <div className="absolute right-[10%] top-8 h-20 w-20 rounded-full bg-primary/20" />
            <div className="absolute left-[5%] bottom-12 h-12 w-12 rounded-lg bg-accent/10 rotate-45" />
          </>
        )}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: isV2 ? "rgba(255,255,255,0.5)" : undefined }}>
            <Link to="/" className="hover:opacity-100">Home</Link>
            <span>›</span>
            <Link to="/courses" className="hover:opacity-100">All courses</Link>
            <span>›</span>
            <span className={isV2 ? "text-primary-dark-foreground" : "text-foreground"}>User Experience Design</span>
          </div>
          <div className="flex gap-2 mb-3">
            <span className="rounded-md bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground">BEST SELLER</span>
            <span className="rounded-md bg-accent px-3 py-1 text-xs font-semibold uppercase text-accent-foreground">NEW</span>
            <span className="rounded-md bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground">POPULAR</span>
          </div>
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${isV2 ? "text-primary-dark-foreground" : "text-foreground"}`}>
            User Experience Design Essentials - Adobe XD UI UX Design
          </h1>
          <p className={`text-sm mb-4 ${isV2 ? "text-primary-dark-foreground/60" : "text-muted-foreground"}`}>
            UX & UI in real-world design projects, comprehensive UX Process Design, Freelancing tips.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <span className={`text-sm font-semibold ${isV2 ? "text-primary-dark-foreground" : "text-foreground"}`}>4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className={`text-xs ${isV2 ? "text-primary-dark-foreground/50" : "text-muted-foreground"}`}>(1991)</span>
            </div>
            <span className={`text-xs ${isV2 ? "text-primary-dark-foreground/50" : "text-muted-foreground"}`}>22,511 students</span>
            <span className={`text-xs ${isV2 ? "text-primary-dark-foreground/50" : "text-muted-foreground"}`}>Last updated 01/2025</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img src={instructor2} alt="Instructor" className="h-7 w-7 rounded-full object-cover" />
            <span className={`text-sm ${isV2 ? "text-primary-dark-foreground/70" : "text-muted-foreground"}`}>Ali Tufan</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              {/* Tabs */}
              <div className="mb-8 flex gap-6 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "Overview" && (
                <div>
                  <h2 className="mb-3 text-xl font-bold text-foreground">Description</h2>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    This course provides the essential knowledge and skills you need to design user experiences for products and services. You'll explore the UX design process, understand user research methodologies, and learn to create wireframes and prototypes. By the end of this course, you'll have a strong portfolio of UX design work.
                  </p>
                  <button className="mb-8 text-sm font-medium text-primary">Show more</button>

                  <h2 className="mb-4 text-xl font-bold text-foreground">What you'll learn</h2>
                  <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {whatYoullLearn.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-accent">✓</span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-foreground">Requirements</h2>
                  <ul className="mb-8 space-y-2">
                    {requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1">•</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "Course Content" && (
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {courseSections.length} sections • 26 lectures • 7h 45m total
                    </p>
                    <button className="text-sm font-medium text-primary">Expand All Sections</button>
                  </div>
                  <div className="space-y-2">
                    {courseSections.map((section, i) => (
                      <div key={i} className="rounded-xl border border-border overflow-hidden">
                        <button
                          onClick={() => setExpandedSection(expandedSection === i ? null : i)}
                          className="flex w-full items-center justify-between bg-muted px-5 py-4"
                        >
                          <div className="flex items-center gap-2">
                            {expandedSection === i ? <ChevronUp className="h-4 w-4 text-foreground" /> : <ChevronDown className="h-4 w-4 text-foreground" />}
                            <span className="text-sm font-semibold text-foreground">{section.title}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{section.lessons} lectures • {section.duration}</span>
                        </button>
                        {expandedSection === i && section.items && (
                          <div className="divide-y divide-border">
                            {section.items.map((item, j) => (
                              <div key={j} className="flex items-center justify-between px-5 py-3">
                                <div className="flex items-center gap-3">
                                  <Play className="h-3.5 w-3.5 text-muted-foreground" />
                                  <span className="text-sm text-foreground">{item.title}</span>
                                </div>
                                {item.duration && <span className="text-xs text-muted-foreground">{item.duration}</span>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Instructor" && (
                <div>
                  <h2 className="mb-4 text-xl font-bold text-foreground">Instructor</h2>
                  <div className="flex items-start gap-4 mb-6">
                    <img src={instructor2} alt="Ali Tufan" className="h-20 w-20 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Ali Tufan</h3>
                      <p className="text-sm text-muted-foreground">UX/UI Designer & Developer</p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <span>⭐ 4.9 Instructor Rating</span>
                        <span>👥 22,511 Students</span>
                        <span>📚 15 Courses</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ali Tufan is a seasoned UX/UI designer with over 10 years of experience building digital products. He specializes in creating user-centered designs and has worked with major brands across various industries.
                  </p>
                </div>
              )}

              {activeTab === "Reviews" && (
                <div>
                  <h2 className="mb-4 text-xl font-bold text-foreground">Student Feedback</h2>
                  <div className="mb-8 flex items-start gap-8">
                    <div className="text-center">
                      <p className="text-5xl font-bold text-foreground">4.8</p>
                      <div className="flex justify-center my-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">Course Rating</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[{ pct: 80, stars: 5, label: "41k" }, { pct: 60, stars: 4, label: "16k" }, { pct: 30, stars: 3, label: "9k" }, { pct: 15, stars: 2, label: "3k" }, { pct: 5, stars: 1, label: "1k" }].map((bar) => (
                        <div key={bar.stars} className="flex items-center gap-3">
                          <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{ width: `${bar.pct}%` }} />
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < bar.stars ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground w-8">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="mb-4 text-lg font-bold text-foreground">Reviews</h3>
                  {[1, 2].map((review) => (
                    <div key={review} className="mb-6 border-b border-border pb-6">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">AT</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-foreground">Ali Tufan</span>
                            <span className="text-xs text-muted-foreground">3 Weeks ago</span>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                            Excellent course with in-depth practical knowledge. The instructor explains complex concepts clearly and the hands-on exercises are extremely valuable.
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>Helpful?</span>
                            <button className="flex items-center gap-1 hover:text-primary"><ThumbsUp className="h-3 w-3" /> Yes</button>
                            <button className="flex items-center gap-1 hover:text-primary"><ThumbsDown className="h-3 w-3" /> No</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button className="mb-8 text-sm font-medium text-primary">View All Reviews</button>

                  <h3 className="mb-4 text-lg font-bold text-foreground">Write a Review</h3>
                  <div className="max-w-md">
                    <label className="mb-1 block text-sm font-medium text-foreground">What is it like to Course?</label>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-muted-foreground/30 cursor-pointer hover:text-amber-400" />
                      ))}
                    </div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Review Title</label>
                    <input className="mb-3 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground" />
                    <label className="mb-1 block text-sm font-medium text-foreground">Review Content</label>
                    <textarea className="mb-4 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground h-28 resize-none" />
                    <button className="rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary">
                      Submit Review
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="sticky top-20 rounded-2xl bg-card p-6 shadow-card">
                <img src={course5} alt="Course" className="mb-4 w-full rounded-xl" />
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">$96.00</span>
                  <span className="text-lg text-muted-foreground line-through">$179</span>
                </div>
                <button className="mb-3 w-full rounded-xl bg-gradient-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary">
                  Add To Cart
                </button>
                <button className="mb-5 w-full rounded-xl border-2 border-primary py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Buy Now
                </button>
                <p className="mb-4 text-center text-xs text-muted-foreground">30-Day Money-Back Guarantee</p>
                <div className="space-y-3">
                  {[
                    { icon: BookOpen, label: "Lessons", value: "26" },
                    { icon: Clock, label: "Duration", value: "7h 45m" },
                    { icon: Globe, label: "Language", value: "English" },
                    { icon: Award, label: "Certificate", value: "Yes" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon className="h-4 w-4" />
                        {label}
                      </div>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related courses */}
      <section className="border-t border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCourses.map((course, i) => (
              <Link key={i} to="/course/1">
                <CourseCard {...course} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
