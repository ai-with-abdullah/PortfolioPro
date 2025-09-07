import { X, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Project } from "@/data/projects";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/lib/whatsapp";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = 'auto';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDemoClick = () => {
    window.open(project.demoUrl, '_blank');
  };

  const handleSourceClick = () => {
    if (project.sourceUrl) {
      window.open(project.sourceUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-testid="project-modal">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={handleBackdropClick}
        data-testid="modal-backdrop"
      />
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-card rounded-lg border border-border overflow-hidden animate-scale-in shadow-2xl">
        <div className="flex flex-col max-h-[90vh]">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="text-2xl font-semibold" data-testid="modal-title">
              {project.title}
            </h3>
            <Button 
              variant="ghost"
              onClick={onClose} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-close-modal"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project Media */}
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden" data-testid="modal-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Additional images placeholder */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-video bg-muted/50 rounded"></div>
                  <div className="aspect-video bg-muted/50 rounded"></div>
                  <div className="aspect-video bg-muted/50 rounded"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Description</h4>
                  <p className="text-muted-foreground leading-relaxed" data-testid="modal-description">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2" data-testid="modal-technologies">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2 text-muted-foreground" data-testid="modal-features">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUTTONS SECTION - FIXED VERSION */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={handleDemoClick}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                    data-testid="button-live-preview"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Preview
                  </Button>
                  
                  <Button 
                    onClick={handleSourceClick}
                    variant="outline"
                    className="px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    data-testid="button-source-code"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                  
                  <Button 
                    onClick={() => openWhatsApp('buy_code')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                    data-testid="button-contact-code"
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2" />
                    Contact for Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}