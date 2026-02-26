import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import skillmedhaLogo from "@/assets/skillmedha-logo.png";

const footerLinks = {
  company: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Courses", to: "/courses" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/#contact" },
  ],
  services: [
    { label: "Free Trainings", to: "/free-trainings" },
    { label: "For Individuals", to: "/for-individuals" },
    { label: "For Corporates", to: "/for-corporates" },
    { label: "For Campus", to: "/for-campus" },
  ],
  resources: [
    { label: "Knowledge Hub", to: "/knowledge-hub" },
    { label: "Courses", to: "/courses" },
  ],
  support: [
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/#contact" },
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-dark-foreground/60 transition-colors hover:text-primary-dark-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-dark-foreground/60 transition-colors hover:text-primary-dark-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-dark-foreground/60 transition-colors hover:text-primary-dark-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mt-6 mb-4 text-sm font-semibold uppercase tracking-wider">Support</h4>
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
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email..."
                className="w-full rounded-full bg-primary-dark-foreground/10 px-4 py-2 text-sm text-primary-dark-foreground placeholder:text-primary-dark-foreground/40 outline-none"
              />
              <button className="w-full rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
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
