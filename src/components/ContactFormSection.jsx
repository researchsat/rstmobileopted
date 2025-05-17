import React, { useState } from 'react';
import styles from '../styles/components/ContactFormSection.module.css';
import contactImage from '../assets/images/contact/contact-image.jpg';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      contact: '',
      message: ''
    });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.formContent}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Not quite ready to pencil in a meeting?</h3>
              <p className={styles.formSubtitle}>
                No worries—we've got your back! Simply fill out our form, and we'll take it from there.
              </p>
            </div>
            
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <div className={styles.inputWrapper}>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={styles.formInput} 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="contact" className={styles.formLabel}>Contact</label>
                <div className={styles.inputWrapper}>
                  <input 
                    type="text" 
                    id="contact" 
                    name="contact" 
                    className={styles.formInput} 
                    placeholder="00-0000-0000" 
                    value={formData.contact}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <div className={styles.textareaWrapper}>
                  <textarea 
                    id="message" 
                    name="message" 
                    className={styles.formTextarea} 
                    placeholder="Enter your message here" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                <span className={styles.buttonText}>Submit</span>
              </button>
            </form>
          </div>
          
          <div className={styles.imageContainer}>
            <img src={contactImage} alt="Contact" className={styles.contactImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
