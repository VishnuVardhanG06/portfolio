export type ResumeLinkKey = "linkedin" | "github";

export type Resume = {
  fullName: string;
  title: string;
  location: string;
  contact: { phone: string; email: string };
  links: Record<ResumeLinkKey, string>;
  domain: string[];
  researchInterests: string[];
  summary: string;
  skills: {
    programming: string[];
    machineLearning: string[];
    dataAnalysis: string[];
    computerVision: string[];
    dataVisualization: string[];
    tools: string[];
    webAndPlatforms: string[];
  };
  experience: Array<{
    company: string;
    role: string;
    location?: string;
    dates: string;
    bullets: string[];
    technologies?: string[];
  }>;
  projects: Array<{
    name: string;
    slug: string;
    highlights: string[];
    technologies: string[];
    links?: { github?: string; demo?: string };
  }>;
  education: Array<{
    degree: string;
    institution: string;
    dates?: string;
    score?: string;
  }>;
  certifications: string[];
  activities: string[];
  languages: Array<{ name: string; level: string }>;
  achievements: string[];
};

export const resume: Resume = {
  fullName: "Gaddam Vishnu Vardhan",
  title: "Data Science Undergraduate | Machine Learning, Computer Vision, Geospatial Analytics",
  location: "Hyderabad, India",
  contact: {
    phone: "+91 8919300168",
    email: "vishnuvardhangaddam714@gmail.com",
  },
  links: {
    linkedin: "https://linkedin.com/in/gaddam-vishnu-vardhan-6840a02a5",
    github: "https://github.com/VishnuVardhanG06",
  },
  domain: ["Machine Learning", "Artificial Intelligence", "Computer Vision", "Remote Sensing", "Data Analytics"],
  researchInterests: ["Machine Learning", "Artificial Intelligence", "Computer Vision", "Remote Sensing", "Data Analytics"],
  summary:
    "Data Science undergraduate interested in research at the intersection of artificial intelligence and real-world data problems. Experienced in building machine learning applications, geospatial analysis tools, and AI-driven data systems. Seeking research opportunities to contribute to data-driven solutions in machine learning, computer vision, and geospatial intelligence.",
  skills: {
    programming: ["Python", "R", "SQL", "C"],
    machineLearning: ["scikit-learn", "TensorFlow", "PyTorch"],
    dataAnalysis: ["Pandas", "NumPy"],
    computerVision: ["OpenCV", "Image Processing"],
    dataVisualization: ["Matplotlib", "Seaborn", "Power BI", "Tableau"],
    tools: ["Git", "Jupyter Notebook", "Google Colab", "VS Code", "SQLite"],
    webAndPlatforms: [
      "Flask",
      "Streamlit",
      "FastAPI",
      "Node.js",
      "Playwright",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "Google Earth Engine",
    ],
  },
  experience: [],
  projects: [
    {
      name: "Urban Growth Detection Using Satellite Imagery",
      slug: "urban-growth-detection",
      highlights: [
        "Built a geospatial analysis system to detect urban expansion using satellite imagery.",
        "Applied remote sensing indices (NDVI, NDBI, MNDWI) for land-use classification.",
        "Used Google Earth Engine with Landsat datasets for satellite data processing.",
        "Developed a web interface to visualize urban growth patterns.",
      ],
      technologies: ["Python", "Google Earth Engine", "Flask", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "DataQueryAI - Natural Language Data Query System",
      slug: "dataqueryai",
      highlights: [
        "Developed an AI application allowing users to query tabular datasets using natural language.",
        "Integrated TAPAS transformer model for table-based question answering.",
        "Built an interface for dataset upload, preview, and automated query responses.",
      ],
      technologies: ["Python", "Streamlit", "Pandas", "SQLite", "HuggingFace Transformers"],
    },
    {
      name: "Velocity Suite - Market Intelligence Platform",
      slug: "velocity-suite",
      highlights: [
        "Built a full-stack platform for collecting and analyzing real-time web data.",
        "Implemented automated web scraping pipelines with structured data validation.",
        "Designed a dashboard displaying market insights and analytics.",
      ],
      technologies: ["Python", "Node.js", "FastAPI", "Playwright", "SQLite", "Tailwind CSS"],
    },
    {
      name: "Plant Disease Detection System",
      slug: "plant-disease-detection",
      highlights: [
        "Developed an end-to-end ML pipeline to identify 8+ distinct crop diseases using leaf images.",
        "Implemented HOG feature extraction and optimized Random Forest and SVM classifiers for high accuracy.",
        "Built an interactive Flask web application with real-time image analysis and glass morphism UI.",
        "Integrated a dynamic knowledge base providing automated symptoms, prevention, and treatment advice.",
      ],
      technologies: ["Python", "Flask", "scikit-learn", "OpenCV", "HOG", "JavaScript", "CSS3"],
    },
  ],
  education: [
    {
      degree: "B.Tech - Computer Science and Engineering (Data Science)",
      institution: "Vignana Bharathi Institute of Technology",
      dates: "2023-2027",
      score: "CGPA: 8.2/10",
    },
    { degree: "Intermediate (MPC)", institution: "Narayana Junior College", score: "92.8%" },
    { degree: "SSC", institution: "Narayana High School", score: "100%" },
  ],
  certifications: [
    "AWS Academy Graduate - AWS Cloud Foundations",
    "Python Programming Certification - Cisco",
    "C Programming Certification - Cisco",
    "GenAI Powered Data Analytics Job Simulation - Tata Group (Forage)",
    "Technology Job Simulation - Deloitte Australia (Forage)",
  ],
  activities: [
    "Member - Computer Society of India (CSI)",
    "Member - Institution of Engineers (India)",
    "Member - Robotics Club, Vignana Bharathi Institute of Technology",
    "Participant - GenAI Hackathon organized by Google Developer Groups and other innovative hackathons",
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Telugu", level: "Native" },
    { name: "Hindi", level: "Conversational" },
  ],
  achievements: ["SSC: 100%", "Intermediate (MPC): 92.8%", "B.Tech CGPA: 8.2/10 (as listed)"],
};

