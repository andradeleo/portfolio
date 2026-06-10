import { animate, stagger } from "motion/react";
import { useEffect, useMemo, useRef } from "react";

const NBSP = String.fromCharCode(160);

type SplitTextProps = {
  text: string;
  className?: string;
};

export function SplitText({ text, className }: SplitTextProps) {
  const chars = useMemo(() => Array.from(text), [text]);
  const containerRef = useRef<HTMLSpanElement>(null);
  const velocityX = useRef(0);
  const velocityY = useRef(0);
  const prevEvent = useRef(0);

  // Entrance: chars rise + fade in, staggered.
  useEffect(() => {
    if (!containerRef.current) return;
    const charEls = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>("[data-char]"),
    );
    animate(
      charEls,
      { opacity: [0, 1], y: [28, 0] },
      {
        delay: stagger(0.04),
        type: "spring",
        stiffness: 200,
        damping: 22,
      },
    );
  }, []);

  // Scatter: shove a char in pointer-movement direction by pointer speed.
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const dt = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      if (dt <= 0) return;
      velocityX.current = event.movementX / dt;
      velocityY.current = event.movementY / dt;
    };
    document.addEventListener("pointermove", handlePointerMove);
    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const scatter = (node: HTMLElement) => {
    const vx = velocityX.current;
    const vy = velocityY.current;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const angle = Math.atan2(vy, vx);
    const distance = speed * 0.1;
    animate(
      node,
      { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance },
      { type: "spring", stiffness: 100, damping: 50 },
    );
  };

  return (
    <span className={className} ref={containerRef} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={i}
          data-char
          aria-hidden
          className="inline-block will-change-transform"
          style={{ opacity: 0 }}
          onPointerEnter={(e) => scatter(e.currentTarget)}
        >
          {char === " " ? NBSP : char}
        </span>
      ))}
    </span>
  );
}
