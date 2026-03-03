import { Star, Check, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function CourseCard({
  image,
  title,
  rating,
  reviews,
  lessons,
  duration,
  level,
  instructor,
  instructorAvatar,
  price,
  originalPrice,
  badge,
  badgeColor = "bg-primary",
  subtitle,
  lastUpdated,
  totalDuration,
  whatYoullLearn = [],
  category,
  weeks,
  isFree,
  ...props
}) {
  const navigate = useNavigate();
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const id = props.id || null;
  // Strip non-serializable fields (courseIncludes has React icon components) before passing to Link state
  const { courseIncludes, ...serializableProps } = props;
  const courseData = { image, title, rating, reviews, lessons, duration, level, instructor, instructorAvatar, price, originalPrice, badge, badgeColor, subtitle, lastUpdated, totalDuration, whatYoullLearn, category, weeks, isFree, ...serializableProps };

  // Determine if the course is free
  const courseIsFree = isFree || price === 0 || badge === "FREE";

  // Generate dynamic subtitle if not provided
  const hoverSubtitle = subtitle || `Master ${title} and elevate your career in ${category || "your field"}.`;

  // Generate dynamic "what you'll learn" if not provided
  const hoverLearnItems = whatYoullLearn?.length ? whatYoullLearn.slice(0, 3) : [
    `Master the core concepts of ${category || title}.`,
    `Build real-world projects reflecting ${title}.`,
    `Learn directly from industry expert ${instructor || "professionals"}.`,
  ];

  // Dynamic total duration
  const hoverDuration = totalDuration || duration || (weeks ? `${weeks * 2} hours` : null);

  const cardContent = (
    <div className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 block h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {badge && (
          <span className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-semibold uppercase text-primary-foreground ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2 flex items-center gap-1">
          <span className="text-sm font-semibold text-foreground">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews?.toLocaleString()})</span>
        </div>
        <h3 className="mb-3 text-sm font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span>📖 {lessons} lesson</span>
          <span>⏱ {duration}</span>
          <span>📊 {level}</span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-2">
            {instructorAvatar && <img src={instructorAvatar} alt={instructor} className="h-7 w-7 rounded-full object-cover" />}
            <span className="text-xs text-muted-foreground">{instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            {originalPrice > 0 && <span className="text-xs text-muted-foreground line-through">₹{(originalPrice * 83).toLocaleString()}</span>}
            <span className="text-sm font-bold text-primary">{courseIsFree ? "FREE" : `₹${(price * 83).toLocaleString()}`}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        {id ? (
          <div
            onClick={() => navigate(`/course/${id}`, { state: { course: courseData } })}
            className="group block h-full cursor-pointer"
          >
            {cardContent}
          </div>
        ) : (
          <div className="group block h-full">
            {cardContent}
          </div>
        )}
      </HoverCardTrigger>

      <HoverCardContent side="right" align="start" sideOffset={16} className="w-80 p-5 z-50 rounded-xl shadow-xl border-border bg-card">
        <h3 className="font-bold text-lg leading-tight mb-2 text-foreground">{title}</h3>

        <div className="flex flex-wrap gap-2 mb-2 text-xs font-semibold uppercase">
          <span className={`px-2 py-0.5 rounded ${courseIsFree ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
            {courseIsFree ? "Free" : "Premium"}
          </span>
          {badge && badge !== "FREE" && (
            <span className={`px-2 py-0.5 rounded ${badgeColor} text-primary-foreground bg-opacity-90`}>{badge}</span>
          )}
          {level && (
            <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground">{level}</span>
          )}
        </div>

        {(lastUpdated || weeks) && (
          <p className="text-xs text-muted-foreground mb-2">
            Updated <span className="font-semibold text-foreground">{lastUpdated || "Recently"}</span>
          </p>
        )}

        <p className="text-xs text-muted-foreground mb-3 font-medium">
          {[hoverDuration, level && `${level} Level`, "Subtitles"].filter(Boolean).join(" · ")}
        </p>

        <p className="text-sm text-foreground mb-4 line-clamp-3 leading-relaxed">
          {hoverSubtitle}
        </p>

        {/* Rating & reviews */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-bold text-foreground">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews?.toLocaleString()} reviews)</span>
        </div>

        {/* Instructor */}
        {instructor && (
          <div className="flex items-center gap-2 mb-4">
            {instructorAvatar && <img src={instructorAvatar} alt={instructor} className="h-6 w-6 rounded-full object-cover" />}
            <span className="text-xs text-muted-foreground">By <span className="font-semibold text-foreground">{instructor}</span></span>
          </div>
        )}

        <ul className="space-y-2.5 mb-5">
          {hoverLearnItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (courseIsFree) {
                setIsEnrollModalOpen(true);
              } else {
                navigate("/checkout", { state: { course: courseData } });
              }
            }}
            className="flex-1 bg-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {courseIsFree ? "Enroll Free" : "Buy now"}
          </button>
          <button className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:bg-muted transition-colors shrink-0">
            <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
          </button>
        </div>
      </HoverCardContent>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseTitle={title}
      />
    </HoverCard>
  );
}
