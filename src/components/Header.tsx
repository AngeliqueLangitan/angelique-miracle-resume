
import React from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
    profileImage: string;
  };
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const handleDownloadCV = () => {
    // Implementasi download CV PDF akan ditambahkan nanti
    console.log('Download CV clicked');
  };

  return (
    <header className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src={personalInfo.profileImage || "/lovable-uploads/bd1a5b56-fd0d-42d9-8001-70310b07b873.png"} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl text-purple-200 mb-6 font-light">
              {personalInfo.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin size={16} className="text-purple-300" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail size={16} className="text-purple-300" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone size={16} className="text-purple-300" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Linkedin size={16} className="text-purple-300" />
                <span>{personalInfo.linkedin}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300">
                <Globe size={18} />
                <span>Portfolio</span>
              </a>
            </div>
            
            <Button 
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
