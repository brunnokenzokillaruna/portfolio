// Import i18n dependencies
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources for multiple languages (en, fr, es, pt)
const resources = {
  en: {
    translation: {
      "About": "About",
      "Services": "Services",
      "Projects": "Projects",
      "Let's Talk": "Let's Talk",
      "Hey there, I'm Brunno": "Hey there, I'm Brunno",
      "Picture a place where tech and creativity come together, making your online presence better. I turn new ideas into great digital projects, focusing on cool designs and strong tech to push your brand into the top of the digital world.": "Picture a place where tech and creativity come together, making your online presence better. I turn new ideas into great digital projects, focusing on cool designs and strong tech to push your brand into the top of the digital world.",
      "Introducing myself in a nutshell: Who am I?": "Introducing myself in a nutshell: Who am I?",
      "My journey from practicing law in Brazil to pursuing a career in web and software development in Canada shows my adaptability and strong passion for solving problems. I'm excited by the creative potential of technology and the ability to build solutions that make a difference.": "My journey from practicing law in Brazil to pursuing a career in web and software development in Canada shows my adaptability and strong passion for solving problems. I'm excited by the creative potential of technology and the ability to build solutions that make a difference.",
      "Outside of my studies, I'm always learning. I find inspiration and knowledge in games, online courses, and videos – always seeking new challenges to grow. This dedication reflects my belief that success in the rapidly changing world of technology requires constant improvement.": "Outside of my studies, I'm always learning. I find inspiration and knowledge in games, online courses, and videos – always seeking new challenges to grow. This dedication reflects my belief that success in the rapidly changing world of technology requires constant improvement.",
      "My goal is to work within a collaborative team where I can contribute my creative thinking and technical abilities. I'm eager to take on projects that drive innovation, whether it's building beautiful web interfaces or developing powerful backend systems. I'm most excited about the opportunity to keep learning and expanding my skills in the years to come.": "My goal is to work within a collaborative team where I can contribute my creative thinking and technical abilities. I'm eager to take on projects that drive innovation, whether it's building beautiful web interfaces or developing powerful backend systems. I'm most excited about the opportunity to keep learning and expanding my skills in the years to come.",
      "MY SERVICES": "MY SERVICES",
      "TECH STACK": "TECH STACK",
      "FEATURED WORK": "FEATURED WORK",
      "FEATURED PROJECTS": "FEATURED PROJECTS",
      "CONTACT ME": "CONTACT ME",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "Got an incredible idea? Let's collaborate and turn it into reality.",
      "Let's connect to create something amazing together or discuss opportunities for collaboration.": "Let's connect to create something amazing together or discuss opportunities for collaboration.",
      "Your name": "Your name",
      "Your email": "Your email",
      "Your message": "Your message",
      "Send message": "Send message",
      "Contact Details": "Contact Details",
      "Phone": "Phone",
      "Digital Spaces": "Digital Spaces",
      "Location": "Location",
      "Back to the top": "Back to the top",
      "Brunno's Portfolio": "Brunno's Portfolio",
      "Year": "Year",
      "Technologies": "Technologies",
      "View on GitHub": "View on GitHub",
      "Visit live website": "Visit live website",
      "wealth_wise_description": "A comprehensive personal finance management tool that helps users track expenses, set budgets, and visualize financial goals. Features include expense categorization, financial reporting, and investment tracking.",
      "career_track_description": "A modern job application tracking system that helps users manage their job search process. Features include application status tracking, interview scheduling, and document management.",
      "info_stream_description": "A modern news application for Android devices that delivers real-time updates and personalized content. Features include customizable news feeds, bookmark functionality, and offline reading capability.",
      "grandeur_description": "A sophisticated real estate platform offering seamless property browsing, advanced search functionality, and interactive virtual tours. Built with modern web technologies for optimal performance.",
      "trivia_quest_description": "An engaging quiz application featuring multiple categories, difficulty levels, and a scoring system. Includes a vast database of questions and real-time feedback.",
      "UNDER DEVELOPMENT": "UNDER DEVELOPMENT",
      "In Progress": "In Progress",
      "LinguaTalk_description": "An interactive language practice platform that helps users improve speaking skills in English and French by simulating roleplay conversations using AI technology, voice recognition, and voice output features.",
      "WealthWise_description": "A financial planning and management application designed to help users track expenses, manage budgets, and achieve financial goals. The system features multi-language support, interactive analytics dashboards, bill management with reminders, savings tracking, and investment portfolio.",
      "CareerTrackPro_description": "A comprehensive career tracking and job application management system designed to help professionals manage their career progression, track job applications, and maintain their professional profile. The system features AI-powered document generation, skills analysis, and technology experience tracking.",
    }
  },
  fr: {
    translation: {
      "About": "À propos",
      "Services": "Services",
      "Projects": "Projets",
      "Let's Talk": "Parlons-en",
      "Hey there,": "Salut,",
      "I'm Brunno": "Je suis Brunno",
      "Picture a place where tech and creativity come together, making your online presence better. I turn new ideas into great digital projects, focusing on cool designs and strong tech to push your brand into the top of the digital world.": "Imaginez un endroit où la technologie et la créativité se rencontrent pour améliorer votre présence en ligne. Je transforme de nouvelles idées en projets numériques exceptionnels, en mettant l'accent sur des designs innovants et une technologie solide pour propulser votre marque au sommet du monde numérique.",
      "Introducing myself in a nutshell: Who am I?": "Présentation en bref : Qui suis-je ?",
      "My journey from practicing law in Brazil to pursuing a career in web and software development in Canada shows my adaptability and strong passion for solving problems. I am excited by the creative potential of technology and the ability to build solutions that make a difference.": "Mon parcours, de la pratique du droit au Brésil à la poursuite d'une carrière dans le développement web et logiciel au Canada, montre mon adaptabilité et ma passion pour la résolution de problèmes. Je suis enthousiasmé par le potentiel créatif de la technologie et par la capacité de construire des solutions qui font la différence.",
      "Outside of my studies, I am always learning. I find inspiration and knowledge in games, online courses, and videos – always seeking new challenges to grow. This dedication reflects my belief that success in the rapidly changing world of technology requires constant improvement.": "En dehors de mes études, j'apprends en permanence. Je trouve de l'inspiration et des connaissances dans les jeux, les cours en ligne et les vidéos – toujours à la recherche de nouveaux défis pour grandir. Cette dévotion reflète ma conviction que le succès dans le monde en constante évolution de la technologie nécessite une amélioration continue.",
      "My goal is to work within a collaborative team where I can contribute my creative thinking and technical abilities. I am eager to take on projects that drive innovation, whether it is building beautiful web interfaces or developing powerful backend systems. I am most excited about the opportunity to keep learning and expanding my skills in the years to come.": "Mon objectif est de travailler au sein d'une équipe collaborative où je peux contribuer avec ma réflexion créative et mes compétences techniques. Je suis impatient de relever des projets qui stimulent l'innovation, qu'il s'agisse de construire de belles interfaces web ou de développer de puissants systèmes backend. Ce qui m'enthousiasme le plus, c'est l'opportunité de continuer à apprendre et d'élargir mes compétences dans les années à venir.",
      "MY SERVICES": "MES SERVICES",
      "TECH STACK": "STACK TECHNIQUE",
      "FEATURED WORK": "TRAVAUX EN VEDETTE",
      "FEATURED PROJECTS": "PROJETS EN VEDETTE",
      "CONTACT ME": "CONTACTEZ-MOI",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "Vous avez une idée incroyable ? Collaborons et faisons de cela une réalité.",
      "Let's connect to create something amazing together or discuss opportunities for collaboration.": "Connectons-nous pour créer quelque chose d'extraordinaire ensemble ou discuter d'opportunités de collaboration.",
      "Your name": "Votre nom",
      "Your email": "Votre email",
      "Your message": "Votre message",
      "Send message": "Envoyer le message",
      "Contact Details": "Coordonnées",
      "Phone": "Téléphone",
      "Digital Spaces": "Espaces numériques",
      "Location": "Localisation",
      "Back to the top": "Retour en haut",
      "Brunno's Portfolio": "Portfolio de Brunno",
      "Year": "Année",
      "Technologies": "Technologies",
      "View on GitHub": "Voir sur GitHub",
      "Visit live website": "Visiter le site web",
      "wealth_wise_description": "Un outil complet de gestion des finances personnelles qui aide les utilisateurs à suivre leurs dépenses, définir des budgets et visualiser leurs objectifs financiers. Les fonctionnalités incluent la catégorisation des dépenses, les rapports financiers et le suivi des investissements.",
      "career_track_description": "Un système moderne de suivi des candidatures qui aide les utilisateurs à gérer leur processus de recherche d'emploi. Les fonctionnalités incluent le suivi du statut des candidatures, la planification des entretiens et la gestion des documents.",
      "info_stream_description": "Une application d'actualités moderne pour les appareils Android qui fournit des mises à jour en temps réel et du contenu personnalisé. Les fonctionnalités incluent des flux d'actualités personnalisables, des favoris et la lecture hors ligne.",
      "grandeur_description": "Une plateforme immobilière sophistiquée offrant une navigation fluide des propriétés, une fonction de recherche avancée et des visites virtuelles interactives. Construite avec des technologies web modernes pour des performances optimales.",
      "trivia_quest_description": "Une application de quiz captivante proposant plusieurs catégories, niveaux de difficulté et un système de score. Inclut une vaste base de données de questions et des retours en temps réel.",
      "UNDER DEVELOPMENT": "EN DÉVELOPPEMENT",
      "In Progress": "En cours",
      "LinguaTalk_description": "Une plateforme interactive de pratique linguistique qui aide les utilisateurs à améliorer leurs compétences orales en anglais et en français en simulant des conversations de jeu de rôle à l'aide de la technologie d'IA, de la reconnaissance vocale et des fonctionnalités de sortie vocale.",
      "WealthWise_description": "Une application de planification et de gestion financière conçue pour aider les utilisateurs à suivre les dépenses, gérer les budgets et atteindre les objectifs financiers. Le système propose un support multilingue, des tableaux de bord analytiques interactifs, une gestion des factures avec rappels, un suivi de l'épargne et un portefeuille d'investissement.",
      "CareerTrackPro_description": "Un système complet de suivi de carrière et de gestion des candidatures conçu pour aider les professionnels à gérer leur progression de carrière, suivre les candidatures d'emploi et maintenir leur profil professionnel. Le système propose la génération de documents alimentée par l'IA, l'analyse des compétences et le suivi de l'expérience technologique.",
    }
  },
  es: {
    translation: {
      "About": "Acerca de",
      "Services": "Servicios",
      "Projects": "Proyectos",
      "Let's Talk": "Hablemos",
      "Hey there,": "Hola,",
      "I'm Brunno": "Soy Brunno",
      "Picture a place where tech and creativity come together, making your online presence better. I turn new ideas into great digital projects, focusing on cool designs and strong tech to push your brand into the top of the digital world.": "Imagina un lugar donde la tecnología y la creatividad se unen para mejorar tu presencia en línea. Transformo nuevas ideas en grandes proyectos digitales, enfocándome en diseños geniales y tecnología sólida para llevar tu marca a la cima del mundo digital.",
      "Introducing myself in a nutshell: Who am I?": "Presentándome en pocas palabras: ¿Quién soy?",
      "My journey from practicing law in Brazil to pursuing a career in web and software development in Canada shows my adaptability and strong passion for solving problems. I am excited by the creative potential of technology and the ability to build solutions that make a difference.": "Mi camino desde la práctica del derecho en Brasil hasta la búsqueda de una carrera en el desarrollo web y de software en Canadá muestra mi adaptabilidad y una fuerte pasión por resolver problemas. Me entusiasma el potencial creativo de la tecnología y la capacidad de construir soluciones que marquen la diferencia.",
      "Outside of my studies, I am always learning. I find inspiration and knowledge in games, online courses, and videos – always seeking new challenges to grow. This dedication reflects my belief that success in the rapidly changing world of technology requires constant improvement.": "Fuera de mis estudios, siempre estoy aprendiendo. Encuentro inspiración y conocimiento en juegos, cursos en línea y videos, siempre buscando nuevos desafíos para crecer. Esta dedicación refleja mi creencia de que el éxito en el mundo rápidamente cambiante de la tecnología requiere una mejora constante.",
      "My goal is to work within a collaborative team where I can contribute my creative thinking and technical abilities. I am eager to take on projects that drive innovation, whether it is building beautiful web interfaces or developing powerful backend systems. I am most excited about the opportunity to keep learning and expanding my skills in the years to come.": "Mi objetivo es trabajar en un equipo colaborativo donde pueda contribuir con mi pensamiento creativo y habilidades técnicas. Estoy ansioso por asumir proyectos que impulsen la innovación, ya sea construyendo hermosas interfaces web o desarrollando potentes sistemas backend. Estoy más emocionado por la oportunidad de seguir aprendiendo y expandiendo mis habilidades en los próximos años.",
      "MY SERVICES": "MIS SERVICIOS",
      "TECH STACK": "TECNOLOGÍAS",
      "FEATURED WORK": "TRABAJOS DESTACADOS",
      "FEATURED PROJECTS": "PROYECTOS DESTACADOS",
      "CONTACT ME": "CONTÁCTAME",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "¿Tienes una idea increíble? Colaboremos y hagámosla realidad.",
      "Let's connect to create something amazing together or discuss opportunities for collaboration.": "Conectémonos para crear algo increíble juntos o discutir oportunidades de colaboración.",
      "Your name": "Tu nombre",
      "Your email": "Tu correo electrónico",
      "Your message": "Tu mensaje",
      "Send message": "Enviar mensaje",
      "Contact Details": "Detalles de contacto",
      "Phone": "Teléfono",
      "Digital Spaces": "Espacios digitales",
      "Location": "Ubicación",
      "Back to the top": "Volver arriba",
      "Brunno's Portfolio": "Portafolio de Brunno",
      "Year": "Año",
      "Technologies": "Tecnologías",
      "View on GitHub": "Ver en GitHub",
      "Visit live website": "Visitar sitio web",
      "wealth_wise_description": "Una herramienta completa de gestión de finanzas personales que ayuda a los usuarios a realizar un seguimiento de los gastos, establecer presupuestos y visualizar objetivos financieros. Las características incluyen categorización de gastos, informes financieros y seguimiento de inversiones.",
      "career_track_description": "Un sistema moderno de seguimiento de solicitudes de empleo que ayuda a los usuarios a gestionar su proceso de búsqueda de trabajo. Las características incluyen seguimiento del estado de las solicitudes, programación de entrevistas y gestión de documentos.",
      "info_stream_description": "Una aplicación moderna de noticias para dispositivos Android que ofrece actualizaciones en tiempo real y contenido personalizado. Las características incluyen feeds de notícias personalizables, función de marcadores y lectura sin conexión.",
      "grandeur_description": "Una sofisticada plataforma inmobiliaria que ofrece una navegación fluida de propiedades, funcionalidad de búsqueda avanzada y recorridos virtuales interactivos. Construida con tecnologías web modernas para un rendimiento óptimo.",
      "trivia_quest_description": "Una atractiva aplicación de preguntas con múltiples categorías, niveles de dificultad y un sistema de puntuación. Incluye una amplia base de datos de preguntas y retroalimentación en tiempo real.",
      "UNDER DEVELOPMENT": "EN DESARROLLO",
      "In Progress": "En progreso",
      "LinguaTalk_description": "Una plataforma interactiva de práctica de idiomas que ayuda a los usuarios a mejorar sus habilidades de conversación en inglés y francés mediante la simulación de conversaciones de juego de roles utilizando tecnología de IA, reconocimiento de voz y funciones de salida de voz.",
      "WealthWise_description": "Una aplicación de planificación y gestión financiera diseñada para ayudar a los usuarios a seguir los gastos, administrar presupuestos y alcanzar objetivos financieros. El sistema cuenta con soporte multilingüe, paneles de análisis interactivos, gestión de facturas con recordatorios, seguimiento de ahorros y cartera de inversiones.",
      "CareerTrackPro_description": "Un sistema integral de seguimiento de carrera y gestión de solicitudes de empleo diseñado para ayudar a los profesionales a gestionar su progresión profesional, seguir las solicitudes de empleo y mantener su perfil profesional. El sistema cuenta con generación de documentos impulsada por IA, análisis de habilidades y seguimiento de experiencia tecnológica.",
    }
  },
  pt: {
    translation: {
      "About": "Sobre",
      "Services": "Serviços",
      "Projects": "Projetos",
      "Let's Talk": "Vamos conversar",
      "Hey there,": "Olá,",
      "I'm Brunno": "Eu sou Brunno",
      "Picture a place where tech and creativity come together, making your online presence better. I turn new ideas into great digital projects, focusing on cool designs and strong tech to push your brand into the top of the digital world.": "Imagine um lugar onde a tecnologia e a criatividade se unem para melhorar sua presença online. Transformo novas ideias em grandes projetos digitais, focando em designs legais e tecnologia robusta para impulsionar sua marca ao topo do mundo digital.",
      "Introducing myself in a nutshell: Who am I?": "Apresentando-me em poucas palavras: Quem sou eu?",
      "My journey from practicing law in Brazil to pursuing a career in web and software development in Canada shows my adaptability and strong passion for solving problems. I am excited by the creative potential of technology and the ability to build solutions that make a difference.": "Minha jornada desde a prática do direito no Brasil até buscar uma carreira no desenvolvimento web e de software no Canadá mostra minha adaptabilidade e forte paixão por resolver problemas. Estou animado com o potencial criativo da tecnologia e a capacidade de construir soluções que fazem a diferença.",
      "Outside of my studies, I am always learning. I find inspiration and knowledge in games, online courses, and videos – always seeking new challenges to grow. This dedication reflects my belief that success in the rapidly changing world of technology requires constant improvement.": "Fora dos meus estudos, estou sempre aprendendo. Encontro inspiração e conhecimento em jogos, cursos online e vídeos – sempre buscando novos desafios para crescer. Esta dedicação reflete minha crença de que o sucesso no mundo em rápida mudança da tecnologia exige uma melhoria constante.",
      "My goal is to work within a collaborative team where I can contribute my creative thinking and technical abilities. I am eager to take on projects that drive innovation, whether it is building beautiful web interfaces or developing powerful backend systems. I am most excited about the opportunity to keep learning and expanding my skills in the years to come.": "Meu objetivo é trabalhar em uma equipe colaborativa onde eu possa contribuir com meu pensamento criativo e habilidades técnicas. Estou ansioso para assumir projetos que impulsionem a inovação, seja construindo belas interfaces web ou desenvolvendo sistemas backend poderosos. Estou mais animado com a oportunidade de continuar aprendendo e expandindo minhas habilidades nos próximos anos.",
      "MY SERVICES": "MEUS SERVIÇOS",
      "TECH STACK": "TECNOLOGIAS",
      "FEATURED WORK": "TRABALHOS EM DESTAQUE",
      "FEATURED PROJECTS": "PROJETOS EM DESTAQUE",
      "CONTACT ME": "CONTATE-ME",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "Tem uma ideia incrível? Vamos colaborar e torná-la realidade.",
      "Let's connect to create something amazing together or discuss opportunities for collaboration.": "Vamos nos conectar para criar algo incrível juntos ou discutir oportunidades de colaboração.",
      "Your name": "Seu nome",
      "Your email": "Seu email",
      "Your message": "Sua mensagem",
      "Send message": "Enviar mensagem",
      "Contact Details": "Detalhes de contato",
      "Phone": "Telefone",
      "Digital Spaces": "Espaços digitais",
      "Location": "Localização",
      "Back to the top": "Voltar ao topo",
      "Brunno's Portfolio": "Portfólio de Brunno",
      "Year": "Ano",
      "Technologies": "Tecnologias",
      "View on GitHub": "Ver no GitHub",
      "Visit live website": "Visitar site",
      "wealth_wise_description": "Uma ferramenta abrangente de gestão financeira pessoal que ajuda os usuários a acompanhar despesas, definir orçamentos e visualizar metas financeiras. Os recursos incluem categorização de despesas, relatórios financeiros e acompanhamento de investimentos.",
      "career_track_description": "Um sistema moderno de acompanhamento de candidaturas que ajuda os usuários a gerenciar seu processo de busca de emprego. Os recursos incluem acompanhamento do status das candidaturas, agendamento de entrevistas e gerenciamento de documentos.",
      "info_stream_description": "Um aplicativo moderno de notícias para dispositivos Android que oferece atualizações em tempo real e conteúdo personalizado. Os recursos incluem feeds de notícias personalizáveis, funcionalidade de favoritos e leitura offline.",
      "grandeur_description": "Uma sofisticada plataforma imobiliária oferecendo navegação fluida de propriedades, funcionalidade de busca avançada e tours virtuais interativos. Construída com tecnologias web modernas para desempenho ideal.",
      "trivia_quest_description": "Um aplicativo envolvente de quiz com múltiplas categorias, níveis de dificuldade e sistema de pontuação. Inclui um vasto banco de dados de perguntas e feedback em tempo real.",
      "UNDER DEVELOPMENT": "EM DESENVOLVIMENTO",
      "In Progress": "Em andamento",
      "LinguaTalk_description": "Uma plataforma interativa de prática de idiomas que ajuda os usuários a melhorar suas habilidades de fala em inglês e francês simulando conversas de role-play usando tecnologia de IA, reconhecimento de voz e recursos de saída de voz.",
      "WealthWise_description": "Um aplicativo de planejamento e gestão financeira projetado para ajudar os usuários a acompanhar despesas, gerenciar orçamentos e atingir metas financeiras. O sistema apresenta suporte a múltiplos idiomas, painéis analíticos interativos, gerenciamento de contas com lembretes, acompanhamento de economias e portfólio de investimentos.",
      "CareerTrackPro_description": "Um sistema abrangente de acompanhamento de carreira e gerenciamento de candidaturas a empregos projetado para ajudar profissionais a gerenciar sua progressão na carreira, acompanhar candidaturas a empregos e manter seu perfil profissional. O sistema apresenta geração de documentos com IA, análise de habilidades e acompanhamento de experiência em tecnologia.",
    }
  }
};

// Initialize i18n with English as default language
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
