import { useState } from "react";
import { MapPin, Clock, Mail, Phone, Bot, TrendingUp, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const subjectOptions = [
    'Web Development Project',
    'AI/ML Consultation',
    'Data Science Project',
    'Mobile App Development',
    'Custom Software Solution',
    'Freelance Opportunity',
    'General Inquiry',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp('contact_form', formData);
  };

  const services = [
    { icon: Bot, name: "AI Solutions", color: "primary" },
    { icon: TrendingUp, name: "Data Science", color: "secondary" },
    { icon: Globe, name: "Web Apps", color: "accent" },
    { icon: Smartphone, name: "Mobile Apps", color: "primary" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            Ready to bring your ideas to life? Get in touch for custom AI solutions and web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="gradient-border p-8 rounded-xl hover-glow animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left" data-testid="form-title">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Send Message
              </span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Name *</Label>
                  <Input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">Email *</Label>
                  <Input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</Label>
                <Select value={formData.subject} onValueChange={handleSelectChange} required>
                  <SelectTrigger className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50" data-testid="select-subject">
                    <SelectValue placeholder="Choose the subject of your inquiry" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjectOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message *</Label>
                <Textarea 
                  id="message"
                  name="message" 
                  rows={5} 
                  required 
                  placeholder="Tell me about your project requirements, timeline, and any specific details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 hover:border-primary/50"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="magnetic-btn w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover-glow text-lg"
                data-testid="button-submit-form"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="gradient-border p-8 rounded-xl hover-glow hover-lift">
              <h3 className="text-3xl font-bold mb-8 text-center lg:text-left" data-testid="contact-info-title">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-card/30 transition-all duration-300" data-testid="contact-whatsapp">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-green-500/30 transition-colors group-hover:scale-110 duration-300">
                    <FaWhatsapp className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg group-hover:text-green-500 transition-colors">WhatsApp</h4>
                    <p className="text-muted-foreground mb-2">Available for instant chat</p>
                    <button 
                      onClick={() => openWhatsApp('direct_contact')}
                      className="text-green-500 hover:text-green-600 hover:underline font-medium transition-colors"
                      data-testid="button-direct-whatsapp"
                    >
                      Message directly →
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">muhammad.abdullah@email.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-location">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-availability">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Availability</h4>
                    <p className="text-muted-foreground">Available for freelance work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="gradient-border p-8 rounded-xl hover-glow hover-lift">
              <h3 className="text-3xl font-bold mb-8 text-center" data-testid="services-title">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Services Offered
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={service.name}
                      className={`text-center p-6 bg-${service.color}/10 rounded-xl hover:bg-${service.color}/20 transition-all duration-300 hover-lift group animate-scale-in`}
                      style={{animationDelay: `${index * 0.1}s`}}
                      data-testid={`service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <IconComponent className={`text-${service.color} text-3xl mb-3 mx-auto w-8 h-8 group-hover:scale-110 transition-transform animate-float`} />
                      <div className="font-bold text-lg">{service.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Space */}
      <div className="container mx-auto px-6 mt-16">
        <div className="ad-space rounded-lg" data-testid="ad-space-contact">
          AdSense Advertisement Space
        </div>
      </div>
    </section>
  );
}
