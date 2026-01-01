import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
        title: "Switch to Spanish",
        lightMode: "Switch to dark mode",
        darkMode: "Switch to light mode",
      },
      footer: {
        phrase: "There is no plan B for success",
        channels: "Recommended channels",
        freecodecamp: "Technical courses in spanish",
        platzi: "Online professional learning",
        projects: "Course practices",
        foodie: "Cooking recipes website",
        baristas: "Coffee shop website",
        award: "Achievements",
        congratulations:
          "Congratulations! You've reached the epic end of my portfolio. You've earned the",
        rank: "professional navigator",
        thanks: "medal. Thanks for visiting!",
        paragraph: "Developed by",
        recommended: "Go to YouTube channel",
      },
      sections: {
        welcome: "Hello! I'm Emmanuel",
        hero: {
          title: "frontend developer",
          description:
            "Currently delving into backend technologies while applying agile methodologies to real-world projects. I combine design creativity with solid technical foundations.",
          cv: "Download",
          email: "Copy Email",
          emailCopied: "¡Email copied!",
        },
        about: {
          title: "A Little About Me",
          description:
            "Developer with experience in collaborative projects under agile methodologies",
          contactMe: "Contact Me",
          highlight1: "production-ready projects",
          highlight2: "multidisciplinary teams",
          highlight3: "modern technologies",
          cta: {
            title: "Frontend solutions and",
            titleAccent: "scalable architecture",
            desc: "I enjoy building interfaces with React and TypeScript, working in teams, and adapting to agile methodologies to add real value to the product.",
          },
          experience: {
            title: "Highlighted Experience",
            desc: "Participation in more than 5 e-commerce, business management, and healthcare platform projects, working with teams of 4–15 people under Scrum and Kanban.",
          },
          skills: {
            title: "Professional Focus",
            desc: "Specialized in developing scalable web applications with React, TypeScript, and Next.js. REST API integration, reusable components, and clean architecture.",
          },
          learning: {
            title: "Growing",
            desc: "Currently strengthening a full-stack profile with Node.js, Express, NestJS, Java, Spring Boot, and databases, while pursuing a Software Development Technical Degree.",
          },
          viewExperience: "View Experience",
        },

        experience: {
          title: "Project Experience",
          description:
            "Participation as a Frontend Developer in multidisciplinary teams under agile methodologies, with a focus on code quality and good practices.",
          period: {
            lockKey: "February - March | 2025",
            fitflow: "March - April | 2025",
            aura: "April - June | 2025",
            kramer: "June - September | 2025",
            flowik: "July - September | 2025",
            pymeGo: "September - October | 2025",
            ecoShop: "November - December | 2025",
          },
          projectDescription: {
            lockKey:
              "Password manager focused on secure storage and credential management, with responsive interfaces and a focus on usability and performance.",
            fitflow:
              "A comprehensive health and fitness platform that uses artificial intelligence to offer personalized diet, exercise, and progress tracking plans.",
            aura: "Web platform for managing records and services at a therapeutic center, optimizing patient organization and administrative processes.",
            kramer:
              "Multiplatform e-commerce application, with a public catalog, shopping cart, administrative panel for products and inventory, and a basic customer CRM.",
            flowik:
              "Web management application for SMEs focused on managing products, customers, and suppliers through an intuitive administrative panel.",
            pymeGo:
              "Fintech platform for digital loan onboarding for SMEs, with dynamic forms, document upload, and application tracking.",
            ecoShop:
              "Sustainable e-commerce platform geared towards responsible brands, with a product catalog, shopping cart, checkout, and environmental impact indicators.",
          },
        },
        certifications: {
          title: "Formation and Certifications",
          description:
            "Courses, titles and certifications that support my knowledge and skills",
          platzi:
            "Technologies and tools: HTML, CSS, JavaScript, Node.js, Express, Git, and GitHub",
          platziSpan: "Platzi | March - April 2024",
          javascript:
            "Key concepts: Algorithms, data structures, Object-Oriented Programming (OOP) and Functional Programming (FP)",
          javascriptSpan: "freeCodeCamp | May - June 2024",
          responsive:
            "Technologies and tools: HTML, CSS, Flexbox, CSS Grid, Responsive Design and web accessibility",
          responsiveSpan: "freeCodeCamp | April - May 2024",
          htmlcss:
            "Technologies and concepts: Semantic HTML, CSS, Responsive Design and Mobile first",
          htmlcssSpan: "Academia BA Emprende | September - October 2024",
          uxresearch:
            "Tools and methodologies: Figma, Canva, Behance, UX research (quantitative/qualitative methods), heuristic analysis, user flows",
          uxresearchSpan: "Academia BA Emprende | September - October 2024",
          nucba: "Tools: Notion, Framer, Figma and Webflow",
          nucbaSpan: "NUCBA | October - November 2024",
          nodeJs:
            "Technologies and tools: Node.js, Express, Firestore, and JavaScript for the backend",
          nodeJsSpan: "Talento Tech | March - July 2025",
          reactJs:
            "Technologies and tools: React, React-Bootstrap, React Router, Context API, Styled Components, Hooks, Vite and JavaScript for the frontend",
          reactJsSpan: "Talento Tech | August - December 2025",
          fullStack:
            "Tools and methodologies: TypeScript, Docker, advanced Git, TDD, Clean Code, Clean Architecture, Component-Driven Development",
          fullStackSpan: "For IT Academy | May - August 2025",
          fooTalentGroup:
            "Role and responsibilities: Front-End Developer in administrative management platform for pymes. Implementation of interfaces with React, TypeScript and Tailwind CSS, in a multidisciplinary team",
          fooTalentGroupSpan: "Foo Talent Group | July - September 2025",
          url: "Go to website",
          img: "Expand image",
        },
        skills: {
          title: "Tech Stack",
          description:
            "Technologies and methodologies that I use to take your projects to the next level",
          subtitle1: "Web Development",
          subtitle2: "Frameworks and Libraries",
          subtitle3: "Development Tools",
          subtitle4: "Design and Prototyping",
          subtitle5: "Project Management",
          html: "Hypertext Markup Language",
          css: "Cascading Style Sheets",
          javascript: "Web programming language",
          typescript: "Superset of JavaScript with static typing",
          react: "JavaScript library for building user interfaces",
          reactNative:
            "JavaScript framework for building native mobile applications",
          angular: "JavaScript framework for building web applications",
          tailwind: "Utility CSS framework",
          bootstrap: "Front-End development framework",
          nodejs:
            "Server-side JavaScript runtime environment, based on Chrome's V8 engine",
          express:
            "Node.js framework for building backend applications and RESTful APIs",
          figma: "User interface design tool",
          git: "Version control system",
          github: "Collaborative development platform",
          sass: "Syntactically Awesome Style Sheets",
          webflow: "Web design and development platform",
          photoshop: "Image editing software",
          vscode: "Source code editor",
          intelliJ: "Integrated development environment specialized in Java",
          postman: "Tool for testing APIs and managing HTTP requests",
          insomnia:
            "Tool for designing, testing, and debugging APIs, compatible with REST, GraphQL, and OpenAPI",
          jira: "Agile project management and development tracking",
          clickUp:
            "Comprehensive project and task management with agile methodologies",
          notion: "Organization, documentation, and collaborative databases",
          trello: "Kanban boards for visual task organization",
        },
        contact: {
          title: "I'm Just a Message Away",
          description:
            "Available for projects, inquiries, and collaborations. Don't hesitate to write me.",
          subtitle: "Get in touch",
          name: "Name",
          email: "Email Address",
          message: "Message...",
          required: "* Required fields",
          send: "Send",
          sending: "Sending message...",
          nameTitle: "Please enter your name",
          emailTitle: "Please enter your email address",
          messageTitle: "Please enter your message",
          success: "Success! Message sent successfully.",
          error: "Something went wrong. Please try again later.",
        },
        projects: {
          title: "Featured Works",
          description: "Explore a sample of my work and skills in action.",
          pollos:
            "This site brings the fictional restaurant from Breaking Bad into the digital world. Inspired by the visual style of restaurants like KFC, this site combines an attractive design with details that refer to the series. Explore a visual experience that will make you feel like you're in a real Gus Fring franchise",
          lockKey:
            "Password manager designed to offer secure and efficient credential management. The project was developed as part of a No Country work simulation, geared toward collaborative experiences. (Test version, not final)",
          portfolio:
            "This project showcases my ability to create responsive and efficient web interfaces, featuring dark mode options and language selection. Here you will find projects that reflect my commitment to detail, performance, and functionality in frontend development",
          jinjer:
            "Music artist platform inspired by the band Jinjer. The site offers a complete experience: bilingual navigation (English/Spanish) with interactive sections, including news, biographies, tour dates, discography, music player, multimedia gallery and an online store",
          literarium:
            "Digital library modern that blends the traditional library experience with cutting-edge technology. Intuitive navigation between detailed sections, content adapted to each section, and responsive design for a personalized experience",
          button: "Visit site",
          link: "More details",
          buttonTitle: "Watch the live demo of the project",
          githubTitle: "Explore the project source code",
        },
      },
      scrollToTop: "Scroll to top",
      lastUpdate: "Last updated",
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        certifications: "Estudios",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        title: "Cambiar a Inglés",
        lightMode: "Cambiar a modo oscuro",
        darkMode: "Cambiar a modo claro",
      },
      footer: {
        phrase: "No hay plan B para el éxito",
        channels: "Canales recomendados",
        freecodecamp: "Cursos técnicos en español",
        platzi: "Aprendizaje profesional en línea",
        projects: "Prácticas de cursos",
        foodie: "Web de recetas de cocina",
        baristas: "Sitio web de cafetería",
        award: "Logros",
        congratulations:
          "¡Felicidades! Alcanzaste el épico final de mi portfolio. Te ganaste la medalla de",
        rank: "navegante profesional.",
        thanks: "¡Gracias por tu visita!",
        paragraph: "Desarrollado por",
        recommended: "Ir al canal de YouTube",
      },
      sections: {
        welcome: "Hola! Soy Emmanuel",
        hero: {
          title: "desarrollador frontend",
          description:
            "Actualmente profundizando en tecnologías backend mientras aplico metodologías ágiles en proyectos reales. Combino creatividad en el diseño con sólidos fundamentos técnicos.",
          cv: "Descargar",
          email: "Copiar Email",
          emailCopied: "¡Email copiado!",
        },
        about: {
          title: "Un Poco Sobre mí",
          description:
            "Desarrollador con experiencia en proyectos colaborativos bajo metodologías ágiles",
          contactMe: "Contactame",
          highlight1: "proyectos en producción",
          highlight2: "equipos multidisciplinarios",
          highlight3: "tecnologías modernas",
          cta: {
            title: "Soluciones Frontend y",
            titleAccent: "arquitectura escalable",
            desc: "Disfruto construir interfaces con React y TypeScript, trabajando en equipo y adaptándome a metodologías ágiles para aportar valor real al producto.",
          },
          experience: {
            title: "Experiencia Destacada",
            desc: "Participación en más de 5 proyectos de comercio electrónico, gestión empresarial y plataformas de salud, trabajando con equipos de 4-15 personas bajo Scrum y Kanban.",
          },
          skills: {
            title: "Enfoque Profesional",
            desc: "Especializado en desarrollo de aplicaciones web escalables con React, TypeScript y Next.js. Integración de APIs REST, componentes reutilizables y arquitectura limpia.",
          },
          learning: {
            title: "En Crecimiento",
            desc: "Actualmente consolidando perfil fullstack con Node.js, Express, NestJS, Java, Spring Boot y bases de datos, mientras curso Tecnicatura en Desarrollo de Software.",
          },
          viewExperience: "Ver trayectoria",
        },
        experience: {
          title: "Experiencia en Proyectos",
          description:
            "Participación como Desarrollador Frontend en equipos multidisciplinarios bajo metodologías ágiles, con foco en calidad de código y buenas prácticas.",
          period: {
            lockKey: "Febrero - Marzo | 2025",
            fitflow: "Marzo - Abril | 2025",
            aura: "Abril - Junio | 2025",
            kramer: "Junio - Septiembre | 2025",
            flowik: "Julio - Septiembre | 2025",
            pymeGo: "Septiembre - Octubre | 2025",
            ecoShop: "Noviembre - Diciembre | 2025",
          },
          projectDescription: {
            lockKey:
              "Gestor de contraseñas orientado al almacenamiento seguro y la administración de credenciales, con interfaces responsivas y enfoque en usabilidad y rendimiento.",
            fitflow:
              "Plataforma integral de salud y fitness que utiliza inteligencia artificial para ofrecer planes personalizados de dieta, ejercicio y seguimiento de progreso.",
            aura: "Plataforma web para la gestión de registros y atenciones de un centro terapéutico, optimizando la organización de pacientes y procesos administrativos.",
            kramer:
              "Aplicación e-commerce multiplataforma, con catálogo público, carrito de compras, panel administrativo para productos y stock, y un CRM básico de clientes.",
            flowik:
              "Aplicación web de gestión para PYMES enfocada en la administración de productos, clientes y proveedores mediante un panel administrativo intuitivo.",
            pymeGo:
              "Plataforma fintech para el onboarding digital de créditos para PYMES, con formularios dinámicos, carga de documentación y seguimiento de solicitudes.",
            ecoShop:
              "Plataforma de comercio electrónico sostenible orientada a marcas responsables, con catálogo de productos, carrito, checkout e indicadores de impacto ambiental.",
          },
        },
        certifications: {
          title: "Formación y Certificaciones",
          description:
            "Cursos, títulos y certificaciones que avalan mis conocimientos y habilidades",
          platzi:
            "Tecnologías y herramientas: HTML, CSS, JavaScript, Node.js, Express, Git y GitHub",
          platziSpan: "Platzi | Marzo - Abril 2024",
          javascript:
            "Conceptos clave: Algoritmos, estructuras de datos, Programación Orientada a Objetos (OOP) y Programación Funcional (FP)",
          javascriptSpan: "freeCodeCamp | Mayo - Junio 2024",
          responsive:
            "Tecnologías y herramientas: HTML, CSS, Flexbox, CSS Grid, Diseño Responsivo y accesibilidad web",
          responsiveSpan: "freeCodeCamp | Abril - Mayo 2024",
          htmlcss:
            "Tecnologías y conceptos: HTML semántico, CSS, Diseño Responsivo y Mobile first",
          htmlcssSpan: "Academia BA Emprende | Septiembre - Octubre 2024",
          uxresearch:
            "Herramientas y metodologías: Figma, Canva, Behance, investigación UX (métodos cuantitativos/cualitativos), análisis heurístico, user flows",
          uxresearchSpan: "Academia BA Emprende | Septiembre - Octubre 2024",
          nucba: "Herramientas: Notion, Framer, Figma y Webflow",
          nucbaSpan: "NUCBA | Octubre - Noviembre 2024",
          nodeJs:
            "Tecnologías y herramientas: Node.js, Express, Firestore y JavaScript para el backend",
          nodeJsSpan: "Talento Tech | Marzo - Julio 2025",
          reactJs:
            "Tecnologías y herramientas: React, React-Bootstrap, React Router, Context API, Styled Components, Hooks, Vite y JavaScript para el frontend",
          reactJsSpan: "Talento Tech | Agosto - Diciembre 2025",
          fullStack:
            "Herramientas y metodologías: TypeScript, Docker, Git avanzado, TDD, Clean Code, Arquitectura limpia, Component-Driven Development",
          fullStackSpan: "For IT Academy | Mayo - Agosto 2025",
          fooTalentGroup:
            "Rol y responsabilidades: Desarrollador Front-End en plataforma de gestión administrativa para pymes. Implementación de interfaces con React, TypeScript y Tailwind CSS, en un equipo multidisciplinario",
          fooTalentGroupSpan: "Foo Talent Group | Julio - Septiembre 2025",
          url: "Ir al sitio web",
          img: "Expandir imagen",
        },
        skills: {
          title: "Stack Tecnológico",
          description:
            "Tecnologías y metodologías que utilizo para llevar tus proyectos al siguiente nivel",
          subtitle1: "Desarrollo Web",
          subtitle2: "Frameworks y Bibliotecas",
          subtitle3: "Herramientas de Desarrollo",
          subtitle4: "Diseño y Prototipado",
          subtitle5: "Gestión de Proyectos",
          html: "Lenguaje de Marcado de Hipertexto",
          css: "Hojas de Estilo en Cascada",
          javascript: "Lenguaje de programación web",
          typescript: "Superset de JavaScript con tipado estático",
          react:
            "Biblioteca de JavaScript para construir interfaces de usuario",
          reactNative:
            "Framework de JavaScript para crear aplicaciones móviles nativas",
          angular: "Framework de JavaScript para construir aplicaciones web",
          tailwind: "Framework de CSS utilitario",
          bootstrap: "Marco de desarrollo de Front-End",
          nodejs:
            "Entorno de ejecución de JavaScript del lado del servidor, basado en el motor V8 de Chrome",
          express:
            "Framework de Node.js para construir aplicaciones backend y APIs RESTful",
          figma: "Herramienta de diseño de interfaz de usuario",
          git: "Sistema de control de versiones",
          github: "Plataforma de desarrollo colaborativo",
          sass: "Hojas de Estilo Sintácticamente Asombrosas",
          webflow: "Plataforma de diseño y desarrollo web",
          photoshop: "Software de edición de imágenes",
          vscode: "Editor de código fuente",
          intelliJ: "Entorno de desarrollo integrado especializado en Java",
          postman: "Herramienta para probar APIs y gestionar peticiones HTTP",
          insomnia:
            "Herramienta para diseñar, probar y depurar APIs, compatible con REST, GraphQL y OpenAPI",
          jira: "Gestión ágil de proyectos y seguimiento de desarrollo",
          clickUp:
            "Gestión integral de proyectos y tareas con metodologías ágiles",
          notion: "Organización, documentación y bases de datos colaborativas",
          trello: "Tableros Kanban para organización visual de tareas",
        },
        contact: {
          title: "Estoy a un Mensaje de Distancia",
          description:
            "Disponible para proyectos, consultas y colaboraciones. No dudes en escribirme.",
          subtitle: "Contactame",
          name: "Nombre",
          email: "Correo electrónico",
          message: "Mensaje...",
          required: "* Campos obligatorios",
          send: "Enviar",
          sending: "Enviando mensaje...",
          nameTitle: "Ingresa tu nombre",
          emailTitle: "Ingresa tu correo electrónico",
          messageTitle: "Ingresa tu mensaje",
          success: "¡Éxito! Mensaje enviado correctamente.",
          error: "Algo salió mal. Intenta de nuevo más tarde.",
        },
        projects: {
          title: "Trabajos Destacados",
          description:
            "Explora una muestra de mi trabajo y habilidades en acción.",
          pollos:
            "Este sitio lleva el restaurante ficticio de Breaking Bad al mundo digital. Inspirado en el estilo visual de restaurantes como KFC, esta página combina un diseño atractivo con detalles que remiten a la serie. Explora una experiencia visual que te hará sentir en una franquicia de Gus Fring",
          lockKey:
            "Administrador de contraseñas pensado para ofrecer una gestión segura y eficiente de credenciales. El proyecto fue desarrollado en el marco de una simulación laboral de No Country, orientada a experiencias colaborativas. (Versión de prueba, no final)",
          portfolio:
            "Este proyecto demuestra mi habilidad para crear interfaces web responsivas y eficientes, cuenta con opciones de modo oscuro y selección de idioma. Aquí encontrarás proyectos que reflejan mi compromiso con el detalle, el rendimiento y la funcionalidad en desarrollo frontend",
          jinjer:
            "Plataforma de artista musical inspirada en la banda Jinjer. El sitio ofrece una experiencia completa: navegación bilingüe (inglés/español) con secciones interactivas, incluye noticias, biografías, fechas de gira, discografía, reproductor de música, galería multimedia y una tienda en línea",
          literarium:
            "Biblioteca digital moderna que fusiona la experiencia de una librería tradicional con tecnología de vanguardia. Navegación intuitiva entre secciones detalladas, contenido adaptado a cada sección y diseño responsivo para una experiencia personalizada",
          button: "Visitar sitio",
          link: "Más detalles",
          buttonTitle: "Ver la demo en vivo del proyecto",
          githubTitle: "Explorar el código fuente del proyecto",
        },
      },
      scrollToTop: "Ir hacia arriba",
      lastUpdate: "Última actualización",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
