import { useState } from "react";
import { Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectData, type Project } from "@/data/projects";
import { openWhatsApp } from "@/lib/whatsapp";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="projects-title">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="projects-subtitle">
            Showcasing innovative solutions across AI, web development, and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id}
              className="project-card group relative gradient-border rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              data-testid={`project-card-${project.id}`}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  loading="lazy" 
                />
              </div>
              
              {/* Overlay */}
              <div className="project-overlay absolute inset-0 bg-black/80 flex items-center justify-center">
                <Button 
                  onClick={() => openProjectModal(project)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all"
                  data-testid={`button-view-project-${project.id}`}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2" data-testid={`project-technologies-${project.id}`}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => openWhatsApp('view_more_projects')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            data-testid="button-view-more-projects"
          >
            <Plus className="w-4 h-4 mr-2" />
            View More Projects
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeProjectModal} 
        />
      )}
    </section>
  );
}
