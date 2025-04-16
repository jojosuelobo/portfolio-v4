"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Fechar o menu mobile se estiver aberto
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    
    // Extrair o ID do link (remove o "#")
    const targetId = href.split('#')[1]
    
    // Encontrar o elemento com esse ID
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // Scroll suave para o elemento
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#hero" 
             onClick={(e) => handleNavClick(e, '#hero')}
             className="text-xl font-bold text-slate-900 flex items-center">
            <span className="text-cyan-500">JL</span>
            <span className="ml-1">Lobo</span>
          </a>

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              {isMenuOpen && (
                <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
                  <nav className="flex flex-col p-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="py-3 px-4 text-lg font-medium text-slate-800 hover:text-cyan-500 transition-colors"
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="mt-4 px-4">
                      <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600">
                        <a 
                          href="#contact" 
                          onClick={(e) => handleNavClick(e, "#contact")}
                        >
                          Entrar em Contato
                        </a>
                      </Button>
                    </div>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 px-3 text-sm font-medium text-slate-700 hover:text-cyan-500 transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              {/* <Button asChild className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-white">
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Entrar em Contato
                </a>
              </Button> */}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
} 