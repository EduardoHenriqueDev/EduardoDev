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

export type LaunchedProjectItem = {
    name: string;
    description: string;
    techs: string[];
    image: string;
    url: string;
};

export type TranslationsLaunchedProjects = {
    launchedProjectsTitle: string;
    launchedProjectsSubtitle: string;
    launchedSeeAll: string;
    launchedProjectsList: LaunchedProjectItem[];
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

export type LanguageTranslations =
    TranslationsHome &
    TranslationsAbout &
    TranslationsProjects &
    TranslationsHabilidades &
    TranslationsLaunchedProjects;

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
            "Sou <strong>Eduardo Henrique</strong>, desenvolvedor <strong>Full Stack</strong> e <strong>Mobile</strong> de <strong>Itu, SP</strong>. Minha paixão é criar soluções digitais modernas, unindo <strong>design</strong>, <strong>tecnologia</strong> e <strong>experiência do usuário</strong>.",
        aboutParagraph2:
            "Com formação <strong>técnica</strong> e <strong>superior</strong> em <strong>Desenvolvimento de Sistemas</strong>, atuo desde a concepção visual até a implementação de sistemas completos, sempre buscando <strong>inovação</strong> e <strong>excelência</strong>.",
        aboutParagraph3:
            "Tenho experiência sólida com <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Firebase</strong> e outras tecnologias de ponta. Já realizei alguns projetos como <strong>freelancer</strong>, o que me permitiu desenvolver habilidades práticas em diferentes contextos. Atualmente, estou em busca da minha <strong>primeira oportunidade profissional</strong> na área, onde poderei aplicar meus conhecimentos, aprender continuamente e contribuir com soluções de alto impacto.",

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

        // LaunchedProjects.ts
        launchedProjectsTitle: 'Projetos <strong>Lançados</strong>',
        launchedProjectsSubtitle: '// clique para abrir',
        launchedSeeAll: 'Ver todos os projetos',
        launchedProjectsList: [
            {
                name: 'GLV Informática',
                description: 'Site institucional moderno para empresa de tecnologia, com React, Next.js e Tailwind.',
                techs: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
                image: 'glv',
                url: 'https://www.glvinformatica.com.br/',
            },
            {
                name: 'Taurus Black Burger',
                description: 'Plataforma de delivery com mapa, autenticação e integração com Supabase.',
                techs: [
                    'Next.js',
                    'TypeScript',
                    'TailwindCSS',
                    'Supabase',
                    'Framer Motion',
                    'OpenStreetMap',
                ],
                image: 'delivery',
                url: 'https://delivery-lake.vercel.app/',
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
            "I am <strong>Eduardo Henrique</strong>, a <strong>Full Stack</strong> and <strong>Mobile</strong> developer from <strong>Itu, SP - Brazil</strong>. My passion is to create modern digital solutions, combining <strong>design</strong>, <strong>technology</strong>, and <strong>user experience</strong>.",
        aboutParagraph2:
            "With a <strong>technical</strong> and <strong>higher education</strong> background in <strong>Systems Development</strong>, I work from visual conception to the implementation of complete systems, always seeking <strong>innovation</strong> and <strong>excellence</strong>.",
        aboutParagraph3:
            "I have solid experience with <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Firebase</strong>, and other cutting-edge technologies. I have already completed some projects as a <strong>freelancer</strong>, which allowed me to develop practical skills in different contexts. I am currently looking for my <strong>first professional opportunity</strong> in the field, where I can apply my knowledge, keep learning, and contribute with high-impact solutions.",

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

        // LaunchedProjects.ts
        launchedProjectsTitle: 'Launched <strong>Projects</strong>',
        launchedProjectsSubtitle: '// click to open',
        launchedSeeAll: 'See all projects',
        launchedProjectsList: [
            {
                name: 'GLV Informática',
                description: 'Modern institutional website for a tech company, built with React, Next.js and Tailwind.',
                techs: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
                image: 'glv',
                url: 'https://www.glvinformatica.com.br/',
            },
            {
                name: 'Taurus Black Burger',
                description: 'Delivery platform with map, authentication and Supabase integration.',
                techs: [
                    'Next.js',
                    'TypeScript',
                    'TailwindCSS',
                    'Supabase',
                    'Framer Motion',
                    'OpenStreetMap',
                ],
                image: 'delivery',
                url: 'https://delivery-lake.vercel.app/',
            },
        ],
    },
};
