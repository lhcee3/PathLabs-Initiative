"use client";

import { MotionDiv } from "@/components/landing/motion-div";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "A fully rewritten, ATS-friendly resume",
  "Keyword strategy for your target role",
  "Bullet points that show impact, not just duties",
  "LinkedIn headline & summary rewrite tips",
  "A prioritized list of job boards to apply on",
  "Follow-up email templates that get replies",
  "Honest feedback on gaps and how to address them",
  "A 7-day action plan to start getting callbacks",
];

export function InstructorsSection() {
  return (
    <section id="outcomes" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              What you'll walk away with
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Every session is packed with actionable deliverables — not vague advice.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto sm:max-w-4xl sm:grid-cols-2 sm:gap-4">
            {outcomes.map((item, i) => (
              <MotionDiv
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors duration-300 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-xs sm:text-sm font-medium leading-snug">{item}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
