
import React from 'react';
import { Heart, Code, Palette, Coffee } from 'lucide-react';

interface AboutProps {
  about: {
    description: string;
    highlights: string[];
    interests: string[];
  };
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {about.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights</h3>
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Heart className="text-purple-500" size={24} />
                What I Love
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {about.interests.map((interest, index) => {
                  const icons = [Code, Palette, Coffee, Heart];
                  const IconComponent = icons[index % icons.length];
                  
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all duration-300">
                      <IconComponent size={20} className="text-purple-600" />
                      <span className="text-gray-700 font-medium">{interest}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
