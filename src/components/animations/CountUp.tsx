import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  threshold?: number;
  separator?: string;
}

const CountUp = ({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
  threshold = 0.1,
  separator = "",
}: CountUpProps) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return;

    const formatNumber = (num: number) => {
      const rounded = Math.round(num);
      if (separator) {
        return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      }
      return rounded.toString();
    };

    element.textContent = prefix + formatNumber(from) + suffix;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            gsap.to(
              { value: from },
              {
                value: to,
                duration,
                delay: delay / 1000,
                ease: "power2.out",
                onUpdate: function () {
                  if (element) {
                    element.textContent =
                      prefix + formatNumber(this.targets()[0].value) + suffix;
                  }
                },
              }
            );
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [from, to, duration, delay, prefix, suffix, threshold, separator]);

  return (
    <span ref={countRef} className={className}>
      {prefix}{from}{suffix}
    </span>
  );
};

export default CountUp;
