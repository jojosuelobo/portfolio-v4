"use client"

import { motion } from "framer-motion"
import { profileData } from "@/lib/data"

export default function Experience() {
  return (
    <section className="py-20 bg-slate-50" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experiência Profissional</h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-700">
              Minha jornada profissional na área de Qualidade de Software e Automação de Testes.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-300 pl-8 ml-4 space-y-12">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-12 top-0 w-6 h-6 bg-white rounded-full border-2 border-cyan-500 z-10" />
                <div className="absolute -left-[2.75rem] top-0 font-medium text-xs text-slate-500 bg-white px-2 py-1 rounded">
                  {exp.period}
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{exp.position}</h3>
                    <span className="text-cyan-500 font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-slate-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Minhas Habilidades</h3>
            <p className="text-slate-700 mb-8">
              Tecnologias e metodologias com as quais trabalho para entregar qualidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {profileData.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-sm border border-slate-100"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-900">{skill.name}</span>
                  <span className="text-xs font-medium text-cyan-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 