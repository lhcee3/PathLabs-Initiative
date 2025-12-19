"use client";

import { MotionDiv } from "@/components/landing/motion-div";
import { GraduationCap, Lightbulb, Users, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: GraduationCap,
    title: "CS Graduate Mentors",
    description: "Learn from passionate educators who are also industry-experienced Computer Science graduates.",
  },
  {
    icon: Lightbulb,
    title: "Project-Based Learning",
    description: "Go beyond theory. Build a portfolio of real-world projects that showcase your skills.",
  },
  {
    icon: Users,
    title: "Small Batches",
    description: "Receive personalized attention and mentorship in our focused, small-group learning environment.",
  },
  {
    icon: Target,
    title: "Market-Ready Skills",
    description: "We focus on teaching the skills and technologies that are in demand in the tech industry today.",
  },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
};

export function ValuePropsSection() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MotionDiv initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true, amount: 0.5 }} transition={{duration: 0.5}}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why Choose PATHLABS?</h2>
            <p className="mt-4 text-lg text-slate-400">
              We provide a learning experience designed for deep understanding and real-world application.
            </p>
          </MotionDiv>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <MotionDiv
              key={prop.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="h-full p-6 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-lg shadow-lg transition-all duration-300 hover:border-primary/60 hover:-translate-y-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                <p className="text-sm text-slate-400">{prop.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
