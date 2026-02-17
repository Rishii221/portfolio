import React from "react";
import { FiCalendar, FiMapPin, FiAward, FiBookOpen } from "react-icons/fi";
import styles from "./Experience.module.css";

const Experience = () => {
  const workExperience = {
    role: "Senior Software Engineer",
    company: "Trinesis Technologies",
    duration: "Oct 2021 - Present",
    location: "Pune, Maharashtra, India",
    type: "Full-time",
    responsibilities: [
      "Implemented front-end functionality using ReactJS for dynamic and scalable web applications",
      "Developed responsive UI designs optimized for web, desktop, tablet, and mobile devices",
      "Involved in UI design and component structuring based on product backlog and stakeholder requirements",
      "Wrote unit and integration test cases using Jest and React Testing Library",
      "Utilized Redux for state management and Session Storage for session-level data persistence",
      "Analyzed technical and functional requirements provided by stakeholders and translated them into actionable tasks",
      "Investigated and resolved bugs and performance issues to ensure high-quality application delivery",
    ],
  };

  const education = {
    degree: "Master of Computer Science",
    institution: "RSMPV Deolali Pravara",
    location: "Maharashtra, India",
    year: "Jun 2019 - Jun 2021",
    grade: "72%",
  };

  const training = {
    program: "Additional Skills",
    institute: "Trinesis Technologies",
    location: "Pune",
    year: "2021",
    technologies: [
      "Team Leadership and Management",
      "Requirement Analysis",
      "Timeline Management",
      "Agile Methodology",
    ],
  };

  const achievements = [
    {
      title: "Delivery Excellence",
      description:
        "Awarded Delivery Excellence badge multiple times for extraordinary technical contribution and outstanding performance",
      year: "2024",
    },
    {
      title: "Mover of the Mountain",
      description:
        "Recognized for exceptional dedication and impact in driving project success",
      year: "2023",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Senior Software Engineer - FR8",
      description:
        "Leading front-end development for US-based e-commerce platform specializing in asset recovery and auctioning",
      type: "work",
    },
    {
      year: "2024",
      title: "Senior Developer Promotion",
      description:
        "Promoted to Senior Software Engineer role with expanded responsibilities",
      type: "work",
    },
    {
      year: "2023",
      title: "Mobile & Web Development",
      description:
        "Worked on Tribal Rides (React Native) and CommunityX (Social Networking) projects",
      type: "work",
    },
    {
      year: "2022",
      title: "Passport Atlanta",
      description:
        "Developed front-end for nonprofit student engagement platform using ReactJS",
      type: "work",
    },
    {
      year: "2021",
      title: "Master's Graduation & Career Start",
      description:
        "Completed Master of Computer Science from RSMPV Deolali Pravara and joined Trinesis Technologies",
      type: "education",
    },
    {
      year: "2019",
      title: "Started Master's Program",
      description:
        "Enrolled in Master of Computer Science at RSMPV Deolali Pravara",
      type: "education",
    },
  ];

  return (
    <section id="experience" className={`${styles.experience} section`}>
      <div className="container">
        <div className={styles.experienceContent}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              My professional journey and academic background
            </p>
          </div>

          <div className={styles.experienceGrid}>
            {/* Timeline */}
            <div className={styles.timelineSection}>
              <h3 className={styles.subsectionTitle}>Professional Timeline</h3>
              <div className={styles.timeline}>
                {timeline.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <span className={styles.timelineYear}>{item.year}</span>
                    </div>
                    <div className={styles.timelineContent}>
                      <h4 className={styles.timelineTitle}>{item.title}</h4>
                      <p className={styles.timelineDescription}>
                        {item.description}
                      </p>
                      <span
                        className={`${styles.timelineType} ${
                          styles[item.type]
                        }`}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className={styles.detailsSection}>
              {/* Work Experience */}
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <FiCalendar />
                  </div>
                  <h3 className={styles.cardTitle}>Work Experience</h3>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.jobInfo}>
                    <h4 className={styles.jobTitle}>{workExperience.role}</h4>
                    <p className={styles.jobCompany}>
                      {workExperience.company}
                    </p>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobDuration}>
                        <FiCalendar className={styles.metaIcon} />
                        {workExperience.duration}
                      </span>
                      <span className={styles.jobLocation}>
                        <FiMapPin className={styles.metaIcon} />
                        {workExperience.location}
                      </span>
                    </div>
                  </div>
                  <div className={styles.responsibilities}>
                    <h5 className={styles.responsibilitiesTitle}>
                      Key Responsibilities:
                    </h5>
                    <ul className={styles.responsibilitiesList}>
                      {workExperience.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index} className={styles.responsibilityItem}>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <FiBookOpen />
                  </div>
                  <h3 className={styles.cardTitle}>Education</h3>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.educationInfo}>
                    <h4 className={styles.degree}>{education.degree}</h4>
                    <p className={styles.institution}>
                      {education.institution}
                    </p>
                    <div className={styles.educationMeta}>
                      <span className={styles.educationYear}>
                        <FiCalendar className={styles.metaIcon} />
                        {education.year}
                      </span>
                      <span className={styles.educationLocation}>
                        <FiMapPin className={styles.metaIcon} />
                        {education.location}
                      </span>
                    </div>
                    <div className={styles.grade}>
                      <FiAward className={styles.metaIcon} />
                      <span>{education.grade}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training */}
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <FiAward />
                  </div>
                  <h3 className={styles.cardTitle}>Professional Training</h3>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.trainingInfo}>
                    <h4 className={styles.trainingProgram}>
                      {training.program}
                    </h4>
                    <p className={styles.trainingInstitute}>
                      {training.institute}
                    </p>
                    <div className={styles.trainingMeta}>
                      <span className={styles.trainingYear}>
                        <FiCalendar className={styles.metaIcon} />
                        {training.year}
                      </span>
                      <span className={styles.trainingLocation}>
                        <FiMapPin className={styles.metaIcon} />
                        {training.location}
                      </span>
                    </div>
                    <div className={styles.technologies}>
                      <h5 className={styles.technologiesTitle}>
                        Technologies Covered:
                      </h5>
                      <div className={styles.technologyTags}>
                        {training.technologies.map((tech, index) => (
                          <span key={index} className={styles.technologyTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={styles.achievementsSection}>
            <h3 className={styles.subsectionTitle}>
              Achievements & Recognition
            </h3>
            <div className={styles.achievementsGrid}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>
                    <FiAward />
                  </div>
                  <div className={styles.achievementContent}>
                    <h4 className={styles.achievementTitle}>
                      {achievement.title}
                    </h4>
                    <p className={styles.achievementDescription}>
                      {achievement.description}
                    </p>
                    <span className={styles.achievementYear}>
                      {achievement.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div className={styles.experienceSummary}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Experience Summary</h3>
              <div className={styles.summaryGrid}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>4.2+</span>
                  <span className={styles.summaryLabel}>
                    Years of Experience
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>4+</span>
                  <span className={styles.summaryLabel}>
                    Projects Delivered
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>2</span>
                  <span className={styles.summaryLabel}>Major Awards</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>100%</span>
                  <span className={styles.summaryLabel}>
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
