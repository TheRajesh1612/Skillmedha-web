import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import skillmedhaLogo from "@/assets/skillmedha-logo.png";

// ─── Smooth-scroll helper (accounts for sticky header height ~64px) ───────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─── Nav structure ────────────────────────────────────────────────────────────
// sectionId  → smooth scroll on "/" (or nav to "/" first)
// dropdown[] → hover reveals sub-links; "to" = React Router route
const NAV = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  {
    label: "Services", sectionId: "services",
    dropdown: [
      { label: "Free Trainings", to: "/free-trainings" },
      { label: "For Individuals", to: "/for-individuals" },
      { label: "For Corporates", to: "/for-corporates" },
      { label: "For Campus", to: "/for-campus" },
    ],
  },
  {
    label: "Resources", sectionId: "resources",
    dropdown: [
      { label: "Knowledge Hub", to: "/knowledge-hub" },
    ],
  },
  { label: "Contact", sectionId: "contact" },
];

// ─── Dropdown animation variants ─────────────────────────────────────────────
const dropVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: "easeOut" } },
  exit: { opacity: 0, y: 8, scale: 0.96, transition: { duration: 0.12 } },
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.25, ease: "easeInOut" } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const leaveTimer = useRef(null);

  // close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  // dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ── hover handlers ──────────────────────────────────────────────────────────
  const handleEnter = (label) => {
    clearTimeout(leaveTimer.current);
    setActiveDropdown(label);
  };
  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // ── main nav-link click → scroll to section ────────────────────────────────
  const handleNavClick = useCallback((item) => {
    if (!item.sectionId) return;
    setMobileOpen(false);
    if (location.pathname === "/") {
      scrollToSection(item.sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(item.sectionId), 400);
    }
  }, [location.pathname, navigate]);

  // ── dropdown-item click → route ────────────────────────────────────────────
  const handleDropClick = useCallback((sub) => {
    setActiveDropdown(null);
    setMobileOpen(false);
    navigate(sub.to);
  }, [navigate]);

  return (
    <header className="fixed w-full top-0 z-50 bg-primary-dark shadow-lg">
      <div className="container mx-auto flex items-center px-4 py-3 lg:px-8 gap-6">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={skillmedhaLogo}
            alt="SkillMedha"
            className="h-9 w-auto"
          />
          <span className="text-lg font-bold text-primary-dark-foreground tracking-tight">
            Skill<span className="text-accent">Medha</span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5 ml-4 flex-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && handleEnter(item.label)}
              onMouseLeave={() => item.dropdown && handleLeave()}
            >
              {/* Main link button */}
              <button
                onClick={() => handleNavClick(item)}
                className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-primary-dark-foreground/80 hover:text-white transition-colors duration-150"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                  />
                )}
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    key="drop"
                    variants={dropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 min-w-[200px] rounded-xl bg-card border border-border/30 shadow-card-hover overflow-hidden"
                    onMouseEnter={() => handleEnter(item.label)}
                    onMouseLeave={handleLeave}
                  >
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleDropClick(sub)}
                        className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors text-left"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                        {sub.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full text-primary-dark-foreground/70 hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode
              ? <Sun className="h-4 w-4" />
              : <Moon className="h-4 w-4" />}
          </button>

          <Link
            to="#"
            className="hidden lg:block text-sm font-medium text-primary-dark-foreground/80 hover:text-white transition-colors"
          >
            Log in
          </Link>

          <Link
            to="/for-individuals"
            className="hidden lg:block rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow-primary hover:scale-105 transition-transform"
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-md text-primary-dark-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden border-t border-primary-dark-foreground/10 bg-primary-dark"
          >
            <nav className="container mx-auto px-4 py-4 space-y-0.5">
              {NAV.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        if (item.dropdown) {
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          );
                        } else {
                          handleNavClick(item);
                        }
                      }}
                      className="flex-1 flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-primary-dark-foreground/80 hover:text-white hover:bg-white/5 transition-colors text-left"
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </button>
                  </div>

                  {/* Mobile sub-items */}
                  <AnimatePresence>
                    {item.dropdown && mobileExpanded === item.label && (
                      <motion.div
                        key="mob-sub"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3"
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleDropClick(sub)}
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-primary-dark-foreground/60 hover:text-accent transition-colors text-left"
                          >
                            <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="flex gap-3 pt-4 border-t border-primary-dark-foreground/10 mt-2">
                <Link to="#" className="text-sm font-medium text-primary-dark-foreground/70">
                  Log in
                </Link>
                <Link
                  to="/for-individuals"
                  className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
