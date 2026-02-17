import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // New state for animations
  const [activeLink, setActiveLink] = useState("home");
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Original scroll logic
      setScrolled(currentScrollY > 50);

      // New: Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);

      // New: Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section);
        return element ? element.offsetTop - 100 : 0;
      });

      const currentSection = sections.find((section, index) => {
        return (
          currentScrollY >= sectionOffsets[index] &&
          (index === sections.length - 1 ||
            currentScrollY < sectionOffsets[index + 1])
        );
      });

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Rishii221", label: "GitHub" },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/rushikesh-tagad-b27353154/",
      label: "LinkedIn",
    },
    { icon: FiMail, href: "mailto:rishi.tagad@gmail.com", label: "Email" },
  ];

  // New: Handle link click with smooth animation
  const handleLinkClick = (href, name) => {
    setActiveLink(name.toLowerCase());
    setIsMenuOpen(false);

    // Add smooth scroll behavior
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    /* Old header className */
    /* <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}> */

    /* Enhanced header with new animations */
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        headerVisible ? styles.visible : styles.hidden
      } ${isMenuOpen ? styles.menuOpen : ""}`}
    >
      <div className="container">
        <div className={`${styles.headerContent} fade-in`}>
          {/* Logo with enhanced animation */}
          <div className={`${styles.logo} hover-glow pulse-glow`}>
            <span className={`${styles.logoText} rotate-on-hover`}>RT</span>
          </div>

          {/* Desktop Navigation with staggered animations */}
          <nav className={styles.nav}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${
                  activeLink === item.name.toLowerCase()
                    ? styles.activeNavLink
                    : ""
                } fade-in-delay-${(index % 4) + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href, item.name);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links with enhanced hover effects */}
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className={`${styles.socialLink} hover-lift bounce-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="shake-on-hover" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button with rotation animation */}
          <button
            className={`${styles.mobileMenuBtn} ${
              isMenuOpen ? styles.menuBtnActive : ""
            } hover-glow`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles.menuIconWrapper}>
              {isMenuOpen ? (
                <FiX className={`${styles.menuIcon} ${styles.rotateIn}`} />
              ) : (
                <FiMenu className={`${styles.menuIcon} ${styles.rotateIn}`} />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <nav className={styles.mobileNav}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  activeLink === item.name.toLowerCase()
                    ? styles.activeMobileNavLink
                    : ""
                } ${isMenuOpen ? "slide-in-left" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href, item.name);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className={styles.mobileSocialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className={`${styles.mobileSocialLink} ${
                  isMenuOpen ? "bounce-in" : ""
                } hover-lift`}
                style={{
                  animationDelay: `${(navItems.length + index) * 0.1}s`,
                }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="rotate-on-hover" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
