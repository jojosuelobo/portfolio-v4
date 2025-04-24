'use client';

import { useLanguage } from "@/hooks/use-language";
import { useEffect } from "react";

export function LanguageHtmlUpdater() {
    const { language } = useLanguage();

    useEffect(() => {
        // Atualiza o atributo lang da tag HTML com base no idioma selecionado
        const htmlTag = document.documentElement;
        if (htmlTag) {
            htmlTag.lang = language === "pt" ? "pt-BR" : "en";
        }
    }, [language]);

    // Este componente não renderiza nada visualmente
    return null;
} 