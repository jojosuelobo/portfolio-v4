"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { profileData } from "@/lib/data"

export default function Hero() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -left-10 top-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-lg font-medium text-cyan-500 mb-3">{profileData.title}</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">{profileData.name}</h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              {profileData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                <a
                  href="#projects"
                  onClick={(e) => handleScrollToSection(e, 'projects')}
                >
                  Ver Portfólio
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-white"
              >
                <a
                  href="resume/ResumeEN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Baixar Currículo
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-white"
              >
                <a
                  href={`https://${profileData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-slate-900 to-slate-800 p-1">
              <div className="absolute inset-2 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden">
                <Image
                  src="/imagens/profile-draw-2.svg"
                  alt={profileData.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                className="absolute -right-6 top-1/4 bg-white shadow-lg rounded-lg p-4 flex items-center cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white mr-3">
                  <span className="text-xl font-bold">{profileData.yearsOfExperience}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Anos de</p>
                  <p className="text-xs text-slate-600">Experiência</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/4 bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-slate-900">Automação de Testes</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-slate-900 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-slate-900">Garantia de Qualidade</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <a
              href="#about"
              className="flex flex-col items-center text-slate-500 hover:text-cyan-500 transition-colors"
              onClick={(e) => handleScrollToSection(e, 'about')}
            >
              <span className="text-sm mb-2">Mais Informações</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 