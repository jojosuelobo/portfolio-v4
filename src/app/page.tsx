import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Technologies from "@/components/technologies"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}
