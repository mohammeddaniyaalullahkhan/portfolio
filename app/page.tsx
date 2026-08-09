const skills = [
  ["Cloud", "AWS · Azure · GCP", "EC2, S3, IAM, VPC, CloudWatch, RDS, Lambda, API Gateway"],
  ["Delivery", "CI/CD & Automation", "Jenkins, GitHub, GitLab CI/CD, Maven, Gradle, Bash, Python"],
  ["Platforms", "Containers & Linux", "Docker, Kubernetes, OpenShift, Linux, Unix, Nginx, Tomcat"],
  ["Observability", "Monitoring & Operations", "Prometheus, Grafana, Splunk, runbooks, incident reporting"],
];

const projects = [
  {
    index: "01",
    title: "Resume Screening Pipeline",
    label: "Python · PDF/DOCX · Automation",
    text: "Built a Python pipeline that processes PDF and DOCX resumes and applies keyword-based filtering to streamline recruitment workflows.",
  },
  {
    index: "02",
    title: "AI Code Reviewer",
    label: "Python · Generative AI",
    text: "Developed an application that analyzes code and generates actionable, intelligent feedback to support faster review cycles.",
  },
  {
    index: "03",
    title: "RAG Search System",
    label: "LangChain · Gemini 2.0 Pro · RAG",
    text: "Implemented retrieval-augmented generation for video subtitles, improving information discovery and contextual search relevance.",
  },
  {
    index: "04",
    title: "Real-time Multi-agent System",
    label: "LangGraph · APIs · Python",
    text: "Designed a multi-agent workflow that coordinates external APIs to answer real-time information queries reliably.",
  },
];

const nav = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Home">
          <span>DK</span><i />
        </a>
        <nav aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="button button-small" href="/Daniyaalullah_Khan_ATS_DevOps_Resume.docx" download>
          Resume <span>↓</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Available for opportunities</p>
          <h1>I build reliable<br /><em>cloud systems.</em></h1>
          <p className="hero-text">
            I&apos;m <strong>Daniyaalullah Khan Mohammed</strong>, a Cloud &amp; DevOps Associate Engineer focused on dependable CI/CD, production operations, automation, and observability.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">Explore my work <span>↘</span></a>
            <a className="text-link" href="mailto:mohammeddaniyaalullahkhan@gmail.com">Let&apos;s connect <span>→</span></a>
          </div>
        </div>
        <div className="terminal" aria-label="DevOps profile summary">
          <div className="terminal-bar"><span /><span /><span /><b>profile.yaml</b></div>
          <pre><code><span className="muted"># Engineer configuration</span>{`\n`}name: <b>Daniyaalullah Khan</b>{`\n`}role: <b>Cloud / DevOps Engineer</b>{`\n`}location: <b>Hyderabad, India</b>{`\n\n`}focus:{`\n`}  - <b>CI/CD automation</b>{`\n`}  - <b>Cloud infrastructure</b>{`\n`}  - <b>Production reliability</b>{`\n`}  - <b>Observability</b>{`\n\n`}status: <span className="green">● building &amp; learning</span></code></pre>
        </div>
      </section>

      <section className="metrics" aria-label="Highlights">
        <div><strong>24/7</strong><span>Production support mindset</span></div>
        <div><strong>3</strong><span>Major cloud platforms</span></div>
        <div><strong>50+</strong><span>Python challenges solved</span></div>
        <div><strong>5★</strong><span>HackerRank Python badge</span></div>
      </section>

      <section className="section split" id="about">
        <div><p className="section-no">01 / ABOUT</p><h2>Engineering for<br /><em>calm operations.</em></h2></div>
        <div className="about-copy">
          <p>I support delivery pipelines and production systems with a simple goal: make releases predictable, incidents understandable, and operations repeatable.</p>
          <p>At Wipro, I work across CI/CD monitoring, deployment validation, configuration checks, log analysis, incident reporting, and troubleshooting—while following security policies, SOPs, and SLA commitments.</p>
          <div className="principles"><span>Automate deliberately</span><span>Observe everything</span><span>Document clearly</span></div>
        </div>
      </section>

      <section className="section" id="skills">
        <p className="section-no">02 / CAPABILITIES</p>
        <div className="section-title-row"><h2>Tools for the full<br /><em>delivery lifecycle.</em></h2><p>From source control to production signals, I work across the systems that keep software moving.</p></div>
        <div className="skill-grid">
          {skills.map(([type, title, detail], index) => (
            <article className="skill-card" key={type}>
              <span>0{index + 1}</span><p>{type}</p><h3>{title}</h3><div className="rule" /><small>{detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <p className="section-no">03 / EXPERIENCE</p>
        <div className="experience-grid">
          <div><p className="date">APR 2025 — PRESENT</p><h2>Associate Engineer</h2><h3>Wipro Limited · Hyderabad</h3></div>
          <ul>
            <li>Monitor and maintain CI/CD pipelines for reliable, policy-aligned deployments.</li>
            <li>Apply operational controls, SOPs, automation checklists, and DevOps best practices.</li>
            <li>Troubleshoot infrastructure and deployment issues in a 24/7 production environment.</li>
            <li>Perform configuration checks, log monitoring, deployment validation, and incident reporting.</li>
          </ul>
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-no">04 / SELECTED PROJECTS</p>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.index}>
              <span className="project-no">{project.index}</span>
              <div><p>{project.label}</p><h3>{project.title}</h3></div>
              <p className="project-text">{project.text}</p><span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section achievements">
        <p className="section-no">05 / RECOGNITION</p>
        <div className="achievement-grid">
          <article><b>01</b><h3>Hackathon Winner</h3><p>First prize, Software Stream · 2024</p></article>
          <article><b>02</b><h3>GDSC Coordinator</h3><p>Technical sessions, workshops &amp; showcases</p></article>
          <article><b>03</b><h3>National Quiz Champion</h3><p>Perfect score in national-level quizzes · 2021</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-no">06 / CONTACT</p><h2>Let&apos;s ship something<br /><em>reliable.</em></h2>
        <p>I&apos;m open to Cloud, DevOps, Platform Support, and Junior SRE opportunities.</p>
        <div className="contact-actions"><a className="button button-light" href="mailto:mohammeddaniyaalullahkhan@gmail.com">Start a conversation <span>↗</span></a><a href="https://github.com/mohammeddaniyaalullahkhan" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/Daniyaalullah_Khan_ATS_DevOps_Resume.docx" download>Resume ↓</a></div>
      </section>

      <footer><a className="brand" href="#top"><span>DK</span><i /></a><p>Designed for reliable delivery.</p><p>© {new Date().getFullYear()} Daniyaalullah Khan Mohammed</p></footer>
    </main>
  );
}
