import { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  textAlign?: "left" | "center" | "right";
  tag?: keyof JSX.IntrinsicElements;
}

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  textAlign = "center",
  tag: Tag = "p",
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const splitContent = useMemo(() => {
    if (splitType === "chars") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className="split-char inline-block"
          style={{ opacity: 0 }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="split-word inline-block mr-[0.25em]"
          style={{ opacity: 0 }}
        >
          {word}
        </span>
      ));
    } else {
      return (
        <span className="split-line block" style={{ opacity: 0 }}>
          {text}
        </span>
      );
    }
  }, [text, splitType]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const elements = container.querySelectorAll(
              splitType === "chars"
                ? ".split-char"
                : splitType === "words"
                ? ".split-word"
                : ".split-line"
            );

            gsap.fromTo(
              elements,
              from,
              {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
              }
            );
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [delay, duration, ease, from, to, threshold, splitType]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ textAlign }}
    >
      <Tag className="inline">{splitContent}</Tag>
    </div>
  );
};

export default SplitText;
