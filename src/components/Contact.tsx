
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactProps {
  contactInfo: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    instagram: string;
    twitter: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi pengiriman email akan ditambahkan nanti
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <p className="text-purple-200 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and design. Feel free to reach out!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="text-purple-300" size={20} />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Email</p>
                    <p className="font-semibold">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="text-purple-300" size={20} />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Phone</p>
                    <p className="font-semibold">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-purple-300" size={20} />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Location</p>
                    <p className="font-semibold">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href={`https://${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href={`https://${contactInfo.twitter}`} target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    required
                  />
                </div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
