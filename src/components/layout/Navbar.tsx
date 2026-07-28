import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";
import TeamModal from "@/components/common/TeamModal";

export default function Navbar() {
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#contact";
    } else {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleTeamClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTeamModalOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-md bg-black/85 border-b border-white/5 py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="font-serif text-primary text-3xl font-bold tracking-widest uppercase">
            samR1
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/#works" 
              onClick={(e) => handleNavClick(e, "works")} 
              className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer"
            >
              Works
            </a>
            <a 
              href="/#services" 
              onClick={(e) => handleNavClick(e, "services")} 
              className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a 
              href="/#process" 
              onClick={(e) => handleNavClick(e, "process")} 
              className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer"
            >
              Process
            </a>
            <a 
              href="/#about" 
              onClick={(e) => handleNavClick(e, "about")} 
              className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              href="/team" 
              onClick={handleTeamClick} 
              className="font-sans font-light text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer"
            >
              Team
            </a>
            <MagneticButton>
              <button 
                onClick={handleContactClick} 
                className="border border-primary text-primary px-6 py-2 rounded-full uppercase tracking-widest text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                Contact
              </button>
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col justify-center items-center">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute top-6 right-6 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col gap-8 text-center">
            <span className="font-sans text-sm tracking-[0.25em] text-muted-foreground/70 uppercase mb-2 font-semibold">
              NAVIGATION
            </span>
            <a 
              href="/#works" 
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, "works"); }} 
              className="font-serif text-4xl hover:text-primary transition-colors cursor-pointer"
            >
              Works
            </a>
            <a 
              href="/#services" 
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, "services"); }} 
              className="font-serif text-4xl hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a 
              href="/#process" 
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, "process"); }} 
              className="font-serif text-4xl hover:text-primary transition-colors cursor-pointer"
            >
              Process
            </a>
            <a 
              href="/#about" 
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, "about"); }} 
              className="font-serif text-4xl hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              href="/team" 
              onClick={handleTeamClick} 
              className="font-serif text-4xl hover:text-primary transition-colors cursor-pointer"
            >
              Team
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => { 
                setMobileMenuOpen(false); 
                if (window.location.pathname !== "/") { 
                  window.location.href = "/#contact"; 
                } else { 
                  e.preventDefault(); 
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); 
                } 
              }} 
              className="font-serif text-4xl hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      <TeamModal open={teamModalOpen} onOpenChange={setTeamModalOpen} />
    </>
  );
}
