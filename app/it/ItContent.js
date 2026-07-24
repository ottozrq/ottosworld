import Image from "next/image";
import Link from "next/link";
import styles from "./ItContent.module.css";

function SidebarSection({ title, children, className = "" }) {
  return (
    <section className={`${styles.sidebarSection} ${className}`}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default function ItContent() {
  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <p className={styles.brand}>I.T. | OTTO&apos;s World</p>
          <nav className={styles.navigation} aria-label="I.T. navigation">
            <Link href="/it">Home</Link>
            <a className={styles.contactButton} href="mailto:ottozhangdev@gmail.com">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <Image
            className={styles.portrait}
            src="/static/img/it/photo.jpg"
            alt="Portrait of Otto Zhang"
            width={637}
            height={637}
            priority
          />

          <section className={`${styles.sidebarSection} ${styles.identity}`}>
            <h1>Otto ZHANG</h1>
            <p>Software Engineer</p>
            <span>04/1995</span>
          </section>

          <SidebarSection title="Personality" className={styles.personality}>
            <ul>
              <li>Motivated and active</li>
              <li>Bicultural, 4 years in France</li>
              <li>Solid base of data structure and algorithm</li>
              <li>Passion for AI, IoT and Blockchain</li>
              <li>Good capacity for group work and leadership</li>
            </ul>
          </SidebarSection>

          <SidebarSection title="Language">
            <p>English (C1)</p>
            <p>French (B1)</p>
            <p>Chinese</p>
          </SidebarSection>

          <SidebarSection title="Hobbies">
            <p>Basketball</p>
            <p>Drum</p>
            <p>Photography</p>
          </SidebarSection>
        </aside>

        <main className={styles.main}>
          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}>
              <h2>Projects</h2>
            </header>
            <article className={styles.entry}>
              <p className={styles.subheader}>MYCOTYROOM, OUT SCHOOL PROJECT, 2019/08 - 2019/10</p>
              <p><strong>Client:</strong> COTY INC.</p>
              <p><strong>Content:</strong> Mobile application showing the products of COTY.</p>
              <p><strong>My mission:</strong> Working on the frontend, showing products, configuring search and filter functionality, and making 3D models for products.</p>
            </article>
            <article className={styles.entry}>
              <p className={styles.subheader}>TRAVEL ASSISTANT, OUT SCHOOL PROJECT, 2019/01 - 2019/07</p>
              <p><strong>Client:</strong> Chinese travellers in Paris</p>
              <p><strong>Content:</strong> Mobile application able to recognise landmarks, display information and plan routes.</p>
              <p><strong>My mission:</strong> Project design and modelling, API development, Google Cloud recognition, path-planning algorithms and Logstash data preparation.</p>
            </article>
          </section>

          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}>
              <h2>Experience</h2>
            </header>
            <article className={styles.entry}>
              <h3>VIANOVA.IO 09/2020 - 01/2025</h3>
              <p className={styles.subheader}>Backend &amp; Data Engineer</p>
              <div className={styles.entryColumns}>
                <div>
                  <p>I manage end-to-end data processes, enabling a seamless flow of information and supporting data-driven decisions across the organisation. My role includes designing, building and maintaining robust ETL pipelines to ensure data accuracy and availability at every stage.</p>
                  <p className={styles.responsibilityTitle}>Key responsibilities:</p>
                  <ul className={styles.responsibilities}>
                    <li>ETL pipeline management</li>
                    <li>Data and integration tooling</li>
                    <li>Collaboration with data scientists</li>
                    <li>Performance optimisation</li>
                    <li>Mentoring</li>
                  </ul>
                </div>
                <div className={styles.technologyList}>
                  <p>Python</p>
                  <p>Snowflake</p>
                  <p>AWS</p>
                  <p>ETL</p>
                  <p>PostgreSQL</p>
                  <p>DBT</p>
                  <p>Pulumi</p>
                </div>
              </div>
            </article>
            <article className={styles.entry}>
              <h3>UBISOFT 03/2019 - 08/2019</h3>
              <p className={styles.subheader}>Web development assistant</p>
              <div className={styles.entryColumns}>
                <p>Developed Rocket, a project management tool that extracts data from databases and generates charts to help managers analyse projects and make decisions. I worked on data extraction and the design and development of charts according to user stories.</p>
                <div className={styles.technologyList}>
                  <p>JavaScript</p>
                  <p>ETL (Kettle)</p>
                  <p>Jenkins</p>
                  <p>MSSQL</p>
                </div>
              </div>
            </article>
            <article className={styles.entry}>
              <h3>SERAPHIN STUDIO 10/2017 - 01/2018</h3>
              <p className={styles.subheader}>Full Stack developer</p>
              <div className={styles.entryColumns}>
                <p>Designed and developed company projects, including the main website, internal tools, SmartClause for contract signing and CaseIP for case searching.</p>
                <div className={styles.technologyList}>
                  <p>C# (.NET)</p>
                  <p>Python (Flask)</p>
                  <p>ElasticSearch</p>
                  <p>MongoDB</p>
                </div>
              </div>
            </article>
          </section>

          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}>
              <h2>Skills</h2>
            </header>
            <div className={styles.skillsRow}>
              <article className={styles.skillGroup}>
                <h3>Backend</h3>
                <div className={styles.skillColumns}>
                  <div>
                    <p>C/C++</p>
                    <p>C#</p>
                    <p>Java</p>
                    <p>Python</p>
                    <p>JavaScript</p>
                  </div>
                  <div className={styles.technologyList}>
                    <p>&nbsp;</p>
                    <p>.NET, Entity</p>
                    <p>J2EE, Hibernate, JUnit</p>
                    <p>Flask, Django, Scrapy, TensorFlow</p>
                    <p>Node.js, Express</p>
                  </div>
                </div>
              </article>
              <article className={styles.methods}>
                <h3>Method &amp; Tech</h3>
                <div className={styles.methodGrid}>
                  <div>
                    <Image src="/static/img/it/agile.png" alt="Agile" width={142} height={142} />
                    <p>Agile</p>
                  </div>
                  <div>
                    <Image src="/static/img/it/elk.png" alt="ETL" width={512} height={512} />
                    <p>ETL</p>
                  </div>
                </div>
              </article>
            </div>
            <div className={styles.skillsRow}>
              <article className={styles.skillGroup}>
                <h3>Frontend</h3>
                <p>HTML5, iOS, Android, WeChat Mini Program</p>
                <div className={styles.skillColumns}>
                  <div>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
                  <div className={styles.technologyList}>
                    <p>Bootstrap</p>
                    <p>jQuery, Node.js, TypeScript, React</p>
                  </div>
                </div>
              </article>
              <article className={styles.methods}>
                <h3>Database</h3>
                <p>— MySQL</p>
                <p>— MSSQL</p>
                <p>— MongoDB</p>
                <p>— PostgreSQL</p>
              </article>
            </div>
            <article className={`${styles.entry} ${styles.linux}`}>
              <h3>Linux</h3>
              <p>Shell, SSH, IPTables, DNS, OpenSSL, Samba, user management, Apache, Nginx, VPN, ELK...</p>
            </article>
          </section>

          <section className={styles.resumeSection}>
            <header className={styles.sectionHeader}>
              <h2>Education</h2>
            </header>
            <article className={styles.entry}>
              <p className={styles.subheader}>Ecole Pour l&apos;Informatique et les Techniques Avancées <strong>(EPITA)</strong></p>
              <p>Master of Engineering, 09/2015 - 10/2019</p>
            </article>
            <article className={styles.entry}>
              <p className={styles.subheader}>University of Shanghai for Science and Technology (USST)</p>
              <p>Computer Science, 09/2013 - 06/2015</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
