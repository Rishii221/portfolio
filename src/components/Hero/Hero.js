import React, { useEffect, useState } from "react";
import { FiDownload, FiArrowDown, FiCode, FiSmartphone } from "react-icons/fi";
import styles from "./Hero.module.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  // New animation states
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const textArray = [
      "React Developer",
      "Frontend Developer",
      "React Native Developer",
      "Mobile App Creator",
      "Senior Software Engineer",
    ];
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // New: Component visibility animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // New: Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className={`${styles.hero} ${isVisible ? styles.heroVisible : ""}`}
    >
      <div className="container">
        <div className={styles.heroContent}>
          {/* Main Content with enhanced animations */}
          <div className={`${styles.heroText} slide-in-left`}>
            <div className={`${styles.greeting} fade-in-delay-1`}>
              <span className={`${styles.wave} floating`}>👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className={`${styles.name} fade-in-delay-2 hover-glow`}>
              Rushikesh <span className="text-gradient">Tagad</span>
            </h1>

            <div className={`${styles.roleContainer} fade-in-delay-3`}>
              <span className={styles.rolePrefix}>I'm a </span>
              <span className={`${styles.typewriter} pulse-glow`}>
                {text}
                <span className={`${styles.cursor} typewriter-cursor`}>|</span>
              </span>
            </div>

            <p className={`${styles.description} fade-in-delay-4`}>
              Senior Software Engineer with 4.2+ years of experience in the
              analysis, design, and development of web-based and mobile
              applications using ReactJS and React Native. Passionate about
              creating seamless user experiences and innovative solutions.
            </p>

            <div
              className={`${styles.stats} bounce-in`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className={`${styles.stat} hover-lift`}>
                <span className={styles.statNumber}>4.2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div
                className={`${styles.stat} hover-lift`}
                style={{ animationDelay: "0.1s" }}
              >
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div
                className={`${styles.stat} hover-lift`}
                style={{ animationDelay: "0.2s" }}
              >
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>

            <div
              className={`${styles.cta} fade-in`}
              style={{ animationDelay: "0.8s" }}
            >
              <a href="#contact" className={`${styles.primaryBtn} hover-glow`}>
                <span>Get In Touch</span>
              </a>
              <a
                href="/Rushikesh Tagad CV.pdf"
                className={`${styles.secondaryBtn} hover-lift`}
                download
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FiDownload className={isHovered ? "shake-on-hover" : ""} />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Visual Element with enhanced animations */}
          <div className={`${styles.heroVisual} slide-in-right`}>
            <div className={`${styles.codeBlock} hover-lift pulse-glow`}>
              <div className={styles.codeHeader}>
                <div className={styles.windowControls}>
                  <span className="hover-scale"></span>
                  <span className="hover-scale"></span>
                  <span className="hover-scale"></span>
                </div>
                <span className="fade-in-delay-2">portfolio.js</span>
              </div>
              <div className={styles.codeContent}>
                <div className={`${styles.codeLine} fade-in-delay-1`}>
                  <span className={styles.keyword}>const</span>
                  <span className={styles.variable}> developer</span>
                  <span className={styles.operator}> = </span>
                  <span className={styles.bracket}>{"{"}</span>
                </div>
                <div className={`${styles.codeLine} fade-in-delay-2`}>
                  <span className={styles.property}> name</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>'Rushikesh Tagad'</span>
                  <span className={styles.operator}>,</span>
                </div>
                <div className={`${styles.codeLine} fade-in-delay-3`}>
                  <span className={styles.property}> skills</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.bracket}>['</span>
                  <span className={styles.string}>React</span>
                  <span className={styles.bracket}>', '</span>
                  <span className={styles.string}>React Native</span>
                  <span className={styles.bracket}>'],</span>
                </div>
                <div className={`${styles.codeLine} fade-in-delay-4`}>
                  <span className={styles.property}> passion</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>'Building Amazing Apps'</span>
                </div>
                <div className={`${styles.codeLine} fade-in-delay-4`}>
                  <span className={styles.bracket}>{"}"}</span>
                </div>
              </div>
            </div>

            <div className={styles.floatingIcons}>
              <div className={`${styles.floatingIcon} floating hover-glow`}>
                <FiCode className="rotate-on-hover" />
              </div>
              <div
                className={`${styles.floatingIcon} floating hover-glow`}
                style={{ animationDelay: "1s" }}
              >
                <FiSmartphone className="rotate-on-hover" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.scrollIndicator} bounce-in`}
          style={{ animationDelay: "1.2s" }}
        >
          <a href="#about" className={`${styles.scrollLink} hover-lift`}>
            <FiArrowDown className="floating" />
            <span>Scroll Down</span>
          </a>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div
        className={styles.backgroundEffect}
        style={{
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        }}
      >
        <div className={`${styles.grid} ${styles.animatedGrid}`}></div>
        <div
          className={`${styles.gradientOrb1} ${styles.interactiveOrb}`}
        ></div>
        <div
          className={`${styles.gradientOrb2} ${styles.interactiveOrb}`}
        ></div>
        <div className={styles.particleField}>
          {/* Generate floating particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`${styles.particle} floating`}
              style={{
                animationDelay: `${i * 0.2}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
