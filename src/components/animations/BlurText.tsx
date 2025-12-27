import { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  animateBy?: "chars" | "words";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: gsap.TweenVars;
  animationTo?: gsap.TweenVars;
}

const BlurText = ({
  text,
  className = "",
  delay = 50,
  duration = 0.5,
  yOffset = 20,
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  animationFrom,
  animationTo,
}: BlurTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const defaultFrom: gsap.TweenVars = useMemo(
    () => ({
      opacity: 0,
      y: direction === "top" ? -yOffset : yOffset,
      filter: "blur(10px)",
    }),
    [direction, yOffset]
  );

  const defaultTo: gsap.TweenVars = useMemo(
    () => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }),
    []
  );

  const from = animationFrom || defaultFrom;
  const to = animationTo || defaultTo;

  const splitContent = useMemo(() => {
    if (animateBy === "chars") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className="blur-char inline-block"
          style={{ opacity: 0, filter: "blur(10px)" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="blur-word inline-block mr-[0.3em]"
          style={{ opacity: 0, filter: "blur(10px)" }}
        >
          {word}
        </span>
      ));
    }
  }, [text, animateBy]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const elements = container.querySelectorAll(
              animateBy === "chars" ? ".blur-char" : ".blur-word"
            );

            gsap.fromTo(elements, from, {
              ...to,
              duration,
              stagger: delay / 1000,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [delay, duration, from, to, threshold, animateBy]);

  return (
    <div ref={containerRef} className={className}>
      {splitContent}
    </div>
  );
};

export default BlurText;
