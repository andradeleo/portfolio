import { PixelatedImage } from "./PixelatedImage";

export function About() {
  return (
    <div className="relative mt-60">
      <section className="flex h-[360px] justify-end rounded-2xl bg-zinc-100 px-16 py-10">
        <div className="flex w-1/2 flex-col justify-center text-left">
          <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">
            Sobre mim
          </span>
          <p className="mt-4 text-3xl leading-snug font-semibold tracking-tight text-zinc-950">
            Atualmente, atuo como{" "}
            <span className="text-orange-600">desenvolvedor full stack</span>{" "}
            utilizando <span className="text-orange-600">Angular</span> como
            principal tecnologia.
          </p>
        </div>
      </section>
      <section className="mt-4 flex h-[120px] items-center justify-end rounded-2xl bg-orange-500 pr-12 text-7xl font-black"></section>
      <PixelatedImage
        src="/andradeleo.jpeg"
        alt="Andradeleo"
        title="Leonardo Andrade"
        className="absolute top-[40%] left-32 h-[540px] w-[405px] -translate-y-1/2"
      />
    </div>
  );
}
