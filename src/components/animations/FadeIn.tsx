import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  threshold?: number;
  stagger?: number;
}

const FadeIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  threshold = 0.1,
  stagger = 0,
}: FadeInProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getDirectionValues = () => {
      switch (direction) {
        case "up":
          return { y: distance, x: 0 };
        case "down":
          return { y: -distance, x: 0 };
        case "left":
          return { x: distance, y: 0 };
        case "right":
          return { x: -distance, y: 0 };
        default:
          return { x: 0, y: 0 };
      }
    };

    const { x, y } = getDirectionValues();

    gsap.set(container, {
      opacity: 0,
      x,
      y,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            gsap.to(container, {
              opacity: 1,
              x: 0,
              y: 0,
              duration,
              delay: delay / 1000,
              ease: "power3.out",
            });
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [delay, duration, direction, distance, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
