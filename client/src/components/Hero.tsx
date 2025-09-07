import { Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/lib/whatsapp";
import TypingAnimation from "@/components/TypingAnimation";

interface HeroProps {
  onViewWork: () => void;
}

export default function Hero({ onViewWork }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-primary/30 overflow-hidden"
               data-testid="profile-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                 alt="Muhammad Abdullah - AI Developer" 
                 className="w-full h-full object-cover" 
                 loading="lazy" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Muhammad Abdullah
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" 
               data-testid="hero-subtitle">
            BSAI Student | 
            <TypingAnimation 
              texts={[
                "Generative AI Specialist",
                "Data Scientist",
                "Full-Stack Developer",
                "Machine Learning Engineer",
                "AI Innovation Expert"
              ]}
              className="text-primary font-semibold"
            />
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
             data-testid="hero-description">
            Crafting intelligent solutions with Python, JavaScript, React, and cutting-edge AI technologies. 
            Passionate about transforming ideas into scalable digital experiences.
          </p>

          {/* Additional Typing Animation */}
          <div className="text-base text-accent mb-12 max-w-2xl mx-auto font-medium" data-testid="hero-skills">
            <TypingAnimation 
              texts={[
                "💻 Building AI-powered web applications",
                "🤖 Developing machine learning models",
                "📊 Creating data visualization dashboards", 
                "🚀 Deploying scalable cloud solutions",
                "🎯 Solving complex business problems"
              ]}
              speed={80}
              deleteSpeed={40}
              pauseTime={3000}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={onViewWork} 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    data-testid="button-view-work">
              <Rocket className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            <Button variant="outline" 
                    onClick={() => openWhatsApp('portfolio_hero')} 
                    className="border-green-500/50 hover:bg-green-500/10 text-foreground hover:text-green-500 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    data-testid="button-connect">
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Let's Connect
            </Button>
            <Button 
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setTimeout(() => openWhatsApp('resume_download'), 1000);
              }}
              variant="secondary"
              className="px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="button-resume-hero"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}
