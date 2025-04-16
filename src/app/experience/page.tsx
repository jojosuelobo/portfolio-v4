import Experience from "@/components/experience"
import Technologies from "@/components/technologies"
import Footer from "@/components/footer"

export default function ExperiencePage() {
  return (
    <main>
      <div className="pt-16 lg:pt-20">
        <Experience />
        <Technologies />
      </div>
      <Footer />
    </main>
  )
} 