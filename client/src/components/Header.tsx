import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLocation } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

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
    // Always navigate to home first if we're not already there
    if (location !== '/') {
      window.location.href = '/';
      // Wait for navigation to complete then scroll to section
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // If we're already on the home page, scroll to the section
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  const getNavItemClass = (section: string) => {
    return `nav-link ${activeSection === section ? 'active' : ''}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-nav" data-testid="header">
      <nav className="max-w-content px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">
            Muhammad Abdullah
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => handleNavClick('home')} 
                    className={getNavItemClass('home')}
                    data-testid="nav-home">
              Home
            </button>
            <button onClick={() => handleNavClick('about')} 
                    className={getNavItemClass('about')}
                    data-testid="nav-about">
              About
            </button>
            <button onClick={() => handleNavClick('projects')} 
                    className={getNavItemClass('projects')}
                    data-testid="nav-projects">
              Projects
            </button>
            <button onClick={() => handleNavClick('contact')} 
                    className={getNavItemClass('contact')}
                    data-testid="nav-contact">
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <div className="flex items-center space-x-1 ml-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-accent"
                 data-testid="link-github">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-accent"
                 data-testid="link-linkedin">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-accent"
                 data-testid="link-twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
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
