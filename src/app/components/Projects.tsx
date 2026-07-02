import { motion } from "motion/react";
import { resumeData } from "../data";
import { fadeIn, staggerContainer } from "../utils/animations";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full" id="projects">
      <SectionHeader title="Projects" />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {resumeData.projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={fadeIn}
            className="group relative flex flex-col bg-card border border-border rounded-lg p-8 hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center border border-border/50 text-foreground/70 group-hover:text-foreground transition-colors">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <a href="#" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group-hover:text-foreground">
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
              {project.title.split(' – ')[0] || project.title}
            </h3>
            
            {project.title.includes(' – ') && (
              <p className="text-sm font-mono text-muted-foreground mb-4">
                {project.title.split(' – ')[1]}
              </p>
            )}
            
            <ul className="space-y-2 mb-8 flex-1">
              {project.description.map((desc, i) => (
                <li key={i} className="text-foreground/80 font-normal leading-relaxed text-sm flex items-start gap-2">
                  <span className="text-foreground/30 mt-1 shrink-0">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-foreground bg-muted border border-border/50 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
