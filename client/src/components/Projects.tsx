import { useState } from "react";
import { Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { projectData, type Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300" data-testid="projects-title">
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
          {projectData.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group relative gradient-border rounded-xl overflow-hidden hover-lift transition-all duration-500 animate-slide-up hover:shadow-2xl hover-glow"
              style={{animationDelay: `${index * 0.15}s`}}
              data-testid={`project-card-${project.id}`}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700" 
                  loading="lazy" 
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced Overlay */}
              <div className="project-overlay absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    onClick={() => openProjectModal(project)}
                    className="magnetic-btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover-glow"
                    data-testid={`button-view-project-${project.id}`}
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              {/* Enhanced Project Info */}
              <div className="p-6 bg-gradient-to-t from-card to-card/90">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`project-description-${project.id}`}>
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2" data-testid={`project-technologies-${project.id}`}>
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors duration-200 animate-scale-in"
                      style={{animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`}}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Link href="/projects">
            <Button 
              className="magnetic-btn bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover-glow text-lg"
              data-testid="button-view-more-projects"
            >
              <Plus className="w-5 h-5 mr-2" />
              View More Projects
            </Button>
          </Link>
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
