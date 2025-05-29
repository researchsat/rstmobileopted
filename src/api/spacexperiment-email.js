// SpaceXperiment Email Service
class SpaceXperimentEmailService {
  constructor() {
    // EmailJS configuration
    this.serviceId = 'service_iyl6oaf'; // You'll need to set this up in EmailJS
    this.templateId = 'template_spacexperiment';
    this.publicKey = '--xHDfh3k5Lvpxc46'; // Replace with your EmailJS public key
    this.adminEmail = 'austejravi@gmail.com';
  }

  async sendEmails(formData) {
    try {
      // Send email to admin (you)
      await this.sendAdminEmail(formData);
      
      // Send confirmation email to user
      await this.sendUserConfirmationEmail(formData);
      
      return { success: true, message: 'Emails sent successfully' };
    } catch (error) {
      console.error('Error sending emails:', error);
      return { success: false, message: 'Failed to send emails' };
    }
  }

  async sendAdminEmail(formData) {
    const {
      experiment,
      mission,
      duration,
      researchGoals,
      contactInfo,
      generatedProposal
    } = formData;

    const emailContent = {
      to_email: this.adminEmail,
      subject: `New SpaceXperiment Proposal from ${contactInfo.name}`,
      message: `
NEW SPACEXPERIMENT PROPOSAL SUBMISSION
=====================================

CONTACT INFORMATION:
- Name: ${contactInfo.name}
- Email: ${contactInfo.email}
- Organization: ${contactInfo.organization || 'Not specified'}
- Phone: ${contactInfo.phone || 'Not specified'}

EXPERIMENT DETAILS:
- Experiment Type: ${experiment.name}
- Mission Platform: ${mission.name}
- Duration: ${duration || 'Not specified'}

RESEARCH GOALS:
${researchGoals || 'Not specified'}

GENERATED PROPOSAL:
${generatedProposal}

SUBMISSION TIME: ${new Date().toLocaleString()}
      `,
      from_name: 'SpaceXperiment System',
      reply_to: contactInfo.email
    };

    return this.sendEmailViaEmailJS(emailContent);
  }

  async sendUserConfirmationEmail(formData) {
    const { contactInfo, experiment, mission } = formData;

    const emailContent = {
      to_email: contactInfo.email,
      subject: 'SpaceXperiment Proposal Confirmation - ResearchSat',
      message: `
Dear ${contactInfo.name},

Thank you for submitting your SpaceXperiment proposal! We're excited about your ${experiment.name} research project using our ${mission.name} platform.

PROPOSAL SUMMARY:
- Experiment: ${experiment.name}
- Mission: ${mission.name}
- Submitted: ${new Date().toLocaleString()}

NEXT STEPS:
1. Our team will review your proposal within 24-48 hours
2. We'll contact you at ${contactInfo.email} to discuss details
3. If approved, we'll work with you to finalize mission parameters
4. Mission planning and execution timeline will be provided

Your proposal has been assigned a reference ID: SPX-${Date.now()}

If you have any questions, please don't hesitate to contact us.

Best regards,
The ResearchSat Team
Email: info@researchsat.space
Website: https://researchsat.space

---
This is an automated confirmation email from SpaceXperiment.
      `,
      from_name: 'ResearchSat SpaceXperiment',
      reply_to: 'info@researchsat.space'
    };

    return this.sendEmailViaEmailJS(emailContent);
  }

  async sendEmailViaEmailJS(emailData) {
    // Using EmailJS for client-side email sending
    // You'll need to include EmailJS in your project and configure it
    
    try {
      // For now, we'll use a fallback method since EmailJS requires setup
      return this.sendEmailViaFallback(emailData);
    } catch (error) {
      console.error('EmailJS error:', error);
      throw error;
    }
  }

  async sendEmailViaFallback(emailData) {
    // Fallback method using a simple API call
    // In production, you'd want to use a proper email service
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: emailData.to_email,
        subject: emailData.subject,
        message: emailData.message,
        from: emailData.from_name,
        replyTo: emailData.reply_to
      })
    });

    if (!response.ok) {
      throw new Error(`Email API error: ${response.status}`);
    }

    return response.json();
  }

  // Alternative method using mailto (opens user's email client)
  generateMailtoLink(formData) {
    const {
      experiment,
      mission,
      duration,
      researchGoals,
      contactInfo,
      generatedProposal
    } = formData;

    const subject = encodeURIComponent(`SpaceXperiment Proposal - ${experiment.name}`);
    const body = encodeURIComponent(`
Dear ResearchSat Team,

I would like to submit a SpaceXperiment proposal with the following details:

CONTACT INFORMATION:
Name: ${contactInfo.name}
Email: ${contactInfo.email}
Organization: ${contactInfo.organization || 'Not specified'}
Phone: ${contactInfo.phone || 'Not specified'}

EXPERIMENT DETAILS:
Experiment Type: ${experiment.name}
Mission Platform: ${mission.name}
Duration: ${duration || 'Not specified'}

RESEARCH GOALS:
${researchGoals || 'Not specified'}

GENERATED PROPOSAL:
${generatedProposal}

Please review my proposal and contact me to discuss the next steps.

Best regards,
${contactInfo.name}
    `);

    return `mailto:${this.adminEmail}?subject=${subject}&body=${body}`;
  }

  // Method to copy proposal to clipboard
  copyToClipboard(formData) {
    const {
      experiment,
      mission,
      duration,
      researchGoals,
      contactInfo,
      generatedProposal
    } = formData;

    const content = `
SPACEXPERIMENT PROPOSAL
======================

CONTACT: ${contactInfo.name} (${contactInfo.email})
EXPERIMENT: ${experiment.name}
MISSION: ${mission.name}
DURATION: ${duration || 'TBD'}

RESEARCH GOALS:
${researchGoals || 'Not specified'}

PROPOSAL:
${generatedProposal}
    `;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(content);
      return true;
    }
    return false;
  }
}

// Create and export singleton instance
const spaceXperimentEmailService = new SpaceXperimentEmailService();
export default spaceXperimentEmailService;
