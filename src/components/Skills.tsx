
import React from 'react';
import { Code, Palette, Server, Database, Globe, Smartphone } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getIcon = (iconName: string) => {
    const icons = {
      Code,
      Palette,
      Server,
      Database,
      Globe,
      Smartphone
    };
    return icons[iconName as keyof typeof icons] || Code;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((category, categoryIndex) => {
              const IconComponent = getIcon(category.icon);
              
              return (
                <div key={categoryIndex} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-purple-600 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
