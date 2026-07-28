import ScrollReveal from "@/components/common/ScrollReveal";

const services = [
  { title: "Creative Strategy", desc: "We architect campaigns before the first camera rolls" },
  { title: "Content Production", desc: "End-to-end production management at global scale" },
  { title: "Commercial Shoots", desc: "TVC, digital spots, and brand films that convert" },
  { title: "Podcast Production", desc: "Premium audio/video podcast production suites" },
  { title: "Video Editing", desc: "Narrative-driven post-production that tells your story" },
  { title: "Color Grading", desc: "Cinematic grade and color science for any format" },
  { title: "Social Media Content", desc: "Platform-native content at scale, without compromise" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-foreground mb-4">What We Do</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-sans font-light text-muted-foreground uppercase tracking-widest text-sm">Full-spectrum creative production</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="group bg-card border border-card-border p-10 h-full flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_20px_rgba(201,168,76,0.1)] rounded-[0.125rem]">
                <div className="mb-16">
                  <span className="font-sans font-light text-5xl text-primary/30 group-hover:text-primary/60 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
