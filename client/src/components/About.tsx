import { Brain, Code } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Python & AI/ML", level: 95, color: "from-primary to-secondary" },
    { name: "JavaScript & React", level: 90, color: "from-primary to-secondary" },
    { name: "Data Science & Analytics", level: 88, color: "from-primary to-secondary" },
    { name: "Web Development", level: 92, color: "from-primary to-secondary" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="about-subtitle">
            Driven by curiosity and powered by innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="gradient-border p-8 rounded-lg" data-testid="ai-passion-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                <Brain className="inline w-6 h-6 mr-3" />
                AI & Data Science Passion
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing BSAI with a deep focus on Generative AI, Machine Learning, and Data Science. 
                I'm fascinated by the potential of AI to solve real-world problems and create meaningful impact.
              </p>
            </div>

            <div className="gradient-border p-8 rounded-lg" data-testid="fullstack-card">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                <Code className="inline w-6 h-6 mr-3" />
                Full-Stack Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in building scalable web applications using modern technologies. 
                From React frontends to Python backends, I create seamless digital experiences.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6" data-testid="skills-title">
              Skills & Technologies
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-lg" data-testid="projects-stat">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg" data-testid="experience-stat">
                <div className="text-3xl font-bold text-secondary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
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
