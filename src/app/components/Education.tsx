import { motion } from "motion/react";
import { resumeData } from "../data";
import { fadeIn, staggerContainer } from "../utils/animations";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-background" id="education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education */}
        <div>
          <SectionHeader title="Education" />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {resumeData.education.map((edu, index) => (
              <motion.div key={index} variants={fadeIn} className="flex flex-col p-6 bg-card border border-border rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                  <span className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">{edu.duration}</span>
                </div>
                <p className="text-foreground/80 font-medium text-base mb-3">{edu.degree}</p>
                <p className="text-sm text-muted-foreground font-mono">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div id="certifications">
          <SectionHeader title="Certifications" />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            {resumeData.certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="flex flex-col p-6 bg-card border border-border rounded-lg"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.issuer}
                </p>
                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link}
                    className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-all w-fit"
                  >
                    View Credential
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
