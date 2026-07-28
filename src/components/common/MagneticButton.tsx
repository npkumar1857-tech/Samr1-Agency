import { ReactNode } from "react";
import { useRef } from "react";

export default function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    ref.current.style.transform = `translate(${middleX * 0.2}px, ${middleY * 0.2}px)`;
    ref.current.style.transition = "transform 0.1s ease-out";
  };

  const reset = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="relative inline-block"
    >
      {children}
    </div>
  );
}
