"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Features', href: '#features' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2'
      )}
    >
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 rounded-full transition-all duration-300",
        scrolled ? 'bg-background/80 backdrop-blur-lg border border-slate-800' : 'bg-transparent'
      )}>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <Code className="h-7 w-7 text-primary" />
            <span>PATHLABS PL</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://example.com/google-form-link" target="_blank" rel="noopener noreferrer">
                Join Free Demo
              </a>
            </Button>
            
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l-slate-800 w-[280px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b border-slate-800">
                      <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>
                        <Code className="h-6 w-6 text-primary" />
                        <span>PATHLABS PL</span>
                      </Link>
                       <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-6 w-6 text-white" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                    </div>
                    <nav className="flex-1 flex flex-col items-start p-4 space-y-6 mt-4">
                      {navLinks.map((link) => (
                         <SheetClose key={link.name} asChild>
                          <Link href={link.href} className="text-lg font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                     <div className="p-4 mt-auto border-t border-slate-800">
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          <a href="https://example.com/google-form-link" target="_blank" rel="noopener noreferrer">
                            Join Free Demo
                          </a>
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
