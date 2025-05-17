/**
 * Email service utility for sending form submissions
 * This implementation uses EmailJS, but you can replace it with your preferred email service
 *
 * To use EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create a service (e.g., Gmail, Outlook)
 * 3. Create an email template with variables {{name}}, {{contact}}, and {{message}}
 * 4. Replace the service_id, template_id, and user_id below with your own
 */

import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS user ID

// Function to send email using EmailJS
export const sendEmail = async (formData) => {
  try {
    // EmailJS configuration
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your EmailJS template ID

    // Prepare the template parameters
    const templateParams = {
      to_email: 'info@researchsat.space',
      from_name: formData.name,
      contact: formData.contact,
      message: formData.message
    };

    // Send the email using EmailJS
    const response = await emailjs.send(serviceId, templateId, templateParams);

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      return { success: false, message: 'Failed to send email' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An error occurred while sending the email' };
  }
};

// Alternative implementation using a custom backend API
export const sendEmailViaBackend = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        contact: formData.contact,
        message: formData.message,
        to: 'info@researchsat.space'
      })
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message || 'Email sent successfully!' };
    } else {
      return { success: false, message: data.message || 'Failed to send email' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An error occurred while sending the email' };
  }
};
