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

  const handleNavigation = (section: string) => {
    if (section === 'home') {
      window.location.href = '/';
      return;
    }
    
    // For other sections (about, projects, contact), redirect to home page with the section
    window.location.href = `/#${section}`;
    
    // Alternative: Navigate to home and then scroll to section
    // This ensures we get to the right section on the home page
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore my complete collection of AI, web development, and data science projects. 
                Each project showcases innovative solutions and cutting-edge technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedProjectData.map((project, index) => (
                <div 
                  key={project.id}
                  className="project-card group relative gradient-border rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 animate-slide-up hover:shadow-2xl hover-glow"
                  style={{animationDelay: `${index * 0.1}s`}}
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
          </div>
        </section>
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