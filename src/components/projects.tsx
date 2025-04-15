"use client"

import { motion } from "framer-motion"
import { profileData } from "@/lib/data"
import Image from "next/image"

// Atualiza as imagens nos dados do projeto
const projectsWithCorrectImages = profileData.projects.map((project, index) => ({
  ...project,
  image: project.image.replace('.jpg', '.svg')
}))

export default function Projects() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Projetos de Destaque</h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-700">
              Alguns dos meus principais projetos na área de Automação de Testes e Garantia de Qualidade.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsWithCorrectImages.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg border border-slate-200 bg-white"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="w-full h-full relative">
                  <Image
                    src={project.image || "/images/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={500}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110 w-full h-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 mb-6">
              Estes são apenas alguns dos projetos em que trabalhei. Cada projeto envolveu desafios únicos
              e soluções personalizadas para garantir a qualidade do software.
            </p>
            <a
              href="https://github.com/josuelobo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
            >
              <span className="mr-2">Ver mais no GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 