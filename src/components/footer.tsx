"use client"

import { profileData } from "@/lib/data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-xl font-bold flex items-center">
              <span className="text-cyan-500 mr-1">JL</span>
              <span>Lobo</span>
            </div>
            <p className="text-slate-400 ml-4 text-sm">
              QA Automation Engineer
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center text-slate-400 text-sm">
            <p>© {currentYear} {profileData.name}. Todos os direitos reservados.</p>
            <span className="hidden md:inline mx-2">•</span>
            <p className="mt-1 md:mt-0">Desenvolvido por Josué Lobo</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 