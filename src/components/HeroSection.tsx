import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Rocket, Code } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { MagneticButton } from './MagneticButton';

const roles = [
  'Data Science Enthusiast',
  'Machine Learning Developer',
  'Python Developer',
  'Problem Solver',
];

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border bg-muted/50 backdrop-blur-sm"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block w-2 h-2 rounded-full bg-green-500"
            />
            Available for opportunities
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Rocket size={14} className="text-primary" />
            </motion.span>
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display"
          >
            Hi, I'm{' '}
            <motion.span
              className="text-gradient inline-block pb-2"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 30px hsla(187, 85%, 53%, 0.5)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Rachit Kumar Singh
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground h-8">
            <TypewriterText texts={roles} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-muted-foreground leading-relaxed"
          >
            I am a 3rd-year B.Tech student in Computer Science and Engineering at KIIT,
            Bhubaneswar, dedicated to learning Data Science and Machine Learning. I am
            actively building my skills in Python and Java by working on practical projects.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <MagneticButton href="#projects">
              <motion.span
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button glow animation */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.span>
            </MagneticButton>
            <MagneticButton href="#contact">
              <motion.span
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-foreground font-medium hover:bg-primary/10 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-primary/5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get in Touch</span>
              </motion.span>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 pt-6"
          >
            {[
              { icon: Github, href: 'https://github.com/rachitkumar2105', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rachit-kumar-singh-79429827b/', label: 'LinkedIn' },
              { icon: Code, href: 'https://leetcode.com/u/TUaaHoTmYs/', label: 'LeetCode' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rachitkumar2105@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 1 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-full glass-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group relative overflow-hidden block"
                >
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/30 rounded-full"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <social.icon size={20} className="relative z-10" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors block group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full border border-border/50 backdrop-blur-sm group-hover:border-primary/50 transition-colors"
            >
              <ChevronDown size={24} />
            </motion.div>
            <motion.span
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              Scroll to explore
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
