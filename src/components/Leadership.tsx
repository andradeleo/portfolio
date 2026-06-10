type Highlight = {
  value: string;
  label: string;
};

const highlights: Highlight[] = [
  { value: "02", label: "Desenvolvedores liderados" },
  { value: "09", label: "Meses à frente do time" },
  { value: "100%", label: "Do planejamento à entrega" },
];

export function Leadership() {
  return (
    <section className="my-32 text-left">
      <h2 className="mb-16 text-5xl font-bold tracking-tighter text-zinc-200">
        Liderança
      </h2>

      <p className="max-w-3xl text-2xl leading-snug font-medium tracking-tight text-zinc-300">
        Liderei uma equipe com mais dois desenvolvedores — trabalho que me
        rendeu o estágio e a bolsa no curso da{" "}
        <span className="text-orange-500">Academia do Programador</span>.
        Planejamento de projetos, modelagem de banco de dados e estimativa de
        prazos fizeram parte da minha rotina por 9 meses — uma jornada de
        aprendizado, soft skills e novos conhecimentos.
      </p>

      <dl className="mt-16 grid grid-cols-1 gap-10 border-t border-zinc-700 pt-10 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <dt className="text-6xl font-black tracking-tighter text-zinc-100">
              {item.value}
            </dt>
            <dd className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
