import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder for resume - user can update this with their actual resume link
  const resumeUrl = "/Final Resume 2026.pdf";

  return (
    <section id="resume" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(199_89%_48%_/_0.05)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Resume
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            View My CV
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-card border border-border">
            {/* Resume Preview */}
            <div className="aspect-[8.5/11] w-full max-w-4xl mx-auto mb-8 rounded-lg bg-secondary/50 border border-border overflow-hidden">
              <iframe
                src={`${resumeUrl}#toolbar=0`}
                className="w-full h-full"
                title="Resume PDF"
              >
                <div className="flex flex-col items-center justify-center h-full p-4">
                  <FileText className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Unable to display PDF directly. Please download to view.
                  </p>
                </div>
              </iframe>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                asChild
              >
                <a href={resumeUrl} download="Rachit_Kumar_Singh_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Screen
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Add your resume file to enable download and preview functionality
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
