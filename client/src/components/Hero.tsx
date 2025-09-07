import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

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
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" 
             data-testid="hero-subtitle">
            BSAI Student | Generative AI Specialist | Data Scientist | Full-Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
             data-testid="hero-description">
            Crafting intelligent solutions with Python, JavaScript, React, and cutting-edge AI technologies. 
            Passionate about transforming ideas into scalable digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={onViewWork} 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    data-testid="button-view-work">
              <Rocket className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            <Button variant="outline" 
                    onClick={() => openWhatsApp('portfolio_hero')} 
                    className="border border-border hover:bg-card text-foreground px-8 py-3 rounded-lg font-semibold transition-all"
                    data-testid="button-connect">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Let's Connect
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
