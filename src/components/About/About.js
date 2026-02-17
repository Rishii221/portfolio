import React from "react";
import { FiAward, FiUsers, FiTarget, FiTrendingUp } from "react-icons/fi";
import styles from "./About.module.css";

const About = () => {
  const highlights = [
    {
      icon: FiAward,
      title: "Experience",
      description: "4.2+ years of professional development experience",
      color: "var(--primary-color)",
    },
    {
      icon: FiUsers,
      title: "Collaboration",
      description: "Effective in working independently and in teams",
      color: "var(--secondary-color)",
    },
    {
      icon: FiTarget,
      title: "Focus",
      description: "Specialized in ReactJS and React Native",
      color: "var(--accent-color)",
    },
    {
      icon: FiTrendingUp,
      title: "Growth",
      description: "Continuous learning and adapting to new technologies",
      color: "var(--danger-color)",
    },
  ];

  const domains = [
    "Media & Entertainment",
    "Ride-sharing & Transportation",
    "Social Networking",
    "E-Commerce",
  ];

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              About <span className="text-gradient">Me</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Passionate about creating innovative solutions and exceptional
              user experiences
            </p>
          </div>

          <div className={styles.aboutGrid}>
            {/* About Text */}
            <div className={styles.aboutText}>
              <div className={styles.textContent}>
                <p className={styles.mainText}>
                  I'm a <strong>Senior Software Engineer</strong> with over 4.2
                  years of experience in the analysis, design, and development
                  of web-based and mobile applications. I specialize in building
                  business logic for web applications using
                  <strong> ReactJS</strong>, and mobile applications using the{" "}
                  <strong>React Native</strong> framework.
                </p>

                <p className={styles.secondaryText}>
                  With domain expertise spanning across media and entertainment,
                  ride-sharing, transportation, and e-commerce sectors, I bring
                  a comprehensive understanding of diverse business requirements
                  and user needs.
                </p>

                <div className={styles.domainExpertise}>
                  <h4 className={styles.domainTitle}>Domain Expertise</h4>
                  <div className={styles.domainTags}>
                    {domains.map((domain, index) => (
                      <span key={index} className={styles.domainTag}>
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.personalQualities}>
                  <h4 className={styles.qualitiesTitle}>Core Strengths</h4>
                  <ul className={styles.qualitiesList}>
                    <li>Strong programming and analytical skills</li>
                    <li>Excellent interpersonal and communication abilities</li>
                    <li>Requirements understanding and planning expertise</li>
                    <li>Unit testing and documentation proficiency</li>
                    <li>
                      Collaborative team player with independent work capability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Visual */}
            <div className={styles.aboutVisual}>
              <div className={styles.profileCard}>
                <div className={styles.profileImage}>
                  <div className={styles.imagePlaceholder}>
                    {/* <span>RT</span> */}
                    <img
                      alt="img"
                      src={require("../../assets/images/IMG_20250527_120816.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className={styles.statusIndicator}>
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}>
                      Available for work
                    </span>
                  </div>
                </div>

                <div className={styles.profileInfo}>
                  <h3 className={styles.profileName}>Rushikesh Tagad</h3>
                  <p className={styles.profileRole}>Senior Software Engineer</p>
                  <p className={styles.profileLocation}>
                    📍 Pune, Maharashtra, India
                  </p>
                  <p className={styles.profileEducation}>
                    🎓 Master of Computer Science - RSMPV Deolali Pravara
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className={styles.highlights}>
                {highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlight}>
                    <div
                      className={styles.highlightIcon}
                      style={{ color: highlight.color }}
                    >
                      <highlight.icon />
                    </div>
                    <div className={styles.highlightContent}>
                      <h4 className={styles.highlightTitle}>
                        {highlight.title}
                      </h4>
                      <p className={styles.highlightDescription}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
