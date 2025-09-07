import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { projectData, type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance" data-testid="projects-subtitle">
            Showcasing innovative solutions across AI, web development, and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id}
              className="project-card group cursor-pointer"
              onClick={() => openProjectModal(project)}
              data-testid={`project-card-${project.id}`}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  loading="lazy" 
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`project-description-${project.id}`}>
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2" data-testid={`project-technologies-${project.id}`}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button 
              size="lg"
              className="btn-secondary px-8"
              data-testid="button-view-more-projects"
            >
              <Plus className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Small Project Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeProjectModal}>
          <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-foreground">{selectedProject.title}</h3>
              <button onClick={closeProjectModal} className="text-muted-foreground hover:text-foreground">
                ✕
              </button>
            </div>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {selectedProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              {selectedProject.demoUrl && (
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary text-center"
                >
                  View Demo
                </a>
              )}
              {selectedProject.demoUrl && (
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 btn-outline text-center"
                >
                  Learn More
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
