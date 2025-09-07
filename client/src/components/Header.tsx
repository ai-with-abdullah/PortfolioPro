import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

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
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavClick('home')} 
                    className="hover:text-primary transition-all duration-300 hover:scale-105" 
                    data-testid="nav-home">
              Home
            </button>
            <button onClick={() => handleNavClick('about')} 
                    className="hover:text-primary transition-all duration-300 hover:scale-105"
                    data-testid="nav-about">
              About
            </button>
            <button onClick={() => handleNavClick('projects')} 
                    className="hover:text-primary transition-all duration-300 hover:scale-105"
                    data-testid="nav-projects">
              Projects
            </button>
            <button onClick={() => handleNavClick('contact')} 
                    className="hover:text-primary transition-all duration-300 hover:scale-105"
                    data-testid="nav-contact">
              Contact
            </button>
            <Button
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setTimeout(() => openWhatsApp('resume_download'), 1000);
              }}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
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
