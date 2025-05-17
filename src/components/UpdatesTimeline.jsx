import React, { useState } from 'react';
import styles from '../styles/components/UpdatesTimeline.module.css';

const UpdatesTimeline = () => {
  const [activeYear, setActiveYear] = useState('2025');

  // Timeline data from updates.md - organized by year sections
  const timelineData = {
    '2025': [
      {
        id: '2025-1',
        title: 'Lot Fourteen Feature on Microgravity Breakthroughs',
        date: '21 Apr 2025',
        content: "Adelaide's Lot Fourteen innovation precinct profiled ResearchSat's expansion in South Australia, emphasising plans to scale bacteria‑based experiments and orbital manufacturing after earlier sub‑orbital successes.",
        links: [
          { url: 'https://lotfourteen.com.au/news/a-start-up-blasts-off-with-microgravity-research-at-the-forefront-of-its-mission/?utm_source=chatgpt.com', label: 'lotfourteen.com.au' }
        ],
        category: 'Media'
      },
      {
        id: '2025-2',
        title: 'Industry Recognition – Start‑ups to Watch 2025',
        date: 'Apr 2025',
        content: "SpaceConnect Online listed ResearchSat among Australia's five most innovative space ventures, citing AI‑driven feedback loops and scalable bioreactor design.",
        links: [
          { url: 'https://spaceanddefense.io/aicraft-and-researchsat-partner/?utm_source=chatgpt.com', label: 'spaceanddefense.io' }
        ],
        category: 'Recognition'
      },
      {
        id: '2025-3',
        title: 'Cryogenics Alliance with Onnes Cryogenics',
        date: '26 Mar 2025',
        content: "ResearchSat announced a strategic partnership with Dutch‑Australian cryogenic pioneer Onnes Cryogenics to integrate advanced zero‑boil‑off cooling into forthcoming bioreactor satellites, enabling temperature‑sensitive pharma workflows in orbit. The accord was celebrated during a South‑Australian trade mission to Hyderabad.",
        links: [
          { url: 'https://www.linkedin.com/company/onnes-cryogenics/?utm_source=chatgpt.com', label: 'linkedin.com' },
          { url: 'https://hybiz.tv/hyderabad-and-south-australia-strengthen-innovation-ties/?utm_source=chatgpt.com', label: 'hybiz.tv' }
        ],
        category: 'Partnership'
      },
      {
        id: '2025-4',
        title: 'LinkedIn Knowledge Series – Regenerative Medicine in Space',
        date: '19 Mar 2025',
        content: "A widely‑shared LinkedIn post explored how microgravity modulates stem‑cell pathways, positioning space bioprocessing as a cornerstone for next‑gen therapies.",
        links: [
          { url: 'https://www.linkedin.com/pulse/forging-path-pharmaceutical-industry-researchsat?utm_source=chatgpt.com', label: 'linkedin.com' }
        ],
        category: 'Research'
      },
      {
        id: '2025-5',
        title: 'Editorial: Space Bioreactors as Catalysts for Discovery',
        date: '08 Mar 2025',
        content: "In a long‑form article, ResearchSat detailed its roadmap for in‑space tissue engineering, drug discovery, and food‑tech applications of its proprietary ADI‑Lab platform.",
        links: [
          { url: 'https://www.linkedin.com/pulse/forging-path-pharmaceutical-industry-researchsat?utm_source=chatgpt.com', label: 'linkedin.com' }
        ],
        category: 'Article'
      }
    ],
    '2024': [
      {
        id: '2024-1',
        title: 'ResearchSat Missions Page Refresh',
        date: 'Sep 2024',
        content: "A comprehensive update to ResearchSat's missions portal detailed new sub‑orbital and low‑Earth‑orbit offerings, including module choices for protein crystallisation, antimicrobial resistance studies, and cell‑culture bioreactors.",
        links: [
          { url: 'https://researchsat.space/missions.html?utm_source=chatgpt.com', label: 'researchsat.space' }
        ],
        category: 'Website'
      },
      {
        id: '2024-2',
        title: 'ICC Newsletter – Cryogenics Partnership Spotlight',
        date: 'Aug 2024',
        content: "UniSA's Innovation & Collaboration Centre newsletter showcased progress on the ResearchSat × Onnes Cryogenics venture, noting Seed Fund support and cross‑border tech transfer.",
        links: [
          { url: 'https://icc.unisa.edu.au/newsletters/august-2024/?utm_source=chatgpt.com', label: 'icc.unisa.edu.au' }
        ],
        category: 'Media'
      },
      {
        id: '2024-3',
        title: 'SASIC Announcement – In‑Orbit Experiment Partnership',
        date: '18 Jan 2024',
        content: "The South Australian Space Industry Centre highlighted the ResearchSat‑AICRAFT collaboration as a catalyst for new microgravity data‑sets and satellite operations fine‑tuning ahead of a December‑2024 sub‑orbital demonstrator mission.",
        links: [
          { url: 'https://sasic.sa.gov.au/events-news-media/news/partnering-to-further-in-orbit-experiments/?utm_source=chatgpt.com', label: 'sasic.sa.gov.au' },
          { url: 'https://www.australiandefence.com.au/defence/cyber-space/aicraft-and-researchsat-sign-mou?utm_source=chatgpt.com', label: 'australiandefence.com.au' }
        ],
        category: 'Announcement'
      },
      {
        id: '2024-4',
        title: 'MoU with AICRAFT for Edge‑AI Payloads',
        date: '17 Jan 2024',
        content: "A Memorandum of Understanding with edge‑computing firm AICRAFT will embed real‑time on‑orbit analytics into biological payloads, reducing downlink bandwidth and accelerating experiment iteration cycles.",
        links: [
          { url: 'https://news.satnews.com/2024/01/17/aicraft-and-researchsat-partner-for-management-of-biological-experiments-in-space/?utm_source=chatgpt.com', label: 'news.satnews.com' },
          { url: 'https://spaceanddefense.io/aicraft-and-researchsat-partner/?utm_source=chatgpt.com', label: 'spaceanddefense.io' }
        ],
        category: 'Partnership'
      }
    ],
    '2023-2022': [
      {
        id: '2023-1',
        title: 'Thought‑Leadership Articles on LinkedIn',
        date: '2023',
        content: "Series of articles including \"Space, Science & Medicines\" (23 Oct 2023) outlining microgravity‑driven drug‑discovery economics, \"From Stars to Cells\" (15 Aug 2023) linking space‑biology insights to terrestrial health advances, and \"Space & Agriculture Industry\" (06 Jul 2023) examining microgravity's role in climate‑resilient crop R&D.",
        links: [
          { url: 'https://www.linkedin.com/pulse/forging-path-pharmaceutical-industry-researchsat?utm_source=chatgpt.com', label: 'LinkedIn: Pharmaceutical Industry' },
          { url: 'https://www.linkedin.com/pulse/from-stars-cells-impact-space-biology-earthly-health-researchsat?utm_source=chatgpt.com', label: 'LinkedIn: Space Biology' }
        ],
        category: 'Articles'
      },
      {
        id: '2023-2022-1',
        title: 'ADI‑Alpha CubeSat Launch & Follow‑Up',
        date: 'Nov 2022 → 2023',
        content: "ResearchSat's first micro‑CubeSat, ADI‑Alpha, reached sub‑orbital space on 23 Nov 2022 aboard SSC's SubOrbital Express‑3, achieving six minutes of <10⁻⁶ g microgravity for pharma payloads and safely recovering in Sweden. The milestone remained a reference point in 2023 media and investor communications.",
        links: [
          { url: 'https://www.lotfourteen.com.au/news/space-medtech-startup-takes-clinical-research-to-new-heights-to-improve-human-health-on-earthand-beyond/?utm_source=chatgpt.com', label: 'lotfourteen.com.au' },
          { url: 'https://sasic.sa.gov.au/events-news-media/news/local-start-up-reaches-new-heights-for-biomedical-space-research/?utm_source=chatgpt.com', label: 'sasic.sa.gov.au' },
          { url: 'https://sscspace.com/twelve-experiments-to-space-from-sweden/?utm_source=chatgpt.com', label: 'sscspace.com' }
        ],
        category: 'Mission'
      },
      {
        id: '2022-1',
        title: 'Lot Fourteen Early‑Stage Profile',
        date: 'Aug 2022',
        content: "A pre‑launch feature chronicled ResearchSat's incubation at Lot Fourteen and its ambitions to accelerate antibiotic R&D by sending bacteria into space, foreshadowing the ADI‑Alpha mission.",
        links: [
          { url: 'https://lotfourteen.com.au/news/a-start-up-blasts-off-with-microgravity-research-at-the-forefront-of-its-mission/?utm_source=chatgpt.com', label: 'lotfourteen.com.au' }
        ],
        category: 'Media'
      }
    ]
  };

  // Get years from the data
  const years = Object.keys(timelineData);

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineHeader}>
        <h2 className={styles.timelineTitle}>ResearchSat Updates Timeline</h2>
        <p className={styles.timelineSubtitle}>
          A chronological view of our journey from 2022 to present
        </p>

        <div className={styles.timelineYearSelector}>
          {years.map(year => (
            <button
              key={year}
              className={`${styles.yearButton} ${activeYear === year ? styles.activeYear : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>

        {timelineData[activeYear].map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timelinePoint}></div>

            <div className={styles.timelineDate}>
              {item.date}
            </div>

            <div className={styles.timelineContent}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineCategory}>{item.category}</span>
              </div>

              <h3 className={styles.timelineItemTitle}>{item.title}</h3>
              <p className={styles.timelineItemContent}>{item.content}</p>

              {item.links && item.links.length > 0 && (
                <div className={styles.timelineLinks}>
                  <span className={styles.timelineLinksLabel}>Sources:</span>
                  <div className={styles.timelineLinksList}>
                    {item.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.timelineLink}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className={styles.timelineEnd}>
          <span className={styles.timelineEndLabel}>Compiled: 06 May 2025 (UTC +09:30)</span>
        </div>
      </div>
    </div>
  );
};

export default UpdatesTimeline;
