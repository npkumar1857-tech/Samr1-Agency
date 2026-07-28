import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  yOffset = 40 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [delay, yOffset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
