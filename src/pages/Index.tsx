
import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import { cvData } from '@/data/cvData';

const Index = () => {
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
    </div>
  );
};

export default Index;
