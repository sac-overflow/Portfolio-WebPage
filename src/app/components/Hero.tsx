import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, MapPin, Mail, Phone, Github } from "lucide-react";
import { fadeIn, staggerContainer } from "../utils/animations";
import { resumeData } from "../data";
import resumePdf from "../../imports/MangaSachhith_230958118_CSFT.pdf";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes: {x: number, y: number, vx: number, vy: number, radius: number}[] = [];
    const numNodes = 40;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    const glowingNode = { x: canvas.width / 2, y: canvas.height / 2, radius: 3 };
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(150, 150, 150, 0.05)';
      for(let x = 0; x < canvas.width; x += 20) {
        for(let y = 0; y < canvas.height; y += 20) {
          ctx.beginPath();
          ctx.arc(x, y, 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            const opacity = 1 - (dist / 100);
            ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.2})`;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].x - glowingNode.x;
        const dy = nodes[i].y - glowingNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          const opacity = 1 - (dist / 150);
          ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.4})`;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(glowingNode.x, glowingNode.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = 'rgba(150, 150, 150, 0.5)';
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      const pulse = Math.sin(Date.now() / 500) * 2;
      ctx.beginPath();
      ctx.arc(glowingNode.x, glowingNode.y, glowingNode.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
      
      const isDark = document.documentElement.classList.contains('dark');
      const glowColor = isDark ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ';
      
      ctx.beginPath();
      ctx.arc(glowingNode.x, glowingNode.y, glowingNode.radius + pulse + 4, 0, Math.PI * 2);
      ctx.fillStyle = `${glowColor}0.1)`;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(glowingNode.x, glowingNode.y, glowingNode.radius + pulse + 8, 0, Math.PI * 2);
      ctx.fillStyle = `${glowColor}0.05)`;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden border-b border-border">
      <div className="absolute inset-0 z-0 opacity-50">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-3xl"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]"
          >
            {resumeData.name}
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="mt-6 text-xl md:text-2xl text-foreground/80 font-medium tracking-tight"
          >
            {resumeData.education[0].degree}
          </motion.p>
          
          <motion.div variants={fadeIn} className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {resumeData.contact.location}</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {resumeData.contact.email}</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {resumeData.contact.phone}</div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-colors"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={resumePdf} 
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-foreground font-medium rounded-md border border-border hover:bg-muted transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
