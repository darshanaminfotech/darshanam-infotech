import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ParticlesProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
}

const Particles = ({
  className = "",
  particleCount = 50,
  particleColor = "hsl(var(--accent))",
  minSize = 2,
  maxSize = 6,
  speed = 1,
}: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = "";
    particlesRef.current = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * (maxSize - minSize) + minSize;
      
      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor = particleColor;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate each particle
      animateParticle(particle, speed);
    }

    return () => {
      particlesRef.current.forEach((particle) => {
        gsap.killTweensOf(particle);
      });
    };
  }, [particleCount, particleColor, minSize, maxSize, speed]);

  const animateParticle = (particle: HTMLDivElement, speed: number) => {
    const duration = (Math.random() * 10 + 10) / speed;
    const xMove = Math.random() * 100 - 50;
    const yMove = Math.random() * 100 - 50;

    gsap.to(particle, {
      x: xMove,
      y: yMove,
      duration,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(particle, {
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 3 + 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
};

export default Particles;
