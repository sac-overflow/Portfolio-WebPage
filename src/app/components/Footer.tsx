import { Mail, Phone, MapPin, Github } from "lucide-react";
import { resumeData } from "../data";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card" id="contact">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-foreground mb-2">{resumeData.name}</h3>
          <p className="text-sm text-muted-foreground">{resumeData.education[0].degree}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            {resumeData.contact.email}
          </a>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {resumeData.contact.phone}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {resumeData.contact.location}
          </div>
        </div>

        <div className="text-xs font-mono text-muted-foreground/50">
          © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
