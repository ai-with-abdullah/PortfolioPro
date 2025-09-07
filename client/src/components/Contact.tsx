import { useState } from "react";
import { MapPin, Clock, Mail, Phone, Bot, TrendingUp, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
          <div className="gradient-border p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6" data-testid="form-title">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Name *</Label>
                  <Input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</Label>
                <Input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message *</Label>
                <Textarea 
                  id="message"
                  name="message" 
                  rows={5} 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                data-testid="button-submit-form"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="gradient-border p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6" data-testid="contact-info-title">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-whatsapp">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+92 319 4124382</p>
                    <button 
                      onClick={() => openWhatsApp('direct_contact')}
                      className="text-primary hover:underline text-sm mt-1"
                      data-testid="button-direct-whatsapp"
                    >
                      Message directly
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
            <div className="gradient-border p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6" data-testid="services-title">Services Offered</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={service.name}
                      className={`text-center p-4 bg-${service.color}/10 rounded-lg`}
                      data-testid={`service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <IconComponent className={`text-${service.color} text-2xl mb-2 mx-auto w-6 h-6`} />
                      <div className="font-medium">{service.name}</div>
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
