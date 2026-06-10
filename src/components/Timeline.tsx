type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
};

const entries: TimelineEntry[] = [
  {
    period: "MAI 2025 — PRESENTE",
    role: "Desenvolvedor Full Stack - Pleno",
    company: "NDD Tech",
    description:
      "Correções de bugs, OAuth2, uso de IA para produtividade, Infraestrutura.",
    tags: [
      "Angular",
      "CI/CD",
      "Docker",
      "Microsserviços",
      "Micro-frontends",
      "C#",
    ],
  },
  {
    period: "JAN 2024 — MAI 2025",
    role: "Desenvolvedor Full Stack - Junior",
    company: "NDD Tech",
    description: "Construção de design system e correções de bugs.",
    tags: ["Angular", "TypeScript", "Microsserviços", "Micro-frontends", "C#"],
  },
  {
    period: "JAN 2023 — DEZ 2023",
    role: "Estagiário",
    company: "Academia do Programador",
    description:
      "Estudos e primeiros passos profissionais desenvolvendo sistemas em parceria com a NDD Tech.",
    tags: ["C#", "Typescript", "Testes Automatizados", "Angular"],
  },
];

export function Timeline() {
  return (
    <section className="my-32 text-left">
      <h2 className="mb-16 text-5xl font-bold tracking-tighter text-zinc-200">
        Carreira
      </h2>
      <ol className="relative ml-3 border-l border-zinc-700">
        {entries.map((item, i) => (
          <li key={i} className="group relative pb-16 pl-10 last:pb-0">
            <span className="absolute top-1.5 -left-[7px] size-3 rounded-full border-2 border-zinc-900 bg-zinc-600 group-first:bg-orange-500"></span>
            <span className="block text-sm font-medium tracking-wide text-zinc-500 uppercase">
              {item.period}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-zinc-100">
              {item.role}
              <span className="text-orange-500"> @ {item.company}</span>
            </h3>
            <p className="mt-3 max-w-xl text-lg text-zinc-400">
              {item.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
