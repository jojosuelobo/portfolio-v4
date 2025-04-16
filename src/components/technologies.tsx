"use client"

import { motion } from "framer-motion"

// Defina as tecnologias com suas imagens
const technologies = [
  { name: "JavaScript", image: "/images/tech/javascript.png", alt: "JavaScript logo" },
  { name: "TypeScript", image: "/images/tech/typescript.png", alt: "TypeScript logo" },
  { name: "Python", image: "/images/tech/python.png", alt: "Python logo" },
  { name: "Cypress", image: "/images/tech/cypress.png", alt: "Cypress logo" },
  { name: "Selenium", image: "/images/tech/selenium.png", alt: "Selenium logo" },
  { name: "Playwright", image: "/images/tech/playwright.png", alt: "Playwright logo" },
  { name: "Jest", image: "/images/tech/jest.png", alt: "Jest logo" },
  { name: "Postman", image: "/images/tech/postman.png", alt: "Postman logo" },
  { name: "Git", image: "/images/tech/git.png", alt: "Git logo" },
  { name: "Docker", image: "/images/tech/docker.png", alt: "Docker logo" },
  { name: "Jenkins", image: "/images/tech/jenkins.png", alt: "Jenkins logo" },
  { name: "GitHub Actions", image: "/images/tech/github-actions.png", alt: "GitHub Actions logo" }
];

export default function Technologies() {
  return (
    <section className="py-16 bg-white" id="technologies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tecnologias</h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-700">
              Ferramentas e tecnologias que utilizo no meu dia a dia para garantir a qualidade de software.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <img 
                  src={tech.image} 
                  alt={tech.alt} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <span className="text-slate-800 font-medium text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 