"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
            {/* <p className="text-lg text-slate-700 mb-4">
              Conheça um pouco mais sobre minha trajetória, formação e o que me motiva como profissional de QA.
            </p> */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div>
                <Image
                  src="/imagens/profile.svg"
                  alt={profileData.name}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
                {/* <div className="mt-8 p-8 bg-white rounded-lg shadow-sm border border-slate-100">
                  <blockquote className="italic text-slate-700 text-lg relative">
                    <span className="absolute top-0 left-0 text-4xl text-slate-200">"</span>
                    <p className="ml-6 mt-2">
                      Acredito que a qualidade de software não é apenas sobre encontrar bugs, mas sobre garantir experiências excepcionais para os usuários.
                    </p>
                  </blockquote>
                </div> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Quem sou eu</h3>
              <p className="text-slate-700 mb-4">
                Sou um profissional apaixonado por tecnologia, especializado em qualidade de software e automação de testes. Com uma formação em <strong>Ciência da Computação</strong> pela Universidade Vila Velha (UVV) e certificações como <strong>CTFL</strong> (Certified Tester Foundation Level) pela BSTQB, trago consigo uma sólida experiência em <strong>testes manuais e automatizados</strong>, bem como em desenvolvimento web.
              </p>
              <p className="text-slate-700 mb-6">
                Tenho bons conhecimentos nas linguagens de programação: <strong>JavaScript, TypeScript, Python e ferramentas de testes, como Jest, Cypress e Selenium.</strong> Me adapto a mudanças com facilidade, e busco soluções ágeis diante de um problema. Gosto de conhecer o novo, enfrentar desafios e superar limites. Justamente por isso escolhi essa área, já que é ampla, e me permite adquirir conhecimento ou aprimorar habilidades diariamente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white shadow-sm rounded-lg p-6 border border-slate-100 text-center"
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex justify-center mb-4 text-cyan-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Formação</h4>
                <p className="text-sm text-slate-600">
                  <strong>Ciência da Computação - UVV</strong>
                </p>
              </motion.div>

              <motion.div
                className="bg-white shadow-sm rounded-lg p-6 border border-slate-100 text-center"
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex justify-center mb-4 text-cyan-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Certificações</h4>
                <p className="text-sm text-slate-600">
                  <strong>CTFL - BSTQB</strong>
                </p>
              </motion.div>

              <motion.div
                className="bg-white shadow-sm rounded-lg p-6 border border-slate-100 text-center"
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex justify-center mb-4 text-cyan-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Experiência</h4>
                <p className="text-sm text-slate-600">
                  <strong>+{profileData.yearsOfExperience} anos na área de TI</strong>
                </p>
              </motion.div>
            </div>

            {/* <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">O Que Eu Faço</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Automação de Testes End-to-End</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Testes de API e Performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Desenvolvimento de Frameworks de Teste</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Integração Contínua e DevOps</span>
                </div>
              </div>
            </div> */}

            <div className="mt-8 flex justify-center lg:justify-start">
              {/* <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                <a 
                  href="#experience" 
                  onClick={(e) => handleScrollToSection(e, 'experience')}
                >
                  Ver Experiência
                </a>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 