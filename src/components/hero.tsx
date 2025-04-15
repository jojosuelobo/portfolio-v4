"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { profileData } from "@/lib/data"

export default function Hero() {
  return (
    <section
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
                <Link href="/projects">Ver Portfólio</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                <Link href="/contact">Entrar em Contato</Link>
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
                  src="/images/profile.svg"
                  alt={profileData.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-6 top-1/4 bg-white shadow-lg rounded-lg p-4 flex items-center">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white mr-3">
                  <span className="text-xl font-bold">{profileData.yearsOfExperience}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Anos de</p>
                  <p className="text-xs text-slate-600">Experiência</p>
                </div>
              </div>
              <div className="absolute -left-6 bottom-1/4 bg-white shadow-lg rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-slate-900">Automação de Testes</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-slate-900 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-slate-900">Garantia de Qualidade</p>
                </div>
              </div>
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
            <Link
              href="/about"
              className="flex flex-col items-center text-slate-500 hover:text-cyan-500 transition-colors"
            >
              <span className="text-sm mb-2">Rolar para baixo</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 