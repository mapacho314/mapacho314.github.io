/**
 * Bilingual Translation Dictionary (English & Spanish)
 * Dr. Mariana Vázquez Pacho, PhD — Strategy & Sustainability
 */

const translations = {
  es: {
    // Meta
    metaTitle: "Dr. Mariana Vázquez Pacho, PhD | Estrategia & Sostenibilidad",
    metaDesc: "Doctora en Ciencias de Gestión y Consultora Estratégica. Más de 12 años integrando innovación en modelos de negocio sostenibles (ESG/ODS) y liderazgo comercial FMCG.",
    
    // Navbar
    navHome: "Inicio",
    navProfile: "Perfil",
    navApproach: "Enfoque",
    navExperience: "Trayectoria",
    navPublications: "Investigación",
    navSkills: "Competencias",
    navEducation: "Educación",
    navContact: "Contacto",
    btnDownloadCv: "Descargar CV",
    langToggleTitle: "Switch to English",

    // Hero
    heroStatus: "Disponible para Asesoría Estratégica & Dirección Corporativa",
    heroTitle: "Dr. Mariana Vázquez Pacho",
    heroSubtitle: "Estrategia & Sostenibilidad • Modelos de Negocio ESG • Liderazgo Comercial FMCG",
    heroLocation: "Colombia / México / Francia (Alcance Global & Asesoría Ejecutiva)",
    heroSummary: "Doctora en Ciencias de Gestión con formación en Contaduría Pública y Marketing Internacional. Cuento con <strong>más de 12 años de experiencia combinada</strong>: <strong>7 años de liderazgo comercial</strong> en empresas multinacionales de consumo masivo (FMCG: Mondelēz International, Grupo Bimbo, Bepensa) y <strong>5 años de investigación científica</strong> en Lyon, Francia, integrando marcos globales de sostenibilidad (ESG / ODS) y creación de valor compartido al diseño de modelos de negocio rentables y escalables.",
    
    // Metrics
    metric1Val: "12+",
    metric1Label: "Años de Trayectoria (FMCG + Doctorado)",
    metric2Val: "+20%",
    metric2Label: "Crecimiento en Ventas en Cuentas Estratégicas",
    metric3Val: "5+",
    metric3Label: "Años de Investigación Sostenible en Europa",
    metric4Val: "3",
    metric4Label: "Idiomas Profesionales (ES, EN, FR)",

    // Hero CTA
    btnHeroContact: "Iniciar Conversación",
    btnHeroCv: "Descargar CV Completo (PDF)",

    // Strategic Pillars
    pillarsTag: "Pilares Estratégicos",
    pillarsTitle: "Enfoque & Propuesta de Valor",
    pillarsDesc: "Integración holística entre rigor científico, marcos de sostenibilidad de vanguardia y ejecución comercial orientada a resultados financieros.",
    
    pillar1Title: "Modelos de Negocio ESG & Sostenibilidad",
    pillar1Text: "Diseño y operacionalización de modelos de negocio que integran criterios ambientales, sociales y de gobernanza (ESG) y Objetivos de Desarrollo Sostenible (ODS), transformando la sostenibilidad en una ventaja competitiva rentable.",
    
    pillar2Title: "Valor Compartido & Base de la Pirámide (BoP)",
    pillar2Text: "Estrategias de co-creación y colaboración con ecosistemas y comunidades en mercados emergentes, articulando redes de valor inclusivas que generan desarrollo social e impacto económico mutuo.",
    
    pillar3Title: "Liderazgo Comercial & Cuentas Clave (FMCG)",
    pillar3Text: "Sólida trayectoria en negociación con grandes cadenas mayoristas y retail, optimización de sell-in/sell-out, gestión de presupuestos con ROI positivo, rotación de cartera (DSO) y lanzamientos de productos de alta rotación.",
    
    pillar4Title: "Investigación & Métodos Analíticos Rigurosos",
    pillar4Text: "Capacidad demostrada en análisis cualitativo y comparativo (metodología de Morse), mapeo de cadenas de suministro y valor, análisis financiero y divulgación en conferencias académicas internacionales.",

    // Experience
    expTag: "Experiencia Profesional",
    expTitle: "Trayectoria Ejecutiva & Científica",
    expDesc: "Equilibrio estratégico entre investigación doctoral en Europa y liderazgo comercial en corporaciones multinacionales líderes.",
    
    filterAll: "Todas las posiciones (4)",
    filterResearch: "Investigación Doctoral & ESG",
    filterCommercial: "Liderazgo Comercial FMCG",

    // Roles
    role1Badge: "Investigación Doctoral & Estrategia",
    role1Period: "Enero 2019 — Abril 2024 (5 años 4 meses)",
    role1Title: "PhD Researcher in Strategy & Sustainability",
    role1Company: "Magellan Laboratory — Université Jean Moulin Lyon 3",
    role1Location: "📍 Lyon, Francia",
    role1Summary: "Liderazgo de investigación doctoral enfocada en la sostenibilidad y el diseño e innovación de modelos de negocio, ayudando a las empresas a formular estrategias y tácticas para crear valor social de manera rentable en mercados emergentes y contextos de la base de la pirámide (BoP).",
    role1Bullet1: "<strong>Frameworks ESG & ODS:</strong> Comprensión exhaustiva de marcos globales de sostenibilidad (ESG, ODS) y operacionalización de modelos de negocio (propuesta de valor, cadena de suministro, red de valor, segmentos de clientes, flujos de ingresos y estructura de costos).",
    role1Bullet2: "<strong>Estrategias de Multinacionales:</strong> Análisis a profundidad de estrategias y tácticas de corporaciones multinacionales (MNCs) para innovar y crear valor compartido alineado con tendencias globales de sostenibilidad.",
    role1Bullet3: "<strong>Redes Colaborativas:</strong> Exploración de esquemas de colaboración dentro de multinacionales para optimizar cadenas de valor mediante alianzas con ONGs, sociedad civil y gobiernos.",
    role1Bullet4: "<strong>Conferencias Internacionales:</strong> Presentación y divulgación de hallazgos de investigación en conferencias científicas internacionales sobre modelos de negocio y valor compartido.",

    role2Badge: "Consumo Masivo (FMCG)",
    role2Period: "Septiembre 2017 — Diciembre 2018 (1 año 4 meses)",
    role2Title: "Key Account Executive (Canal Mayorista)",
    role2Company: "Mondelēz International",
    role2Location: "📍 Mérida, Yucatán, México",
    role2Summary: "Liderazgo en planeación estratégica y gestión de relaciones comerciales para dos clientes clave en el canal mayorista del sur de México, generando un crecimiento significativo del negocio.",
    role2Bullet1: "<strong>Superación Consistente de Cuotas:</strong> Crecimiento del <strong>10%</strong> en sell-in y sell-out, superando la cuota de ventas en 10 de 12 meses.",
    role2Bullet2: "<strong>Gestión de Stakeholders Clave:</strong> Fortalecimiento de relaciones estratégicas con toma de decisiones de alto nivel basada en dinámicas de mercado y tendencias competitivas.",
    role2Bullet3: "<strong>Innovación y Portafolio:</strong> Introducción anual de <strong>12+ productos innovadores</strong>, adaptando el portafolio a la demanda del mercado.",
    role2Bullet4: "<strong>Casos de Negocio Persuasivos:</strong> Creación de business cases ejecutivos que aseguraron la adopción de soluciones y optimizaron el rendimiento comercial.",

    role3Badge: "B2B Industrial",
    role3Period: "Septiembre 2016 — Enero 2017 (5 meses)",
    role3Title: "Sales Manager (Sur de México y Centroamérica)",
    role3Company: "MegaEmpack (Bepensa Industrial)",
    role3Location: "📍 Mérida, Yucatán, México",
    role3Summary: "Liderazgo del desarrollo de negocios en diversos territorios, formulando y ejecutando estrategias de crecimiento comercial adaptadas a tendencias regionales.",
    role3Bullet1: "<strong>Crecimiento en Ventas (+20%):</strong> Consecución de un notable incremento del <strong>20% en ventas</strong> mediante estrategias basadas en analítica de mercado.",
    role3Bullet2: "<strong>Recuperación y Expansión de Cuentas:</strong> Recuperación de clientes clave e incorporación de nuevas cuentas PyME, impulsando los ingresos.",
    role3Bullet3: "<strong>Colaboración Transversal:</strong> Liderazgo interdisciplinario para atender solicitudes técnicas de clientes y resolver desafíos comerciales complejos.",

    role4Badge: "Retail & Autoservicio",
    role4Period: "Noviembre 2010 — Agosto 2015 (4 años 10 meses)",
    role4Title: "Key Account Executive (Retail / Supermercados)",
    role4Company: "Grupo Bimbo",
    role4Location: "📍 Ciudad de México, México",
    role4Summary: "Gestión de las cuentas de dos de las principales cadenas de supermercados en México, implementando estrategias de vanguardia que produjeron incrementos destacados en ingresos y rentabilidad.",
    role4Bullet1: "<strong>Crecimiento Anual Sostenido (+12%):</strong> Impulso de un crecimiento anual de aproximadamente el <strong>12%</strong> por cadena mediante optimización logística, promociones innovadoras y espacios preferenciales.",
    role4Bullet2: "<strong>Maximización de ROI Promocional:</strong> Administración de presupuestos con énfasis en ROI mediante insights basados en datos.",
    role4Bullet3: "<strong>Planes de Negocio & Cross-Docking:</strong> Elaboración de planes conjuntos de negocio (JBP), negociación de descuentos comerciales e implementación de cross-docking.",
    role4Bullet4: "<strong>Cumplimiento de DSO & Sinergia:</strong> Gestión de rotación de cartera (DSO) y colaboración interdisciplinaria para la adaptación y desarrollo de productos.",

    // Publications
    pubsTag: "Producción Científica",
    pubsTitle: "Investigación & Publicaciones",
    pubsDesc: "Contribuciones académicas en modelos de valor compartido, metodologías comparativas y sostenibilidad en mercados emergentes.",
    
    pubType1: "Artículo en Revista Indexada (Scopus / Q1)",
    pubType2: "Capítulo de Libro (Editorial Routledge)",
    pubType3: "Capítulo de Libro (Editorial Vuibert / Atlas AFMI)",
    pubType4: "Tesis Doctoral (Université Jean Moulin Lyon 3)",
    
    pub1Summary: "Investigación empírica que examina las acciones y tácticas estratégicas desplegadas por corporaciones multinacionales (MNCs) para innovar sus modelos de negocio e impulsar valor social en la Base de la Pirámide (BoP).",
    pub2Summary: "Análisis comparativo riguroso aplicando la metodología de Morse para delimitar las diferencias conceptuales, metodológicas y operativas entre los marcos de BVP, TBL, CSV y BoP en los negocios internacionales.",
    pub3Summary: "Contribución académica clave examinando la articulación entre responsabilidad social, creación de valor compartido e innovación en modelos de negocio para empresas multinacionales.",
    pub4Summary: "Tesis doctoral en ciencias de gestión que analiza la alineación estratégica interna y las redes colaborativas externas de las empresas multinacionales para la creación sostenible de valor compartido.",

    btnCopyBibtex: "Copiar Cita (BibTeX)",
    copiedText: "¡Copiado!",
    btnViewArticle: "Ver Publicación (Emerald)",
    btnViewChapterRoutledge: "Ver Capítulo (Routledge)",
    btnViewBookRoutledge: "Ver Libro (Routledge)",
    btnViewBookVuibert: "Ver Libro (Vuibert)",
    btnViewRg: "Ver en ResearchGate",
    btnViewThesis: "Ver Registro Theses.fr",

    // Skills
    skillsTag: "Competencias",
    skillsTitle: "Dominios de Especialidad",
    skillsDesc: "Conjunto de capacidades analíticas, estratégicas, de software y comerciales consolidadas.",
    
    skillCat1Title: "Sostenibilidad & Gobernanza (ESG)",
    skillCat1_1: "Environmental, Social & Governance (ESG)",
    skillCat1_2: "Objetivos de Desarrollo Sostenible (ODS / SDGs)",
    skillCat1_3: "Modelos de Negocio Sostenibles & Híbridos",
    skillCat1_4: "Base de la Pirámide (BoP) & Valor Compartido",
    skillCat1_5: "Triple Balance (Triple Bottom Line)",
    skillCat1_6: "Gestión y Compromiso de Stakeholders",
    skillCat1_7: "Innovación Sostenible (Sustainable Innovation Thinking)",

    skillCat2Title: "Estrategia & Liderazgo Comercial",
    skillCat2_1: "Planeación Estratégica Corporativa",
    skillCat2_2: "Key Account Management (Mayorista / Retail)",
    skillCat2_3: "Crecimiento de Sell-in & Sell-out",
    skillCat2_4: "Desarrollo de Casos de Negocio (Business Cases)",
    skillCat2_5: "Negociación de Acuerdos Comerciales & DSO",
    skillCat2_6: "Desarrollo de Nuevos Negocios & B2B",
    skillCat2_7: "Presupuestación & Optimización de ROI",

    skillCat3Title: "Investigación & Métodos Analíticos",
    skillCat3_1: "Investigación de Mercados Ágil",
    skillCat3_2: "Análisis Cualitativo & Metodología Morse",
    skillCat3_3: "Mapeo de Cadenas de Suministro y Redes de Valor",
    skillCat3_4: "Contaduría Pública, Costos & Análisis Financiero",
    skillCat3_5: "Técnicas de Prospectiva & Análisis de Tendencias",
    skillCat3_6: "Ponencias en Conferencias Científicas Globales",
    skillCat3_7: "Toma de Decisiones Basada en Datos",

    skillCat4Title: "Software & Plataformas Especializadas",
    skillCat4_1: "Power BI & Visualización de Datos",
    skillCat4_2: "NVivo (Análisis Cualitativo)",
    skillCat4_3: "SPSS & SAS Viya (Analítica Estadística)",
    skillCat4_4: "Salesforce CRM",
    skillCat4_5: "Nielsen Analytics & ISCAM (Insights FMCG)",
    skillCat4_6: "EBSCOhost & MarketLine",
    skillCat4_7: "Microsoft Office Suite Avanzado",

    // Education
    eduTag: "Credenciales",
    eduTitle: "Formación Académica & Honores",
    eduDesc: "Trayectoria académica multicultural de alto nivel y certificaciones ejecutivas.",
    honorText: "Graduada con Honores ⭐",
    
    eduPhdTitle: "PhD in Management (Strategy & Sustainability)",
    eduPhdInst: "Université Jean Moulin Lyon 3 (Francia)",
    eduPhdFocus: "Investigación en modelos de negocio sostenibles, creación de valor social en BoP y estrategias de multinacionales. Laboratorio Magellan.",

    eduMscTitle: "Master in Global Marketing & Negotiation",
    eduMscInst: "Burgundy School of Business (Francia)",
    eduMscFocus: "Negociación internacional, dinámicas de mercado globales y marketing estratégico.",

    eduMasterTitle: "Maestría en Dirección de Mercadotecnia",
    eduMasterInst: "Universidad Autónoma de Yucatán (México)",
    eduMasterFocus: "Dirección estratégica comercial, comportamiento del consumidor y desarrollo de canales.",

    eduUnamTitle: "Diplomado en Administración y Gestión de Empresas",
    eduUnamInst: "Universidad Nacional Autónoma de México (UNAM)",
    eduUnamFocus: "Administración corporativa integral, finanzas y desarrollo directivo.",

    eduBachelorTitle: "Licenciatura en Contaduría Pública",
    eduBachelorInst: "Universidad Autónoma de Yucatán (México)",
    eduBachelorFocus: "Fundamentos rigurosos de finanzas corporativas, costos, presupuestación y auditoría.",

    langTitle: "🌐 Idiomas",
    langEs: "<strong>Español:</strong> Nativo",
    langEn: "<strong>Inglés:</strong> Avanzado / Profesional Completo (TOEIC 915)",
    langFr: "<strong>Francés:</strong> Avanzado / Profesional Operativo",
    certTitle: "📜 Especialidad",
    cert1: "Estrategia y Sostenibilidad",

    // Contact
    contactTag: "Contacto & Colaboración",
    contactHeading: "Conectemos para crear valor e impacto sostenible",
    contactSub: "Abierta a asesoría estratégica, dirección ejecutiva, consultoría en modelos de negocio ESG, conferencias y proyectos de alto impacto.",
    contactBtnEmail: "Escribir Mensaje",
    contactBtnCv: "Descargar CV Completo",
    contactCopyBtn: "Copiar",
    contactCopied: "¡Copiado!",

    // Footer
    footerCopy: "Todos los derechos reservados.",
    footerTagline: "Estrategia, Sostenibilidad e Innovación en Modelos de Negocio."
  },

  en: {
    // Meta
    metaTitle: "Dr. Mariana Vázquez Pacho, PhD | Strategy & Sustainability",
    metaDesc: "PhD in Management & Strategic Consultant with 12+ years bridging academic rigor and commercial excellence in sustainable business models (ESG/SDGs) and FMCG leadership.",
    
    // Navbar
    navHome: "Home",
    navProfile: "Profile",
    navApproach: "Approach",
    navExperience: "Experience",
    navPublications: "Publications",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",
    btnDownloadCv: "Download CV",
    langToggleTitle: "Cambiar a Español",

    // Hero
    heroStatus: "Available for Strategic Advisory & Enterprise Consulting",
    heroTitle: "Dr. Mariana Vázquez Pacho",
    heroSubtitle: "Strategy & Sustainability • ESG Business Models • FMCG Commercial Leadership",
    heroLocation: "Colombia / Mexico / France (Global Reach & Strategic Advisory)",
    heroSummary: "Ph.D. in Management Sciences with a background in Public Accounting and International Marketing. I have <strong>over 12 years of combined experience</strong>: <strong>7 years of commercial leadership</strong> in multinational fast-moving consumer goods companies (FMCG: Mondelēz International, Grupo Bimbo, Bepensa) and <strong>5 years of scientific research</strong> in Lyon, France, integrating global sustainability frameworks (ESG / SDGs) and shared value creation into the design of profitable and scalable business models.",
    
    // Metrics
    metric1Val: "12+",
    metric1Label: "Years of Experience (FMCG + PhD)",
    metric2Val: "+20%",
    metric2Label: "Sales Growth in Strategic Accounts",
    metric3Val: "5+",
    metric3Label: "Years of Sustainability Research in Europe",
    metric4Val: "3",
    metric4Label: "Professional Languages (ES, EN, FR)",

    // Hero CTA
    btnHeroContact: "Get in Touch",
    btnHeroCv: "Download Full CV (PDF)",

    // Strategic Pillars
    pillarsTag: "Strategic Pillars",
    pillarsTitle: "Focus & Value Proposition",
    pillarsDesc: "Holistic integration of scientific rigor, cutting-edge sustainability frameworks, and commercial execution driving financial results.",
    
    pillar1Title: "ESG Business Models & Sustainability",
    pillar1Text: "Designing and operationalizing business models that integrate environmental, social, and governance (ESG) criteria and Sustainable Development Goals (SDGs), transforming sustainability into a profitable competitive advantage.",
    
    pillar2Title: "Shared Value & Base of the Pyramid (BoP)",
    pillar2Text: "Co-creation and collaborative strategies with emerging market communities, architecting inclusive value networks that foster social advancement and mutual economic impact.",
    
    pillar3Title: "FMCG Commercial Leadership & Key Accounts",
    pillar3Text: "Proven track record in high-stakes negotiations with wholesale and retail chains, optimizing sell-in/sell-out, ROI-driven promotional budgets, DSO management, and launching high-rotation products.",
    
    pillar4Title: "Rigorous Analytical & Research Methods",
    pillar4Text: "Demonstrated expertise in qualitative and comparative analysis (Morse's methodology), supply and value chain mapping, corporate financial analysis, and dissemination at international scientific conferences.",

    // Experience
    expTag: "Professional Experience",
    expTitle: "Executive & Academic Career",
    expDesc: "Strategic balance between doctoral research in Europe and commercial leadership in top multinational corporations.",
    
    filterAll: "All Positions (4)",
    filterResearch: "Doctoral Research & ESG",
    filterCommercial: "FMCG Commercial Leadership",

    // Roles
    role1Badge: "Doctoral Research & Strategy",
    role1Period: "January 2019 — April 2024 (5 years 4 months)",
    role1Title: "PhD Researcher in Strategy & Sustainability",
    role1Company: "Magellan Laboratory — Université Jean Moulin Lyon 3",
    role1Location: "📍 Lyon, France",
    role1Summary: "Led extensive research focusing on sustainability and business model design and innovation, helping businesses craft strategies and tactics to profitably create sustainable social value in emerging markets and Base of Pyramid (BoP) contexts.",
    role1Bullet1: "<strong>ESG & SDGs Frameworks:</strong> Developed a profound understanding of various business model frameworks and operationalization: value proposition, supply chain, value network, customer segments, revenue streams, and cost structures.",
    role1Bullet2: "<strong>MNC Strategy Analysis:</strong> Conducted detailed data analysis to uncover strategies and tactics that multinational corporations employ to innovate and create shared value aligned with global sustainability trends.",
    role1Bullet3: "<strong>Collaborative Networks:</strong> Explored collaborative frameworks within multinational corporations, identifying strategies for optimizing value chains through partnerships with NGOs, civil society, and governments.",
    role1Bullet4: "<strong>International Conferences:</strong> Presented research findings at international scientific conferences, contributing significantly to discussions on MNC business models and shared value creation.",

    role2Badge: "Fast-Moving Consumer Goods (FMCG)",
    role2Period: "September 2017 — December 2018 (1 year 4 months)",
    role2Title: "Key Account Executive (Wholesale Channel)",
    role2Company: "Mondelēz International",
    role2Location: "📍 Mérida, Yucatán, Mexico",
    role2Summary: "Led strategic planning and relationship management for two key clients in South Mexico's wholesale channel, using insights into market dynamics, consumer preferences, and competitive trends to fuel significant business growth.",
    role2Bullet1: "<strong>Consistent Quota Surpassing:</strong> Consistently exceeded sales targets by increasing sell-in and sell-out by <strong>10%</strong>, surpassing quota in 10 out of 12 months.",
    role2Bullet2: "<strong>Key Stakeholder Management:</strong> Built and nurtured strong relationships with key stakeholders, gaining critical insights that enriched strategic decision-making processes.",
    role2Bullet3: "<strong>Portfolio Innovation:</strong> Championed the introduction of <strong>12+ innovative products</strong> annually, tailoring the portfolio to evolving market demands.",
    role2Bullet4: "<strong>Compelling Business Cases:</strong> Created persuasive business cases for executive solutions, winning client trust and ensuring successful adoption and enhanced sales performance.",

    role3Badge: "Industrial B2B",
    role3Period: "September 2016 — January 2017 (5 months)",
    role3Title: "Sales Manager (South of Mexico & Central America)",
    role3Company: "MegaEmpack (Bepensa Industrial)",
    role3Location: "📍 Mérida, Yucatán, Mexico",
    role3Summary: "Headed business development across diverse territories, crafting and executing innovative growth strategies that responded to regional market trends.",
    role3Bullet1: "<strong>Sales Growth (+20%):</strong> Achieved a noteworthy <strong>20% sales growth</strong> by implementing strategies grounded in detailed market data and analytics.",
    role3Bullet2: "<strong>Account Recovery & Expansion:</strong> Leveraged customer insights to recover key clients and establish new SME client relationships, driving significant revenue enhancement.",
    role3Bullet3: "<strong>Cross-Functional Leadership:</strong> Demonstrated strong collaboration skills across departments to deliver client technical requests and solve business challenges.",

    role4Badge: "Retail & Supermarkets",
    role4Period: "November 2010 — August 2015 (4 years 10 months)",
    role4Title: "Key Account Executive (Retail / Supermarkets)",
    role4Company: "Grupo Bimbo",
    role4Location: "📍 Mexico City, Mexico",
    role4Summary: "Managed the portfolios of two principal retail chains in Mexico, implementing forward-thinking commercial strategies that resulted in remarkable revenue and profit surges.",
    role4Bullet1: "<strong>Consistent Annual Growth (+12%):</strong> Pioneered key initiatives that drove a consistent annual growth rate of approximately <strong>12%</strong> per retailer via distribution optimization, promotional campaigns, and space enhancement.",
    role4Bullet2: "<strong>Promotional ROI Optimization:</strong> Managed promotional budgets with an emphasis on maximizing ROI, employing data-driven insights to ensure campaigns were profitable.",
    role4Bullet3: "<strong>Joint Business Plans (JBP) & Cross-Docking:</strong> Crafted annual JBPs rooted in market foresight, negotiated commercial discounts, and introduced cross-docking logistics to reduce costs.",
    role4Bullet4: "<strong>DSO & Cross-Functional Alignment:</strong> Maintained strict DSO compliance with finance and coordinated with interdisciplinary teams for tailored product adaptations.",

    // Publications
    pubsTag: "Scientific Production",
    pubsTitle: "Research & Publications",
    pubsDesc: "Academic contributions in shared value models, comparative methodologies, and sustainability in emerging markets.",
    
    pubType1: "Peer-Reviewed Journal Article (Scopus / Q1)",
    pubType2: "Book Chapter (Routledge Publishing)",
    pubType3: "Book Chapter (Vuibert / Atlas AFMI Publishing)",
    pubType4: "Doctoral Dissertation (Université Jean Moulin Lyon 3)",
    
    pub1Summary: "Empirical research examining the strategic actions and tactics deployed by multinational corporations (MNCs) to innovate their business models and drive social value creation in Base of the Pyramid (BoP) contexts.",
    pub2Summary: "Rigorous comparative analysis applying Morse's methodology to delineate conceptual, methodological, and operational boundaries across BVP, TBL, CSV, and BoP frameworks in international business.",
    pub3Summary: "Key academic contribution examining the interplay between corporate social responsibility, shared value creation, and business model innovation for internationalized firms.",
    pub4Summary: "Doctoral dissertation in management sciences analyzing internal strategic alignment and external collaborative networks of multinational enterprises for sustainable shared value creation.",

    btnCopyBibtex: "Copy Citation (BibTeX)",
    copiedText: "Copied!",
    btnViewArticle: "View Publication (Emerald)",
    btnViewChapterRoutledge: "View Chapter (Routledge)",
    btnViewBookRoutledge: "View Book (Routledge)",
    btnViewBookVuibert: "View Book (Vuibert)",
    btnViewRg: "View on ResearchGate",
    btnViewThesis: "View on Theses.fr",

    // Skills
    skillsTag: "Competencies",
    skillsTitle: "Areas of Expertise",
    skillsDesc: "Consolidated strategic, analytical, software, and commercial capabilities.",
    
    skillCat1Title: "Sustainability & Governance (ESG)",
    skillCat1_1: "Environmental, Social & Governance (ESG)",
    skillCat1_2: "Sustainable Development Goals (SDGs)",
    skillCat1_3: "Sustainable & Hybrid Business Models",
    skillCat1_4: "Base of the Pyramid (BoP) & Shared Value",
    skillCat1_5: "Triple Bottom Line (TBL)",
    skillCat1_6: "Stakeholder Engagement & Management",
    skillCat1_7: "Sustainable Innovation Thinking",

    skillCat2Title: "Strategy & Commercial Leadership",
    skillCat2_1: "Corporate Strategic Planning",
    skillCat2_2: "Key Account Management (Wholesale / Retail)",
    skillCat2_3: "Sell-in & Sell-out Growth",
    skillCat2_4: "Executive Business Case Development",
    skillCat2_5: "Commercial Terms Negotiation & DSO Control",
    skillCat2_6: "New Business Development & B2B Sales",
    skillCat2_7: "Budgeting & Promotional ROI Optimization",

    skillCat3Title: "Research & Analytical Methods",
    skillCat3_1: "Agile Market Research",
    skillCat3_2: "Qualitative Analysis & Morse's Methodology",
    skillCat3_3: "Supply Chain & Value Network Mapping",
    skillCat3_4: "Public Accounting, Costing & Financial Analysis",
    skillCat3_5: "Foresight Techniques & Trend Analysis",
    skillCat3_6: "International Scientific Conference Dissemination",
    skillCat3_7: "Data-Driven Decision Making",

    skillCat4Title: "Software & Specialized Platforms",
    skillCat4_1: "Power BI & Data Visualization",
    skillCat4_2: "NVivo (Qualitative Analysis)",
    skillCat4_3: "SPSS & SAS Viya (Statistical Analytics)",
    skillCat4_4: "Salesforce CRM",
    skillCat4_5: "Nielsen Analytics & ISCAM (FMCG Insights)",
    skillCat4_6: "EBSCOhost & MarketLine",
    skillCat4_7: "Advanced Microsoft Office Suite",

    // Education
    eduTag: "Credentials",
    eduTitle: "Academic Background & Honors",
    eduDesc: "Multicultural high-level academic background and executive certifications.",
    honorText: "Graduated with Honors ⭐",
    
    eduPhdTitle: "PhD in Management (Strategy & Sustainability)",
    eduPhdInst: "Université Jean Moulin Lyon 3 (France)",
    eduPhdFocus: "Doctoral research on sustainable business models, social value creation in BoP contexts, and MNC collaborative frameworks. Magellan Research Center.",

    eduMscTitle: "Master in Global Marketing & Negotiation",
    eduMscInst: "Burgundy School of Business (France)",
    eduMscFocus: "International commercial negotiation, global market dynamics, and strategic marketing.",

    eduMasterTitle: "Master in Marketing Management",
    eduMasterInst: "Universidad Autónoma de Yucatán (Mexico)",
    eduMasterFocus: "Strategic commercial management, consumer behavior, and distribution channel development.",

    eduUnamTitle: "Executive Diploma in Business Administration & Management",
    eduUnamInst: "Universidad Nacional Autónoma de México (UNAM)",
    eduUnamFocus: "Comprehensive corporate administration, managerial finance, and executive leadership.",

    eduBachelorTitle: "Bachelor of Accountancy",
    eduBachelorInst: "Universidad Autónoma de Yucatán (Mexico)",
    eduBachelorFocus: "Rigorous foundations in corporate finance, managerial cost accounting, budgeting, and auditing.",

    langTitle: "🌐 Languages",
    langEs: "<strong>Spanish:</strong> Native Proficiency",
    langEn: "<strong>English:</strong> Advanced / Full Professional (TOEIC 915)",
    langFr: "<strong>French:</strong> Advanced / Professional Working",
    certTitle: "📜 Specialization",
    cert1: "Strategy and Sustainability",

    // Contact
    contactTag: "Contact & Collaboration",
    contactHeading: "Let's connect to create sustainable value and impact",
    contactSub: "Available for strategic advisory, executive consulting, ESG business model design, keynotes, and high-impact corporate initiatives.",
    contactBtnEmail: "Send Message",
    contactBtnCv: "Download Full CV",
    contactCopyBtn: "Copy",
    contactCopied: "Copied!",

    // Footer
    footerCopy: "All rights reserved.",
    footerTagline: "Strategy, Sustainability & Business Model Innovation."
  }
};
