import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

const ParallaxSection = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Calculate the parallax offset
      const parallaxOffset = distanceFromCenter * speed * (direction === "up" ? 1 : -1);
      
      gsap.set(content, {
        y: parallaxOffset,
      });
    };

    // Initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed, direction]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default ParallaxSection;
