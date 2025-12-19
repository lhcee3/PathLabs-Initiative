"use client";

import { MotionDiv } from "@/components/landing/motion-div";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";

export function InstructorsSection() {
  const instructors = [
    {
      name: "Sai Aneesh ",
      linkedIn: "https://www.linkedin.com/in/saianeeshg90/",
      title: "Lead Instructor",
      bio: "Expert in Python ,Web Development with years of industry experience",
    },
    {
      name: "Sujay Hiremath",
      linkedIn: "https://www.linkedin.com/in/sujay-hiremath-672931255/",
      title: "Senior Instructor",
      bio: "Specialist in Java ,Data Structures, Algorithms, and competitive programming",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary">
              Meet The Instructors
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Learn from industry professionals who are passionate about building the next generation of tech creators
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <MotionDiv
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {instructor.name}
                      </h3>
                      <p className="text-primary font-semibold">
                        {instructor.title}
                      </p>
                    </div>
                    <a
                      href={instructor.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                      aria-label={`${instructor.name}'s LinkedIn profile`}
                    >
                      <LinkedinIcon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {instructor.bio}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
