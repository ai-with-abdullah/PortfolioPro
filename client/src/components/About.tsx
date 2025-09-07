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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300" data-testid="about-title">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="about-subtitle">
            Driven by curiosity and powered by innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="gradient-border p-8 rounded-lg hover-glow hover-lift transition-all duration-500 group" data-testid="ai-passion-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
                <Brain className="inline w-7 h-7 mr-3 animate-float" />
                AI & Data Science Passion
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Currently pursuing BSAI with a deep focus on Generative AI, Machine Learning, and Data Science. 
                I'm fascinated by the potential of AI to solve real-world problems and create meaningful impact.
              </p>
            </div>

            <div className="gradient-border p-8 rounded-lg hover-glow hover-lift transition-all duration-500 group" data-testid="fullstack-card" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-semibold mb-4 text-secondary group-hover:text-accent transition-colors duration-300">
                <Code className="inline w-7 h-7 mr-3 animate-float-delayed" />
                Full-Stack Development
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Experienced in building scalable web applications using modern technologies. 
                From React frontends to Python backends, I create seamless digital experiences.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-3xl font-semibold mb-8 text-center lg:text-left" data-testid="skills-title">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} 
                     className="group hover-lift p-4 rounded-lg hover:bg-card/50 transition-all duration-300"
                     data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                     style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.name}</span>
                    <span className="text-primary font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 skill-bar">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-2000 shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 gradient-border rounded-xl hover-glow hover-lift transition-all duration-500 group" data-testid="projects-stat">
                <div className="text-4xl font-bold text-primary mb-3 animate-float group-hover:scale-110 transition-transform">50+</div>
                <div className="text-base text-muted-foreground group-hover:text-foreground transition-colors">Projects Completed</div>
              </div>
              <div className="text-center p-6 gradient-border rounded-xl hover-glow hover-lift transition-all duration-500 group" data-testid="experience-stat">
                <div className="text-4xl font-bold text-secondary mb-3 animate-float group-hover:scale-110 transition-transform" style={{animationDelay: '0.5s'}}>3+</div>
                <div className="text-base text-muted-foreground group-hover:text-foreground transition-colors">Years Experience</div>
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
