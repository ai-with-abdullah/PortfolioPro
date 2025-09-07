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
    <section id="home" className="section-padding pt-32 pb-16">
      <div className="max-w-content">
        <div className="text-center max-w-4xl mx-auto">
          {/* Clean profile image */}
          <div className="w-40 h-40 mx-auto mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="Muhammad Abdullah - AI Developer" 
              className="w-full h-full object-cover rounded-full border-2 border-border shadow-lg"
              loading="eager"
              data-testid="profile-image"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance" data-testid="hero-title">
            Muhammad Abdullah
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="hero-subtitle">
            BSAI Student | 
            <TypingAnimation 
              texts={[
                "AI Developer",
                "Data Scientist", 
                "Full-Stack Developer",
                "ML Engineer"
              ]}
              className="text-primary font-medium"
            />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance"
             data-testid="hero-description">
            Building intelligent solutions with Python, JavaScript, React, and cutting-edge AI technologies. 
            Passionate about transforming ideas into scalable digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={onViewWork} 
              size="lg"
              className="btn-primary px-8"
              data-testid="button-view-work"
            >
              <Rocket className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => openWhatsApp('portfolio_hero')} 
              className="btn-outline px-8"
              data-testid="button-connect"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Let's Connect
            </Button>
            <Button 
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setTimeout(() => openWhatsApp('resume_download'), 1000);
              }}
              variant="secondary"
              size="lg"
              className="btn-secondary px-8"
              data-testid="button-resume-hero"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center" data-testid="stat-projects">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center" data-testid="stat-experience">
              <div className="text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center" data-testid="stat-technologies">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center" data-testid="stat-clients">
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
