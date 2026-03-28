"use client";

import { MotionDiv } from "@/components/landing/motion-div";
import { CalendarCheck, Search, FileCheck } from "lucide-react";

const steps = [
  { icon: CalendarCheck, step: "01", title: "Book Your Call", description: "Pick a 30 or 60-minute slot that works for you. You'll get a confirmation with a prep checklist." },
  { icon: Search, step: "02", title: "Live Resume Audit", description: "We screen-share and go through your resume line by line — ATS issues, weak language, missing keywords." },
  { icon: FileCheck, step: "03", title: "Walk Away with a Plan", description: "You leave with a revised resume, a rewrite guide, and a clear action plan to start getting callbacks." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" } }),
};

export function RoadmapSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">How it works</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">Three steps from invisible to interview-ready.</p>
          </MotionDiv>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* connector line */}
          <div className="absolute left-5 sm:left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" aria-hidden="true" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((item, index) => (
              <MotionDiv
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className="relative flex gap-4 sm:gap-6"
              >
                <div className="relative z-10 flex-shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background border-2 border-primary">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="flex-1 p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors duration-300 shadow-sm">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">Step {item.step}</span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
