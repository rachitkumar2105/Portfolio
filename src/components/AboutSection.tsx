import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { User, Briefcase, Lightbulb, Sparkles } from 'lucide-react';

const aboutCards = [
  {
    icon: User,
    title: 'Who I Am',
    description: 'I’m Rachit Kumar Singh, a motivated and growth-oriented individual with a strong interest in Data Science and Machine Learning. I’m curious by nature and enjoy learning through exploration and problem-solving.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Briefcase,
    title: 'What I Do',
    description: 'I work on applying data science and machine learning concepts to real-world problems through hands-on projects. I enjoy working with data, building models, and extracting meaningful insights while continuously expanding my knowledge and technical skills.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Lightbulb,
    title: 'My Approach',
    description: 'I begin by understanding the data and the problem statement in depth. I focus on learning by implementation, experimenting with different techniques, and improving consistently through practice, feedback, and reflection.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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



  const aboutText = "I am a 3rd-year B.Tech student in Computer Science and Engineering at KIIT, Bhubaneswar, dedicated to learning Data Science and Machine Learning. I am actively building my skills in Python and Java by working on practical projects. My focus is on continuous learning and developing my expertise through hands-on experimentation.";

  return (
    <section id="about" className="py-24 relative" ref={ref}>
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
            className="section-title inline-flex items-center gap-2"
          >
            <Sparkles size={14} className="text-primary" />
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Get to <span className="text-gradient">Know Me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-12"
          style={{ perspective: '1000px' }}
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="glass-card p-6 group cursor-default relative overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon with bounce animation */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <card.icon className="text-primary" size={26} />
              </motion.div>

              <h3 className="relative z-10 text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Decorative corner glow */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              />

              {/* Floating particles */}
              {hoveredCard === index && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
                      initial={{
                        x: 20 + i * 30,
                        y: 100,
                        opacity: 0
                      }}
                      animate={{
                        y: -20,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-muted-foreground leading-relaxed"
          >
            {aboutText}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
