import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/landing/motion-div";
import { ArrowRight, Star } from "lucide-react";

const BOOK_URL = "/book";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-primary" />
            Trusted by 200+ job seekers
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-foreground">Applying everywhere</span>
              <br />
              <span className="text-foreground">but not getting</span>
              <br />
              <span className="text-primary">shortlisted?</span>
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Your resume is the problem — not your skills. One focused call and we'll fix it together. Get more interviews in 7 days.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full shadow-lg shadow-primary/25 transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <Link href={BOOK_URL}>
                Book Your Review Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full w-full sm:w-auto border-border text-muted-foreground hover:text-foreground"
            >
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground px-4"
          >
            {["No fluff, just results", "Live 1-on-1 session"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
