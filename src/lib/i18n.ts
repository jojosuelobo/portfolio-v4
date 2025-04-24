// Definição de todos os textos disponíveis para internacionalização
export const translations = {
    pt: {
        // Navegação
        home: "Home",
        about: "Sobre",
        experience: "Experiência",
        projects: "Projetos",
        contactButton: "Entrar em Contato",

        // Seletor de idioma
        language: "Idioma",
        portuguese: "Português",
        english: "Inglês",
    },
    en: {
        // Navegação
        home: "Home",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contactButton: "Get in Touch",

        // Seletor de idioma
        language: "Language",
        portuguese: "Portuguese",
        english: "English",
    }
};

export type Language = "pt" | "en";
export type TranslationKey = keyof typeof translations.pt; 