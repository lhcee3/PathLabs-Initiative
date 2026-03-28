"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Mail, Phone, Eye, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdzJpi4-NLq4kn1BH8VAZXEY52NykGvqwYLbezxLSdPIvSCFA/viewform?usp=publish-editor";
const EMAIL = "contactpathlabs@gmail.com";
const PHONE = "+91 968462110";

export default function BookPage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top bar */}
      <header className="border-b border-border px-4 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-base font-bold text-foreground">
            <FileText className="h-5 w-5 text-primary" />
            <span>Resume<span className="text-primary">Pro</span></span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 sm:px-6 py-8 sm:py-20">
        <div className="w-full max-w-2xl space-y-6">

          {/* Heading */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Book your session
            </h1>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
              Fill out the form below and we'll confirm your slot within 24 hours.
            </p>
          </div>

          {/* Form card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Step 1</p>
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-1">Fill the booking form</h2>
            <p className="text-muted-foreground text-xs sm:text-sm mb-6">
              Takes 2 minutes. Tell us your target role, current situation, and preferred slot.
            </p>
            <Button
              asChild
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold px-8 py-5 text-sm transition-transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                Open Booking Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Contact card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Need something custom?</p>
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-1">Reach out directly</h2>
            <p className="text-muted-foreground text-xs sm:text-sm mb-6">
              Want a bulk session, a different format, or have a specific ask? Drop a message.
            </p>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
                <div className="flex-shrink-0 h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone — click to reveal */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
                <div className="flex-shrink-0 h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                  {revealed ? (
                    <a
                      href={`tel:${PHONE.replace(/\s/g, "")}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {PHONE}
                    </a>
                  ) : (
                    <button
                      onClick={() => setRevealed(true)}
                      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Click to reveal number
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
