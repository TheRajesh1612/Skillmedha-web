import { Star, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface InstructorCardProps {
  image: string;
  name: string;
  role: string;
  rating: number;
  students: number;
  courses: number;
}

export default function InstructorCard({ image, name, role, rating, students, courses }: InstructorCardProps) {
  return (
    <div className="group text-center">
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-primary-dark/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
      <h4 className="text-base font-semibold text-foreground">{name}</h4>
      <p className="mb-2 text-sm text-muted-foreground">{role}</p>
      <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span>{rating}</span>
        </div>
        <span>{students} Students</span>
        <span>{courses} Courses</span>
      </div>
    </div>
  );
}
