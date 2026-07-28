import { useState, useEffect } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";

const testimonials = [
  {
    quote: "samR1 transformed our brand vision into something we couldn't have imagined. Pure artistry.",
    author: "Sarah Chen",
    role: "CMO at Apex"
  },
  {
    quote: "The team's attention to narrative and pacing elevated our campaign above every competitor.",
    author: "Marcus Reed",
    role: "VP Marketing at Neon"
  },
  {
    quote: "From brief to final cut, the process was seamless. They just get it.",
    author: "Priya Sharma",
    role: "Brand Director at Drift"
  },
  {
    quote: "Three years, twelve campaigns, zero compromises. samR1 is our permanent creative partner.",
    author: "James Okafor",
    role: "CEO at Form Media"
  },
  {
    quote: "They don't just produce content — they engineer cultural moments.",
    author: "Elena Torres",
    role: "Head of Content at Luma"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-card border-y border-card-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative">
        <ScrollReveal>
          <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-16">What Clients Say</h2>

          <div className="relative min-h-[250px] md:min-h-[200px] flex items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl font-serif text-white/5 font-black opacity-20 -z-10 select-none">"</div>

            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${idx === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
              >
                <p className="font-serif text-2xl md:text-4xl italic text-foreground mb-10 leading-tight">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-sans font-medium text-foreground text-sm">{t.author}</h4>
                  <p className="font-sans font-light text-muted-foreground text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-[2px] transition-all duration-300 ${idx === current ? "w-8 bg-primary" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
