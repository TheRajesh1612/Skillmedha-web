import { Clock, FileText, Download, Tv, Subtitles, Award } from "lucide-react";

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
import instructor3 from "@/assets/instructor-3.jpg";

export const CATEGORIES = ["All", "Development", "Data Science", "Design", "Cloud", "Marketing", "Security"];
export const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

export const CATEGORY_COLORS = {
    Development: "text-cyan-400",
    "Data Science": "text-violet-400",
    Design: "text-emerald-400",
    Cloud: "text-sky-400",
    Marketing: "text-amber-400",
    Security: "text-rose-400",
};

export const LEVEL_BADGE = {
    Beginner: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    Intermediate: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    Advanced: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
};

export function generateCourseData(courseBase) {
    const isDev = courseBase.category === "Development";
    const isData = courseBase.category === "Data Science";
    const isDesign = courseBase.category === "Design";
    const isCloud = courseBase.category === "Cloud" || courseBase.category === "Cloud & DevOps";
    const isMarketing = courseBase.category === "Marketing";

    const relatedTopics = isDev ? ["Web Development", "Programming", "Software Engineering"] :
        isData ? ["Machine Learning", "Artificial Intelligence", "Python"] :
            isDesign ? ["UI/UX", "User Research", "Prototyping"] :
                isCloud ? ["AWS", "DevOps", "Cloud Computing"] :
                    isMarketing ? ["Digital Marketing", "SEO", "Social Media"] :
                        ["Leadership", "Business", "Management", "Communication"];

    const requirements = [
        `Basic understanding of ${courseBase.category || 'General'} concepts.`,
        "A computer with reliable internet access.",
        "Willingness to learn, practice, and build projects."
    ];

    const description = `This comprehensive course on ${courseBase.title} is designed to take you from a ${courseBase.level?.toLowerCase() || 'beginner'} to an advanced level in ${courseBase.category || 'your field'}. You will learn industry-standard practices, modern tools, and powerful techniques to master the subject.\n\nOur expert instructor, ${courseBase.instructor || 'our professional faculty'}, will guide you through practical examples, hands-on real-world projects, and essential theoretical foundations to ensure you have a deep and highly applicable understanding of the topic.`;

    const whatYoullLearn = [
        `Master the core concepts of ${courseBase.category || 'this subject'}.`,
        `Build real-world projects reflecting ${courseBase.title}.`,
        `Understand advanced techniques and best practices.`,
        `Develop a portfolio-ready project to showcase your skills.`,
        `Learn directly from industry expert ${courseBase.instructor || 'professionals'}.`
    ];

    const courseIncludes = [
        { icon: Clock, label: `${(courseBase.weeks || 4) * 2} hours on-demand video` },
        { icon: FileText, label: "Assignments and quizzes" },
        { icon: Download, label: "Downloadable resources" },
        { icon: Tv, label: "Access on mobile and TV" },
        { icon: Subtitles, label: "Closed captions" },
        { icon: Award, label: "Certificate of completion" },
    ];

    const sections = [
        { title: "Introduction", lectures: 1, duration: "10min", items: [{ title: "Welcome to the course", type: "video", duration: "10:00", preview: true }] },
        { title: "Fundamentals", lectures: 5, duration: "2hr 30min", items: [] },
        { title: "Deep Dive into Core Concepts", lectures: 8, duration: "4hr 15min", items: [] },
        { title: "Advanced Topics", lectures: 6, duration: "3hr 45min", items: [] },
        { title: "Real-world Projects", lectures: 4, duration: "5hr 0min", items: [] },
    ];

    const originalPrice = courseBase.originalPrice || 0;
    const price = courseBase.price !== undefined ? courseBase.price : 0;
    const discount = originalPrice > 0 ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return {
        ...courseBase,
        subtitle: `Master ${courseBase.title} and elevate your career in ${courseBase.category || 'General'}.`,
        breadcrumb: [courseBase.category || 'General', `${courseBase.level || 'All'} Level`, "Courses"],
        reviewCount: courseBase.reviews || 0,
        totalStudents: Math.floor((courseBase.reviews || 1000) * 4.5),
        lastUpdated: "3/2026",
        language: "English",
        discount,
        hoursLeft: Math.floor(Math.random() * 24) + 1,
        whatYoullLearn,
        relatedTopics,
        courseIncludes,
        requirements,
        description,
        sections,
        totalSections: sections.length,
        totalLectures: sections.reduce((acc, s) => acc + s.lectures, 0),
        totalDuration: `${(courseBase.weeks || 4) * 2} hours`,
        previewImage: courseBase.image,
    };
}

const baseCourses = [
    {
        id: 1,
        image: course1, category: "Development", level: "Intermediate",
        title: "Full-Stack Web Development with React & Node.js",
        rating: 4.8, reviews: 2340, weeks: 12,
        instructor: "Ali Tufan", instructorAvatar: instructor2,
        price: 79, originalPrice: 179, badge: "POPULAR", badgeColor: "bg-primary",
    },
    {
        id: 2,
        image: course2, category: "Data Science", level: "Beginner",
        title: "Data Science & Machine Learning Fundamentals",
        rating: 4.9, reviews: 3120, weeks: 10,
        instructor: "Sara Khan", instructorAvatar: instructor2,
        price: 69, originalPrice: 149, badge: "NEW", badgeColor: "bg-accent",
    },
    {
        id: 3,
        image: course3, category: "Design", level: "Beginner",
        title: "UI/UX Design Masterclass",
        rating: 4.7, reviews: 1890, weeks: 8,
        instructor: "Jane Cooper", instructorAvatar: instructor2,
        price: 59, originalPrice: 129, badge: "BEST SELLER", badgeColor: "bg-primary",
    },
    {
        id: 4,
        image: course4, category: "Cloud", level: "Intermediate",
        title: "AWS Cloud Practitioner & Solutions Architect",
        rating: 4.6, reviews: 2100, weeks: 14,
        instructor: "Robert Fox", instructorAvatar: instructor2,
        price: 89, originalPrice: 199,
    },
    {
        id: 5,
        image: course5, category: "Marketing", level: "Beginner",
        title: "Digital Marketing Complete Bootcamp 2024",
        rating: 4.5, reviews: 1760, weeks: 6,
        instructor: "Jenny Wilson", instructorAvatar: instructor2,
        price: 49, originalPrice: 99, badge: "BEST SELLER", badgeColor: "bg-primary",
    },
    {
        id: 6,
        image: course6, category: "Security", level: "Advanced",
        title: "Ethical Hacking & Cybersecurity Masterclass",
        rating: 4.8, reviews: 980, weeks: 16,
        instructor: "Jacob Jones", instructorAvatar: instructor3,
        price: 99, originalPrice: 219,
    },
    {
        id: 7,
        image: course7, category: "Development", level: "Beginner",
        title: "Python Programming – Zero to Hero",
        rating: 4.9, reviews: 4210, weeks: 9,
        instructor: "Ali Tufan", instructorAvatar: instructor2,
        price: 59, originalPrice: 129, badge: "NEW", badgeColor: "bg-accent",
    },
    {
        id: 8,
        image: course8, category: "Data Science", level: "Advanced",
        title: "Deep Learning & Neural Networks with TensorFlow",
        rating: 4.7, reviews: 1540, weeks: 18,
        instructor: "Sara Khan", instructorAvatar: instructor2,
        price: 89, originalPrice: 189, badge: "BEST SELLER", badgeColor: "bg-primary",
    },
    {
        id: 9,
        image: course9, category: "Design", level: "Intermediate",
        title: "Motion Design & After Effects Masterclass",
        rating: 4.6, reviews: 1230, weeks: 10,
        instructor: "Jane Cooper", instructorAvatar: instructor2,
        price: 69, originalPrice: 149,
    },
];

export const allCourses = baseCourses.map(generateCourseData);
