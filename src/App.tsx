export default function App() {
  return (
    <div className="mx-auto flex min-h-svh max-w-281.5 flex-col border-x border-border text-center">
      <section className="flex grow flex-col gap-4 text-sm"></section>

      <div className="ticks"></div>

      <section className="flex flex-col border-t border-border text-center lg:flex-row lg:text-left">
        <div className="flex-1 border-b border-border px-5 py-6 lg:border-r lg:border-b-0 lg:p-8"></div>
        <div className="flex-1 px-5 py-6 lg:p-8"></div>
      </section>

      <div className="ticks"></div>
      <section className="h-12 border-t border-border lg:h-12"></section>
    </div>
  );
}
