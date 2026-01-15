export const personalInfo = {
  name: "Rachit Kumar Singh",
  title: "Learning Data Science and Machine Learning",
  bio: "I am a 3rd-year B.Tech student in Computer Science and Engineering at KIIT, Bhubaneswar, dedicated to learning Data Science and Machine Learning. I am actively building my skills in Python and Java by working on practical projects. My focus is on continuous learning and developing my expertise through hands-on experimentation.",
  email: "rachitkumar2105@gmail.com",
  github: "https://github.com/rachitkumar2105",
  linkedin: "https://www.linkedin.com/in/rachit-kumar-singh-79429827b/",
};

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "KIIT University",
    scoreLabel: "CGPA",
    score: "8.38",
    status: "3rd Year (Ongoing)",
  },
  {
    degree: "I.S.C, Class 12th in Science",
    institution: "Vision International School, Uttarpara Kotrung",
    scoreLabel: "Percentage",
    score: "86%",
    status: "Completed (2023)",
  },
  {
    degree: "I.C.S.E, Class 10th in Science",
    institution: "Vision International School, Uttarpara Kotrung",
    scoreLabel: "Percentage",
    score: "89.5%",
    status: "Completed (2021)",
  },
];

export const skills = [
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "Machine Learning", category: "core" },
  { name: "SQL", category: "data" },
  { name: "Pandas", category: "library" },
  { name: "NumPy", category: "library" },
  { name: "Scikit-Learn", category: "library" },
  { name: "NLP", category: "core" },
  { name: "Tableau", category: "tool" },
  { name: "Statistics", category: "core" },
  { name: "Flask", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "Keras", category: "library" },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-dost",
    name: "AI Dost",
    description: "An intelligent AI-powered assistant designed to help users with various tasks through natural language processing and machine learning capabilities.",
    tags: ["Python", "NLP", "Machine Learning", "AI"],
    github: "#",
    live: "https://ai-dost.onrender.com/",
    featured: true,
  },
  {
    id: "sugar-sense",
    name: "Sugar Sense",
    description: "A health-focused application that helps users monitor and manage blood sugar levels with predictive analytics and personalized recommendations.",
    tags: ["Python", "ML", "Healthcare", "Data Analysis"],
    github: "#",
    live: "https://sugar-sense.onrender.com",
    featured: true,
  },
  {
    id: "fresh-scan-x",
    name: "Fresh ScanX",
    description: "An innovative solution using computer vision and machine learning to detect food freshness and quality through image analysis.",
    tags: ["Python", "Computer Vision", "Deep Learning", "FastAPI"],
    github: "#",
    live: "https://freshscanx-frontend.onrender.com",
    featured: true,
  },
  {
    id: "smart-movie-recommendation",
    name: "Smart Movie Recommendation",
    description: "A recommendation system that suggests movies based on user preferences using collaborative filtering and content-based algorithms.",
    tags: ["Python", "ML", "Recommendation System"],
    github: "#",
    live: "https://smart-movie-recommendation.onrender.com",
    featured: false,
  },
  {
    id: "book-recommendations-system",
    name: "Book Recommendations System",
    description: "An intelligent book recommendation engine that analyzes reading patterns and preferences to suggest relevant books.",
    tags: ["Python", "ML", "NLP", "Flask"],
    github: "#",
    live: "https://book-recommendations-system-muy7.onrender.com",
    featured: false,
  },
  {
    id: "chess-game",
    name: "Chess Game",
    description: "A fully functional chess game with an intuitive UI and game logic implementation.",
    tags: ["Python", "Game Development", "Logic"],
    github: "#",
    live: "https://chessgame16oc07.lovable.app",
    featured: false,
  },
  {
    id: "typing-speed-test",
    name: "Typing Speed Test",
    description: "An interactive application to measure and improve typing speed with real-time feedback and statistics.",
    tags: ["JavaScript", "Web Development", "UI/UX"],
    github: "#",
    live: "https://typing-speed-test-ee8z.onrender.com/",
    featured: false,
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    description: "A classic tic-tac-toe game with a clean interface and optional AI opponent.",
    tags: ["JavaScript", "Game", "Logic"],
    github: "#",
    live: "https://tic-tac-toe-6odn.onrender.com/",
    featured: false,
  },
  {
    id: "bank-management-system",
    name: "Bank Management System",
    description: "A comprehensive banking system for managing accounts, transactions, and customer data.",
    tags: ["Java", "Database", "OOP"],
    github: "#",
    live: "https://bank-management-system-y14x.onrender.com",
    featured: false,
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
