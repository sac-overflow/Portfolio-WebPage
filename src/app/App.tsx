import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="font-sans text-foreground bg-background min-h-screen selection:bg-foreground/10 selection:text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
