import { motion } from "motion/react";
import { fadeIn } from "../utils/animations";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12"
    >
      <h2 
        className="text-3xl md:text-4xl font-serif text-foreground pb-4 border-b border-border/50 inline-block pr-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
