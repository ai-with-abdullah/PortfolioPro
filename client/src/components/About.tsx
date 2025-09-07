import { Brain, Code } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Python & AI/ML", level: 95 },
    { name: "JavaScript & React", level: 90 },
    { name: "Data Science & Analytics", level: 88 },
    { name: "Web Development", level: 92 },
    { name: "Machine Learning", level: 85 },
    { name: "Cloud Computing", level: 80 }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="about-title">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance" data-testid="about-subtitle">
            Driven by curiosity and powered by innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="clean-card" data-testid="ai-passion-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">AI & Data Science</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing BSAI with a deep focus on Generative AI, Machine Learning, and Data Science. 
                    Passionate about solving real-world problems with intelligent solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="clean-card" data-testid="fullstack-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building scalable web applications using modern technologies. 
                    From React frontends to Python backends, creating seamless digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6" data-testid="skills-title">
              Skills & Technologies
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} 
                     className="space-y-2"
                     data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border">
              <div className="text-center" data-testid="projects-stat">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center" data-testid="experience-stat">
                <div className="text-2xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center" data-testid="clients-stat">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Space */}
      <div className="container mx-auto px-6 mt-16">
        <div className="ad-space rounded-lg" data-testid="ad-space-about">
          AdSense Advertisement Space
        </div>
      </div>
    </section>
  );
}
