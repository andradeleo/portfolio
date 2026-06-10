import { PixelatedImage } from "./PixelatedImage";
import { RevealLink } from "./RevealLink";

const links = [
  { label: "GitHub", href: "https://github.com/andradeleo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-andradeleo/" },
] as const;

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 pt-16 pb-10 text-left">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
            Vamos trabalhar juntos
          </span>
          <div className="flex items-center gap-5">
            <PixelatedImage
              src="/andradeleo.jpeg"
              alt="Leonardo Andrade"
              title="andradeleo"
              className="relative size-20 shrink-0 rounded-xl"
            />
            <a
              href="mailto:contato.andradeleo@gmail.com"
              className="text-2xl font-black break-all tracking-tighter text-zinc-100 transition-colors hover:text-zinc-400 sm:text-4xl lg:text-6xl"
            >
              contato.andradeleo@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 font-bold text-zinc-400">
          {links.map((link, i) => (
            <div key={link.label} className="flex items-center gap-4">
              {i > 0 && <span className="text-2xl text-zinc-700">·</span>}
              <RevealLink href={link.href} label={link.label} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between text-sm font-bold text-zinc-600">
        <span>© {new Date().getFullYear()} Leonardo Andrade</span>
        <span>Brasil</span>
      </div>
    </footer>
  );
}
