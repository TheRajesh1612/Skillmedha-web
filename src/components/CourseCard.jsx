import { Star, Check, Heart } from "lucide-react";
import { Link } from "react-router-dom";
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
  ...props
}) {
  const id = props.id || null;
  const courseData = { image, title, rating, reviews, lessons, duration, level, instructor, instructorAvatar, price, originalPrice, badge, badgeColor, subtitle, lastUpdated, totalDuration, whatYoullLearn, ...props };
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
            <img src={instructorAvatar} alt={instructor} className="h-7 w-7 rounded-full object-cover" />
            <span className="text-xs text-muted-foreground">{instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground line-through">${originalPrice}</span>
            <span className="text-sm font-bold text-primary">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        {id ? (
          <Link to={`/course/${id}`} state={{ course: courseData }} className="group block h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="group block h-full">
            {cardContent}
          </div>
        )}
      </HoverCardTrigger>

      <HoverCardContent side="right" align="start" sideOffset={16} className="w-80 p-5 z-50 rounded-xl shadow-xl border-border bg-card">
        <h3 className="font-bold text-lg leading-tight mb-2 text-foreground">{title}</h3>

        <div className="flex gap-2 mb-2 text-xs font-semibold uppercase">
          <span className="px-2 py-0.5 rounded bg-primary text-primary-foreground">Premium</span>
          {badge && <span className={`px-2 py-0.5 rounded ${badgeColor} text-primary-foreground bg-opacity-90`}>{badge}</span>}
        </div>

        <p className="text-xs text-muted-foreground mb-2">
          Updated <span className="font-semibold text-foreground">{lastUpdated || "February 2026"}</span>
        </p>

        <p className="text-xs text-muted-foreground mb-3 font-medium">
          {totalDuration || duration} · {level} Levels · Subtitles
        </p>

        <p className="text-sm text-foreground mb-4 line-clamp-3 leading-relaxed">
          {subtitle || "Master this course by building real-world projects. Learn the essential skills to take your career to the next level."}
        </p>

        <ul className="space-y-3 mb-6">
          {(whatYoullLearn?.length ? whatYoullLearn.slice(0, 3) : [
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
  );
}
