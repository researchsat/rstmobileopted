import React from 'react';
import styles from '../styles/components/CareersSecondSection.module.css';
import group0Svg from '../assets/images/careers-group0.svg';
import group1Svg from '../assets/images/careers-group1.svg';
import group2Svg from '../assets/images/careers-group2.svg';
import frameSvg from '../assets/images/careers-frame.svg';

const CareersSecondSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          <span className={styles.textRegular}>At </span>
          <span className={styles.textHighlight}>ResearchSat</span>
          <span className={styles.textRegular}>
            , we are innovative problem solvers, just like you. No operation on
            earth has our unique<br />
            blend of portfolio diversity, stability and mobility. Here, you get
            much more than a one-and-done<br />
            job. You open doors to more than 04 different businesses united by a
            common cause: pioneering<br />
            the future of science and technology to solve the world's most
            complex challenges.
          </span>
        </p>
      </div>

      <div className={styles.bentoGrid}>
        <div className={styles.bentoRow}>
          <div className={styles.card}>
            <div className={styles.cardDetails}>
              <div className={styles.cardHeading}>
                <div className={styles.frameContainer}>
                  <div className={styles.cardTitle}>
                    01<br />Team
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.columnContainer}>
            <div className={styles.card2}>
              <div className={styles.logoContainer}></div>
            </div>
            <div className={styles.card3}>
              <div className={styles.cardDetails}>
                <div className={styles.cardHeading}>
                  <div className={styles.frameContainer}>
                    <div className={styles.cardTitle2}>
                      Join our Talent Community
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card4}>
            <div className={styles.cardDetails}>
              <div className={styles.cardHeading}>
                <div className={styles.frameContainer}>
                  <div className={styles.cardTitle3}>
                    <span>
                      <span className={styles.textRegular}>
                        Represent your industry sector in
                      </span>
                      <span className={styles.textItalic}> Space</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card5}>
            <div className={styles.cardDetails2}>
              <div className={styles.cardHeading}>
                <div className={styles.frameContainer2}>
                  <div className={styles.cardTitle4}>
                    Conduct cutting-edge research
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.number}>04</div>
        <div className={styles.areasText}>Areas of Expertise</div>

        <div className={styles.svgContainer1}>
          <img className={styles.svgImage1} src={group0Svg} alt="" />
        </div>

        <div className={styles.svgContainer2}>
          <div className={styles.svgInnerContainer}>
            <img className={styles.svgImage2} src={group1Svg} alt="" />
          </div>
        </div>

        <div className={styles.svgContainer3}>
          <img className={styles.svgImage3} src={group2Svg} alt="" />
        </div>

        <img className={styles.frameSvg} src={frameSvg} alt="" />
      </div>
    </div>
  );
};

export default CareersSecondSection;
