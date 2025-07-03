
import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import AdminPanel from '@/components/AdminPanel';
import { useFirebaseCV } from '@/hooks/useFirebaseCV';

const Index = () => {
  const { cvData, loading, error } = useFirebaseCV();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading CV data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header personalInfo={cvData.personalInfo} />
      <About about={cvData.about} />
      <Education education={cvData.education} />
      <Experience experience={cvData.experience} />
      <Skills skills={cvData.skills} />
      <Projects projects={cvData.projects} />
      <Certificates certificates={cvData.certificates} />
      <Contact contactInfo={{
        email: cvData.personalInfo.email,
        phone: cvData.personalInfo.phone,
        location: cvData.personalInfo.location,
        linkedin: cvData.personalInfo.linkedin,
        github: cvData.personalInfo.github,
        instagram: cvData.personalInfo.instagram,
        twitter: cvData.personalInfo.twitter
      }} />
      
      {/* Admin Panel for development - remove in production */}
      <AdminPanel />
    </div>
  );
};

export default Index;
