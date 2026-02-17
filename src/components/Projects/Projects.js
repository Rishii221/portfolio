import React, { useState, useEffect } from "react";
import {
  FiStar,
  FiShoppingCart,
  FiMessageSquare,
  FiTruck,
  FiBookOpen,
} from "react-icons/fi";
import styles from "./Projects.module.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  // New animation states
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FR8 - E-Commerce Platform",
      category: "web",
      type: "Client Project",
      description:
        "A US-based company specialized in asset recovery and auctioning, helping businesses liquidate surplus, overstock, and distressed inventory. They conduct regular auctions featuring a wide range of products using a competitive bidding process.",
      technologies: ["ReactJS", "JavaScript", "Redux", "Jest", "BitBucket"],
      features: [
        "Responsive UI for web, desktop, tablet, and mobile",
        "Redux state management with Session Storage",
        "Competitive bidding and auction system",
        "Unit and integration testing with Jest",
        "Component structuring based on product backlog",
        "Cross-platform compatibility",
      ],
      domain: "E-Commerce",
      icon: FiShoppingCart,
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      stats: { users: "15K+", rating: 4.6 },
    },
    {
      id: 2,
      title: "Passport Atlanta",
      category: "web",
      type: "Client Project",
      description:
        "A nonprofit organization that redefines possibilities for students by leveraging technology and granting them access to all the opportunities Atlanta has to offer, elevating their potential and igniting hope.",
      technologies: ["ReactJS", "JavaScript", "PostgreSQL", "GitHub"],
      features: [
        "Front-end functionality using ReactJS",
        "UI design based on backlog requirements",
        "PostgreSQL database integration",
        "Stakeholder requirement analysis",
        "Bug investigation and resolution",
      ],
      domain: "Media & Entertainment",
      icon: FiBookOpen,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      stats: { users: "5K+", rating: 4.9 },
    },
    {
      id: 3,
      title: "Tribal Rides",
      category: "mobile",
      type: "Client Project",
      description:
        "A cutting-edge mobile application that brings a new level of convenience and efficiency to the world of ridesharing and transportation, offering community-focused, sustainable, and seamless connectivity solutions.",
      technologies: [
        "React Native",
        "TypeScript",
        "Google Maps",
        "Stripe",
        "Firebase",
      ],
      features: [
        "Google Maps integration",
        "Stripe payment processing",
        "Unit testing with Jest and React Native testing libraries",
        "Real-time location tracking",
        "Trip history and ratings",
        "Push notifications",
      ],
      domain: "Ridesharing & Transportation",
      icon: FiTruck,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      stats: { users: "25K+", rating: 4.7 },
    },
    {
      id: 4,
      title: "CommunityX",
      category: "mobile",
      type: "Client Project",
      description:
        "A collaborative social media application similar to WhatsApp, Facebook, and Instagram. Users can post feeds, upload videos and images, create events and petitions for public votes, and create fundraiser posts for donations.",
      technologies: [
        "React Native",
        "JavaScript",
        "WebSocket",
        "Stripe",
        "ReactJS",
      ],
      features: [
        "Real-time messaging with WebSocket",
        "Media sharing (photos, videos)",
        "Event creation and management",
        "Public voting on petitions",
        "Fundraising campaigns with donations",
        "Stripe payment integration",
      ],
      domain: "Social Networking",
      icon: FiMessageSquare,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      stats: { users: "10K+", rating: 4.8 },
    },
  ];

  // Animation effect when filter changes
  useEffect(() => {
    setIsLoading(true);
    setVisibleProjects([]);

    const timer = setTimeout(() => {
      const filtered =
        filter === "all"
          ? projects
          : projects.filter((project) => project.category === filter);

      // Stagger the appearance of projects
      filtered.forEach((project, index) => {
        setTimeout(() => {
          setVisibleProjects((prev) => [...prev, project]);
        }, index * 100);
      });

      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [filter]);

  const categories = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "mobile",
      label: "Mobile",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      key: "web",
      label: "Web",
      count: projects.filter((p) => p.category === "web").length,
    },
  ];

  // Enhanced filter change handler
  const handleFilterChange = (newFilter) => {
    if (newFilter !== filter) {
      setFilter(newFilter);
    }
  };

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <div className={styles.projectsContent}>
          {/* Section Header with animations */}
          <div className={`${styles.sectionHeader} fade-in`}>
            <h2 className={`${styles.sectionTitle} bounce-in`}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className={`${styles.sectionSubtitle} fade-in-delay-1`}>
              A showcase of applications and solutions I've built across
              different domains
            </p>
          </div>

          {/* Filter Tabs with hover animations */}
          <div className={`${styles.filterTabs} slide-in-left`}>
            {categories.map((category, index) => (
              <button
                key={category.key}
                className={`${styles.filterTab} ${
                  filter === category.key ? styles.activeFilter : ""
                } hover-glow bounce-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleFilterChange(category.key)}
              >
                {category.label}
                <span className={`${styles.filterCount} pulse-glow`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid with enhanced animations */}
          <div className={styles.projectsGrid}>
            {isLoading && (
              <div className={styles.loadingIndicator}>
                <div className={styles.spinner}></div>
                <span>Loading projects...</span>
              </div>
            )}

            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectCard} bounce-in hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header with gradient animation */}
                <div
                  className={`${styles.projectHeader} ${
                    hoveredProject === project.id
                      ? styles.projectHeaderHovered
                      : ""
                  }`}
                  style={{ background: project.gradient }}
                >
                  <div className={`${styles.projectIcon} rotate-on-hover`}>
                    <project.icon />
                  </div>
                  <div className={styles.projectBadge}>
                    {project.isInternal ? (
                      <span className={`${styles.internalBadge} pulse-glow`}>
                        Internal
                      </span>
                    ) : (
                      <span className={`${styles.clientBadge} pulse-glow`}>
                        Client
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <div className={styles.projectMeta}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectDomain}>
                      {project.domain}
                    </span>
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className={styles.projectTechnologies}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className={styles.projectFeatures}>
                    <h4 className={styles.featuresTitle}>Key Features</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          {feature}
                        </li>
                      ))}
                      {/* {project.features.length > 3 && (
                        <li className={styles.moreFeatures}>
                          +{project.features.length - 3} more features
                        </li>
                      )} */}
                    </ul>
                  </div>

                  {/* Project Stats */}
                  {project.stats && (
                    <div className={styles.projectStats}>
                      <div className={styles.stat}>
                        <FiStar className={styles.statIcon} />
                        <span className={styles.statValue}>
                          {project.stats.rating}
                        </span>
                        <span className={styles.statLabel}>Rating</span>
                      </div>
                    </div>
                  )}

                  {/* Project Actions */}
                  <div className={styles.projectActions}>
                    {project.isInternal && (
                      <div className={styles.internalNote}>
                        <span>
                          Internal project - Code not publicly available
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Summary */}
          <div className={styles.projectSummary}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Project Portfolio</h3>
              <div className={styles.summaryStats}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>4+</span>
                  <span className={styles.summaryLabel}>
                    Projects Completed
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>50K+</span>
                  <span className={styles.summaryLabel}>
                    Total Users Served
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>4.7</span>
                  <span className={styles.summaryLabel}>Average Rating</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>4</span>
                  <span className={styles.summaryLabel}>Different Domains</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
