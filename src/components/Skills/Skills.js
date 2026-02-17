import React, { useState } from 'react';
import { 
  FiCode, 
  FiSmartphone, 
  FiMonitor, 
  FiDatabase, 
  FiTool, 
  FiGitBranch,
  FiLayers,
  FiSettings
} from 'react-icons/fi';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: FiMonitor,
      title: 'Frontend Development',
      description: 'Creating exceptional user interfaces and experiences',
      skills: [
        { name: 'React.js', level: 90, description: 'Advanced component architecture and hooks' },
        { name: 'JavaScript', level: 88, description: 'ES6+ features and modern patterns' },
        { name: 'TypeScript', level: 82, description: 'Type-safe development practices' },
        { name: 'HTML5', level: 92, description: 'Semantic markup and accessibility' },
        { name: 'CSS3', level: 90, description: 'Modern styling and animations' },
        { name: 'Redux', level: 85, description: 'State management solutions' }
      ]
    },
    mobile: {
      icon: FiSmartphone,
      title: 'Mobile Development',
      description: 'Building native-quality mobile applications',
      skills: [
        { name: 'React Native', level: 88, description: 'Cross-platform mobile development' },
        { name: 'iOS Development', level: 75, description: 'Native iOS app development' },
        { name: 'Android Development', level: 78, description: 'Native Android app development' },
        { name: 'Mobile UI/UX', level: 85, description: 'Mobile-first design principles' },
        { name: 'App Store Deployment', level: 80, description: 'Publishing and distribution' }
      ]
    },
    backend: {
      icon: FiDatabase,
      title: 'Backend & Database',
      description: 'Server-side development and data management',
      skills: [
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript development' },
        { name: 'PostgreSQL', level: 80, description: 'Relational database management' },
        { name: 'MySQL', level: 78, description: 'Relational database management' },
        { name: 'Firebase', level: 82, description: 'Backend-as-a-Service solutions' },
        { name: 'REST APIs', level: 85, description: 'RESTful web service design' }
      ]
    },
    tools: {
      icon: FiTool,
      title: 'Tools & Technologies',
      description: 'Development tools and workflow optimization',
      skills: [
        { name: 'Git/GitHub/GitLab', level: 88, description: 'Version control and collaboration' },
        { name: 'BitBucket', level: 85, description: 'Code hosting and collaboration' },
        { name: 'VS Code', level: 90, description: 'Code editing and debugging' },
        { name: 'Jira', level: 85, description: 'Project management and tracking' },
        { name: 'Jest', level: 80, description: 'Unit testing and code coverage' },
        { name: 'Docker', level: 70, description: 'Containerization and deployment' },
        { name: 'Jenkins', level: 72, description: 'CI/CD pipeline automation' },
        { name: 'SonarQube', level: 70, description: 'Code quality and security analysis' },
        { name: 'GCP', level: 68, description: 'Google Cloud Platform services' }
      ]
    }
  };

  const operatingSystems = [
    { name: 'Linux', icon: '🐧', proficiency: 'Advanced' },
    { name: 'macOS', icon: '🍎', proficiency: 'Expert' },
    { name: 'Windows', icon: '🪟', proficiency: 'Intermediate' }
  ];

  const integrations = [
    'Stripe Payment Integration',
    'Google Maps API',
    'WebSocket Real-time Communication',
    'DevOps (CI/CD)',
    'Agile & Scrum Methodologies',
    'GitLab CI/CD Pipelines'
  ];

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <div className={styles.skillsContent}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Categories */}
          <div className={styles.skillsContainer}>
            {/* Category Tabs */}
            <div className={styles.categoryTabs}>
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  className={`${styles.categoryTab} ${
                    activeCategory === key ? styles.activeTab : ''
                  }`}
                  onClick={() => setActiveCategory(key)}
                >
                  <category.icon className={styles.tabIcon} />
                  <span className={styles.tabText}>{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            <div className={styles.categoryContent}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryTitle}>
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className={styles.categoryDescription}>
                    {skillCategories[activeCategory].description}
                  </p>
                </div>
                <div className={styles.categoryIcon}>
                  {React.createElement(skillCategories[activeCategory].icon)}
                </div>
              </div>

              <div className={styles.skillsList}>
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <p className={styles.skillDescription}>{skill.description}</p>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills Section */}
          <div className={styles.additionalSkills}>
            {/* Operating Systems */}
            <div className={styles.skillGroup}>
              <h4 className={styles.groupTitle}>
                <FiSettings className={styles.groupIcon} />
                Operating Systems
              </h4>
              <div className={styles.osGrid}>
                {operatingSystems.map((os, index) => (
                  <div key={index} className={styles.osCard}>
                    <span className={styles.osIcon}>{os.icon}</span>
                    <div className={styles.osInfo}>
                      <span className={styles.osName}>{os.name}</span>
                      <span className={styles.osProficiency}>{os.proficiency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className={styles.skillGroup}>
              <h4 className={styles.groupTitle}>
                <FiLayers className={styles.groupIcon} />
                API Integrations & Specializations
              </h4>
              <div className={styles.integrationTags}>
                {integrations.map((integration, index) => (
                  <span key={index} className={styles.integrationTag}>
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className={styles.skillsSummary}>
            <div className={styles.summaryCard}>
              <FiCode className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h4 className={styles.summaryTitle}>Frontend Focus</h4>
                <p className={styles.summaryText}>
                  Specialized in React ecosystem with expertise in modern JavaScript frameworks
                </p>
              </div>
            </div>
            
            <div className={styles.summaryCard}>
              <FiSmartphone className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h4 className={styles.summaryTitle}>Mobile Expertise</h4>
                <p className={styles.summaryText}>
                  Cross-platform mobile development with React Native and native capabilities
                </p>
              </div>
            </div>
            
            <div className={styles.summaryCard}>
              <FiGitBranch className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h4 className={styles.summaryTitle}>Full-Stack Capable</h4>
                <p className={styles.summaryText}>
                  End-to-end development with modern tools and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
