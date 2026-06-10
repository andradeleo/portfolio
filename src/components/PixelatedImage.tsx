import { useId } from "react";

type PixelatedImageProps = {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  always?: boolean;
};

export function PixelatedImage({
  src,
  alt,
  title,
  className = "relative",
  always = false,
}: PixelatedImageProps) {
  const rawId = useId();
  const filterId = `pixelate-${rawId.replace(/:/g, "")}`;

  return (
    <div
      className={`group overflow-hidden rounded-2xl shadow-2xl ${className}`}
      style={{ ["--pixel-filter" as string]: `url(#${filterId}) blur(0.5px)` }}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full cursor-none object-cover transition-[filter] duration-500 ease-in-out ${
          always
            ? "[filter:var(--pixel-filter)]"
            : "group-hover:[filter:var(--pixel-filter)]"
        }`}
      />
      {title && (
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/55 p-2 text-center transition-opacity duration-500 ease-in-out ${
            always ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <span className="text-xs font-bold tracking-tight text-zinc-100">
            {title}
          </span>
        </div>
      )}
      <svg className="absolute size-0">
        <filter id={filterId} x="0" y="0">
          <feFlood x="6" y="6" height="2" width="2" />
          <feComposite width="22" height="22" />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius="11" />
        </filter>
      </svg>
    </div>
  );
}
