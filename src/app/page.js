"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Mail, ExternalLink, Phone, MapPin, Send, Code, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaServer, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiScikitlearn, SiVercel, SiPostman, SiMysql } from "react-icons/si";
import { ReactTyped } from "react-typed";
import styles from "./page.module.css";

// Helper function for skill icons
const getSkillIcon = (name) => {
  switch(name) {
    case 'HTML5': return <FaHtml5 size={50} />;
    case 'CSS3': return <FaCss3Alt size={50} />;
    case 'JavaScript': return <FaJs size={50} />;
    case 'Java': return <FaJava size={50} />;
    case 'React.js': return <FaReact size={50} />;
    case 'Node.js': return <FaNodeJs size={50} />;
    case 'Express.js': return <SiExpress size={50} />;
    case 'MongoDB': return <SiMongodb size={50} />;
    case 'SQL': return <FaDatabase size={50} />;
    case 'Tailwind CSS': return <SiTailwindcss size={50} />;
    case 'Git': return <FaGitAlt size={50} />;
    case 'GitHub': return <FaGithub size={50} />;
    case 'Python': return <FaPython size={50} />;
    case 'Scikit-learn': return <SiScikitlearn size={50} />;
    case 'REST APIs': return <FaServer size={50} />;
    case 'REST API': return <FaServer size={50} />;
    case 'Vercel': return <SiVercel size={50} />;
    case 'Postman': return <SiPostman size={50} />;
    case 'MySQL': return <SiMysql size={50} />;
    case 'DSA': return <FaCode size={50} />;
    default: return <FaCode size={50} />;
  }
};

export default function Home() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok) {
        setFormState({ status: "success", message: result.message });
        e.target.reset();
      } else {
        setFormState({ status: "error", message: result.error });
      }
    } catch (err) {
      setFormState({ status: "error", message: "Something went wrong." });
    }
  };

  if (!data) return <div className={styles.hero}>Loading portfolio...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.blobBg}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a href="#home" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
            <span className="gradient-text" style={{ fontSize: "2.2rem", fontWeight: "900", letterSpacing: "-1px" }}>AK.</span>
          </a>
        </motion.div>
        
        <button className={styles.mobileMenuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <a href="#about" className={styles.navLink} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className={styles.navLink} onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className={styles.navLink} onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" className={styles.navLink} onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" className={styles.navLink} onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contact</a>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className={styles.hero}>
          <div className={styles.heroGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroContent}
            >
              <h3 className={styles.heroGreeting}>Hello! I'm</h3>
              <h1 className={styles.title}>{data.personal.name} 👋</h1>
              <h3 className={styles.subtitle}>
                and I'm a <ReactTyped
                  strings={data.personal.roles}
                  typeSpeed={60}
                  backSpeed={50}
                  loop
                  className={styles.typedText}
                />
              </h3>
              
              <p className={styles.heroDesc}>
                {data.personal.tagline} Focused on simplicity, speed, and user experience.
              </p>
              
              <div className={styles.heroActions}>
                <a href={data.personal.socials.linkedin} target="_blank" rel="noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
                <a href={data.personal.socials.github} target="_blank" rel="noreferrer" className={styles.socialIcon}><FaGithub /></a>
                <a href={`mailto:${data.personal.email}`} className={styles.socialIcon}><Mail /></a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroImageWrapper}
            >
              <div className={styles.imageBox}>
                <img src="/assets/images/pfpic1.png" alt="Profile" className={styles.heroImage} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className={styles.section}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <div className={styles.aboutGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.aboutImageWrapper}
            >
              <img src="/assets/images/pfpic3.png" alt="About Me" className={styles.aboutImage} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.aboutContent}
            >
              <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Full Stack Developer <span className="gradient-text">:)</span></h3>
              <p>{data.personal.about}</p>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION (Khatarnak Design) */}
        <section id="skills" className={styles.section}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <div className={styles.skillsContainer}>
            {data.skills.technical.map((categoryGroup, groupIdx) => (
              <div key={categoryGroup.category} className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>{categoryGroup.category}</h3>
                <div className={styles.khatarnakSkillsGrid}>
                  {categoryGroup.skills.map((skill, idx) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className={`${styles.glass} ${styles.khatarnakSkillCard}`}
                      style={{ "--hover-color": skill.color }}
                    >
                      <div className={styles.skillIconWrapper} style={{ color: skill.color }}>
                        {getSkillIcon(skill.name)}
                      </div>
                      <h3 className={styles.khatarnakSkillName}>{skill.name}</h3>
                      <div className={styles.khatarnakSkillPercent}>
                        {skill.percentage}%
                      </div>
                      <div className={styles.skillGlowBg} style={{ background: skill.color }}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className={styles.section}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <div className={styles.projectsGrid}>
            {data.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${styles.glass} ${styles.projectCard}`}
              >
                <div className={styles.projectImgWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.projectOverlay}>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.overlayLink}><ExternalLink size={20} /></a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.overlayLink}><FaGithub size={20} /></a>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className={styles.section}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <div className={styles.singleTimeline}>
            <div className={styles.timeline}>
              {data.experience.map((exp, idx) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className={styles.timelineItem}
                >
                  <div className={styles.timelineDot}></div>
                  <div className={`${styles.glass} ${styles.timelineContent}`}>
                    <h3 className={styles.timelineRole}>{exp.role}</h3>
                    <div className={styles.timelineCompany}>{exp.company}</div>
                    <div className={styles.timelineDuration}>{exp.duration}</div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className={styles.section}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            My <span className="gradient-text">Education</span>
          </motion.h2>
          
          <div className={styles.singleTimeline}>
            <div className={styles.timeline}>
              {data.education.map((edu, idx) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className={styles.timelineItem}
                >
                  <div className={styles.timelineDot}></div>
                  <div className={`${styles.glass} ${styles.timelineContent}`}>
                    <h3 className={styles.timelineRole}>{edu.degree}</h3>
                    <div className={styles.timelineCompany}>{edu.institution}</div>
                    <div className={styles.timelineDuration}>{edu.duration}</div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className={styles.section}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Contact <span className="gradient-text">Me</span>
          </motion.h2>

          <div className={styles.contactGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${styles.glass} ${styles.contactInfoCard}`}
            >
              <h3 className={styles.contactHeading}>Let's Connect <span className="gradient-text">!</span></h3>
              <p className={styles.contactText}>
                I’m open to internships, freelance work, and collaboration on exciting web projects. Feel free to reach out!
              </p>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={24} /></div>
                <div className={styles.infoDetails}>
                  <h4>Phone</h4>
                  <p>{data.personal.phone}</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={24} /></div>
                <div className={styles.infoDetails}>
                  <h4>Email</h4>
                  <p>{data.personal.email}</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={24} /></div>
                <div className={styles.infoDetails}>
                  <h4>Location</h4>
                  <p>{data.personal.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${styles.glass} ${styles.contactFormCard}`}
            >
              <form onSubmit={handleContactSubmit}>
                <div className={styles.formGroup}>
                  <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <textarea name="message" placeholder="Your Message" rows="6" required className={styles.textarea}></textarea>
                </div>
                
                <button type="submit" className={styles.submitBtn} disabled={formState.status === "loading"}>
                  {formState.status === "loading" ? "Sending..." : "Send Message"} <Send size={18} />
                </button>
                
                {formState.message && (
                  <p style={{ marginTop: "1rem", textAlign: "center", color: formState.status === "success" ? "#10b981" : "#ef4444" }}>
                    {formState.message}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: "center", padding: "2rem", borderTop: "1px solid var(--glass-border)", color: "var(--text-secondary)" }}>
        <p>© 2026 Designed & Built by Ayush Khaitan.</p>
      </footer>
    </div>
  );
}
