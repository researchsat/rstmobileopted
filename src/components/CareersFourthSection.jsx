import React from 'react';
import styles from '../styles/components/CareersFourthSection.module.css';
import linkedinIcon from '../assets/images/linkedin-square-logo.svg';
import openInNewIcon from '../assets/images/open-in-new-careers.svg';

const CareersFourthSection = () => {
  // Job listings data
  const jobListings = [
    {
      title: 'Sales Manager',
      experience: '8yrs+ | AU',
      postedDate: '4 days ago'
    },

  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          Not just a career, build future
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.iconContainer}>
            <img className={styles.linkedinIcon} src={linkedinIcon} alt="LinkedIn" />
          </div>
          <div className={styles.sectionTitle}>Latest opportunities</div>
        </div>

        <div className={styles.jobsContainer}>
          <div className={styles.jobsList}>
            {jobListings.map((job, index) => (
              <div key={index} className={styles.jobItem}>
                <div className={styles.jobItemInner}>
                  <div className={styles.jobItemContent}>
                    <div className={styles.jobDetails}>
                      <div className={styles.jobTitle}>
                        {job.title}
                      </div>
                      <div className={styles.jobExperience}>{job.experience}</div>
                    </div>
                    <div className={styles.jobDate}>{job.postedDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://linkedin.com/company/researchsat" target="_blank" rel="noopener noreferrer" className={styles.button}>
            <img className={styles.buttonIcon} src={openInNewIcon} alt="" />
            <span className={styles.buttonText}>Discover All Openings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersFourthSection;
