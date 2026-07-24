import Image from "next/image";
import Link from "next/link";
import styles from "./ItContent.module.css";

const archiveContent = {
  en: {
    home: "Home",
    contact: "Contact",
    navigationLabel: "I.T. navigation",
    identity: {
      name: "Otto ZHANG",
      role: "Software Engineer",
      birth: "04/1995"
    },
    personality: {
      title: "Personality",
      items: [
        "Motivated and active",
        "Bicultural, nine years in France",
        "Solid base in data structures and algorithms",
        "Passion for AI, IoT and Blockchain",
        "Good capacity for teamwork and leadership"
      ]
    },
    languages: {
      title: "Language",
      items: ["English (C1)", "French (B1)", "Chinese (native)"]
    },
    hobbies: {
      title: "Hobbies",
      items: ["Basketball / Volleyball", "Drums", "Photography", "Skiing / Surfing"]
    },
    sections: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      education: "Education"
    },
    projects: [
      {
        heading: "MYCOTYROOM, OUT SCHOOL PROJECT, 2019/08 - 2019/10",
        rows: [
          ["Client", "COTY INC."],
          ["Content", "Mobile application showing the products of COTY."],
          ["My mission", "Working on the frontend, showing products, configuring search and filter functionality, and making 3D models for products."]
        ]
      },
      {
        heading: "TRAVEL ASSISTANT, OUT SCHOOL PROJECT, 2019/01 - 2019/07",
        rows: [
          ["Client", "Chinese travellers in Paris"],
          ["Content", "Mobile application able to recognise landmarks, display information and plan routes."],
          ["My mission", "Project design and modelling, API development, Google Cloud recognition, path-planning algorithms and Logstash data preparation."]
        ]
      }
    ],
    experience: [
      {
        heading: "VIANOVA.IO 09/2020 - 01/2025",
        role: "Backend & Data Engineer",
        copy: "I managed end-to-end data processes, enabling a seamless flow of information and supporting data-driven decisions across the organisation. My role included designing, building and maintaining robust ETL pipelines to ensure data accuracy and availability at every stage.",
        responsibilityTitle: "Key responsibilities:",
        responsibilities: [
          "ETL pipeline management",
          "Data and integration tooling",
          "Collaboration with data scientists",
          "Performance optimisation",
          "Mentoring"
        ],
        stack: ["Python", "Snowflake", "AWS", "ETL", "PostgreSQL", "DBT", "Pulumi"]
      },
      {
        heading: "UBISOFT 03/2019 - 08/2019",
        role: "Web development assistant",
        copy: "Developed Rocket, a project management tool that extracts data from databases and generates charts to help managers analyse projects and make decisions. I worked on data extraction and the design and development of charts according to user stories.",
        stack: ["JavaScript", "ETL (Kettle)", "Jenkins", "MSSQL"]
      },
      {
        heading: "SERAPHIN STUDIO 10/2017 - 01/2018",
        role: "Full Stack developer",
        copy: "Designed and developed company projects, including the main website, internal tools, SmartClause for contract signing and CaseIP for case searching.",
        stack: ["C# (.NET)", "Python (Flask)", "ElasticSearch", "MongoDB"]
      }
    ],
    skills: {
      backend: "Backend",
      methods: "Method & Tech",
      frontend: "Frontend",
      database: "Database",
      linux: "Linux",
      frontendIntro: "HTML5, iOS, Android, WeChat Mini Program",
      linuxCopy: "Shell, SSH, IPTables, DNS, OpenSSL, Samba, user management, Apache, Nginx, VPN, ELK..."
    },
    education: [
      ["Ecole Pour l’Informatique et les Techniques Avancées (EPITA)", "Master of Engineering, 09/2015 - 10/2019"],
      ["University of Shanghai for Science and Technology (USST)", "Computer Science, 09/2013 - 06/2015"]
    ]
  },
  fr: {
    home: "Accueil",
    contact: "Contact",
    navigationLabel: "Navigation I.T.",
    identity: {
      name: "Otto ZHANG",
      role: "Ingénieur informatique",
      birth: "04/1995"
    },
    personality: {
      title: "Personnalité",
      items: [
        "Motivé et actif",
        "Biculturel, neuf ans en France",
        "Base solide en structures de données et algorithmique",
        "Passionné par l’IA, l’IoT et la blockchain",
        "Bonne capacité de travail en équipe et de leadership"
      ]
    },
    languages: {
      title: "Langues",
      items: ["Anglais (C1)", "Français (B1)", "Chinois (langue maternelle)"]
    },
    hobbies: {
      title: "Loisirs",
      items: ["Basketball / Volleyball", "Batterie", "Photographie", "Ski / Surf"]
    },
    sections: {
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      education: "Éducation"
    },
    projects: [
      {
        heading: "MYCOTYROOM, PROJET HORS ÉCOLE, 08/2019 - 10/2019",
        rows: [
          ["Client", "COTY INC."],
          ["Contenu", "Application mobile présentant les produits de COTY."],
          ["Ma mission", "Développement front-end, présentation des produits, configuration de la recherche et des filtres, et création de modèles 3D pour les produits."]
        ]
      },
      {
        heading: "TRAVEL ASSISTANT, PROJET HORS ÉCOLE, 01/2019 - 07/2019",
        rows: [
          ["Client", "Voyageurs chinois à Paris"],
          ["Contenu", "Application mobile capable de reconnaître des monuments, d’afficher des informations et de planifier des itinéraires."],
          ["Ma mission", "Conception et modélisation du projet, développement de l’API, reconnaissance avec Google Cloud, algorithmes de planification d’itinéraires et préparation des données pour Logstash."]
        ]
      }
    ],
    experience: [
      {
        heading: "VIANOVA.IO 09/2020 - 01/2025",
        role: "Backend & Data Engineer",
        copy: "J’ai géré des processus de données de bout en bout afin d’assurer une circulation fluide de l’information et de faciliter les décisions fondées sur les données. Mon rôle comprenait la conception, la construction et la maintenance de pipelines ETL robustes, garantissant l’exactitude et la disponibilité des données à chaque étape.",
        responsibilityTitle: "Principales responsabilités :",
        responsibilities: [
          "Gestion des pipelines ETL",
          "Outils de données et d’intégration",
          "Collaboration avec les data scientists",
          "Optimisation des performances",
          "Mentorat"
        ],
        stack: ["Python", "Snowflake", "AWS", "ETL", "PostgreSQL", "DBT", "Pulumi"]
      },
      {
        heading: "UBISOFT 03/2019 - 08/2019",
        role: "Assistant développement web",
        copy: "Développement de Rocket, un outil de gestion de projet qui extrait des données et génère des graphiques afin d’aider les responsables à analyser les projets et à prendre des décisions. J’étais chargé de l’extraction des données ainsi que de la conception et du développement des graphiques selon les user stories.",
        stack: ["JavaScript", "ETL (Kettle)", "Jenkins", "MSSQL"]
      },
      {
        heading: "SERAPHIN STUDIO 10/2017 - 01/2018",
        role: "Développeur Full Stack",
        copy: "Conception et développement de projets, dont le site principal de l’entreprise, des outils internes, SmartClause pour la signature de contrats et CaseIP pour la recherche de dossiers.",
        stack: ["C# (.NET)", "Python (Flask)", "ElasticSearch", "MongoDB"]
      }
    ],
    skills: {
      backend: "Back-end",
      methods: "Méthode & Tech",
      frontend: "Front-end",
      database: "Données",
      linux: "Autres",
      frontendIntro: "HTML5, iOS, Android, WeChat Mini Program",
      linuxCopy: "AWS, Pulumi, Docker, GitLab CI, GitHub Actions, Shell, SSH, Linux, Apache, Nginx, VPN, ELK..."
    },
    education: [
      ["École Pour l’Informatique et les Techniques Avancées (EPITA)", "Master d’ingénierie, 09/2015 - 10/2019"],
      ["University of Shanghai for Science and Technology (USST)", "Informatique, 09/2013 - 06/2015"]
    ]
  }
};

function SidebarSection({ title, children, className = "" }) {
  return (
    <section className={`${styles.sidebarSection} ${className}`}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default function ItContent({ locale = "en" }) {
  const content = archiveContent[locale] ?? archiveContent.en;
  const archiveHome = locale === "fr" ? "/fr/it" : "/it";

  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <p className={styles.brand}>I.T. | OTTO&apos;s World</p>
          <nav className={styles.navigation} aria-label={content.navigationLabel}>
            <div className={styles.localeSwitch} aria-label={locale === "fr" ? "Langue" : "Language"}>
              <Link className={locale === "en" ? styles.activeLocale : ""} href="/it" hrefLang="en">EN</Link>
              <span aria-hidden="true">/</span>
              <Link className={locale === "fr" ? styles.activeLocale : ""} href="/fr/it" hrefLang="fr">FR</Link>
            </div>
            <Link href={archiveHome}>{content.home}</Link>
            <a className={styles.contactButton} href="mailto:ottozhangdev@gmail.com">
              {content.contact}
            </a>
          </nav>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <Image
            className={styles.portrait}
            src="/static/img/it/photo.jpg"
            alt={locale === "fr" ? `Portrait de ${content.identity.name}` : `Portrait of ${content.identity.name}`}
            width={637}
            height={637}
            priority
          />

          <section className={`${styles.sidebarSection} ${styles.identity}`}>
            <h1>{content.identity.name}</h1>
            <p>{content.identity.role}</p>
            <span>{content.identity.birth}</span>
          </section>

          <SidebarSection title={content.personality.title} className={styles.personality}>
            <ul>
              {content.personality.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </SidebarSection>

          <SidebarSection title={content.languages.title}>
            {content.languages.items.map((item) => <p key={item}>{item}</p>)}
          </SidebarSection>

          <SidebarSection title={content.hobbies.title}>
            {content.hobbies.items.map((item) => <p key={item}>{item}</p>)}
          </SidebarSection>
        </aside>

        <main className={styles.main}>
          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}><h2>{content.sections.projects}</h2></header>
            {content.projects.map((project) => (
              <article className={styles.entry} key={project.heading}>
                <p className={styles.subheader}>{project.heading}</p>
                {project.rows.map(([label, value]) => (
                  <p key={label}><strong>{label}:</strong> {value}</p>
                ))}
              </article>
            ))}
          </section>

          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}><h2>{content.sections.experience}</h2></header>
            {content.experience.map((item) => (
              <article className={styles.entry} key={item.heading}>
                <h3>{item.heading}</h3>
                <p className={styles.subheader}>{item.role}</p>
                <div className={styles.entryColumns}>
                  <div>
                    <p>{item.copy}</p>
                    {item.responsibilities ? (
                      <>
                        <p className={styles.responsibilityTitle}>{item.responsibilityTitle}</p>
                        <ul className={styles.responsibilities}>
                          {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                        </ul>
                      </>
                    ) : null}
                  </div>
                  <div className={styles.technologyList}>
                    {item.stack.map((technology) => <p key={technology}>{technology}</p>)}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}><h2>{content.sections.skills}</h2></header>
            <div className={styles.skillsRow}>
              <article className={styles.skillGroup}>
                <h3>{content.skills.backend}</h3>
                <div className={styles.skillColumns}>
                  <div><p>C/C++</p><p>C#</p><p>Java</p><p>Python</p><p>JavaScript</p></div>
                  <div className={styles.technologyList}><p>&nbsp;</p><p>.NET, Entity</p><p>J2EE, Hibernate, JUnit</p><p>Flask, Django, Scrapy, TensorFlow</p><p>Node.js, Express</p></div>
                </div>
              </article>
              <article className={styles.methods}>
                <h3>{content.skills.methods}</h3>
                <div className={styles.methodGrid}>
                  <div><Image src="/static/img/it/agile.png" alt="Agile" width={142} height={142} /><p>Agile</p></div>
                  <div><Image src="/static/img/it/elk.png" alt="ETL" width={512} height={512} /><p>ETL</p></div>
                </div>
              </article>
            </div>
            <div className={styles.skillsRow}>
              <article className={styles.skillGroup}>
                <h3>{content.skills.frontend}</h3>
                <p>{content.skills.frontendIntro}</p>
                <div className={styles.skillColumns}>
                  <div><p>CSS</p><p>JavaScript</p></div>
                  <div className={styles.technologyList}><p>Bootstrap</p><p>jQuery, Node.js, TypeScript, React</p></div>
                </div>
              </article>
              <article className={styles.methods}>
                <h3>{content.skills.database}</h3>
                <p>— PostgreSQL</p><p>— Snowflake</p><p>— MongoDB</p><p>— DBT</p>
              </article>
            </div>
            <article className={`${styles.entry} ${styles.linux}`}>
              <h3>{content.skills.linux}</h3>
              <p>{content.skills.linuxCopy}</p>
            </article>
          </section>

          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}><h2>{content.sections.education}</h2></header>
            {content.education.map(([school, degree]) => (
              <article className={styles.entry} key={school}>
                <p className={styles.subheader}>{school}</p>
                <p>{degree}</p>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
