// src/translations.ts

export type TranslationsAbout = {
    aboutTitle: string;
    aboutParagraph1: string;
    aboutParagraph2: string;
    aboutParagraph3: string;
};

export type TranslationsHome = {
    hello: string;
    intro: string;
    nameHighlight: string; // Apenas Eduardo em destaque
    nameRest: string; // Restante do nome
    description: string;
    formation1: string;
    formation2: string;
    skillsSectionTitle: string;
    skills: Record<string, string>;
};

export type TranslationsProjects = {
    projectsTitle: string;
    viewSite: string;
    github: string;
};

export type LanguageTranslations = TranslationsHome & TranslationsAbout & TranslationsProjects;

export const translations: Record<'pt' | 'en', LanguageTranslations> = {
    pt: {
        // Home.ts
        hello: "Olá!",
        intro: "meu nome é",
        nameHighlight: "Eduardo",
        nameRest: " Henrique",
        description: "Sou um Desenvolvedor Mobile e Full-Stack apaixonado por tecnologia e soluções criativas.",
        formation1: "Técnico em Desenvolvimento de Sistemas - ETEC Itu.",
        formation2: "Análise e Desenvolvimento de Sistemas - FATEC Itu.",
        skillsSectionTitle: "Habilidades",
        skills: {
            html: "HTML5",
            css: "CSS3",
            js: "JavaScript",
            ts: "TypeScript",
            react: "React",
            nextjs: "Next.js",
            vite: "Vite",
            node: "Node.js",
            springboot: "Spring Boot",
            firebase: "Firebase",
            supabase: "Supabase",
            vercel: "Vercel",
            github: "GitHub",
            vscode: "VS Code",
        },

        // About.ts
        aboutTitle: "Sobre <strong>Mim...</strong>",
        aboutParagraph1:
            "Meu nome é <strong>Eduardo Henrique</strong>, moro na cidade de <strong>Itu, SP - Brasil</strong>. Sou um desenvolvedor apaixonado por transformar ideias em experiências digitais. Com foco em desenvolvimento web e mobile, busco constantemente aprender novas tecnologias e aplicar soluções criativas em cada projeto.",
        aboutParagraph2:
            "Sou formado <strong>Técnico em Desenvolvimento de Sistemas</strong> pela <strong>ETEC Martinho Di Ciero</strong>, e atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> na <strong>FATEC Dom Amaury Castanho</strong>, ambas localizadas em Itu.",
        aboutParagraph3:
            "Tenho experiência com <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong> e outras ferramentas modernas do ecossistema JavaScript.",

        // Projects.ts
        projectsTitle: "Meus <strong>Projetos</strong>",
        viewSite: "Ver Site",
        github: "GitHub",
    },

    en: {
        // Home.ts
        hello: "Hello!",
        intro: "my name is",
        nameHighlight: "Eduardo",
        nameRest: " Henrique",
        description: "I am a Mobile and Full-Stack Developer passionate about technology and creative solutions.",
        formation1: "Systems Development Technician - ETEC Itu.",
        formation2: "Analysis and Systems Development - FATEC Itu.",
        skillsSectionTitle: "Skills",
        skills: {
            html: "HTML5",
            css: "CSS3",
            js: "JavaScript",
            ts: "TypeScript",
            react: "React",
            nextjs: "Next.js",
            vite: "Vite",
            node: "Node.js",
            springboot: "Spring Boot",
            firebase: "Firebase",
            supabase: "Supabase",
            vercel: "Vercel",
            github: "GitHub",
            vscode: "VS Code",
        },

        // About.ts
        aboutTitle: "About <strong>Me</strong>...",
        aboutParagraph1:
            "My name is <strong>Eduardo Henrique</strong>, I live in <strong>Itu, SP - Brazil</strong>. I am a developer passionate about turning ideas into digital experiences. Focusing on web and mobile development, I constantly seek to learn new technologies and apply creative solutions in each project.",
        aboutParagraph2:
            "I graduated as a <strong>Systems Development Technician</strong> at <strong>ETEC Martinho Di Ciero</strong>, and I am currently studying <strong>Analysis and Systems Development</strong> at <strong>FATEC Dom Amaury Castanho</strong>, both located in Itu.",
        aboutParagraph3:
            "I have experience with <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong> and other modern tools in the JavaScript ecosystem.",

        // Projects.ts
        projectsTitle: "My <strong>Projects</strong>",
        viewSite: "View Site",
        github: "GitHub",
    },
};
