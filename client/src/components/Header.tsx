import { useState } from "react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glassmorphism" data-testid="header">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Muhammad Abdullah
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('home')} 
                    className="hover:text-primary transition-colors" 
                    data-testid="nav-home">
              Home
            </button>
            <button onClick={() => handleNavClick('about')} 
                    className="hover:text-primary transition-colors"
                    data-testid="nav-about">
              About
            </button>
            <button onClick={() => handleNavClick('projects')} 
                    className="hover:text-primary transition-colors"
                    data-testid="nav-projects">
              Projects
            </button>
            <button onClick={() => handleNavClick('contact')} 
                    className="hover:text-primary transition-colors"
                    data-testid="nav-contact">
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-foreground hover:text-primary transition-colors"
               data-testid="link-github">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-foreground hover:text-primary transition-colors"
               data-testid="link-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-foreground hover:text-primary transition-colors"
               data-testid="link-twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden text-foreground" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  data-testid="button-mobile-menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2" data-testid="mobile-menu">
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
          </div>
        )}
      </nav>
    </header>
  );
}
