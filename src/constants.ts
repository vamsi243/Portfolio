// Icon names are referenced as strings in COMPETENCIES, resolved dynamically in PlayStyles.tsx
import { ProfessionalStats, Experience, Project, CoreCompetency } from './types';

export const PROFESSIONAL_INFO = {
  name: "VAMSI",
  fullName: "Sai Vamsi Chunduru",
  title: "DATA ANALYTICS ENGINEER",
  stats: {
    modeling: 92,
    engineering: 94,
    deployment: 88,
    architecture: 90,
    programming: 95,
    research: 91
  } as ProfessionalStats,
  expertise: ["Data Analytics", "Generative AI", "LLM & RAG"],
  summary: "Data-driven professional with a strong background in data analytics, machine learning, data mining, and financial analytics. Seasoned in generating valuable insights, recommending effective strategies, and utilizing data science techniques. Proven track record of developing end-to-end data solutions and managing data teams.",
  interests: "Chelsea FC Enthusiast • Wildlife Drone Photographer • Technology Futurist"
};

export const COMPETENCIES: CoreCompetency[] = [
  { name: "Python", icon: "Terminal", category: "Mastery", isAdvanced: true },
  { name: "Streamlit", icon: "Terminal", category: "Mastery", isAdvanced: true },
  { name: "LangChain", icon: "Zap", category: "Mastery", isAdvanced: true },
  { name: "Agentic AI", icon: "Brain", category: "Mastery", isAdvanced: true },
  { name: "SQL", icon: "Database", category: "Data", isAdvanced: true },
  { name: "Vector DBs", icon: "Search", category: "Data", isAdvanced: true },
  { name: "GCP", icon: "Globe", category: "Deployment", isAdvanced: true },
  { name: "Docker", icon: "Globe", category: "Deployment" },
  { name: "React", icon: "Layout", category: "Frontend" },
  { name: "HTML/CSS", icon: "Layout", category: "Frontend" },
  { name: "Tableau", icon: "Search", category: "Data" },
  { name: "Power BI", icon: "Search", category: "Data" },
  { name: "Product Development", icon: "Cpu", category: "Mastery" },
];

export const CAREER_HISTORY: Experience[] = [
  {
    organization: "PKF - Australia",
    role: "Data Analyst 2",
    period: "2025 - Present",
    deliverables: "Strategic Reporting Solutions",
    impact: "Advanced Analytics for Clients",
    valuation: "Senior Level Insights",
    highlights: ["Led strategic report generation", "Developed in-house Data and AI solutions "]
  },
  {
    organization: "PKF - Australia",
    role: "Data Analyst",
    period: "2024 - 2025",
    deliverables: "Business Insight Reports",
    impact: "Data-Driven Recommendations",
    valuation: "Client Service Excellence",
    highlights: ["Conducted deep-dive analysis", "Advanced financial Analytics"]
  },
  {
    organization: "Baarez Technology Solutions",
    role: "Senior AI/ML Developer",
    period: "2023 - 2024",
    deliverables: "GenAI & LLM Solutions",
    impact: "Production-Ready AI",
    valuation: "FREELANCE SUCCESS",
    highlights: ["Built LLM pipelines", "Generative AI implementations"]
  },
  {
    organization: "eliiza",
    role: "Student Data Engineer",
    period: "2022",
    deliverables: "Traffic Management Dashboard",
    impact: "NYC Taxi GIS Optimization",
    valuation: "Internship Success",
    highlights: ["GCP Data Engineering", "Visualization in Tableau"]
  },
  {
    organization: "Infosys",
    role: "System Engineer - Data",
    period: "2018 - 2020",
    deliverables: "GSTN Refunds Migration",
    impact: "60% Reduction in Redundancy",
    valuation: "Enterprise Scale Automation",
    highlights: ["Database query optimization", "Automated VBA processes"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Mystic Chess",
    description: "A reimagining of the classic game of kings, blending traditional strategy with high-fantasy tactical depth.",
    fullDescription: "Mystic Chess is a chess variant, reimagining of the classic game of kings, blending traditional strategy with high-fantasy tactical depth. Built for the modern web, Mystic Chess combines a custom-built logic engine with real-time multiplayer capabilities to deliver a seamless, competitive experience.",
    challenge: "Building a custom chess engine with fantasy mechanics.",
    outcome: "Live multiplayer chess variant at mystic-chess.com.",
    coreTechnology: "Python & React",
    image: "/mystic-chess.png",
    tags: ["Python", "Custom Chess Engine", "React"],
    link: "https://mystic-chess.com/"
  },
  {
    title: "ImageAuth",
    description: "Authenticate images using AI and embed invisible cryptographic signatures.",
    fullDescription: "ImageAuth is a web application that allows creators to authenticate their images using AI and embed an invisible cryptographic signature. It features a Creator Studio for uploading images, analyzing them with edge AI to generate an authenticity score, and embedding a cryptographic signature invisibly into the image pixels using LSB steganography. It also provides a public scanner for anyone to verify the authenticity of an image.",
    challenge: "Embedding cryptographic signatures invisibly using LSB steganography.",
    outcome: "Live image authentication platform at image-auth.vercel.app.",
    coreTechnology: "AI & Cryptography",
    image: "/imageauth.png",
    tags: ["AI", "Steganography", "Cryptography", "Web App"],
    link: "https://image-auth.vercel.app/"
  },
  {
    title: "LangChain MultiAgent",
    description: "Multi-agent architecture for automated search and CSV analysis.",
    fullDescription: "Built a sophisticated multi-agent system using LangChain that automates complex tasks like search engine integration, deep CSV data analysis, and technical report generation with minimal human intervention.",
    challenge: "Automating complex, multi-step data processing tasks.",
    outcome: "Streamlined data analysis and reporting workflow.",
    coreTechnology: "LangChain & Python",
    image: "/langchain-multiagent.png",
    tags: ["Agentic AI", "LangChain", "Automation"]
  },
  {
    title: "Tax Evasion ML",
    description: "ML model to detect financial crime using Random Forest.",
    fullDescription: "Created a machine learning system to detect and prevent tax evasion. Utilized Random Forest and Neural Networks with synthetic data augmentation to improve model robustness and detection accuracy.",
    challenge: "Identifying subtle patterns in financial crime data.",
    outcome: "High-accuracy detection model for risk assessment.",
    coreTechnology: "Machine Learning (RF/NN)",
    image: "/tax-evasion-ml.jpg",
    tags: ["FinTech", "ML", "Security"]
  },
];
