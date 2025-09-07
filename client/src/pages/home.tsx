import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="home-page">
      <Header onNavigate={handleNavigation} />
      <main>
        <Hero onViewWork={handleViewWork} />
        <About />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
