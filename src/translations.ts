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

export type HabilidadeItem = {
    icon: string; // nome do ícone, para mapear depois
    label: string;
    desc: string;
};

export type TranslationsHabilidades = {
    habilidadesTitle: string;
    habilidades: HabilidadeItem[];
};

export type LanguageTranslations = TranslationsHome & TranslationsAbout & TranslationsProjects & TranslationsHabilidades;

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
            tailwind: "Tailwind CSS",
            firebase: "Firebase",
            supabase: "Supabase",
            vercel: "Vercel",
            github: "GitHub",
            vscode: "VS Code",
        },

        // About.ts
        aboutTitle: "Sobre <strong>mim...</strong>",
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

        // Competencies.ts
        habilidadesTitle: "Habilidades",
        habilidades: [
            {
                icon: "FaPaintBrush",
                label: "Web Design",
                desc: "Criação de interfaces visuais modernas, responsivas e atraentes, focando na experiência do usuário e identidade visual.",
            },
            {
                icon: "FaMobileAlt",
                label: "Desenvolvimento de Apps",
                desc: "Desenvolvimento de aplicativos mobile multiplataforma, com performance, usabilidade e integração com APIs.",
            },
            {
                icon: "FaServer",
                label: "Sistemas Web",
                desc: "Construção de sistemas web completos, desde o frontend até o backend, com foco em escalabilidade e segurança.",
            },
            {
                icon: "FaCogs",
                label: "CRMs",
                desc: "Implantação e customização de sistemas de gestão de relacionamento com o cliente para otimizar processos e vendas.",
            },
            {
                icon: "FaShoppingCart",
                label: "E-commerce",
                desc: "Desenvolvimento de lojas virtuais, integrações de pagamento e soluções para vendas online.",
            },
            {
                icon: "FaUserFriends",
                label: "UX/UI",
                desc: "Foco em experiência do usuário e design de interfaces intuitivas, acessíveis e agradáveis.",
            },
        ],
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
            tailwind: "Tailwind CSS",
            firebase: "Firebase",
            supabase: "Supabase",
            vercel: "Vercel",
            github: "GitHub",
            vscode: "VS Code",

        },

        // About.ts
        aboutTitle: "About <strong>me...</strong>",
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

        // Competencies.ts
        habilidadesTitle: "Skills",
        habilidades: [
            {
                icon: "FaPaintBrush",
                label: "Web Design",
                desc: "Creation of modern, responsive, and attractive visual interfaces, focusing on user experience and visual identity.",
            },
            {
                icon: "FaMobileAlt",
                label: "App Development",
                desc: "Development of cross-platform mobile applications, with performance, usability, and API integration.",
            },
            {
                icon: "FaServer",
                label: "Web Systems",
                desc: "Building complete web systems, from frontend to backend, focusing on scalability and security.",
            },
            {
                icon: "FaCogs",
                label: "CRMs",
                desc: "Implementation and customization of customer relationship management systems to optimize processes and sales.",
            },
            {
                icon: "FaShoppingCart",
                label: "E-commerce",
                desc: "Development of online stores, payment integrations, and solutions for online sales.",
            },
            {
                icon: "FaUserFriends",
                label: "UX/UI",
                desc: "Focus on user experience and design of intuitive, accessible, and pleasant interfaces.",
            },
        ],
    },
};
