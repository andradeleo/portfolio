import { SplitText } from "./SplitText";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-start justify-center text-left">
      {/* backdrop — eco "portfolio" (ref4/ref5) */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-4 -left-4 -z-10 text-[14rem] leading-none font-black tracking-tighter text-zinc-900 uppercase select-none lg:text-[20rem]"
      >
        Portfolio
      </span>

      <h1 className="flex flex-col items-start font-black tracking-tighter uppercase antialiased select-none">
        <SplitText
          text="Olá, eu sou"
          className="mb-4 text-7xl text-zinc-800/40 lg:text-8xl"
        />
        <span className="whitespace-nowrap">
          <SplitText
            text="Leonardo Andrade"
            className="text-6xl text-zinc-100 sm:text-7xl lg:text-8xl xl:text-9xl"
          />
        </span>
      </h1>

      {/* bloco inferior: cargo + intro (ref2/ref3) */}
      <div className="mt-16 grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
        <span className="pt-1.5 text-sm font-bold tracking-widest text-zinc-500 uppercase">
          Software
          <br />
          Engineer
        </span>

        <p className="max-w-2xl text-justify text-lg leading-relaxed tracking-tight text-zinc-400 lg:text-2xl">
          Desenvolvedor full stack com{" "}
          <span className="text-zinc-100">mais de 3 anos de experiência</span>,
          atualmente construindo com{" "}
          <span className="text-zinc-100">Angular</span> e{" "}
          <span className="text-zinc-100">Dotnet</span>.
        </p>
      </div>
    </section>
  );
}
