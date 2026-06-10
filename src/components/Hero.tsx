import { SplitText } from "./SplitText";

export function Hero() {
  return (
    <section className="my-48 flex flex-col items-start justify-start">
      <h1 className="flex flex-col items-start font-black tracking-tighter uppercase antialiased select-none">
        <SplitText text="andradeleo" className="text-8xl text-zinc-800/40" />
        <SplitText text="leonardo Andrade" className="text-9xl text-zinc-200" />
        <SplitText
          text="Software Engineer"
          className="text-8xl text-zinc-800/60"
        />
      </h1>
    </section>
  );
}
