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
      <div className="relative w-full max-w-md max-h-[60vh] bg-card rounded-xl border border-border overflow-hidden animate-scale-in shadow-2xl">
        <div className="flex flex-col max-h-[60vh]">
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
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Project Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden" data-testid="modal-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              {/* Description */}
              <div>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid="modal-description">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1" data-testid="modal-technologies">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>


              {/* Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <Button 
                  onClick={handleDemoClick}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all flex items-center justify-center"
                  data-testid="button-live-preview"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Live Preview
                </Button>
                
                <Button 
                  onClick={handleSourceClick}
                  variant="outline"
                  size="sm"
                  className="rounded-lg font-medium transition-all flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  data-testid="button-source-code"
                >
                  <Code className="w-3 h-3 mr-1" />
                  Source Code
                </Button>
                
                <Button 
                  onClick={() => openWhatsApp('buy_code')}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all flex items-center justify-center"
                  data-testid="button-contact-code"
                >
                  <FaWhatsapp className="w-3 h-3 mr-1" />
                  Contact for Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}