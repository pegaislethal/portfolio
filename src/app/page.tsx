import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ResumeViewer from "@/components/ResumeViewer";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  return (
    <>
      {/* Interactive visual layers */}
      <CustomCursor />
      <ParticlesBg />

      {/* Main navigation */}
      <Navbar />

      {/* Portfolio sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResumeViewer />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer indices */}
      <Footer />
    </>
  );
}
