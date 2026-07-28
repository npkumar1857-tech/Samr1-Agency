import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/common/ScrollReveal";

const steps = [
  { title: "Discovery", desc: "Understanding your brand, audience, and the narrative whitespace we can own." },
  { title: "Strategy", desc: "Architecting the creative direction, visual language, and distribution approach." },
  { title: "Production", desc: "Executing the vision with our premium directors, DP's, and specialized crews." },
  { title: "Post Production", desc: "Editing, color grading, sound design, and VFX to craft the final masterpiece." },
  { title: "Distribution", desc: "Formatting and optimizing assets natively across all specified platforms." }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.process-step');
      
      items.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-32 bg-[#0a0a0a] relative" ref={containerRef}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-24">How We Work</h2>
        </ScrollReveal>

        <div className="flex flex-col gap-16 md:gap-24 relative pl-8 md:pl-32">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-[55px] top-4 bottom-4 w-[1px] bg-white/10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="process-step relative">
              <div className="absolute -left-[30px] md:-left-[81px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10"></div>
              
              <div className="absolute -left-4 md:-left-8 top-[-60px] md:top-[-80px] -z-10 text-[100px] md:text-[140px] font-serif font-black leading-none text-white/5 select-none">
                0{idx + 1}
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 pt-1">{step.title}</h3>
              <p className="font-sans font-light text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
