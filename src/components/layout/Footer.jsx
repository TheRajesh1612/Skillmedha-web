import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import skillmedhaLogo from "@/assets/skillmedha-logo.png";

const footerLinks = {
  about: [
    { label: "About Us", to: "/about" },
    { label: "Learner Stories", to: "#" },
    { label: "Careers", to: "#" },
    // { label: "Press", to: "#" },
    { label: "Leadership", to: "#" },
    { label: "Contact Us", to: "#contact" },
  ],
  categories: [
    { label: "Development", to: "/courses" },
    { label: "Business", to: "/courses" },
    { label: "Finance & Accounting", to: "/courses", },
    { label: "IT & Software", to: "/courses" },
    { label: "Office Productivity", to: "/courses" },
    { label: "Design", to: "/courses" },
    { label: "Marketing", to: "/courses" },
  ],
  categories2: [
    { label: "Lifestyle", to: "/courses" },
    { label: "Photography & Video", to: "/courses" },
    { label: "Health & Fitness", to: "/courses" },
    { label: "Music", to: "/courses" },
    { label: "UX Design", to: "/courses" },
    { label: "Seo", to: "/courses" },
  ],
  support: [
    { label: "Documentation", to: "#" },
    { label: "FAQS", to: "/faq" },
    { label: "Dashboard", to: "#" },
    { label: "Contact", to: "/contact" },
  ],
};

const bottomLinks = ["Help", "Privacy Policy", "Cookie Notice", "Security", "Terms of Use"];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-dark-foreground">
      {/* Top bar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-primary-dark-foreground/10 py-6">
          <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0">
            <img src={skillmedhaLogo} alt="SkillMedha" className="h-9 w-auto" />
            <span className="text-lg font-bold">SkillMedha</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-dark-foreground/70">Follow Us On Social Media</span>
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-dark-foreground/10 text-primary-dark-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">About</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-dark-foreground/60 transition-colors hover:text-primary-dark-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={`text-sm transition-colors hover:text-primary-dark-foreground ${l.accent ? "text-primary" : "text-primary-dark-foreground/60"
                      }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-2.5 space-y-2.5">
              {footerLinks.categories2.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-dark-foreground/60 transition-colors hover:text-primary-dark-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-dark-foreground/60 transition-colors hover:text-primary-dark-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Get In Touch</h4>
            <p className="mb-4 text-sm text-primary-dark-foreground/60">We don't send spam so don't worry.</p>
            <div className="flex rounded-full bg-primary-dark-foreground/10 p-1">
              <input
                type="email"
                placeholder="Email..."
                className="flex-1 bg-transparent px-4 text-sm text-primary-dark-foreground placeholder:text-primary-dark-foreground/40 outline-none"
              />
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-primary-dark-foreground/10 py-6">
          <p className="text-sm text-primary-dark-foreground/50 mb-3 md:mb-0">© 2025 SkillMedha. All Right Reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {bottomLinks.map((l) => (
              <a key={l} href="#" className="text-sm text-primary-dark-foreground/50 transition-colors hover:text-primary-dark-foreground">
                {l}
              </a>
            ))}
            <span className="flex items-center gap-1.5 rounded-full bg-primary-dark-foreground/10 px-4 py-1.5 text-sm text-primary-dark-foreground/60">
              🌐 English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
