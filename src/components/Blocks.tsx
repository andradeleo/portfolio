type Block = {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
};

const blocks: Block[] = [
  {
    title: "Tecnologias",
    text: "Angular · TypeScript · Dotnet · Docker · CI/CD · Microsserviços · Micro-frontends · React · NodeJs",
  },
  {
    title: "Estudo",
    text: "Mergulhando em infraestrutura, microservices e micro-frontends para entregar sistemas mais robustos.",
  },
  {
    title: "Oncrivo",
    text: "Plataforma que desenvolvo de ponta a ponta, do back-end à interface, cuidando de cada detalhe.",
    href: "https://www.oncrivo.com.br/",
    linkLabel: "↗ oncrivo.com.br",
  },
  {
    title: "Graduação",
    text: "Em andamento, AGO 2025 — AGO 2029",
  },
  {
    title: "Cursos",
    text: "Curso.dev · FullCycle · Academia do Programador",
  },
  {
    title: "Idiomas",
    text: "Português · Inglês",
  },
];

export function Blocks() {
  return (
    <section className="mb-48 grid grid-cols-1 gap-x-8 gap-y-12 text-left md:grid-cols-3">
      {blocks.map((block) => (
        <div
          key={block.title}
          className="flex flex-col border-t border-zinc-700 pt-5"
        >
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold tracking-wide text-zinc-200">
            {block.title}
            {block.href && (
              <a
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-orange-500 underline-offset-2 transition-colors hover:text-orange-400 hover:underline"
              >
                {block.linkLabel ?? block.href}
              </a>
            )}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-500">{block.text}</p>
        </div>
      ))}
    </section>
  );
}
