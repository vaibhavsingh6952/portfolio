import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Before from "@/components/Before";

export default function Home() {
  return (
    <main className="px-5 md:px-0">
      <Hero />
      <Projects />
      <Before />
      <footer className="max-w-2xl mx-auto mt-40 pb-20 text-gray-400 text-xl max-md:text-lg">
        feel free to talk ᝯ.ᐟ 
      </footer>
    </main>
  );
}