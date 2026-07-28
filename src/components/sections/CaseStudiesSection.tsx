import ScrollReveal from "@/components/common/ScrollReveal";
import MagneticButton from "@/components/common/MagneticButton";

const cases = [
  {
    title: "APEX — Brand Relaunch",
    desc: "A full brand identity and film package for a Fortune 500 relaunch",
    img: "/case-1.png",
  },
  {
    title: "NEON — Global Campaign",
    desc: "48-hour social domination across 12 markets, 200M+ impressions",
    img: "/case-2.png",
  },
  {
    title: "DRIFT — Automotive Film",
    desc: "A cinematic 4-minute brand film that won 3 industry awards",
    img: "/case-1.png", // Reusing image if no case-3 generated properly, wait we have case-1, case-2. I'll use case-1.png as fallback.
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="space-y-32">
          {cases.map((c, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              <div className="w-full lg:w-3/5">
                <ScrollReveal>
                  <div className="relative aspect-video overflow-hidden border border-card-border p-2 group">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col items-start">
                <ScrollReveal delay={0.2}>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">{c.title}</h3>
                  <p className="font-sans font-light text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
                    {c.desc}
                  </p>
                  <MagneticButton>
                    <button className="group flex items-center gap-4 text-primary font-sans text-xs tracking-widest uppercase pb-2 border-b border-primary/30 hover:border-primary transition-colors">
                      View Case Study
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </button>
                  </MagneticButton>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
