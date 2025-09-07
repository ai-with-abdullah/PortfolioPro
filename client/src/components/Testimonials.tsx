import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Muhammad delivered an exceptional AI-powered analytics dashboard that transformed our data insights. His attention to detail and technical expertise are outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b89bd643?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with Muhammad was a game-changer for our platform. His full-stack development skills and AI integration capabilities are top-notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Data Scientist",
    company: "DataFlow Inc",
    content: "Muhammad's machine learning solutions helped us increase our prediction accuracy by 40%. His deep understanding of AI technologies is impressive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance" data-testid="testimonials-subtitle">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="clean-card h-full" data-testid={`testimonial-${testimonial.id}`}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}