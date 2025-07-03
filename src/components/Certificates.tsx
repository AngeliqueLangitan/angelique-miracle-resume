
import React from 'react';
import { Award, Calendar, ExternalLink, Building } from 'lucide-react';

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  description: string;
}

interface CertificatesProps {
  certificates: CertificateItem[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
                    
                    <div className="flex items-center gap-2 text-purple-600 font-semibold mb-2">
                      <Building size={14} />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Calendar size={14} />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{cert.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">ID: {cert.credentialId}</span>
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
