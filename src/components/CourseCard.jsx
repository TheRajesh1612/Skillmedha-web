import { Star } from "lucide-react";

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
}) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
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
      <div className="p-5">
        <div className="mb-2 flex items-center gap-1">
          <span className="text-sm font-semibold text-foreground">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews.toLocaleString()})</span>
        </div>
        <h3 className="mb-3 text-sm font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span>📖 {lessons} lesson</span>
          <span>⏱ {duration}</span>
          <span>📊 {level}</span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3">
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
}
