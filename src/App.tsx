import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Leadership } from "./components/Leadership";
import { FeaturedProject } from "./components/FeaturedProject";
import { Blocks } from "./components/Blocks";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen justify-center overflow-x-hidden bg-zinc-900">
      <div className="container mx-auto flex grow flex-col px-6 text-center sm:px-8">
        <Hero />
        <Timeline />
        <Leadership />
        <FeaturedProject />
        <Blocks />
        <Footer />
      </div>
    </div>
  );
}
