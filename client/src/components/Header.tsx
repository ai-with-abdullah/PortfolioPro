import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { openWhatsApp } from "@/lib/whatsapp";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [location] = useLocation();

  // Track active section based on scroll position
  useEffect(() => {
    if (location === '/projects') {
      setActiveSection('projects');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (section: string) => {
    if (section === 'projects' && location === '/') {
      window.location.href = '/projects';
      return;
    }
    if (section === 'home' && location !== '/') {
      window.location.href = '/';
      return;
    }
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  const getNavItemClass = (section: string) => {
    const baseClass = "relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105";
    const activeClass = "text-primary bg-primary/10";
    const inactiveClass = "hover:text-primary hover:bg-primary/5";
    
    return `${baseClass} ${activeSection === section ? activeClass : inactiveClass}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 glassmorphism" data-testid="header">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Muhammad Abdullah
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <button onClick={() => handleNavClick('home')} 
                    className={getNavItemClass('home')}
                    data-testid="nav-home">
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-scale-in"></span>
              )}
            </button>
            <button onClick={() => handleNavClick('about')} 
                    className={getNavItemClass('about')}
                    data-testid="nav-about">
              About
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-scale-in"></span>
              )}
            </button>
            <button onClick={() => handleNavClick('projects')} 
                    className={getNavItemClass('projects')}
                    data-testid="nav-projects">
              Projects
              {activeSection === 'projects' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-scale-in"></span>
              )}
            </button>
            <button onClick={() => handleNavClick('contact')} 
                    className={getNavItemClass('contact')}
                    data-testid="nav-contact">
              Contact
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-scale-in"></span>
              )}
            </button>
            <Button
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setTimeout(() => openWhatsApp('resume_download'), 1000);
              }}
              variant="outline"
              className="ml-4 border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
              data-testid="button-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 hover:bg-primary/10 rounded-lg"
               data-testid="link-github">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 hover:bg-primary/10 rounded-lg"
               data-testid="link-linkedin">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 hover:bg-primary/10 rounded-lg"
               data-testid="link-twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden text-foreground" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  data-testid="button-mobile-menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-fade-in" data-testid="mobile-menu">
            <button onClick={() => handleNavClick('home')} 
                    className="block w-full text-left py-2 hover:text-primary transition-colors"
                    data-testid="mobile-nav-home">
              Home
            </button>
            <button onClick={() => handleNavClick('about')} 
                    className="block w-full text-left py-2 hover:text-primary transition-colors"
                    data-testid="mobile-nav-about">
              About
            </button>
            <button onClick={() => handleNavClick('projects')} 
                    className="block w-full text-left py-2 hover:text-primary transition-colors"
                    data-testid="mobile-nav-projects">
              Projects
            </button>
            <button onClick={() => handleNavClick('contact')} 
                    className="block w-full text-left py-2 hover:text-primary transition-colors"
                    data-testid="mobile-nav-contact">
              Contact
            </button>
            <Button
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setTimeout(() => openWhatsApp('resume_download'), 1000);
                setIsMobileMenuOpen(false);
              }}
              variant="outline"
              className="w-full justify-start mt-4 border-primary/30 hover:bg-primary/10"
              data-testid="mobile-button-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <div className="flex justify-center space-x-4 pt-4 border-t border-border">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground hover:text-primary transition-all duration-300 p-2"
                 data-testid="mobile-link-github">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground hover:text-primary transition-all duration-300 p-2"
                 data-testid="mobile-link-linkedin">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-foreground hover:text-primary transition-all duration-300 p-2"
                 data-testid="mobile-link-twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
