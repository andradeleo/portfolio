import { motion } from "motion/react";

const reveal = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function RevealLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative block overflow-hidden font-medium tracking-tight"
    >
      <motion.span
        variants={{ rest: { y: "0%" }, hover: { y: "-110%" } }}
        transition={reveal}
        className="block text-zinc-400"
      >
        {label}
      </motion.span>
      <motion.span
        variants={{ rest: { y: "110%" }, hover: { y: "0%" } }}
        transition={reveal}
        className="absolute inset-0 block text-orange-500"
      >
        {label}
      </motion.span>
    </motion.a>
  );
}
