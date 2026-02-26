import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import Layout from "@/components/layout/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const offices = [
  { city: "Hyderabad", address: "328 Queensberry Street, North\nHyderabad, Telangana 500081, India.", phone: "+91 123 456 7890", email: "hi@skillmedha.com" },
  { city: "Bangalore", address: "328 Queensberry Street, North\nBangalore, Karnataka 560001, India.", phone: "+91 123 456 7890", email: "hi@skillmedha.com" },
  { city: "Delhi", address: "328 Queensberry Street, North\nNew Delhi, 110001, India.", phone: "+91 123 456 7890", email: "hi@skillmedha.com" },
];

const faqs = [
  { q: "Do You Offer Discounts For Students?", a: "Yes, we offer special student discounts. Contact our support team with your valid student ID to receive an exclusive discount code for up to 50% off on all courses." },
  { q: "Do You Offer Special Pricing For Big Teams?", a: "Absolutely We have enterprise and team pricing options available. Contact our sales team for custom quotes based on your team size." },
  { q: "What Is The Past Experience Of Your Teachers?", a: "Our instructors have an average of 10+ years of industry experience and have worked with leading companies worldwide." },
  { q: "What Is The Course Refund Policy?", a: "We offer a 30-day money-back guarantee on all our courses. If you're not satisfied, simply request a refund within 30 days of purchase." },
  { q: "Do You Offer Discounts For Non-Profits?", a: "Yes, we offer special pricing for non-profit organizations. Please contact us with your organization details to learn more." },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      {/* <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-dark-foreground mb-3">Contact SkillMedha</h1>
              <p className="text-sm text-primary-dark-foreground/60">
                We're On A Mission To Deliver Engaging, Curated<br />
                Courses At A Reasonable Price.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl bg-card p-8 shadow-card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-2 text-xl font-bold text-foreground">Send a Message</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                  <input className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground" placeholder="Ali" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Email Address</label>
                  <input className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                  <textarea className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground h-32 resize-none" placeholder="Your message..." />
                </div>
                <button className="rounded-xl bg-gradient-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary">
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* FAQs */}
      <section className="bg-muted bg-gradient-hero py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-2 text-2xl font-bold text-primary-dark-foreground">Frequently Asked Questions.</h2>
            <p className="text-sm text-primary-dark-foreground/60">Find answers to common questions about our platform</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="rounded-2xl bg-card shadow-card overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.05 } } }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex w-full items-center gap-4 px-6 py-4 text-left"
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${openFaq === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                    {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pl-[4.5rem]">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Our offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <motion.div key={office.city} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{office.city}</h3>
                <p className="mb-2 text-sm text-muted-foreground whitespace-pre-line">{office.address}</p>
                <p className="text-sm text-muted-foreground">{office.phone}</p>
                <a href={`mailto:${office.email}`} className="text-sm text-primary">{office.email}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
