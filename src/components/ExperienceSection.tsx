import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Trophy } from 'lucide-react';

const experienceData = [
  {
    title: 'Data Analytics Job Simulation',
    company: 'Deloitte Australia - Virtual Experience (Forage)',
    period: 'May 2025',
    description: 'Performed end-to-end data analysis in Python to identify anomalies and deliver actionable insights; cleaned and prepared datasets to improve data quality.',
    type: 'Experience',
    icon: Briefcase,
  }
];

const certificationData = [
  {
    title: 'Alpha DSA with Java',
    org: 'Apna College',
    date: '2025',
    icon: Award,
  },
  {
    title: 'Data Science with Gen AI & Data Science Masters 2.0',
    org: 'Physics Wallah',
    date: 'Ongoing',
    icon: Award,
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-title">Professional Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" size={20} />
              Work Experience
            </h3>
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 relative group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-primary">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
              <Award className="text-primary" size={20} />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certificationData.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold group-hover:text-primary transition-colors">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.org} • {cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
