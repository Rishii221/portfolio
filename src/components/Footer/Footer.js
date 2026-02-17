import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUp,
  FiHeart,
  FiCode,
} from "react-icons/fi";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    projects: [
      { name: "FR8 - E-Commerce", href: "#projects" },
      { name: "Passport Atlanta", href: "#projects" },
      { name: "Tribal Rides", href: "#projects" },
      { name: "CommunityX", href: "#projects" },
    ],
    technologies: [
      { name: "React.js", href: "#skills" },
      { name: "React Native", href: "#skills" },
      { name: "TypeScript", href: "#skills" },
      { name: "JavaScript", href: "#skills" },
      { name: "Node.js", href: "#skills" },
    ],
  };

  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      href: "https://github.com/Rishii221",
      color: "#333",
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rushikesh-tagad-b27353154/",
      color: "#0077b5",
    },
    {
      icon: FiMail,
      name: "Email",
      href: "mailto:rishi.tagad@gmail.com",
      color: "#ea4335",
    },
  ];

  const contactInfo = [
    {
      icon: FiMail,
      text: "rishi.tagad@gmail.com",
      href: "mailto:rishi.tagad@gmail.com",
    },
    {
      icon: FiPhone,
      text: "+91 8668875303",
      href: "tel:+918668875303",
    },
    {
      icon: FiMapPin,
      text: "Pune, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Footer Main Content */}
          <div className={styles.footerMain}>
            {/* Brand Section */}
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                {/* {profile ? (
                  <img alt="profile" src={require(profile)} />
                ) : ( */}
                {/* IMG_20250527_120816.jpg */}
                <img
                  alt="profile"
                  src={require("../../assets/images/IMG_20250527_120816.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                  }}
                />
                {/* <span className={styles.logoText}>RT</span> */}
                {/* )} */}
              </div>
              <h3 className={styles.brandTitle}>Rushikesh Tagad</h3>
              <p className={styles.brandDescription}>
                Senior Software Engineer specializing in ReactJS and React
                Native. Passionate about creating exceptional digital
                experiences and innovative solutions.
              </p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{ "--social-color": social.color }}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linksSection}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Navigation</h4>
                <ul className={styles.linkList}>
                  {footerLinks.navigation.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className={styles.footerLink}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Featured Projects</h4>
                <ul className={styles.linkList}>
                  {footerLinks.projects.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className={styles.footerLink}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Technologies</h4>
                <ul className={styles.linkList}>
                  {footerLinks.technologies.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className={styles.footerLink}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.contactSection}>
              <h4 className={styles.contactTitle}>Get In Touch</h4>
              <p className={styles.contactDescription}>
                Ready to start your next project? Let's discuss how we can work
                together.
              </p>
              <div className={styles.contactInfo}>
                {contactInfo.map((contact, index) => (
                  <div key={index} className={styles.contactItem}>
                    <contact.icon className={styles.contactIcon} />
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className={styles.contactLink}
                        target={
                          contact.href.startsWith("mailto") ||
                          contact.href.startsWith("tel")
                            ? "_self"
                            : "_blank"
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className={styles.contactText}>{contact.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.availability}>
                <div className={styles.statusIndicator}>
                  <span className={styles.statusDot}></span>
                  <span className={styles.statusText}>
                    Available for new opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomContent}>
              <div className={styles.copyright}>
                <p className={styles.copyrightText}>
                  © {currentYear} Rushikesh Tagad. All rights reserved.
                </p>
                <p className={styles.madeWith}>
                  Made with <FiHeart className={styles.heartIcon} /> and{" "}
                  <FiCode className={styles.codeIcon} /> in Pune, India
                </p>
              </div>

              <div className={styles.footerActions}>
                <button
                  onClick={scrollToTop}
                  className={styles.scrollToTop}
                  aria-label="Scroll to top"
                >
                  <FiArrowUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
