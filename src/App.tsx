import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Leadership } from "./components/Leadership";
import { Blocks } from "./components/Blocks";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-900">
      <div className="container flex grow flex-col text-center">
        <Hero />
        <Timeline />
        <Leadership />
        <Blocks />
        <Footer />
      </div>
    </div>
  );
}
