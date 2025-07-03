
export const cvData = {
  personalInfo: {
    name: "Angelique Miracle Langitan",
    title: "Full Stack Developer & UI/UX Designer",
    location: "Jakarta, Indonesia",
    email: "angelique.langitan@gmail.com",
    phone: "+62 812-3456-7890",
    linkedin: "linkedin.com/in/angelique-langitan",
    github: "github.com/angelique-langitan",
    website: "angelique-portfolio.vercel.app",
    instagram: "instagram.com/angelique.miracle",
    twitter: "twitter.com/angelique_dev",
    profileImage: "/lovable-uploads/bd1a5b56-fd0d-42d9-8001-70310b07b873.png"
  },

  about: {
    description: "I'm a passionate Full Stack Developer and UI/UX Designer with 3+ years of experience creating innovative digital solutions. I specialize in building user-centric applications that combine aesthetic design with robust functionality. My journey in technology started with a curiosity about how digital experiences can impact people's lives, and it has evolved into a career dedicated to crafting meaningful, accessible, and scalable solutions.",
    highlights: [
      "3+ years of experience in full-stack development with modern technologies",
      "Expertise in React, Node.js, TypeScript, and cloud technologies",
      "Strong background in UI/UX design with focus on user-centered design principles",
      "Experience leading development teams and mentoring junior developers",
      "Passionate about accessibility, performance optimization, and clean code practices",
      "Contributed to open-source projects with 500+ GitHub stars"
    ],
    interests: [
      "Web Development",
      "UI/UX Design", 
      "Machine Learning",
      "Open Source"
    ]
  },

  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Indonesia",
      period: "2019 - 2023",
      gpa: "3.85/4.00",
      description: "Specialized in Software Engineering with focus on web technologies and human-computer interaction. Completed thesis on 'Optimizing User Experience in Progressive Web Applications' which was awarded Best Thesis in Software Engineering track.",
      achievements: [
        "Summa Cum Laude graduate with GPA 3.85/4.00",
        "Best Thesis Award for Progressive Web Application research",
        "President of Computer Science Student Association (2021-2022)",
        "Google Developer Student Club Lead (2022-2023)",
        "Winner of National Programming Competition 2022",
        "Dean's List for 6 consecutive semesters"
      ]
    },
    {
      degree: "UI/UX Design Certification",
      institution: "Google UX Design Professional Certificate",
      period: "2022 - 2023",
      gpa: "Certificate",
      description: "Comprehensive program covering user research, wireframing, prototyping, and usability testing. Completed 7 end-to-end design projects including mobile apps and responsive websites.",
      achievements: [
        "Completed 7 comprehensive design projects",
        "Expertise in Figma, Adobe XD, and Sketch",
        "User research and usability testing certification",
        "Accessibility design principles certification"
      ]
    }
  ],

  experience: [
    {
      position: "Senior Full Stack Developer",
      company: "TechnoVisi Indonesia",
      location: "Jakarta, Indonesia",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: "Lead the development of enterprise-level web applications serving 10,000+ daily active users. Collaborate with cross-functional teams to deliver scalable solutions while mentoring junior developers and establishing best practices for the engineering team.",
      responsibilities: [
        "Architect and develop full-stack applications using React, Node.js, and PostgreSQL",
        "Lead a team of 4 developers in agile development process",
        "Optimize application performance resulting in 40% faster load times",
        "Implement CI/CD pipelines reducing deployment time by 60%",
        "Conduct code reviews and mentor junior developers",
        "Collaborate with UX designers to implement pixel-perfect responsive designs"
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "Redux"]
    },
    {
      position: "Frontend Developer & UI/UX Designer",
      company: "StartupHub Jakarta",
      location: "Jakarta, Indonesia", 
      period: "Jun 2022 - Dec 2022",
      type: "Internship",
      description: "Developed user interfaces for multiple startup clients while conducting user research and creating design systems. Gained hands-on experience in both development and design aspects of product creation.",
      responsibilities: [
        "Design and develop responsive web applications for 5+ startup clients",
        "Conduct user interviews and usability testing sessions",
        "Create design systems and component libraries",
        "Collaborate with product managers to define user requirements",
        "Implement A/B testing to optimize user conversion rates"
      ],
      technologies: ["React", "JavaScript", "Figma", "Tailwind CSS", "Firebase", "Git"]
    },
    {
      position: "Web Development Intern",
      company: "Digital Innovation Lab",
      location: "Jakarta, Indonesia",
      period: "Jun 2021 - Aug 2021",
      type: "Internship", 
      description: "First professional experience in web development, focusing on frontend technologies and learning industry best practices. Contributed to internal tools and client projects while building foundational skills.",
      responsibilities: [
        "Develop responsive web pages using HTML, CSS, and JavaScript",
        "Assist in maintaining and updating company website",
        "Create documentation for development processes",
        "Participate in daily standups and sprint planning meetings"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"]
    }
  ],

  skills: [
    {
      title: "Frontend Development",
      icon: "Code",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      title: "Backend Development", 
      icon: "Server",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "Database", 
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Firebase", level: 88 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: "Palette",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 88 },
        { name: "User Research", level: 85 },
        { name: "Prototyping", level: 90 },
        { name: "Design Systems", level: 87 }
      ]
    }
  ],

  projects: [
    {
      title: "EcoTrack - Environmental Impact Tracker",
      description: "A comprehensive web application that helps users track their carbon footprint and environmental impact. Features include personal dashboards, community challenges, and AI-powered recommendations for sustainable living. Built with modern tech stack and focuses on user engagement through gamification.",
      image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop`,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Chart.js"],
      liveUrl: "https://ecotrack-demo.vercel.app",
      githubUrl: "https://github.com/angelique-langitan/ecotrack",
      period: "2023",
      category: "Full Stack Application"
    },
    {
      title: "TaskFlow - Project Management Platform",
      description: "A collaborative project management tool designed for small to medium teams. Features real-time collaboration, Kanban boards, time tracking, and team analytics. The platform emphasizes simplicity and productivity with an intuitive user interface.",
      image: `https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop`,
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Socket.io"],
      liveUrl: "https://taskflow-demo.vercel.app", 
      githubUrl: "https://github.com/angelique-langitan/taskflow",
      period: "2023",
      category: "SaaS Platform"
    },
    {
      title: "FoodieFinds - Restaurant Discovery App",
      description: "A mobile-first web application for discovering local restaurants and cafes. Features include location-based search, user reviews, photo sharing, and personalized recommendations. Integrated with Google Maps API and includes offline functionality.",
      image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop`,
      technologies: ["React Native", "Firebase", "Google Maps API", "Redux"],
      liveUrl: "https://foodiefinds-demo.vercel.app",
      githubUrl: "https://github.com/angelique-langitan/foodiefinds", 
      period: "2022",
      category: "Mobile Application"
    },
    {
      title: "PortfolioHub - Creative Showcase Platform",
      description: "A platform for creative professionals to showcase their work and connect with clients. Features include customizable portfolios, client messaging system, project collaboration tools, and integrated payment processing for freelancers.",
      image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop`,
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe API", "AWS S3"],
      liveUrl: "https://portfoliohub-demo.vercel.app",
      githubUrl: "https://github.com/angelique-langitan/portfoliohub",
      period: "2022", 
      category: "Web Platform"
    }
  ],

  certificates: [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-DEV-2023-001234",
      url: "https://aws.amazon.com/certification/certified-developer-associate/",
      description: "Demonstrates expertise in developing and maintaining applications on the AWS platform, including core AWS services, security best practices, and troubleshooting."
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google Career Certificates",
      date: "January 2023", 
      credentialId: "GOOGLE-UX-2023-567890",
      url: "https://coursera.org/professional-certificates/google-ux-design",
      description: "Comprehensive program covering the full UX design process from user research to prototyping and testing, with hands-on projects and industry-standard tools."
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta (via Coursera)",
      date: "November 2022",
      credentialId: "META-FE-2022-112233",
      url: "https://coursera.org/professional-certificates/meta-front-end-developer",
      description: "Advanced training in modern front-end development including React, JavaScript ES6+, version control, and responsive web design principles."
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "September 2022",
      credentialId: "MONGO-DEV-2022-445566", 
      url: "https://university.mongodb.com/certification",
      description: "Validates skills in MongoDB database design, implementation, and optimization for modern application development."
    },
    {
      title: "Scrum Master Certification (PSM I)",
      issuer: "Scrum.org",
      date: "July 2022",
      credentialId: "PSM1-2022-778899",
      url: "https://scrum.org/professional-scrum-master-i-certification",
      description: "Demonstrates understanding of Scrum framework and ability to support Scrum teams in achieving high performance and continuous improvement."
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "May 2022",
      credentialId: "FCC-JS-2022-334455",
      url: "https://freecodecamp.org/certification/angelique-langitan/javascript-algorithms-and-data-structures",
      description: "300-hour curriculum covering JavaScript fundamentals, ES6, data structures, algorithms, and functional programming concepts."
    }
  ]
};
