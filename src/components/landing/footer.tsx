import { Code } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <Code className="h-7 w-7 text-primary" />
              <span>PATHLABS PL</span>
            </Link>
            <p className="text-slate-400 mt-2 text-sm">Future-proofing careers through code.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="text-slate-400 mt-2 text-sm space-y-1">
              <p>Hyderabad, Telangana, India</p>
              <a href="mailto:contactpathlabs@gmail.com" className="block hover:text-primary transition-colors">contactpathlabs@gmail.com</a>
              <a href="tel:+91968462110" className="block hover:text-primary transition-colors">+91 968462110</a>
              <a href="tel:+917993269138" className="block hover:text-primary transition-colors">+91 79932 69138</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-1 mt-2">
                <li><Link href="#" className="text-slate-400 text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-slate-400 text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} PATHLABS PL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
