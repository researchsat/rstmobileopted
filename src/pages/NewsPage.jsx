import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionDivider from '../components/SectionDivider';
import UpdatesTimeline from '../components/UpdatesTimeline';
import styles from '../styles/pages/NewsPage.module.css';
import avatarImg from '../assets/images/news/avatar-square.svg';
import arrowIcon from '../assets/images/news/arrow-icon.svg';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories for filtering
  const categories = ['All', 'Missions', 'Research', 'Technology', 'Partnerships'];

  // Featured news data
  const featuredNews = {
    id: 'featured-1',
    title: 'Exploring the Final Frontier: Future of Space Research',
    author: 'John Kelly',
    date: 'May 15, 2023',
    excerpt: 'ResearchSat offers a variety of cutting-edge capabilities and features designed to advance the field of space biology research features designed to advance the field of space biology...',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000'
  };

  // News articles data
  const newsArticles = [
    {
      id: 1,
      title: 'Exploring the Final Frontier: Future of Space Research',
      author: 'Sarah Johnson',
      date: 'June 10, 2023',
      excerpt: 'Our latest mission has successfully deployed multiple experiments to study the effects of microgravity on biological systems...',
      category: 'Missions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000'
    },
    {
      id: 2,
      title: 'New Partnerships Announced for Upcoming Missions',
      author: 'Michael Chen',
      date: 'May 28, 2023',
      excerpt: 'ResearchSat is proud to announce new partnerships with leading research institutions to expand our capabilities...',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000'
    },
    {
      id: 3,
      title: 'Breakthrough in Satellite Technology',
      author: 'Emily Rodriguez',
      date: 'May 20, 2023',
      excerpt: 'Our engineering team has developed a new miniaturized system that allows for more efficient data collection...',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000'
    },
    {
      id: 4,
      title: 'Research Results from Mission S1X-3',
      author: 'David Wilson',
      date: 'May 5, 2023',
      excerpt: 'The preliminary results from our recent mission show promising developments in understanding cellular adaptation...',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1000'
    },
    {
      id: 5,
      title: 'Upcoming Launch Schedule Announced',
      author: 'Lisa Park',
      date: 'April 22, 2023',
      excerpt: 'ResearchSat has finalized the launch schedule for the next six months, with five missions planned...',
      category: 'Missions',
      image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000'
    },
    {
      id: 6,
      title: 'New Research Opportunities for Academic Partners',
      author: 'Robert Taylor',
      date: 'April 15, 2023',
      excerpt: 'We are expanding our academic partnership program to include more universities and research institutions...',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=1000'
    }
  ];

  // Filter articles based on active category
  const filteredArticles = activeCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <>
      <SEO
        title="News | ResearchSat"
        description="Stay updated with the latest news, research findings, and mission updates from ResearchSat."
        keywords="ResearchSat news, space biology news, satellite research updates, space mission news"
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.label}>_News</div>
            <h1 className={styles.title}>Latest Updates from ResearchSat</h1>
            <p className={styles.subtitle}>
              Stay informed about our latest missions, research findings, and technological advancements
            </p>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className={styles.summarySection}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryContent}>
            <div className={styles.summaryWrapper}>
              <div className={styles.summaryInner}>
                <div className={styles.summaryText}>
                  ResearchSat is pioneering the future of space biology research, enabling groundbreaking discoveries in microgravity environments. Our innovative satellite platforms and bioreactors are unlocking new possibilities for pharmaceutical development, regenerative medicine, and sustainable technologies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Timeline Section */}
      <UpdatesTimeline />

      <SectionDivider />

      {/* News Articles Section */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          {/* Section Title */}
          <div className={styles.sectionTitleContainer}>
            <h2 className={styles.sectionTitle}>Featured Articles</h2>
            <p className={styles.sectionSubtitle}>Explore our collection of in-depth articles and research insights</p>
          </div>

          {/* Category Filter */}
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className={styles.newsGrid}>
            {filteredArticles.map(article => (
              <Link to={`/news/article/${article.id}`} key={article.id} className={styles.newsCard}>
                <div className={styles.newsCardImageContainer}>
                  <img src={article.image} alt={article.title} className={styles.newsCardImage} />
                  <img src={arrowIcon} alt="" className={styles.cardIcon} />
                </div>
                <div className={styles.newsCardContent}>
                  <div className={styles.newsCardMeta}>
                    <span className={styles.newsCardCategory}>{article.category}</span>
                    <span className={styles.newsCardDate}>{article.date}</span>
                  </div>
                  <h3 className={styles.newsCardTitle}>{article.title}</h3>
                  <p className={styles.newsCardExcerpt}>{article.excerpt}</p>
                  <div className={styles.newsCardAuthor}>
                    <img src={avatarImg} alt={article.author} className={styles.authorAvatar} />
                    <span className={styles.authorName}>{article.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </section>



      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
