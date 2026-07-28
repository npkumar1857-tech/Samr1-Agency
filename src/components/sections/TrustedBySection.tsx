export default function TrustedBySection() {
  const logos = [
    "DARLOE", "A2 MILK", "FLAWSOMEBERRY", "PRADA", "SAMR1"
  ];

  // Duplicate for seamless loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-white/2 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10">
        <p className="font-sans font-light text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Trusted by
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] flex whitespace-nowrap shrink-0">
          {marqueeLogos.map((logo, i) => (
            <span
              key={i}
              className="mx-12 font-sans font-bold text-2xl tracking-widest text-white/40 uppercase"
            >
              {logo}
            </span>
          ))}
        </div>
        <div className="animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] flex whitespace-nowrap shrink-0">
          {marqueeLogos.map((logo, i) => (
            <span
              key={i}
              className="mx-12 font-sans font-bold text-2xl tracking-widest text-white/40 uppercase"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
