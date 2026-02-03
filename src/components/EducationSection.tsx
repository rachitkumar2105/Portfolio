import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'KIIT University, Bhubaneswar',
    score: 'CGPA: 8.29',
    status: '3rd Year (Ongoing)',
    isOngoing: true,
    icon: GraduationCap,
    position: 'left',
  },
  {
    degree: 'I.S.C, Class 12th in Science',
    institution: 'Vision International School, Uttarpara Kotrung',
    score: 'Percentage: 86%',
    status: 'Completed (2023)',
    isOngoing: false,
    icon: Award,
    position: 'right',
  },
  {
    degree: 'I.C.S.E, Class 10th in Science',
    institution: 'Vision International School, Uttarpara Kotrung',
    score: 'Percentage: 89.5%',
    status: 'Completed (2021)',
    isOngoing: false,
    icon: CheckCircle2,
    position: 'left',
  },
];

export const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Create parallax transforms for each card
  const xLeft1 = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], ['-100%', '0%', '0%', '0%', '-50%']);
  const xRight = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], ['100%', '0%', '0%', '0%', '50%']);
  const xLeft2 = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], ['-100%', '0%', '0%', '0%', '-50%']);

  const parallaxValues = [xLeft1, xRight, xLeft2];

  return (
    <section id="education" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-title">Academic Background</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            My <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(180deg, hsl(187, 85%, 53%) 0%, hsl(270, 60%, 65%) 50%, hsl(187, 85%, 53%) 100%)',
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            />
            {/* Animated glow traveling down */}
            <motion.div
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary via-primary/80 to-transparent"
              animate={{ y: ['0%', '500%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ filter: 'blur(8px)' }}
            />
          </motion.div>

          <div className="space-y-8 md:space-y-0">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                style={{ x: parallaxValues[index] }}
                className={`relative md:flex md:items-center ${index > 0 ? 'md:mt-20' : ''} ${edu.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Card */}
                <div className={`md:w-[calc(50%-3rem)] ${edu.position === 'left' ? 'md:pr-0' : 'md:pl-0'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      boxShadow: '0 20px 40px -15px hsla(187, 85%, 53%, 0.2)'
                    }}
                    className="glass-card p-6 relative group overflow-hidden"
                  >
                    {/* Icon Badge */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute -top-2 -left-2 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/40 backdrop-blur-sm z-10"
                    >
                      <edu.icon className="text-primary" size={22} />
                    </motion.div>

                    {/* Completion checkmark */}
                    {!edu.isOngoing && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.3 + 0.5, type: 'spring' }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center"
                      >
                        <CheckCircle2 className="text-emerald-400" size={18} />
                      </motion.div>
                    )}

                    <div className="pt-6 pl-4">
                      <h3 className="text-lg font-semibold font-display mb-1 group-hover:text-primary transition-colors pr-10">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <motion.span
                          className="text-primary font-semibold text-sm px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                          whileHover={{ scale: 1.05 }}
                        >
                          {edu.score}
                        </motion.span>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${edu.isOngoing
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-muted text-muted-foreground border border-border'
                          }`}>
                          {edu.isOngoing && (
                            <motion.span
                              className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.3 + 0.4,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10"
                >
                  <motion.div
                    className={`relative flex items-center justify-center ${edu.isOngoing ? 'w-8 h-8' : 'w-7 h-7'
                      }`}
                    animate={edu.isOngoing ? {
                      boxShadow: [
                        '0 0 0 0 hsla(187, 85%, 53%, 0.4)',
                        '0 0 0 12px hsla(187, 85%, 53%, 0)',
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className={`w-full h-full rounded-full border-2 ${edu.isOngoing
                        ? 'bg-primary border-primary'
                        : 'bg-background border-primary/60'
                      }`}>
                      {edu.isOngoing && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                        </span>
                      )}
                      {!edu.isOngoing && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <CheckCircle2 className="text-primary" size={14} />
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
