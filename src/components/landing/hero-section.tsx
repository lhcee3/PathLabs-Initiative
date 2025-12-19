import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/landing/motion-div";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] opacity-30 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/30 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
              Build Your Career Before College.
            </h1>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Master Python & Java. Dominate Web Development. Crack DSA interviews.<br className="hidden sm:block" /> 
              For grades 6-11, we create market-ready developers with real portfolios.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="mt-10"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHWPMPcKj1dP4e895ZAK-yLwHbFTq3TgiRsjfwQP9GogLl6Q/viewform?usp=header">
                Express Interest
              </a>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
