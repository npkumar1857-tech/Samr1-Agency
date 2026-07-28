import MagneticButton from "@/components/common/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Fallback */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Cinematic production studio" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#080808]/85" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16">
        <span className="font-sans font-light text-xs tracking-[0.3em] text-primary uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Creative Production Studio
        </span>
        
        <h1 className="font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.9] text-foreground mb-8">
          <span className="block animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">We Craft</span>
          <span className="block italic font-bold animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">Visual Stories</span>
        </h1>
        
        <p className="font-sans font-light text-muted-foreground text-lg md:text-xl max-w-[520px] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          From concept to screen — we build campaigns that move people, brands that endure, and stories that define culture.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <MagneticButton>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-primary/90 transition-colors">
              View Our Work
            </button>
          </MagneticButton>
          <MagneticButton>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition-colors">
              Get In Touch
            </button>
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
        <span className="font-sans text-[10px] tracking-widest text-white/50 uppercase">Scroll</span>
      </div>
    </section>
  );
}
