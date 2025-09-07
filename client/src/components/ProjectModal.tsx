import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Project } from "@/data/projects";
import { openWhatsApp } from "@/lib/whatsapp";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDemoClick = () => {
    window.open(project.demoUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50" data-testid="project-modal">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={handleBackdropClick}
        data-testid="modal-backdrop"
      />
      <div className="absolute inset-4 md:inset-8 bg-card rounded-lg border border-border overflow-hidden">
        <div className="flex flex-col h-full">
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

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={handleDemoClick}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                    data-testid="button-live-demo"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    onClick={() => openWhatsApp('buy_code')}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                    data-testid="button-buy-code"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Buy Source Code
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
