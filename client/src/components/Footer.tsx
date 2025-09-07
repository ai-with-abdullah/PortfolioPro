import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
                 data-testid="footer-brand">
              Muhammad Abdullah
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Passionate AI developer and data scientist creating innovative solutions for the digital world. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4" data-testid="footer-social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                 data-testid="footer-link-github">
                <FaGithub className="w-5 h-5 text-primary" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                 data-testid="footer-link-linkedin">
                <FaLinkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                 data-testid="footer-link-twitter">
                <FaTwitter className="w-5 h-5 text-primary" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                 data-testid="footer-link-instagram">
                <FaInstagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-title">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => handleNavClick('home')} 
                      className="block text-left text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      data-testid="footer-link-home">
                Home
              </button>
              <button onClick={() => handleNavClick('about')} 
                      className="block text-left text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      data-testid="footer-link-about">
                About
              </button>
              <button onClick={() => handleNavClick('projects')} 
                      className="block text-left text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      data-testid="footer-link-projects">
                Projects
              </button>
              <button onClick={() => handleNavClick('contact')} 
                      className="block text-left text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      data-testid="footer-link-contact">
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-title">Services</h4>
            <div className="space-y-2" data-testid="footer-services-list">
              <div className="text-muted-foreground">AI Development</div>
              <div className="text-muted-foreground">Data Science</div>
              <div className="text-muted-foreground">Web Development</div>
              <div className="text-muted-foreground">Mobile Apps</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            © 2024 Muhammad Abdullah. All rights reserved. Built with passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
