import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactLinks = [
  {
    name: 'GitHub',
    handle: 'rachitkumar2105',
    href: 'https://github.com/rachitkumar2105',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    handle: 'Rachit Kumar Singh',
    href: 'https://www.linkedin.com/in/rachit-kumar-singh-79429827b/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    handle: 'rachitkumar2105@gmail.com',
    href: 'mailto:rachitkumar2105@gmail.com',
    icon: Mail,
  },
];

const quickFacts = [
  '3rd Year B.Tech CSE @ KIIT',
  'Data Science & ML Enthusiast',
  'Python & Java Developer',
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-title">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about data science and technology. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold font-display">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary/50"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary/50"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <Textarea
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary/50 min-h-[120px] resize-none"
                  required
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-glow-secondary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center shrink-0"
                >
                  <link.icon className="text-primary" size={22} />
                </motion.div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{link.name}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {link.handle}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Status */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-500"
                />
                <span className="text-muted-foreground text-sm">
                  Open to internships and collaboration opportunities
                </span>
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div variants={itemVariants} className="glass-card p-5">
              <h4 className="text-primary font-semibold mb-3">Quick Facts</h4>
              <ul className="space-y-2">
                {quickFacts.map((fact, index) => (
                  <motion.li
                    key={fact}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
