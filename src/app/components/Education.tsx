import { motion } from "motion/react";
import { resumeData } from "../data";
import { fadeIn, staggerContainer } from "../utils/animations";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-background" id="education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
        
        {/* Education */}
        <div className="w-full">
          <SectionHeader title="Education" />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-8 w-full"
          >
            {resumeData.education.map((edu, index) => (
              <motion.div key={index} variants={fadeIn} className="flex flex-col p-6 bg-card border border-border rounded-lg w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 w-full">
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">{edu.institution}</h3>
                  <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded w-fit sm:whitespace-nowrap shrink-0">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-foreground/80 font-medium text-base mb-3">{edu.degree}</p>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div id="certifications" className="w-full">
          <SectionHeader title="Certifications" />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4 w-full"
          >
            {resumeData.certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="flex flex-col p-6 bg-card border border-border rounded-lg w-full"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
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
