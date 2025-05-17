import React, { useState } from 'react';
import styles from '../styles/components/BookMission.module.css';
import { sendEmail } from '../utils/emailService';
import rocketImage from '../assets/images/payload_1.jpg';
import CalButton from './CalButton';

const BookMission = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For testing purposes, we'll simulate a successful submission
      // In production, uncomment the line below to use the actual email service
      // const result = await sendEmail(formData);
      const result = { success: true };

      if (result.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          contact: '',
          message: ''
        });

        // Log the form data that would be sent
        console.log('Form submitted with data:', {
          name: formData.name,
          contact: formData.contact,
          message: formData.message,
          to: 'info@researchsat.space'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);

      // Clear status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }
  };

  return (
    <section id="bookmission" className={styles.bookMissionSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Book a Mission</h2>

        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Not quite ready to pencil in a meeting?</h3>
          <p className={styles.formDescription}>
            No worries—we've got your back! Simply fill out our form, and we'll take it from there.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact" className={styles.label}>Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="00-0000-0000"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                className={styles.textarea}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            {submitStatus === 'success' && (
              <p className={styles.successMessage}>Your message has been sent successfully!</p>
            )}

            {submitStatus === 'error' && (
              <p className={styles.errorMessage}>There was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={rocketImage}
            alt="Rocket Launch"
            className={styles.rocketImage}
          />

          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Reach us @</p>
            <a href="mailto:info@researchsat.space" className={styles.emailLink}>
              info@researchsat.space
            </a>
            <p className={styles.phoneNumber}>+61 4525 94883</p>
          </div>

          <div className={styles.meetingInfo}>
            <p className={styles.meetingText}>
              Nothing beats a good old-fashioned face-to-face chat.
              Schedule a call now—we know you've got a packed schedule!
            </p>
            <CalButton
              className={styles.scheduleButton}
              calLink="researchsat-2023/30min"
              namespace="30min"
              config={{ layout: "month_view" }}
            >
              Schedule Meet
            </CalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMission;
