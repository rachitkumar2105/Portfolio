import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Star, Github, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const featuredProjects = [
  {
    title: 'SupportGPT',
    description: 'An AI-powered system built with Groq LLM and PDF processing to enable users to upload documents and get instant, context-aware answers through a chat interface.',
    tags: ['FastAPI', 'SQLAlchemy', 'Groq LLM', 'PyPDF2'],
    featured: true,
    thumbnail: '/images/support-gpt.png',
    github: 'https://github.com/rachitkumar2105/SupportGPT',
    demo: 'https://support-gpt.vercel.app/',
  },
  {
    title: 'Churn Prediction',
    description: 'An end-to-end customer churn prediction platform using machine learning to identify at-risk customers with actionable insights and retention recommendations.',
    tags: ['Python', 'Scikit-Learn', 'FastAPI', 'React'],
    featured: true,
    thumbnail: '/images/churn-prediction.png',
    github: 'https://github.com/rachitkumar2105/Churn-Prediction',
    demo: 'https://churn-prediction-pi.vercel.app/',
  },
  {
    title: 'Fresh ScanX',
    description: 'An AI-based system using a fine-tuned EfficientNet-B0 (CNN) model that analyzes fruit images to classify freshness (fresh/rotten) and estimate confidence.',
    tags: ['Python', 'CNN', 'OpenCV', 'PyTorch'],
    featured: true,
    thumbnail: '/images/fresh-scanx.jpg',
    github: 'https://github.com/rachitkumar2105',
    demo: 'https://fresh-scan-x.vercel.app/',
  },
];

const otherProjects = [
  {
    title: 'AI DOST',
    description: 'An intelligent assistant platform that leverages AI to provide smart, contextual, and user-friendly solutions.',
    tags: ['Python', 'FastAPI', 'NLP'],
    thumbnail: '/images/ai-dost.png',
    github: 'https://github.com/rachitkumar2105',
    demo: 'https://ai-dost-one.vercel.app/',
  },
  {
    title: 'Sugar Sense',
    description: 'A health-focused application that helps users monitor and manage blood sugar levels with predictive analytics.',
    tags: ['Python', 'ML', 'Healthcare'],
    thumbnail: '/images/sugar-sense.jpg',
    github: 'https://github.com/rachitkumar2105',
    demo: 'https://sugar-sense.onrender.com',
  },
  {
    title: 'Word Guesser',
    description: 'Word Guesser is an interactive word-guessing game that challenges users to predict hidden words through logical clues.',
    tags: ['Python', 'Game Logic', 'Problem Solving', 'Web Application'],
    thumbnail: '/images/word-guesser.jpg',
    github: 'https://github.com/rachitkumar2105',
    demo: 'https://word-guesser-ns3u.onrender.com',
  },
  {
    title: 'Smart Movie Recommendation',
    description: 'A recommendation system that suggests movies based on user preferences using collaborative filtering and content-based...',
    tags: ['Python', 'ML', 'Recommendation System'],
    thumbnail: '/images/smart-movie.jpg',
    demo: 'https://smart-movie-recommendation.onrender.com',
  },
  {
    title: 'Book Recommendations System',
    description: 'An intelligent book recommendation engine that analyzes reading patterns and preferences to suggest relevant books.',
    tags: ['Python', 'ML', 'NLP'],
    thumbnail: '/images/book-recommendation.jpg',
    demo: 'https://book-recommendations-system-muy7.onrender.com',
  },
  {
    title: 'Chess Game',
    description: 'A fully functional chess game with an intuitive UI and game logic implementation.',
    tags: ['Python', 'Game Development', 'Logic'],
    thumbnail: '/images/chess.jpg',
    demo: 'https://chessgame16oc07.lovable.app',
  },
  {
    title: 'Typing Speed Test',
    description: 'An interactive application to measure and improve typing speed with real-time feedback and statistics.',
    tags: ['JavaScript', 'Web Development', 'UI/UX'],
    thumbnail: '/images/typing-speed.jpg',
    demo: 'https://typing-speed-test-ee8z.onrender.com/',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A classic tic-tac-toe game with a clean interface and optional AI opponent.',
    tags: ['JavaScript', 'Game', 'Logic'],
    thumbnail: '/images/tic-tac-toe.jpg',
    demo: 'https://tic-tac-toe-6odn.onrender.com/',
  },
  {
    title: 'Bank Management System',
    description: 'A comprehensive banking system for managing accounts, transactions, and customer data.',
    tags: ['Java', 'Database', 'OOP'],
    thumbnail: '/images/bank-management.jpg',
    demo: 'https://bank-management-system-y14x.onrender.com',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredOther, setHoveredOther] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            My Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collection of projects showcasing my skills in Data Science, Machine Learning, and Software Development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-6 mb-16"
          style={{ perspective: '1000px' }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{
                y: -12,
                rotateY: 5,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Featured Badge + Action Icons at top */}
              <div className="flex items-center justify-between p-4 border-b border-border/30">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-1.5 text-primary text-sm font-medium"
                >
                  <Star size={14} className="fill-current" />
                  Featured
                </motion.div>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold font-display mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Thumbnail Area */}
                <motion.div
                  className="relative h-32 mb-4 rounded-lg overflow-hidden bg-muted/30 border border-border/30 flex items-center justify-center group/thumb cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground/50 group-hover/thumb:text-primary/50 transition-colors">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ImageIcon size={32} />
                      </motion.div>
                      <span className="text-xs mt-2">Add Thumbnail</span>
                    </div>
                  )}
                </motion.div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="skill-badge text-xs cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                {/* Open Project Button */}
                {/* @ts-ignore */}
                {project.demo && (
                  <motion.a
                    // @ts-ignore
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all duration-300 font-medium group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open Project
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </motion.a>
                )}
              </div>

              {/* Animated corner accent */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-3xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl font-semibold font-display mb-8 text-center"
        >
          Other <span className="text-gradient">Projects</span>
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              onHoverStart={() => setHoveredOther(index)}
              onHoverEnd={() => setHoveredOther(null)}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 400, damping: 20 }
              }}
              className="glass-card p-5 group cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-base font-semibold font-display group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex items-center gap-1">
                  {/* GitHub Link */}
                  {/* @ts-ignore */}
                  {project.github ? (
                    <motion.a
                      // @ts-ignore
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground group-hover:text-primary transition-colors z-10 relative"
                    >
                      <Github size={16} />
                    </motion.a>
                  ) : (
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      className="p-1.5 rounded-lg text-muted-foreground/30 transition-colors cursor-default"
                    >
                      <Github size={16} />
                    </motion.div>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {project.description}
              </p>

              {/* Thumbnail Area for Other Projects */}
              <motion.div
                className="relative aspect-video w-full mb-3 rounded-lg overflow-hidden bg-muted/20 border border-border/20 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground/40">
                    <ImageIcon size={20} />
                    <span className="text-xs">Thumbnail</span>
                  </div>
                )}
              </motion.div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary/80 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* @ts-ignore */}
              {project.demo && (
                <motion.a
                  // @ts-ignore
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20 transition-all duration-300 text-sm font-medium group/btn relative z-20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Open
                  <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </motion.a>
              )}

              {/* Hover glow */}
              {hoveredOther === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <MagneticButton href="https://github.com/rachitkumar2105">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-muted/50 hover:bg-primary hover:text-primary-foreground hover:border-primary text-foreground font-medium transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
