import { MotionDiv } from "@/components/landing/motion-div";
import { Code2, Cpu, Laptop } from "lucide-react";

const timelineItems = [
  {
    icon: Code2,
    title: "Foundation",
    description: "Building strong fundamentals in programming with Java & Python.",
    step: "01"
  },
  {
    icon: Laptop,
    title: "Creation",
    description: "Bringing ideas to life through project-based learning in Web Development.",
    step: "02"
  },
  {
    icon: Cpu,
    title: "Mastery",
    description: "Achieving excellence with advanced Data Structures & Algorithms.",
    step: "03"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MotionDiv initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true, amount: 0.5 }} transition={{duration: 0.5}}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">A Clear Path to Mastery</h2>
            <p className="mt-4 text-lg text-slate-400">
              Our curriculum is a structured journey from basic concepts to advanced, market-ready skills.
            </p>
          </MotionDiv>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-[1px] md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent" aria-hidden="true"></div>
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <MotionDiv
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className="relative md:flex md:items-center"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                    <div className={`relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                      <div className="absolute -left-[1.375rem] top-1.5 flex h-11 w-11 items-center justify-center rounded-full bg-background border-2 border-primary md:left-1/2 md:-translate-x-1/2">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white">{item.step}. {item.title}</h3>
                        <p className="mt-2 text-slate-400">{item.description}</p>
                      </div>
                    </div>
                </div>
                 <div className="hidden md:block md:w-1/2"></div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
