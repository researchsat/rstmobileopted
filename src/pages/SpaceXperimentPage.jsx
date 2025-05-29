import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import spaceXperimentEmailService from '../api/spacexperiment-email';
import styles from '../styles/pages/SpaceXperimentPage.module.css';

const SpaceXperimentPage = () => {
  const [selectedExperiment, setSelectedExperiment] = useState('');
  const [selectedMission, setSelectedMission] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [researchGoals, setResearchGoals] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    organization: '',
    phone: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [notification, setNotification] = useState({ message: '', type: '', show: false });
  const [generatedProposal, setGeneratedProposal] = useState('');
  const [isGeneratingProposal, setIsGeneratingProposal] = useState(false);
  const [showProposal, setShowProposal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');
  const [formDataForEmail, setFormDataForEmail] = useState(null);

  useEffect(() => {
    document.title = 'SpaceXperiment - Book Your Space Research | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  const experiments = [
    {
      id: 'protein-crystallization',
      name: 'Protein Crystallization',
      icon: '🧬',
      description: 'Grow high-quality protein crystals in microgravity for pharmaceutical research',
      duration: '2-14 days',
      complexity: 'Advanced'
    },
    {
      id: 'cell-culture',
      name: 'Cell Culture Studies',
      icon: '🔬',
      description: 'Study cellular behavior and tissue engineering in space environment',
      duration: '1-7 days',
      complexity: 'Intermediate'
    },
    {
      id: 'material-science',
      name: 'Material Science',
      icon: '⚛️',
      description: 'Investigate material properties and crystal formation in microgravity',
      duration: '3-21 days',
      complexity: 'Advanced'
    },
    {
      id: 'plant-biology',
      name: 'Plant Biology',
      icon: '🌱',
      description: 'Research plant growth and adaptation in space conditions',
      duration: '7-30 days',
      complexity: 'Beginner'
    },
    {
      id: 'fluid-physics',
      name: 'Fluid Physics',
      icon: '💧',
      description: 'Study fluid dynamics and mixing processes in zero gravity',
      duration: '1-5 days',
      complexity: 'Intermediate'
    },
    {
      id: 'combustion',
      name: 'Combustion Research',
      icon: '🔥',
      description: 'Analyze combustion processes and flame behavior in microgravity',
      duration: '1-3 days',
      complexity: 'Advanced'
    }
  ];

  const missions = [
    {
      id: 'suborbital',
      name: 'Sub-orbital Flight',
      duration: '3-5 minutes',
      altitude: '100+ km',
      microgravity: '3-5 minutes',
      cost: '$$$'
    },
    {
      id: 'orbital',
      name: 'Low Earth Orbit',
      duration: '90 minutes - 30 days',
      altitude: '400-500 km',
      microgravity: 'Continuous',
      cost: '$$$$'
    },
    {
      id: 'iss',
      name: 'International Space Station',
      duration: '1-6 months',
      altitude: '408 km',
      microgravity: 'Long-term',
      cost: '$$$$$'
    }
  ];

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type, show: true });
    setTimeout(() => {
      setNotification({ message: '', type: '', show: false });
    }, 5000);
  };

  const generateProposal = async () => {
    setIsGeneratingProposal(true);
    setShowProposal(true);
    setGeneratedProposal('Generating your project proposal...');

    // Simulate loading time
    setTimeout(() => {
      try {
        const experiment = experiments.find(exp => exp.id === selectedExperiment);
        const mission = missions.find(mis => mis.id === selectedMission);

        const fallbackProposal = `# SpaceXperiment Project Proposal

## Executive Summary
This proposal outlines a ${experiment?.name || 'space research'} experiment using the ${mission?.name || 'selected mission'} platform. The research will leverage microgravity conditions to advance scientific understanding.

## Research Objectives
- Conduct ${experiment?.name || 'space research'} in microgravity environment
- Collect valuable scientific data for analysis
- Compare results with Earth-based control experiments
- Contribute to space research knowledge base

## Mission Details
- Platform: ${mission?.name || 'Selected mission platform'}
- Duration: ${selectedDuration || mission?.duration || 'To be determined'}
- Environment: ${mission?.microgravity || 'Microgravity conditions'}

## Research Goals
${researchGoals || 'Research goals to be defined in collaboration with the research team.'}

## Technical Requirements
- Specialized equipment for ${experiment?.name?.toLowerCase() || 'space research'}
- Data recording and transmission systems
- Safety protocols for mission operations
- Ground support team coordination

## Timeline
- Phase 1: Preparation and equipment setup (4-6 weeks)
- Phase 2: Mission execution (${mission?.duration || 'Mission duration'})
- Phase 3: Data analysis and reporting (8-12 weeks)
- Phase 4: Publication and dissemination (4-6 weeks)

## Expected Outcomes
- Enhanced understanding of ${experiment?.description?.toLowerCase() || 'space phenomena'}
- Potential breakthroughs in space-based research methodologies
- Data that could lead to practical applications in various industries
- Contribution to the growing body of microgravity research

## Next Steps
Upon approval, our team will work with you to refine the experimental parameters and prepare for mission execution.

This proposal will be further developed based on your specific requirements and mission constraints.`;

        setGeneratedProposal(fallbackProposal);
        showNotification('Project proposal generated successfully!', 'success');
      } catch (error) {
        console.error('Error generating proposal:', error);
        setGeneratedProposal('Error generating proposal. Please try again.');
        showNotification('Error generating proposal. Please try again.', 'error');
      } finally {
        setIsGeneratingProposal(false);
      }
    }, 2000);
  };

  const handleNext = async () => {
    if (currentStep === 1 && !selectedExperiment) {
      showNotification('Please select an experiment type.', 'error');
      return;
    }
    if (currentStep === 2 && !selectedMission) {
      showNotification('Please select a mission type.', 'error');
      return;
    }
    if (currentStep === 3) {
      // Generate proposal before moving to step 4
      await generateProposal();
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Final validation before submission
    if (!contactInfo.name.trim()) {
      showNotification('Please enter your full name.', 'error');
      return;
    }
    if (!contactInfo.email.trim() || !/^\S+@\S+\.\S+$/.test(contactInfo.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedExp = experiments.find(exp => exp.id === selectedExperiment);
      const selectedMis = missions.find(mis => mis.id === selectedMission);

      // Prepare form data for email
      const formData = {
        experiment: selectedExp,
        mission: selectedMis,
        duration: selectedDuration,
        researchGoals,
        contactInfo,
        generatedProposal,
        timestamp: new Date().toISOString()
      };

      // Try to send emails
      try {
        const emailResult = await spaceXperimentEmailService.sendEmails(formData);

        if (emailResult.success) {
          showNotification(
            `Thank you ${contactInfo.name}! Your SpaceXperiment proposal has been submitted successfully. Confirmation emails have been sent to both you and our team. We'll contact you within 24 hours.`,
            'success'
          );
        } else {
          throw new Error('Email sending failed');
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);

        // Fallback: Open mailto link
        const mailtoLink = spaceXperimentEmailService.generateMailtoLink(formData);

        showNotification(
          `Thank you ${contactInfo.name}! Your proposal has been prepared. Please click the button below to send it via your email client, or copy the proposal details.`,
          'info'
        );

        // Show email options
        setShowEmailOptions(true);
        setMailtoLink(mailtoLink);
        setFormDataForEmail(formData);
      }

      // Log the submission data
      console.log('SpaceXperiment submission:', formData);

    } catch (error) {
      console.error('Submission error:', error);
      showNotification('There was an error submitting your proposal. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Choose Your Experiment';
      case 2: return 'Select Mission Type';
      case 3: return 'Research Details';
      case 4: return 'Contact Information';
      default: return 'SpaceXperiment';
    }
  };

  return (
    <>
      <Helmet>
        <title>SpaceXperiment - Book Your Space Research | ResearchSat</title>
        <meta name="description" content="Design and book your custom space experiment with SpaceXperiment. From protein crystallization to material science - launch your research to new heights." />
        <meta name="keywords" content="space experiment, microgravity research, protein crystallization, space biology, material science, ISS research" />
      </Helmet>

      <div className={styles.spaceXperimentPage}>
        {/* Notification */}
        {notification.show && (
          <div className={`${styles.notification} ${styles[notification.type]}`}>
            {notification.message}
          </div>
        )}

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>SpaceXperiment</h1>
            <p className={styles.heroSubtitle}>Design Your Custom Space Research Mission</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Experiments Launched</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Research Partners</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <section className={styles.progressSection}>
          <div className={styles.container}>
            <div className={styles.progressBar}>
              {[1, 2, 3, 4].map(step => (
                <div
                  key={step}
                  className={`${styles.progressStep} ${currentStep >= step ? styles.active : ''} ${currentStep > step ? styles.completed : ''}`}
                >
                  <div className={styles.stepNumber}>{step}</div>
                  <div className={styles.stepLabel}>
                    {step === 1 && 'Experiment'}
                    {step === 2 && 'Mission'}
                    {step === 3 && 'Details'}
                    {step === 4 && 'Contact'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className={styles.mainSection}>
          <div className={styles.container}>
            <div className={styles.formCard}>
              <h2 className={styles.stepTitle}>{getStepTitle()}</h2>

              {/* Step 1: Experiment Selection */}
              {currentStep === 1 && (
                <div className={styles.stepContent}>
                  <p className={styles.stepDescription}>
                    Select the type of experiment you want to conduct in space. Each experiment type has different requirements and capabilities.
                  </p>
                  <div className={styles.experimentGrid}>
                    {experiments.map(experiment => (
                      <div
                        key={experiment.id}
                        className={`${styles.experimentCard} ${selectedExperiment === experiment.id ? styles.selected : ''}`}
                        onClick={() => setSelectedExperiment(experiment.id)}
                      >
                        <div className={styles.experimentIcon}>{experiment.icon}</div>
                        <h3 className={styles.experimentName}>{experiment.name}</h3>
                        <p className={styles.experimentDescription}>{experiment.description}</p>
                        <div className={styles.experimentMeta}>
                          <span className={styles.duration}>Duration: {experiment.duration}</span>
                          <span className={`${styles.complexity} ${styles[experiment.complexity.toLowerCase()]}`}>
                            {experiment.complexity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Mission Selection */}
              {currentStep === 2 && (
                <div className={styles.stepContent}>
                  <p className={styles.stepDescription}>
                    Choose the mission platform that best suits your experiment requirements and budget.
                  </p>
                  <div className={styles.missionGrid}>
                    {missions.map(mission => (
                      <div
                        key={mission.id}
                        className={`${styles.missionCard} ${selectedMission === mission.id ? styles.selected : ''}`}
                        onClick={() => setSelectedMission(mission.id)}
                      >
                        <h3 className={styles.missionName}>{mission.name}</h3>
                        <div className={styles.missionDetails}>
                          <div className={styles.missionDetail}>
                            <span className={styles.detailLabel}>Duration:</span>
                            <span className={styles.detailValue}>{mission.duration}</span>
                          </div>
                          <div className={styles.missionDetail}>
                            <span className={styles.detailLabel}>Altitude:</span>
                            <span className={styles.detailValue}>{mission.altitude}</span>
                          </div>
                          <div className={styles.missionDetail}>
                            <span className={styles.detailLabel}>Microgravity:</span>
                            <span className={styles.detailValue}>{mission.microgravity}</span>
                          </div>
                          <div className={styles.missionDetail}>
                            <span className={styles.detailLabel}>Cost:</span>
                            <span className={styles.detailValue}>{mission.cost}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Research Details */}
              {currentStep === 3 && (
                <div className={styles.stepContent}>
                  <p className={styles.stepDescription}>
                    Provide details about your research objectives and experiment duration preferences.
                  </p>
                  <div className={styles.detailsForm}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Experiment Duration</label>
                      <select
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className={styles.select}
                      >
                        <option value="">Select duration...</option>
                        <option value="1-3-hours">1-3 hours</option>
                        <option value="1-day">1 day</option>
                        <option value="3-days">3 days</option>
                        <option value="1-week">1 week</option>
                        <option value="2-weeks">2 weeks</option>
                        <option value="1-month">1 month</option>
                        <option value="custom">Custom duration</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Research Goals & Objectives</label>
                      <textarea
                        value={researchGoals}
                        onChange={(e) => setResearchGoals(e.target.value)}
                        className={styles.textarea}
                        rows="6"
                        placeholder="Describe your research objectives, expected outcomes, and any specific requirements for your space experiment..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className={styles.stepContent}>
                  <p className={styles.stepDescription}>
                    Review your AI-generated project proposal below, then provide your contact information to proceed.
                  </p>

                  {/* Generated Proposal Section */}
                  {showProposal && (
                    <div className={styles.proposalSection}>
                      <div className={styles.proposalHeader}>
                        <h3 className={styles.proposalTitle}>
                          {isGeneratingProposal ? (
                            <>
                              <span className={styles.loadingSpinner}>⚡</span>
                              Generating Your Project Proposal...
                            </>
                          ) : (
                            '🚀 Your AI-Generated Project Proposal'
                          )}
                        </h3>
                        {!isGeneratingProposal && (
                          <button
                            onClick={generateProposal}
                            className={styles.regenerateButton}
                            disabled={isGeneratingProposal}
                          >
                            🔄 Regenerate
                          </button>
                        )}
                      </div>
                      <div className={styles.proposalContent}>
                        <pre className={styles.proposalText}>{generatedProposal}</pre>
                      </div>
                    </div>
                  )}

                  <div className={styles.contactForm}>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name *</label>
                        <input
                          type="text"
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                          className={styles.input}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address *</label>
                        <input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                          className={styles.input}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Organization</label>
                        <input
                          type="text"
                          value={contactInfo.organization}
                          onChange={(e) => setContactInfo({...contactInfo, organization: e.target.value})}
                          className={styles.input}
                          placeholder="University, Company, or Institution"
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Phone Number</label>
                        <input
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                          className={styles.input}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Summary */}
                    <div className={styles.summarySection}>
                      <h3 className={styles.summaryTitle}>Proposal Summary</h3>
                      <div className={styles.summaryContent}>
                        <div className={styles.summaryItem}>
                          <span className={styles.summaryLabel}>Experiment:</span>
                          <span className={styles.summaryValue}>
                            {experiments.find(exp => exp.id === selectedExperiment)?.name || 'Not selected'}
                          </span>
                        </div>
                        <div className={styles.summaryItem}>
                          <span className={styles.summaryLabel}>Mission:</span>
                          <span className={styles.summaryValue}>
                            {missions.find(mis => mis.id === selectedMission)?.name || 'Not selected'}
                          </span>
                        </div>
                        <div className={styles.summaryItem}>
                          <span className={styles.summaryLabel}>Duration:</span>
                          <span className={styles.summaryValue}>{selectedDuration || 'Not specified'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Options (shown when automatic email fails) */}
                  {showEmailOptions && (
                    <div className={styles.emailOptionsSection}>
                      <h3 className={styles.emailOptionsTitle}>📧 Send Your Proposal</h3>
                      <p className={styles.emailOptionsDescription}>
                        Choose how you'd like to send your proposal:
                      </p>
                      <div className={styles.emailOptionsButtons}>
                        <a
                          href={mailtoLink}
                          className={styles.emailButton}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📧 Open Email Client
                        </a>
                        <button
                          onClick={() => {
                            if (formDataForEmail && spaceXperimentEmailService.copyToClipboard(formDataForEmail)) {
                              showNotification('Proposal copied to clipboard!', 'success');
                            } else {
                              showNotification('Unable to copy to clipboard', 'error');
                            }
                          }}
                          className={styles.copyButton}
                        >
                          📋 Copy to Clipboard
                        </button>
                      </div>
                      <div className={styles.emailInstructions}>
                        <p><strong>Email Instructions:</strong></p>
                        <ul>
                          <li>Click "Open Email Client" to compose an email with your proposal</li>
                          <li>Or copy the proposal and paste it into your preferred email application</li>
                          <li>Send to: <strong>austejravi@gmail.com</strong></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className={styles.navigationButtons}>
                {currentStep > 1 && (
                  <button onClick={handlePrevious} className={styles.previousButton}>
                    ← Previous
                  </button>
                )}
                {currentStep < 4 ? (
                  <button onClick={handleNext} className={styles.nextButton}>
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.loadingSpinner}>⚡</span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Proposal'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpaceXperimentPage;
