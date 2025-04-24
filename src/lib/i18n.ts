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
        aboutMeText1: "Sou um profissional apaixonado por tecnologia, especializado em qualidade de software e automação de testes. Com uma formação em Ciência da Computação pela Universidade Vila Velha (UVV) e certificações como CTFL (Certified Tester Foundation Level) pela BSTQB, trago consigo uma sólida experiência em testes manuais e automatizados, bem como em desenvolvimento web.",
        aboutMeText2: "Tenho bons conhecimentos nas linguagens de programação: JavaScript, TypeScript, Python e ferramentas de testes, como Jest, Cypress e Selenium. Me adapto a mudanças com facilidade, e busco soluções ágeis diante de um problema. Gosto de conhecer o novo, enfrentar desafios e superar limites. Justamente por isso escolhi essa área, já que é ampla, e me permite adquirir conhecimento ou aprimorar habilidades diariamente.",
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
        bioText: "QA Automation Engineer com experiência em testes funcionais e automatizados. Especializado em garantir a qualidade de software através de testes eficientes e processos ágeis.",
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
        aboutMeText1: "I am a technology enthusiast specializing in software quality and test automation. With a degree in Computer Science from Vila Velha University (UVV) and certifications such as CTFL (Certified Tester Foundation Level) from BSTQB, I bring solid experience in manual and automated testing, as well as web development.",
        aboutMeText2: "I have good knowledge in programming languages: JavaScript, TypeScript, Python, and testing tools such as Jest, Cypress, and Selenium. I adapt easily to changes and seek agile solutions when facing problems. I enjoy learning new things, facing challenges, and pushing boundaries. That's precisely why I chose this field, as it's broad and allows me to acquire knowledge or enhance skills daily.",
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
        bioText: "QA Automation Engineer with experience in functional and automated testing. Specialized in ensuring software quality through efficient testing and agile processes.",
    }
};

export type Language = "pt" | "en";
export type TranslationKey = keyof typeof translations.pt; 