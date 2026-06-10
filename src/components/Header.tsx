import { RevealLink } from "./RevealLink";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between py-8 font-bold text-zinc-400">
      <span>{new Date().getFullYear()}</span>
      <div className="flex items-center gap-4">
        <RevealLink href="https://github.com/andradeleo" label="GitHub" />
        <span className="text-2xl text-zinc-400">·</span>
        <RevealLink
          href="https://www.linkedin.com/in/dev-andradeleo/"
          label="LinkedIn"
        />
      </div>
      <span>Brasil</span>
    </header>
  );
}
