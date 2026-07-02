import { motion } from "motion/react";
import { resumeData } from "../data";
import { fadeIn, staggerContainer } from "../utils/animations";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-card/50" id="skills">
      <SectionHeader title="Skills" />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {resumeData.skills.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            variants={fadeIn}
            className="p-6 bg-background border border-border rounded-lg"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 pb-3 border-b border-border/50 uppercase tracking-wider">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-muted/50 border border-border text-muted-foreground text-sm font-medium rounded-md hover:text-foreground transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
