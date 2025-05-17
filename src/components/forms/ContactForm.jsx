import React from 'react';
import styles from '../styles/components/ContactForm.module.css';
import useForm from '../hooks/useForm';
import useFormValidation from '../hooks/useFormValidation';
import useAppStore from '../store/appStore';

const ContactForm = () => {
  // Get notification function from global store
  const addNotification = useAppStore((state) => state.addNotification);

  // Define validation rules
  const validationRules = {
    name: {
      required: true,
      requiredMessage: 'Name is required'
    },
    email: {
      required: true,
      requiredMessage: 'Email is required',
      isEmail: true,
      emailMessage: 'Invalid email address'
    },
    message: {
      required: true,
      requiredMessage: 'Message is required',
      minLength: 10,
      minLengthMessage: 'Message must be at least 10 characters'
    }
  };

  // Create validation function
  const validate = useFormValidation(validationRules);

  // Handle form submission
  const handleSubmitForm = async (values) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success notification
    addNotification({
      type: 'success',
      message: 'Thank you for your message! We\'ll get back to you soon.',
      duration: 5000
    });

    // In a real app, you would call your API here
    console.log('Form submitted with values:', values);

    // Return true to indicate success
    return true;
  };

  // Use our custom form hook
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useForm(
    {
      name: '',
      email: '',
      message: '',
      organization: '',
      phone: ''
    },
    validate,
    handleSubmitForm,
    'contact-form'
  );

  return (
    <div className={styles.contactForm}>
      <h3>Send Us a Message</h3>

      {submitSuccess && (
        <div className={styles.successMessage}>
          <i className="fas fa-check-circle"></i> Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitError && (
        <div className={styles.errorMessage}>
          <i className="fas fa-exclamation-circle"></i> There was an error sending your message. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            className={`${styles.formControl} ${touched.name && errors.name ? styles.inputError : ''}`}
            name="name"
            placeholder="Name *"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={touched.name && errors.name ? 'true' : 'false'}
          />
          {touched.name && errors.name && <div className={styles.errorText}>{errors.name}</div>}
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            className={`${styles.formControl} ${touched.email && errors.email ? styles.inputError : ''}`}
            name="email"
            placeholder="Email *"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
          />
          {touched.email && errors.email && <div className={styles.errorText}>{errors.email}</div>}
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            className={styles.formControl}
            name="organization"
            placeholder="Organization"
            value={values.organization}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="tel"
            className={styles.formControl}
            name="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            className={`${styles.formControl} ${styles.textarea} ${touched.message && errors.message ? styles.inputError : ''}`}
            name="message"
            placeholder="Message *"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="6"
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={touched.message && errors.message ? 'true' : 'false'}
          ></textarea>
          {touched.message && errors.message && <div className={styles.errorText}>{errors.message}</div>}
        </div>

        <div className={styles.formGroup}>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {submitSuccess && (
              <button
                type="button"
                className={styles.resetButton}
                onClick={resetForm}
              >
                Reset Form
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
