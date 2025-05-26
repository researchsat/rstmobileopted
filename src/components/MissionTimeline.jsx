import React from 'react';
import styles from '../styles/components/MissionTimeline.module.css';

const MissionTimeline = () => {
  const timelineSteps = [
    {
      id: 1,
      title: "Mission Mandate",
      icon: "🔬",
      description: "Research proposal to mission-ready framework"
    },
    {
      id: 2,
      title: "Regulatory Approval",
      icon: "✅",
      description: "Compliance & authorization processes"
    },
    {
      id: 3,
      title: "Payload Design & Build",
      icon: "🛰️",
      description: "Custom hardware engineering"
    },
    {
      id: 4,
      title: "Launch Scheduling",
      icon: "📅",
      description: "Optimal launch window coordination"
    },
    {
      id: 5,
      title: "Rocket Launch",
      icon: "🚀",
      description: "Mission execution & deployment"
    },
    {
      id: 6,
      title: "Operations & Data",
      icon: "📡",
      description: "Real-time monitoring & collection"
    },
    {
      id: 7,
      title: "Post-Mission Analysis",
      icon: "📊",
      description: "Data analysis & interpretation"
    },
    {
      id: 8,
      title: "Project Outcomes",
      icon: "🏆",
      description: "Publication-ready results"
    }
  ];

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineHeader}>
        <h3 className={styles.timelineTitle}>8-Step Mission Framework</h3>
        <p className={styles.timelineSubtitle}>From concept to cosmos - your complete journey</p>
      </div>

      <div className={styles.timeline}>
        {/* Progress Line */}
        <div className={styles.progressLine}>
          <div className={styles.progressFill}></div>
        </div>

        {/* Timeline Steps */}
        <div className={styles.timelineSteps}>
          {timelineSteps.map((step, index) => (
            <div key={step.id} className={styles.timelineStep}>
              {/* Step Node */}
              <div
                className={styles.stepNode}
                style={{ '--step-index': index }}
              >
                <div className={styles.stepNumber}>{step.id}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
              </div>

              {/* Step Content */}
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>

              {/* Connector (not for last step) */}
              {index < timelineSteps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionTimeline;
