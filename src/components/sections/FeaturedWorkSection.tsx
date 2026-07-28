import { useState } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";

const filters = ["All", "Commercial", "Brand Film", "Social", "Campaign"];

const works = [
  { id: 1, title: "Apex Relaunch", category: "Brand Film", img: "/work-1.png" },
  { id: 2, title: "Neon Nights", category: "Commercial", img: "/work-2.png" },
  { id: 3, title: "Drift Core", category: "Campaign", img: "/work-3.png" },
  { id: 4, title: "Luma Vision", category: "Social", img: "/work-4.png" },
  { id: 5, title: "Form Identity", category: "Commercial", img: "/work-5.png" },
  { id: 6, title: "Kova Series", category: "Campaign", img: "/work-6.png" },
];

export default function FeaturedWorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredWorks = works.filter(w => activeFilter === "All" || w.category === activeFilter);

  return (
    <section id="works" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="font-serif text-4xl md:text-6xl font-black italic text-foreground">Selected Work</h2>
            
            <div className="flex flex-wrap gap-4 md:gap-8">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`font-sans font-light text-xs tracking-widest uppercase pb-1 border-b transition-colors ${
                    activeFilter === f 
                      ? "text-primary border-primary" 
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {filteredWorks.map((work, idx) => (
            <ScrollReveal key={work.id} delay={idx * 0.1}>
              <div className="group relative aspect-video overflow-hidden rounded-[0.125rem] bg-card border border-card-border cursor-pointer">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary mb-2 block">
                      {work.category}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-white mb-4">{work.title}</h3>
                    <div className="inline-flex items-center gap-2 text-white font-sans text-xs uppercase tracking-widest">
                      <span className="w-8 h-[1px] bg-white"></span>
                      Play Reel
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
