import { animate, stagger } from "motion/react";
import { useEffect, useMemo, useRef } from "react";

const NBSP = String.fromCharCode(160);

type RevealTextProps = {
  text: string;
  className?: string;
};

export function RevealText({ text, className }: RevealTextProps) {
  const chars = useMemo(() => Array.from(text), [text]);
  const containerRef = useRef<HTMLSpanElement>(null);

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

  return (
    <span className={className} ref={containerRef} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={i}
          data-char
          aria-hidden
          className="inline-block will-change-transform"
          style={{ opacity: 0 }}
        >
          {char === " " ? NBSP : char}
        </span>
      ))}
    </span>
  );
}
