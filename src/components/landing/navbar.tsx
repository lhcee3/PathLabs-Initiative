"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const BOOK_URL = "/book";

const navLinks = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: "What You'll Get", href: '#outcomes' },
  { name: 'Pricing', href: '#pricing' },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full text-muted-foreground hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2">
      <div className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8 rounded-full transition-all duration-300 backdrop-blur-xl border border-white/10 dark:border-white/10 shadow-lg",
        scrolled ? 'bg-white/60 dark:bg-black/50 shadow-black/10' : 'bg-white/30 dark:bg-black/20'
      )}>
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground">
            <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span>Resume<span className="text-primary">Pro</span></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm px-4 h-9">
              <Link href={BOOK_URL}>Book a Call</Link>
            </Button>

            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-border w-[280px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b border-border">
                      <Link href="/" className="flex items-center gap-2 text-base font-bold text-foreground" onClick={() => setOpen(false)}>
                        <FileText className="h-5 w-5 text-primary" />
                        <span>Resume<span className="text-primary">Pro</span></span>
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-foreground"><X className="h-5 w-5" /></Button>
                      </SheetClose>
                    </div>
                    <nav className="flex-1 flex flex-col items-start p-5 space-y-5 mt-2">
                      {navLinks.map((link) => (
                        <SheetClose key={link.name} asChild>
                          <Link href={link.href} className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
                            {link.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                    <div className="p-4 mt-auto border-t border-border">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                        <Link href={BOOK_URL} onClick={() => setOpen(false)}>Book a Call</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
