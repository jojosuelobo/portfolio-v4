"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, TranslationKey } from "@/lib/i18n";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("pt");

    // Salvar a preferência de idioma no localStorage
    useEffect(() => {
        // Ao iniciar, verificar se existe uma preferência salva
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Atualizar o localStorage quando o idioma mudar
    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    // Função para obter tradução
    const t = (key: TranslationKey): string => {
        return translations[language][key];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
} 