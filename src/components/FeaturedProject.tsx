const project = {
  title: "Plataforma Oncrivo",
  href: "https://www.oncrivo.com.br/",
  linkLabel: "oncrivo.com.br",
  image: "/oncrivo.jpg",
  description:
    "Plataforma de análise de currículos com IA: avalia projetos, escrita, formatação e estrutura, entregando um diagnóstico claro com pontos fortes e sugestões práticas para destacar cada candidato.",
};

export function FeaturedProject() {
  return (
    <section className="my-32 text-left">
      <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-12">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-square w-44 shrink-0 rounded-2xl object-cover shadow-2xl sm:w-56"
        />

        <div className="flex flex-col">
          <h2 className="text-4xl font-bold tracking-tighter text-zinc-100 sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed font-medium text-zinc-400">
            {project.description}
          </p>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-orange-500 underline-offset-4 transition-colors hover:text-orange-400 hover:underline"
          >
            ↗ {project.linkLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
