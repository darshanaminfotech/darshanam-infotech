import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface FloatingShapesProps {
  className?: string;
}

const FloatingShapes = ({ className = "" }: FloatingShapesProps) => {
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);
  const shape4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = [shape1Ref.current, shape2Ref.current, shape3Ref.current, shape4Ref.current];
    
    shapes.forEach((shape, index) => {
      if (!shape) return;

      // Float animation
      gsap.to(shape, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(4, 8)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5,
      });

      // Scale pulse
      gsap.to(shape, {
        scale: "random(0.9, 1.1)",
        duration: "random(3, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3,
      });
    });

    return () => {
      shapes.forEach((shape) => {
        if (shape) gsap.killTweensOf(shape);
      });
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Circle */}
      <div
        ref={shape1Ref}
        className="absolute top-[10%] right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-accent/20 bg-accent/5"
      />
      
      {/* Square rotated */}
      <div
        ref={shape2Ref}
        className="absolute top-[60%] left-[5%] w-24 h-24 md:w-32 md:h-32 rotate-45 border-2 border-accent/15 bg-accent/5"
      />
      
      {/* Small circle */}
      <div
        ref={shape3Ref}
        className="absolute top-[30%] left-[15%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent/10"
      />
      
      {/* Large blurred circle */}
      <div
        ref={shape4Ref}
        className="absolute bottom-[20%] right-[15%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-accent/10 blur-3xl"
      />
    </div>
  );
};

export default FloatingShapes;
