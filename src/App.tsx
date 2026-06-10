import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Blocks } from "./components/Blocks";

export default function App() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-900">
      <div className="container flex grow flex-col text-center">
        <Header />
        <Hero />
        <About />
        <Timeline />
        <Blocks />
      </div>
    </div>
  );
}
