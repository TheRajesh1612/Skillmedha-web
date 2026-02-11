import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Courses",
    to: "/courses",
    mega: true,
    megaType: "courses",
  },
  { label: "Events", to: "#" },
  { label: "Blog", to: "#" },
  {
    label: "Pages",
    to: "#",
    mega: true,
    megaType: "pages",
  },
  { label: "Contact", to: "/contact" },
];

const coursesMega = {
  columns: [
    {
      title: "Course List Layouts",
      links: [
        { label: "Course List v1", to: "/courses" },
        { label: "Course List v2", to: "/courses" },
      ],
    },
    {
      title: "Course Single Layouts",
      links: [
        { label: "Course Single v1", to: "/course/1" },
        { label: "Course Single v2", to: "/course/1?v=2" },
      ],
    },
    {
      title: "About Courses",
      links: [
        { label: "Lesson Page v1", to: "#" },
        { label: "Instructors List", to: "#" },
        { label: "Become an Instructor", to: "#" },
      ],
    },
    {
      title: "Popular Courses",
      links: [
        { label: "Web Developer", to: "/courses" },
        { label: "Mobile Developer", to: "/courses" },
        { label: "Digital Marketing", to: "/courses" },
        { label: "Development", to: "/courses" },
        { label: "Finance & Accounting", to: "/courses" },
        { label: "Design", to: "/courses" },
      ],
      viewAll: { label: "View All Courses", to: "/courses" },
    },
  ],
  cta: {
    title: "Join more than",
    highlight: "8 million learners",
    subtitle: "worldwide",
    button: "Start Learning For Free",
    to: "/courses",
  },
};

const pagesMega = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact", hasSubmenu: true },
  { label: "Membership Plans", to: "#" },
  { label: "404 Page", to: "/not-a-real-page" },
  { label: "FAQs", to: "/contact" },
  { label: "Login", to: "#" },
  { label: "Register", to: "#" },
  { label: "UI Elements", to: "#" },
];

const exploreCategories = [
  {
    label: "Architecture",
    to: "#",
  },
  {
    label: "Business",
    to: "#",
    hasSubmenu: true,
  },
  { label: "Computer Programming", to: "#" },
  { label: "Data Analysis", to: "#" },
  {
    label: "Design",
    to: "#",
    hasSubmenu: true,
    subItems: [
      "Web Design",
      "Graphic Design",
      "Design Tools",
      "User Experience Design",
      "Game Design",
      "3D & Animation",
      "Fashion Design",
      "Interior Design",
    ],
  },
  { label: "Education", to: "#" },
  { label: "Electronics", to: "#", hasSubmenu: true },
  { label: "Language", to: "#", hasSubmenu: true },
  { label: "Marketing", to: "#", hasSubmenu: true },
  { label: "Music Arts", to: "#" },
  { label: "Social Science", to: "#" },
  { label: "Photography & Video", to: "#", hasSubmenu: true },
  { label: "IT & Software", to: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [exploreSubOpen, setExploreSubOpen] = useState<string | null>(null);
  const location = useLocation();
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
    setExploreOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (megaType: string) => {
    clearTimeout(megaTimeout.current);
    setActiveMega(megaType);
  };

  const handleMouseLeave = () => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary-dark">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-bold text-primary-dark-foreground">SkillMedha</span>
        </Link>

        {/* Explore button */}
        <div className="relative ml-4 hidden lg:block">
          <button
            onClick={() => setExploreOpen(!exploreOpen)}
            className="flex items-center gap-2 text-sm font-medium text-accent"
          >
            <Menu className="h-4 w-4" />
            Explore
          </button>
          {exploreOpen && (
            <div className="absolute left-0 top-full mt-3 z-50 flex rounded-xl bg-card shadow-card-hover">
              <div className="w-60 border-r border-border p-4">
                {exploreCategories.map((cat) => (
                  <div
                    key={cat.label}
                    className="group relative"
                    onMouseEnter={() => cat.hasSubmenu && setExploreSubOpen(cat.label)}
                    onMouseLeave={() => setExploreSubOpen(null)}
                  >
                    <Link
                      to={cat.to}
                      className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:text-primary ${
                        exploreSubOpen === cat.label ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {cat.label}
                      {cat.hasSubmenu && <ChevronDown className="h-3 w-3 -rotate-90" />}
                    </Link>
                    {cat.hasSubmenu && cat.subItems && exploreSubOpen === cat.label && (
                      <div className="absolute left-full top-0 z-50 w-52 rounded-xl bg-card p-4 shadow-card-hover">
                        {cat.subItems.map((sub) => (
                          <Link
                            key={sub}
                            to="#"
                            className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:text-primary"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/courses" className="mt-2 block px-3 text-sm font-medium text-primary">
                  View All Courses
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.mega && handleMouseEnter(link.megaType!)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={link.to}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-primary-dark-foreground/80 hover:text-primary-dark-foreground"
                }`}
              >
                {link.label}
                {link.mega && <ChevronDown className="h-3 w-3" />}
              </Link>

              {/* Courses Mega */}
              {link.megaType === "courses" && activeMega === "courses" && (
                <div
                  className="absolute left-1/2 top-full -translate-x-1/2 mt-2 z-50 flex rounded-xl bg-card shadow-card-hover"
                  onMouseEnter={() => handleMouseEnter("courses")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex gap-0 p-6">
                    {coursesMega.columns.map((col) => (
                      <div key={col.title} className="min-w-[180px] px-4">
                        <h4 className="mb-3 text-sm font-semibold text-foreground">{col.title}</h4>
                        {col.links.map((l) => (
                          <Link
                            key={l.label}
                            to={l.to}
                            className="block py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {l.label}
                          </Link>
                        ))}
                        {col.viewAll && (
                          <Link to={col.viewAll.to} className="mt-2 block text-sm font-medium text-primary">
                            {col.viewAll.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex min-w-[240px] flex-col items-start justify-center rounded-r-xl bg-gradient-primary p-6 text-primary-foreground">
                    <p className="text-lg font-semibold">{coursesMega.cta.title}</p>
                    <p className="text-xl font-bold text-accent">{coursesMega.cta.highlight}</p>
                    <p className="text-lg font-semibold">{coursesMega.cta.subtitle}</p>
                    <Link
                      to={coursesMega.cta.to}
                      className="mt-4 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
                    >
                      {coursesMega.cta.button}
                    </Link>
                  </div>
                </div>
              )}

              {/* Pages Mega */}
              {link.megaType === "pages" && activeMega === "pages" && (
                <div
                  className="absolute right-0 top-full mt-2 z-50 w-48 rounded-xl bg-card p-4 shadow-card-hover"
                  onMouseEnter={() => handleMouseEnter("pages")}
                  onMouseLeave={handleMouseLeave}
                >
                  {pagesMega.map((p) => (
                    <Link
                      key={p.label}
                      to={p.to}
                      className="flex items-center justify-between py-1.5 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {p.label}
                      {p.hasSubmenu && <ChevronDown className="h-3 w-3 -rotate-90" />}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full text-primary-dark-foreground/80 hover:text-primary-dark-foreground transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full text-primary-dark-foreground/80 hover:text-primary-dark-foreground transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <Link
            to="#"
            className="hidden lg:block text-sm font-medium text-primary-dark-foreground/80 hover:text-primary-dark-foreground transition-colors"
          >
            Log In
          </Link>
          <Link
            to="#"
            className="hidden lg:block rounded-full border border-primary-dark-foreground/30 px-5 py-2 text-sm font-medium text-primary-dark-foreground transition-all hover:bg-primary-dark-foreground hover:text-primary-dark"
          >
            Sign Up
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary-dark-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-dark-foreground/10 bg-primary-dark">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block rounded-md px-3 py-2 text-sm font-medium text-primary-dark-foreground/80 hover:text-primary-dark-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 border-t border-primary-dark-foreground/10">
              <Link to="#" className="text-sm font-medium text-primary-dark-foreground/80">Log In</Link>
              <Link to="#" className="rounded-full border border-primary-dark-foreground/30 px-5 py-2 text-sm font-medium text-primary-dark-foreground">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
