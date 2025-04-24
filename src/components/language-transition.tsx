'use client';

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";

interface LanguageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function LanguageTransition({ children, className = "" }: LanguageTransitionProps) {
  const { language } = useLanguage();
  const [key, setKey] = useState(language);

  // Atualiza a key quando o idioma muda para ativar a animação
  useEffect(() => {
    setKey(language);
  }, [language]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 