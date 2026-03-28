import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/landing/motion-div";
import { Check, Star } from "lucide-react";

import Link from "next/link";

const BOOK_URL = "/book";

const plans = [
  {
    name: "Quick Fix",
    duration: "30-min call",
    price: "₹499",
    description: "Best for a focused review of one role or one section.",
    features: ["ATS audit & keyword fix", "Top 3 critical rewrites", "Role-specific feedback", "Recording of the session"],
    cta: "Book 30-min Call",
    highlight: false,
  },
  {
    name: "Deep Dive",
    duration: "60-min call",
    price: "₹1199",
    description: "Full resume overhaul + LinkedIn + job search strategy.",
    features: ["Everything in Quick Fix", "Full resume rewrite guide", "LinkedIn headline & summary", "7-day action plan", "Follow-up email templates", "Priority email support (48h)"],
    cta: "Book 60-min Call",
    highlight: true,
  },
];

const testimonials = [
  {
    name: "Priya S.", role: "Software Engineer", company: "Got hired at a Series B startup",
    quote: "I had been applying for 3 months with zero callbacks. After one session, I rewrote my resume and got 4 interview calls in the first week.",
    stars: 5,
  },
  {
    name: "Rahul M.", role: "Product Manager", company: "Landed a role at a top MNC",
    quote: "The ATS tip alone was worth 10x the price. I didn't even know my resume was being filtered out before a human saw it.",
    stars: 5,
  },
  {
    name: "Ananya K.", role: "Data Analyst", company: "Switched industries successfully",
    quote: "I was trying to switch from finance to tech. The session helped me reframe my experience in a way that actually made sense to hiring managers.",
    stars: 5,
  },
];

export function RegistrationSection() {
  return (
    <>
      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Simple, honest pricing</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">No subscriptions. No hidden fees. Pay once, get results.</p>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 gap-5 max-w-sm mx-auto sm:max-w-3xl sm:grid-cols-2 sm:gap-6">
            {plans.map((plan, i) => (
              <MotionDiv key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <div className={`relative h-full flex flex-col p-5 sm:p-8 rounded-2xl border transition-all duration-300 shadow-sm ${
                  plan.highlight
                    ? "bg-primary/10 border-primary/50 shadow-primary/10"
                    : "bg-card border-border hover:border-border/80"
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-5 sm:mb-6">
                    <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">{plan.duration}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">{plan.name}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-2">{plan.description}</p>
                  </div>
                  <div className="mb-5 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{plan.price}</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-full font-semibold py-4 sm:py-5 text-sm transition-transform hover:scale-105 ${
                      plan.highlight
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                  >
                    <Link href={BOOK_URL}>{plan.cta}</Link>
                  </Button>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Real results, real people</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">Don't take our word for it.</p>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto sm:max-w-5xl sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {testimonials.map((t, i) => (
              <MotionDiv key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <div className="h-full flex flex-col p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors duration-300 shadow-sm">
                  <div className="flex gap-0.5 mb-3 sm:mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-border">
                    <p className="text-foreground font-semibold text-xs sm:text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto text-center p-8 sm:p-12 lg:p-14 rounded-2xl bg-card border border-border overflow-hidden shadow-sm"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Stop applying blindly.</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                One call is all it takes to go from invisible to interview-ready. Spots are limited — book yours now.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 sm:mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base rounded-full shadow-lg shadow-primary/25 transition-transform hover:scale-105"
              >
                <Link href={BOOK_URL}>
                  Book Your Call Now →
                </Link>
              </Button>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">No commitment · Cancel anytime</p>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
