import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/rachitkumar2105', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rachit-kumar-singh-79429827b/', label: 'LinkedIn' },
  { icon: Code2, href: 'https://leetcode.com/u/TUaaHoTmYs/', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:rachitkumar2105@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border/50 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-full glass-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 block"
                >
                  <social.icon size={20} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground text-center">
            <p>© 2024 Rachit Kumar Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
