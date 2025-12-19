import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/landing/motion-div";

export function RegistrationSection() {
  return (
    <section id="register" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_60%)] opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/50 to-background"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Start Learning?</h2>
            <p className="mt-4 text-lg text-slate-400">
              Book a free, no-obligation demo session to experience our teaching style firsthand.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHWPMPcKj1dP4e895ZAK-yLwHbFTq3TgiRsjfwQP9GogLl6Q/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                Book Free Demo
              </a>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
