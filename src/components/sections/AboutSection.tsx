import { useEffect, useState, useRef } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import ScrollReveal from "@/components/common/ScrollReveal";

const stats = [
  { value: 5, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Clients" },
  { value: 2, suffix: "+", label: "Years" },

];

function Counter({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="font-sans font-light text-xs tracking-widest uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5 order-2 lg:order-1">
            <AnimatedText
              text="Storytellers. Strategists. Creators."
              className="font-serif text-4xl md:text-5xl font-black italic text-foreground mb-8 leading-tight"
            />

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 font-sans font-light text-muted-foreground text-sm md:text-base leading-relaxed mb-12">
                <p>
                  We are a premium creative production studio born from a singular belief: the most powerful brands are built on unforgettable visual narratives.
                </p>
                <p>
                  Our roster of directors, cinematographers, and post-production artists approach every frame with obsessive attention to detail, crafting campaigns that don't just capture attention—they command it.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {stats.map((stat, i) => (
                <Counter key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 h-full min-h-[500px] relative">
            <ScrollReveal className="w-full h-full">
              <div className="w-full h-full relative border border-card-border p-2">
                <img
                  src="/about-bg.png"
                  alt="Behind the scenes production"
                  className="w-full h-full object-cover filter grayscale-[20%] contrast-125"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
