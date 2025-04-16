"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { profileData } from "@/lib/data"

export default function About() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-700 mb-8">
              {profileData.bio}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Educação</h3>
              <div className="space-y-4">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-cyan-500 pl-4">
                    <h4 className="font-semibold text-slate-900">{edu.degree}</h4>
                    <p className="text-sm text-slate-600">{edu.institution}</p>
                    <p className="text-xs text-slate-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Habilidades</h3>
              <div className="grid grid-cols-2 gap-4">
                {profileData.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs font-medium text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-cyan-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Informação Pessoal</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-semibold w-24">Nome:</span>
                  <span>{profileData.name}</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">Email:</span>
                  <span>{profileData.contact.email}</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">Telefone:</span>
                  <span>{profileData.contact.phone}</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">GitHub:</span>
                  <a href={`https://${profileData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">
                    {profileData.contact.github}
                  </a>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">LinkedIn:</span>
                  <a href={`https://${profileData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">
                    {profileData.contact.linkedin}
                  </a>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">Experiência:</span>
                  <span>{profileData.yearsOfExperience} anos</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">O Que Eu Faço</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automação de Testes End-to-End</span>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Testes de API e Performance</span>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Desenvolvimento de Frameworks de Teste</span>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integração Contínua e DevOps</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
            <a 
              href="#experience" 
              onClick={(e) => handleScrollToSection(e, 'experience')}
            >
              Ver Experiência
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 