import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialDock from "@/components/SocialDock";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <SocialDock />
    </main>
  );
}
