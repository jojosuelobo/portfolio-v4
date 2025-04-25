"use client"

import { motion } from "framer-motion"
import { profileData } from "@/lib/data"
import { projectsDataEN } from "@/lib/data-en"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { LanguageTransition } from "./language-transition"

export default function Projects() {
  const { t, language } = useLanguage();

  // Seleciona os dados de projeto baseado no idioma
  const projectsData = language === "en" ? projectsDataEN : profileData.projects;

  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <LanguageTransition>{t("projectsTitle")}</LanguageTransition>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
            <div className="text-lg text-slate-700">
              <LanguageTransition>{t("projectsDescription")}</LanguageTransition>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 flex items-center justify-center mb-6 rounded">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={240}
                    height={240}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <LanguageTransition>{project.title}</LanguageTransition>
                </h3>
                <div className="text-slate-700 mb-6 text-sm">
                  <LanguageTransition>{project.description}</LanguageTransition>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
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

              <div className="px-6 pb-6 mt-auto">
                <div className="flex gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 rounded text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium w-24"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                    <LanguageTransition>{t("codeButton")}</LanguageTransition>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors text-sm font-medium w-24"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                      </svg>
                      <LanguageTransition>{t("demoButton")}</LanguageTransition>
                    </a>
                  )}
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
            <div className="text-lg text-slate-700 mb-6">
              <LanguageTransition>{t("projectsFooter")}</LanguageTransition>
            </div>
            <a
              href={`https://${profileData.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
            >
              <span className="mr-2">
                <LanguageTransition>{t("viewMoreOnGitHub")}</LanguageTransition>
              </span>
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