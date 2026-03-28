import { FileText } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col gap-8 text-center sm:text-left sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span>Resume<span className="text-primary">Pro</span></span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">Get shortlisted. Get hired.</p>
          </div>

          <div className="flex flex-row gap-10 justify-center sm:justify-end">
            <div>
              <h4 className="font-semibold text-foreground text-sm">Quick Links</h4>
              <ul className="space-y-1.5 mt-2">
                {[
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: "What You'll Get", href: '#outcomes' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'Book a Call', href: '/book' },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground text-sm">Legal</h4>
              <ul className="space-y-1.5 mt-2">
                <li><Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ResumePro by{' '}
            <a href="https://www.linkedin.com/in/saianeeshg90/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
              Sai Aneesh Sharma
            </a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
