import { Link } from "wouter";
import { SiInstagram, SiVimeo, SiBehance, SiWhatsapp } from "react-icons/si";

export default function Footer() {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (window.location.pathname !== "/") {
      return;
    }
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-background border-t-2 border-primary/20 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-3xl font-bold tracking-widest text-primary mb-4">samR1</h2>
            <p className="text-muted-foreground font-sans font-light text-sm">
              A premium creative production studio architecting visual stories for the world's most ambitious brands.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6">Navigation</h3>
            <ul className="space-y-3 font-sans font-light text-muted-foreground">
              <li><Link href="/#works" onClick={(e) => handleNavClick(e, "works")} className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer">Works</Link></li>
              <li><Link href="/#services" onClick={(e) => handleNavClick(e, "services")} className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/#process" onClick={(e) => handleNavClick(e, "process")} className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer">Process</Link></li>
              <li><Link href="/#about" onClick={(e) => handleNavClick(e, "about")} className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6">Connect</h3>
            <ul className="space-y-3 font-sans font-light text-muted-foreground">
              <li><a href="mailto:samr1films@gmail.com" className="hover:text-primary transition-colors">samr1films@gmail.com</a></li>
              <li><a href="tel:+919511209061" className="hover:text-primary transition-colors">+91 95112 09061</a></li>
              <li><a href="https://www.instagram.com/samr1.films?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@samr1.films</a></li>
              <li><a href="https://wa.me/919511209061" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6">Socials</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/samr1.films?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><SiInstagram size={20} /></a>
              <a href="https://wa.me/919511209061" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors"><SiWhatsapp size={20} /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/50 font-sans">
          <p>&copy; {new Date().getFullYear()} samR1 Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
