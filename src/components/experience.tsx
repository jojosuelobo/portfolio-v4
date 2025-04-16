"use client"

import { motion } from "framer-motion"
import { profileData } from "@/lib/data"
import { useState } from "react"

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);

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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experiências</h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
          </motion.div>
        </div>

        {/* Experience Layout with Sidebar */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with Company Buttons */}
            <div className="md:w-1/4">
              <div className="space-y-1">
                {profileData.experience.map((exp, index) => (
                  <button
                    key={`nav-${index}`}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left p-4 rounded transition-all flex items-center
                      ${activeExperience === index 
                        ? 'bg-blue-50 border-l-4 border-cyan-500 text-slate-600' 
                        : 'hover:bg-gray-50 text-slate-600'
                      }`}
                  >
                    <span className="font-medium">{exp.company}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Experience Content */}
            <div className="md:w-3/4">
              <motion.div
                key={`experience-${activeExperience}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{profileData.experience[activeExperience].position}</h3>
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-cyan-500">{profileData.experience[activeExperience].company}</span>
                    {profileData.experience[activeExperience].location && (
                      <span className="text-slate-600 text-sm ml-2">
                        ({profileData.experience[activeExperience].location})
                      </span>
                    )}
                  </div>
                  <div className="text-right text-cyan-500 font-medium">
                    {profileData.experience[activeExperience].period}
                  </div>
                </div>

                <div className="text-slate-700 mb-6 leading-relaxed">
                  {profileData.experience[activeExperience].description}
                </div>

                <ul className="list-disc pl-5 space-y-2">
                  {profileData.experience[activeExperience].responsibilities && 
                    profileData.experience[activeExperience].responsibilities.map((item, idx) => (
                      <li key={idx} className="text-slate-700">{item}</li>
                    ))}
                </ul>
              </motion.div>
            </div>
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