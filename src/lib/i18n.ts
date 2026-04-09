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

        // Hero Section
        viewPortfolio: "Ver Portfólio",
        downloadResume: "Baixar Currículo",
        moreInfo: "Mais Informações",
        yearsOf: "Anos de",
        experienceLabel: "Experiência",
        testAutomation: "Automação de Testes",
        qualityAssurance: "Garantia de Qualidade",

        // About Section
        aboutMe: "Sobre Mim",
        whoAmI: "Quem sou eu",
        aboutMeText1: "Sou um profissional apaixonado por tecnologia, especializado em qualidade de software, automação de testes e engenharia de IA. Com formação em Ciência da Computação pela Universidade Vila Velha (UVV), pós-graduação em Data Science & Machine Learning e certificação CTFL pela BSTQB, trago experiência sólida em testes manuais e automatizados, além de desenvolvimento de agentes de IA. Embaixador oficial do Cypress desde 2026.",
        aboutMeText2: "Proficiente em JavaScript, TypeScript e Python, com expertise em Cypress, Playwright, Jest e Selenium. Atuei em projetos de IA/ML com Langflow e agentes de IA, além de pipelines de CI/CD. Fluente em inglês, me adapto com facilidade e busco constantemente aprimorar habilidades — seja em qualidade de software ou em soluções inovadoras com inteligência artificial.",
        education: "Formação",
        certifications: "Certificações",
        experienceTitle: "Experiência",
        yearsInIT: "anos na área de TI",
        seeExperience: "Ver Experiência",
        computerScience: "Ciência da Computação - UVV",
        ctflCertification: "CTFL - BSTQB",

        // Projects Section
        projectsTitle: "Projetos",
        projectsDescription: "Conheça alguns dos meus principais projetos de automação de testes e garantia de qualidade.",
        projectsFooter: "Estes são apenas alguns dos projetos em que trabalhei. Cada projeto envolveu desafios únicos e soluções personalizadas para garantir a qualidade do software.",
        viewMoreOnGitHub: "Ver mais no GitHub",
        codeButton: "Código",
        demoButton: "Demo",

        // Technologies Section
        technologiesTitle: "Tecnologias",
        technologiesDescription: "Ferramentas e tecnologias que utilizo no meu dia a dia para garantir a qualidade de software.",

        // Experience Section
        experiencesTitle: "Experiências",

        // Footer
        allRightsReserved: "Todos os direitos reservados.",
        developedBy: "Desenvolvido por Josué Lobo",

        // Data (profileData)
        bioText: "QA Automation Engineer e AI Engineer com experiência sólida em testes automatizados, qualidade de software e desenvolvimento de agentes de IA. Proficiente em Cypress, Playwright, Jest e Selenium, com atuação em projetos de IA/ML.",
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

        // Hero Section
        viewPortfolio: "View Portfolio",
        downloadResume: "Download Resume",
        moreInfo: "More Information",
        yearsOf: "Years of",
        experienceLabel: "Experience",
        testAutomation: "Test Automation",
        qualityAssurance: "Quality Assurance",

        // About Section
        aboutMe: "About Me",
        whoAmI: "Who I am",
        aboutMeText1: "I am a technology professional specializing in software quality, test automation, and AI engineering. With a degree in Computer Science from Vila Velha University (UVV), a postgraduate degree in Data Science & Machine Learning, and CTFL certification from BSTQB, I bring solid experience in manual and automated testing as well as AI agent development. Official Cypress Ambassador since 2026.",
        aboutMeText2: "Proficient in JavaScript, TypeScript, and Python, with expertise in Cypress, Playwright, Jest, and Selenium. I have worked on AI/ML projects with Langflow and AI agents, as well as CI/CD pipelines. Fluent in English, I adapt easily and continuously seek to improve — whether in software quality or innovative AI-driven solutions.",
        education: "Education",
        certifications: "Certifications",
        experienceTitle: "Experience",
        yearsInIT: "years in IT",
        seeExperience: "See Experience",
        computerScience: "Computer Science - UVV",
        ctflCertification: "CTFL - BSTQB",

        // Projects Section
        projectsTitle: "Projects",
        projectsDescription: "Check out some of my main test automation and quality assurance projects.",
        projectsFooter: "These are just some of the projects I've worked on. Each project involved unique challenges and customized solutions to ensure software quality.",
        viewMoreOnGitHub: "View more on GitHub",
        codeButton: "Code",
        demoButton: "Demo",

        // Technologies Section
        technologiesTitle: "Technologies",
        technologiesDescription: "Tools and technologies I use in my daily work to ensure software quality.",

        // Experience Section
        experiencesTitle: "Experiences",

        // Footer
        allRightsReserved: "All rights reserved.",
        developedBy: "Developed by Josué Lobo",

        // Data (profileData)
        bioText: "QA Automation Engineer & AI Engineer with solid experience in automated testing, software quality, and AI agent development. Proficient in Cypress, Playwright, Jest, and Selenium, with hands-on AI/ML project experience.",
    }
};

export type Language = "pt" | "en";
export type TranslationKey = keyof typeof translations.pt; 