import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-background/80 py-16 border-t border-subtle/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-background">
            Agency<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-subtle/60 max-w-xs text-center md:text-left">
            Building high-converting websites for local and service businesses.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <Link href="#services" className="hover:text-background transition-colors">Services</Link>
          <Link href="#works" className="hover:text-background transition-colors">Works</Link>
          <Link href="#why-us" className="hover:text-background transition-colors">Why Us</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-subtle/10 text-center text-sm text-subtle/40">
        &copy; {new Date().getFullYear()} Agency. All rights reserved.
      </div>
    </footer>
  );
}
