import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Skills from the reference image with color-coded categories
const skills = [
  { name: 'Python', category: 'Languages', color: 'from-cyan-400 to-cyan-600', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30', textColor: 'text-cyan-400' },
  { name: 'Java', category: 'Languages', color: 'from-cyan-400 to-cyan-600', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30', textColor: 'text-cyan-400' },
  { name: 'Machine Learning', category: 'Core Skills', color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', textColor: 'text-purple-400' },
  { name: 'SQL', category: 'Languages', color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30', textColor: 'text-yellow-400' },
  { name: 'Pandas', category: 'Libraries', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30', textColor: 'text-green-400' },
  { name: 'NumPy', category: 'Libraries', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30', textColor: 'text-green-400' },
  { name: 'Scikit-Learn', category: 'Libraries', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30', textColor: 'text-green-400' },
  { name: 'NLP', category: 'Core Skills', color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', textColor: 'text-purple-400' },
  { name: 'Tableau', category: 'Tools', color: 'from-rose-400 to-rose-600', bgColor: 'bg-rose-500/10', borderColor: 'border-rose-500/30', textColor: 'text-rose-400' },
  { name: 'Statistics', category: 'Core Skills', color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', textColor: 'text-purple-400' },
  { name: 'Flask', category: 'Frameworks', color: 'from-amber-400 to-amber-600', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30', textColor: 'text-amber-400' },
  { name: 'FastAPI', category: 'Frameworks', color: 'from-amber-400 to-amber-600', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30', textColor: 'text-amber-400' },
  { name: 'Keras', category: 'Libraries', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30', textColor: 'text-green-400' },
];

const categories = [
  { name: 'Languages', color: 'bg-cyan-400' },
  { name: 'Core Skills', color: 'bg-purple-400' },
  { name: 'Libraries', color: 'bg-green-400' },
  { name: 'Frameworks', color: 'bg-amber-400' },
  { name: 'Tools', color: 'bg-rose-400' },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="text-center mb-16"
        >
          {/* Animated section title with typing effect */}
          <motion.div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="section-title inline-block"
            >
              {'Technical Skills'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.03 + 0.2, duration: 0.3 }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
          
          {/* Main heading with reveal animation */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-display relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              My{' '}
            </motion.span>
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ 
                delay: 0.6, 
                duration: 0.6, 
                type: 'spring',
                stiffness: 200 
              }}
              whileHover={{ 
                scale: 1.1,
                textShadow: '0 0 30px hsla(187, 85%, 53%, 0.5)'
              }}
            >
              Expertise
            </motion.span>
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="h-px w-16 bg-gradient-to-r from-transparent to-primary"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="h-px w-16 bg-gradient-to-l from-transparent to-primary"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 30, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0, rotate: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05 + 0.5,
                type: 'spring',
                stiffness: 200,
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ 
                scale: 1.15,
                y: -8,
                zIndex: 10,
                transition: { type: 'spring', stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2.5 rounded-lg ${skill.bgColor} border ${skill.borderColor} cursor-pointer overflow-hidden group`}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              
              {/* Pulse ring on hover */}
              {hoveredSkill === skill.name && (
                <motion.div
                  className={`absolute inset-0 rounded-lg border-2 ${skill.borderColor}`}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}

              <span className={`relative z-10 font-medium text-sm ${skill.textColor}`}>
                {skill.name}
              </span>

              {/* Sparkle effect */}
              {hoveredSkill === skill.name && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${skill.textColor.replace('text-', 'bg-')}`}
                      initial={{ 
                        x: '50%', 
                        y: '50%',
                        opacity: 1,
                        scale: 0
                      }}
                      animate={{ 
                        x: `${30 + Math.random() * 40}%`,
                        y: `${-50 - i * 30}%`,
                        opacity: 0,
                        scale: 1
                      }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 cursor-default"
            >
              <motion.span 
                className={`w-3 h-3 rounded-full ${category.color}`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
              <span className="text-sm text-muted-foreground">{category.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
