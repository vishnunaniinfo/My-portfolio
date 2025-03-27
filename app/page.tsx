import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Experience from "@/components/experience"
import Hobbies from "@/components/hobbies"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  )
}

