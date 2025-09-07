import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { projectData, type Project } from "@/data/projects";

// Extended project data for the projects page
const extendedProjectData: Project[] = [
  ...projectData,
  {
    id: 'sentiment-analyzer',
    title: 'AI Sentiment Analyzer',
    shortDescription: 'Real-time sentiment analysis tool using NLP for social media monitoring.',
    description: 'Advanced sentiment analysis tool that processes social media content in real-time using natural language processing. Features emotion detection, trend analysis, and automated reporting for brand monitoring and customer feedback analysis.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    technologies: ['Python', 'NLTK', 'Transformers', 'Flask', 'Chart.js'],
    features: [
      'Real-time sentiment classification',
      'Emotion detection and analysis',
      'Social media API integration',
      'Trend visualization dashboard',
      'Automated alert system'
    ],
    demoUrl: 'https://sentiment-analyzer-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/sentiment-analyzer'
  },
  {
    id: 'blockchain-tracker',
    title: 'Crypto Portfolio Tracker',
    shortDescription: 'Blockchain-based portfolio tracker with real-time price updates and analytics.',
    description: 'Comprehensive cryptocurrency portfolio tracker with blockchain integration, real-time price monitoring, and advanced analytics. Features portfolio optimization suggestions and automated trading alerts.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    technologies: ['React', 'Web3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    features: [
      'Real-time price tracking',
      'Portfolio performance analytics',
      'Blockchain transaction monitoring',
      'Trading alerts and notifications',
      'Multi-wallet support'
    ],
    demoUrl: 'https://crypto-tracker-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/crypto-tracker'
  },
  {
    id: 'voice-assistant',
    title: 'AI Voice Assistant',
    shortDescription: 'Voice-activated AI assistant with natural language processing capabilities.',
    description: 'Intelligent voice assistant powered by advanced speech recognition and natural language understanding. Supports voice commands, smart home integration, and personalized responses.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    technologies: ['Python', 'Speech Recognition', 'TensorFlow', 'IoT', 'Azure'],
    features: [
      'Natural speech recognition',
      'Smart home device control',
      'Personalized voice responses',
      'Multi-language support',
      'Context-aware conversations'
    ],
    demoUrl: 'https://voice-assistant-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/voice-assistant'
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // FIXED NAVIGATION - Direct redirect to home page with section hash
  const handleNavigation = (section: string) => {
    if (section === 'home') {
      window.location.href = '/';
    } else {
      // Direct navigation to home page with section anchor
      window.location.href = `/#${section}`;
    }
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="projects-page">
      <Header onNavigate={handleNavigation} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="projects-page-title">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  All Projects
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my complete portfolio of AI-powered solutions, web applications, and innovative projects that showcase cutting-edge technology and creative problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedProjectData.map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
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
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" data-testid="project-title">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3" data-testid="project-description">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4" data-testid="project-technologies">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      onClick={() => openProjectModal(project)}
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      variant="outline"
                      data-testid="button-view-project"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="container mx-auto px-6 py-16">
          <div className="ad-space rounded-lg" data-testid="ad-space-projects">
            AdSense Advertisement Space
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeProjectModal} 
        />
      )}
    </div>
  );
}