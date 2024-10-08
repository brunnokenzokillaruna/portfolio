import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      "FEATURED PROJECTS": "FEATURED PROJECTS",
      "CONTACT ME": "CONTACT ME",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "Got an incredible idea? Let's collaborate and turn it into reality.",
      "I'm ready to dive into a dynamic role with a forward-thinking company.": "I'm ready to dive into a dynamic role with a forward-thinking company.",
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
      "FEATURED PROJECTS": "PROJETS EN VEDETTE",
      "CONTACT ME": "CONTACTEZ-MOI",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "Vous avez une idée incroyable ? Collaborons et faisons de cela une réalité.",
      "I'm ready to dive into a dynamic role with a forward-thinking company.": "Je suis prêt à me lancer dans un rôle dynamique au sein d'une entreprise avant-gardiste.",
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
      "FEATURED PROJECTS": "PROYECTOS DESTACADOS",
      "CONTACT ME": "CONTÁCTAME",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "¿Tienes una idea increíble? Colaboremos y hagámosla realidad.",
      "I'm ready to dive into a dynamic role with a forward-thinking company.": "Estoy listo para sumergirme en un papel dinámico dentro de una empresa con visión de futuro.",
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
      "FEATURED PROJECTS": "PROJETOS EM DESTAQUE",
      "CONTACT ME": "CONTATE-ME",
      "Got an incredible idea? Let's collaborate and turn it into reality.": "Tem uma ideia incrível? Vamos colaborar e torná-la realidade.",
      "I'm ready to dive into a dynamic role with a forward-thinking company.": "Estou pronto para mergulhar em um papel dinâmico dentro de uma empresa com visão de futuro.",
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
    }
  }
};

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
