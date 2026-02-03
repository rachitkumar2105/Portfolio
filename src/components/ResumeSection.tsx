import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            My Resume
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            View My <span className="text-gradient">CV</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['200% 0%', '-200% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center shrink-0"
            >
              <FileText className="text-primary" size={32} />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold font-display mb-1">Rachit Kumar Singh</h3>
              <p className="text-muted-foreground text-sm">
                Data Science & Machine Learning | Python Developer | B.Tech CSE
              </p>
            </div>

            <div className="flex gap-3">
              <MagneticButton
                href="/Rachit Resume-2026.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-glow-secondary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-shadow"
                // @ts-ignore
                download="Rachit Resume-2026.pdf"
              >
                <Download size={16} />
                Download
              </MagneticButton>

              <MagneticButton
                href="/Rachit Resume-2026.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background/50 hover:bg-muted text-foreground font-medium text-sm transition-colors"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                View Full
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
