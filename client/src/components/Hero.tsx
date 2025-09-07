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
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-background"></div>
      
      {/* Floating particles */}
      <div className="floating-particles">
        <div className="particle w-2 h-2 top-1/4 left-1/4 animate-float"></div>
        <div className="particle w-1 h-1 top-1/3 right-1/4 animate-float-delayed"></div>
        <div className="particle w-3 h-3 bottom-1/3 left-1/3 animate-float-slow"></div>
        <div className="particle w-1.5 h-1.5 top-2/3 right-1/3 animate-float"></div>
        <div className="particle w-2 h-2 bottom-1/4 right-1/4 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile image with pulse ring */}
          <div className="relative w-36 h-36 mx-auto mb-8 group">
            <div className="pulse-ring w-36 h-36"></div>
            <div className="pulse-ring w-36 h-36" style={{animationDelay: '1s'}}></div>
            <div className="w-36 h-36 rounded-full border-4 border-primary/50 overflow-hidden relative z-10 hover-lift"
                 data-testid="profile-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                   alt="Muhammad Abdullah - AI Developer" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                   loading="lazy" />
            </div>
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
                    className="magnetic-btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover-glow"
                    data-testid="button-view-work">
              <Rocket className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button variant="outline" 
                    onClick={() => openWhatsApp('portfolio_hero')} 
                    className="magnetic-btn border-green-500/50 hover:bg-green-500/10 text-foreground hover:text-green-500 px-8 py-4 rounded-lg font-semibold transition-all hover-glow"
                    data-testid="button-connect">
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
            <Button 
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setTimeout(() => openWhatsApp('resume_download'), 1000);
              }}
              variant="secondary"
              className="magnetic-btn px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover-glow"
              data-testid="button-resume-hero"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float-delayed blur-sm"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float-slow blur-sm"></div>
      <div className="absolute top-3/4 left-1/4 w-8 h-8 bg-primary/30 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/2 left-10 w-6 h-6 bg-accent/25 rounded-full animate-float-delayed blur-sm"></div>
    </section>
  );
}
