"use client";

import { MotionDiv } from "@/components/landing/motion-div";
import { Zap, Target, MessageSquare, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Prop { icon: LucideIcon; title: string; description: string; }

const props: Prop[] = [
  { icon: Target, title: "ATS-Optimized", description: "We rewrite your resume to pass automated screening systems before a human ever sees it." },
  { icon: MessageSquare, title: "Live 1-on-1 Feedback", description: "No generic templates. A real expert reviews your resume on a live call and explains every change." },
  { icon: Zap, title: "Role-Specific Strategy", description: "Tailored advice for your exact target role — not a one-size-fits-all checklist." },
  { icon: ShieldCheck, title: "Fast Turnaround", description: "Book today, get reviewed today. No waiting weeks for a generic PDF back." },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i: number) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" } }),
};

export function ValuePropsSection() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Not just a review. A career fix.
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Most resume services send you a PDF. We get on a call and fix it with you — live.
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {props.map((prop, i) => (
            <MotionDiv key={prop.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
              <div className="h-full p-5 sm:p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 shadow-sm">
                <div className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-5">
                  <prop.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-2">{prop.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{prop.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
