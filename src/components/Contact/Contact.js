import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiCalendar,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import styles from "./Contact.module.css";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Map EmailJS field names back to state keys
  const fieldMap = {
    from_name: "name",
    from_email: "email",
    subject: "subject",
    message: "message",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const stateKey = fieldMap[name] || name;
    setFormData((prev) => ({
      ...prev,
      [stateKey]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "rishi.tagad@gmail.com",
      href: "mailto:rishi.tagad@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 8668875303",
      href: "tel:+918668875303",
      description: "Call me for quick discussions",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Pune, Maharashtra, India",
      href: null,
      description: "Available for remote work",
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/rushikesh-tagad-b27353154/",
      description: "Let's connect professionally",
    },
  ];

  const quickLinks = [
    // {
    //   icon: FiGithub,
    //   title: "GitHub",
    //   description: "Check out my code repositories",
    //   href: "https://github.com/Rishii221",
    // },
    {
      icon: FiCalendar,
      title: "Schedule Meeting",
      description: "Book a time slot for discussion",
      href: "https://meet.google.com/landing?hs=197&authuser=0",
    },
    {
      icon: FiClock,
      title: "Response Time",
      description: "I usually respond within 24 hours",
      href: null,
    },
  ];

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <div className={styles.contactContent}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Ready to discuss your next project? Let's create something amazing
              together!
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.contactForm}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Send Message</h3>
                  <p className={styles.formDescription}>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <div className={styles.formGroups}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        <FiUser className={styles.labelIcon} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        <FiMail className={styles.labelIcon} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="from_email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      <FiMessageSquare className={styles.labelIcon} />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      <FiMessageSquare className={styles.labelIcon} />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                      placeholder="Tell me about your project or inquiry..."
                      rows="6"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className={styles.submitIcon} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div
                    className={styles.statusMessage}
                    style={{
                      color: "#4caf50",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "16px",
                    }}
                  >
                    <FiCheckCircle />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div
                    className={styles.statusMessage}
                    style={{
                      color: "#f44336",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "16px",
                    }}
                  >
                    <FiAlertCircle />
                    <span>
                      Failed to send message. Please try again or email me
                      directly.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                <p className={styles.infoDescription}>
                  Prefer other ways to connect? Here are all the ways you can
                  reach me.
                </p>
              </div>

              <div className={styles.contactMethods}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <info.icon />
                    </div>
                    <div className={styles.methodContent}>
                      <h4 className={styles.methodTitle}>{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={styles.methodValue}
                          target={
                            info.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.methodValue}>{info.value}</span>
                      )}
                      <p className={styles.methodDescription}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.quickActions}>
                <h4 className={styles.quickActionsTitle}>Quick Actions</h4>
                <div className={styles.quickLinks}>
                  {quickLinks.map((link, index) => (
                    <div key={index} className={styles.quickLink}>
                      {link.href && link.href !== "#" ? (
                        <a
                          href={link.href}
                          className={styles.quickLinkContent}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className={styles.quickLinkIcon}>
                            <link.icon />
                          </div>
                          <div className={styles.quickLinkText}>
                            <span className={styles.quickLinkTitle}>
                              {link.title}
                            </span>
                            <span className={styles.quickLinkDescription}>
                              {link.description}
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className={styles.quickLinkContent}>
                          <div className={styles.quickLinkIcon}>
                            <link.icon />
                          </div>
                          <div className={styles.quickLinkText}>
                            <span className={styles.quickLinkTitle}>
                              {link.title}
                            </span>
                            <span className={styles.quickLinkDescription}>
                              {link.description}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.availability}>
                <div className={styles.availabilityCard}>
                  <div className={styles.availabilityIcon}>
                    <div className={styles.statusDot}></div>
                  </div>
                  <div className={styles.availabilityContent}>
                    <h4 className={styles.availabilityTitle}>
                      Currently Available
                    </h4>
                    <p className={styles.availabilityDescription}>
                      Open to new opportunities and exciting projects. Let's
                      discuss how we can work together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
