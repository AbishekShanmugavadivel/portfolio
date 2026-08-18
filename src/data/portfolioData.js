export const personalInfo = {
  name: "ABISHEK S",
  fullName: "Abishek S.",
  role: "Full Stack Developer",
  secondaryRole: "AI/ML Enthusiast",
  title: "Full Stack Developer | AI/ML Enthusiast",
  heroDescription: "I build modern, responsive and user-friendly web applications and AI-powered solutions that solve real-world problems.",
  aboutDescription: "I'm a passionate Full Stack Developer who enjoys building modern web applications and AI-powered solutions. I love solving real-world problems, learning new technologies, and turning ideas into useful digital experiences.",
  location: "Kumbakonam, TAMIL NADU",
  experience: "Fresher",
  email: "abishekgasckcs@gmail.com",
  education: "B.Sc. Computer Science",
  institution: "Government Arts and Science College, Kuthalam, Tamil Nadu (Affiliated to Annamalai University)",
  github: "https://github.com/AbishekShanmugavadivel",
  linkedin: "https://www.linkedin.com/in/abishek0204/",
  twitter: "https://twitter.com/abishek_dev",
  resumeUrl: "#",
};

export const skillsData = [
  { name: "HTML5", icon: "html5", color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: "css3", color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "Frontend" },
  { name: "React", icon: "react", color: "#61DAFB", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4", category: "Frontend" },
  { name: "Material UI", icon: "mui", color: "#007FFF", category: "Frontend" },

  { name: "Node.js", icon: "nodejs", color: "#339933", category: "Backend" },
  { name: "Express.js", icon: "express", color: "#1E293B", category: "Backend" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248", category: "Backend" },
  { name: "Mongoose", icon: "mongoose", color: "#880000", category: "Backend" },
  { name: "JWT", icon: "jwt", color: "#D63AFF", category: "Authentication & API" },

  { name: "Python", icon: "python", color: "#3776AB", category: "Programming" },

  { name: "Git", icon: "git", color: "#F05032", category: "Version Control" },
  { name: "GitHub", icon: "github", color: "#0F172A", category: "Version Control" },

  { name: "AWS S3", icon: "awss3", color: "#E05243", category: "Cloud & AWS" },
  { name: "AWS EC2", icon: "awsec2", color: "#FF9900", category: "Cloud & AWS" },
  { name: "AWS SQS", icon: "awssqs", color: "#FF4F8B", category: "Cloud & AWS" },
  { name: "AWS SES", icon: "awsses", color: "#DD344C", category: "Cloud & AWS" },

  { name: "Docker", icon: "docker", color: "#2496ED", category: "DevOps & Tools" },
  { name: "Vitest", icon: "vitest", color: "#78C000", category: "Testing" },
  { name: "Postman", icon: "postman", color: "#FF6C37", category: "API & Design" },
  { name: "Figma", icon: "figma", color: "#F24E1E", category: "API & Design" },
];

export const projectsData = [
  {
    id: 1,
    title: "LIA — AI Super App",
    image: "/projects/lia-ai-super-app.png",
    description: "An all-in-one AI platform I built to bring chat, voice, image generation, coding, and other AI capabilities together in one simple experience.",
    fullDescription: "An all-in-one AI platform I built to bring chat, voice, image generation, coding, and other AI capabilities together in one simple experience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI APIs", "Socket.IO"],
    allTech: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Web Speech API", "Socket.IO", "Tailwind CSS"],
    liveDemo: "https://lia-app-hazel.vercel.app/login",
    theme: "from-emerald-600 to-teal-900",
    badge: "AI Super App",
    highlights: ["Voice & Image AI Interface", "Contextual Memory", "Multi-modal AI Chat", "Live Workspace Sync"]
  },
  {
    id: 2,
    title: "SmartBus — Smart Bus Tracking",
    image: "/projects/smartbus.png",
    description: "A smart transportation project focused on live bus tracking, route management, stop information, and estimated arrival times.",
    fullDescription: "A smart transportation project focused on live bus tracking, route management, stop information, and estimated arrival times.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "GPS"],
    allTech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Leaflet Maps", "GPS Feed"],
    liveDemo: "https://smart-bus-blush.vercel.app/",
    theme: "from-cyan-600 to-blue-700",
    badge: "Real-time GPS",
    highlights: ["Live GPS Socket Feed", "Route ETA Engine", "Interactive Maps", "Geofence Alerts"]
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    image: "/projects/ai-resume-analyzer.png",
    description: "An AI-powered resume tool that analyzes a resume and helps users understand their skills, strengths, and areas they can improve.",
    fullDescription: "An AI-powered resume tool that analyzes a resume and helps users understand their skills, strengths, and areas they can improve.",
    technologies: ["Python", "FastAPI", "Machine Learning", "NLP", "React"],
    allTech: ["Python", "FastAPI", "Scikit-Learn", "NLP", "React", "Tailwind CSS"],
    liveDemo: "https://ai-resume-analyser-nu-silk.vercel.app/",
    theme: "from-purple-600 to-indigo-900",
    badge: "AI / ML",
    highlights: ["PDF Parsing Engine", "NLP Skill Extraction", "Match Score Engine", "Career Improvement Tips"]
  },
  {
    id: 4,
    title: "AI CRM Dashboard",
    image: "/projects/ai-crm-dashboard.png",
    description: "A full-stack CRM dashboard I built to organize customer information, manage business data, and provide a clean interface for working with CRM data.",
    fullDescription: "A full-stack CRM dashboard I built to organize customer information, manage business data, and provide a clean interface for working with CRM data.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
    allTech: ["React", "Node.js", "Express.js", "MongoDB", "Recharts", "AI Analytics"],
    liveDemo: "https://ai-crm-project-amber.vercel.app/login",
    theme: "from-violet-600 to-purple-900",
    badge: "Enterprise AI",
    highlights: ["Customer Pipeline Visualizer", "Predictive Lead Scoring", "Automated Workflows", "Business Analytics"]
  }
];

export const certificatesData = [
  {
    id: 1,
    title: "UI/UX Workshop",
    issuer: "Vebbox Software Solutions Private Limited",
    date: "11.07.2026 – 12.07.2026",
    description: "Successfully completed a UI/UX workshop conducted by Vebbox Software Solutions Private Limited.",
    image: "/certificates/abishek-ui-ux-workshop.jpeg",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    icon: "design"
  },
  {
    id: 2,
    title: "Data Analytics Workshop",
    issuer: "Vebbox Software Solutions Private Limited",
    date: "27.06.2026 – 28.06.2026",
    description: "Successfully completed a Data Analytics workshop conducted by Vebbox Software Solutions Private Limited.",
    image: "/certificates/abishek-data-analytics-workshop.jpeg",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    icon: "analytics"
  },
  {
    id: 3,
    title: "Full Stack Developer Internship",
    issuer: "Vebbox Software Solutions Private Limited",
    date: "15.05.2026 – 30.05.2026",
    description: "Successfully completed an internship as a Full Stack Developer at Vebbox Software Solutions Private Limited.",
    image: "/certificates/abishek-full-stack-internship.jpeg",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    icon: "code"
  }
];

export const resumeData = {
  summary: "Enthusiastic Full Stack Developer & AI/ML Enthusiast with hands-on project experience in MERN stack, Python, and AI integrations. Strong foundation in building scalable web applications and intuitive user interfaces.",
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "Government Arts and Science College, Kuthalam, Tamil Nadu",
      affiliation: "Affiliated to Annamalai University",
      period: "2024 – 2027",
      score: "CGPA: 8.4 / 10.0",
      details: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Computer Networks, Operating Systems, Software Engineering, Machine Learning."
    }
  ],
  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "Vebbox Software Solutions Private Limited",
      period: "15.05.2026 – 30.05.2026",
      location: "Tamil Nadu, India",
      points: [
        "Worked on full-stack web application development as a Full Stack Developer Intern.",
        "Engineered client-side UI components and server-side features.",
        "Completed specialized workshops in UI/UX Design and Data Analytics."
      ]
    }
  ],
  highlights: [
    "Completed Full Stack Developer Internship at Vebbox Software Solutions",
    "Certified in UI/UX Design and Data Analytics Workshops",
    "Engineered 4 production-ready Full Stack & AI applications"
  ]
};
