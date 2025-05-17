import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionDivider from '../components/SectionDivider';
import styles from '../styles/pages/NewsArticlePage.module.css';
import avatarImg from '../assets/images/news/avatar-square.svg';

const NewsArticlePage = () => {
  const { id } = useParams();

  // This would normally come from an API or database
  // For now, we'll use a static article
  const article = {
    id: id,
    title: 'Exploring the Final Frontier: Future of Space Research',
    author: 'John Kelly',
    date: 'May 15, 2023',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
    content: `
      <p>Space biology research has always been at the forefront of scientific exploration, pushing the boundaries of our understanding of life in extreme environments. ResearchSat is proud to be leading the charge in this exciting field, with our innovative satellite platforms designed specifically for biological experiments in space.</p>

      <h2>The Importance of Space Biology</h2>

      <p>Understanding how living organisms respond to microgravity and space radiation is crucial for several reasons:</p>

      <ul>
        <li>It helps us prepare for long-duration human spaceflight missions</li>
        <li>It provides insights into fundamental biological processes that can't be observed under Earth's gravity</li>
        <li>It enables the development of new technologies and treatments that benefit life on Earth</li>
      </ul>

      <p>Our latest mission has successfully deployed multiple experiments designed to study cellular adaptation to the space environment. The preliminary results are promising and suggest new avenues for research in both space medicine and terrestrial applications.</p>

      <h2>Technological Innovations</h2>

      <p>ResearchSat's proprietary satellite platform incorporates several cutting-edge technologies:</p>

      <ul>
        <li>Advanced life support systems that maintain precise environmental conditions</li>
        <li>Real-time monitoring capabilities that allow researchers to adjust parameters during the mission</li>
        <li>Automated sample processing that maximizes experimental throughput</li>
        <li>Robust data transmission systems that ensure no valuable information is lost</li>
      </ul>

      <p>These innovations have made it possible to conduct experiments that were previously impossible or prohibitively expensive.</p>

      <h2>Future Directions</h2>

      <p>Looking ahead, ResearchSat is planning several exciting initiatives:</p>

      <ul>
        <li>Expanded partnerships with academic institutions to broaden research opportunities</li>
        <li>Development of next-generation satellite platforms with enhanced capabilities</li>
        <li>Longer-duration missions to study long-term adaptation to space</li>
        <li>Integration of artificial intelligence for autonomous experiment management</li>
      </ul>

      <p>We believe that the future of space biology research is incredibly bright, and we're committed to leading the way in this fascinating field.</p>
    `
  };

  // Related articles
  const relatedArticles = [
    {
      id: 'related-1',
      title: 'New Partnerships Announced for Upcoming Missions',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000'
    },
    {
      id: 'related-2',
      title: 'Breakthrough in Satellite Technology',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000'
    },
    {
      id: 'related-3',
      title: 'Research Results from Mission S1X-3',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1000'
    }
  ];

  return (
    <>
      <SEO
        title={`${article.title} | ResearchSat News`}
        description="Read the latest article from ResearchSat about space biology research and technological innovations."
        keywords="ResearchSat news, space biology research, satellite technology, space research"
      />

      {/* Article Hero Header */}
      <section className={styles.articleHero}>
        <div className={styles.heroImageContainer}>
          <img src={article.image} alt={article.title} className={styles.heroImage} />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.container}>
            <Link to="/news" className={styles.backLink}>
              &larr; Back to News
            </Link>
            <div className={styles.articleMeta}>
              <span className={styles.articleCategory}>{article.category}</span>
              <span className={styles.articleDate}>{article.date}</span>
            </div>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <div className={styles.articleAuthor}>
              <img src={avatarImg} alt={article.author} className={styles.authorAvatar} />
              <span className={styles.authorName}>{article.author}</span>
            </div>
          </div>
        </div>
      </section>


      {/* Article Summary Section */}
      <section className={styles.summarySection}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryContent}>
            <div className={styles.summaryWrapper}>
              <div className={styles.summaryInner}>
                <div className={styles.summaryText}>
                  Space biology research has always been at the forefront of scientific exploration,
                  pushing the boundaries of our understanding of life in extreme environments.
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Article Content */}
      <section className={styles.articleContent}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: article.content }}></div>

            <div className={styles.sidebar}>
              <div className={styles.shareSection}>
                <h3 className={styles.sidebarTitle}>Share This Article</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>Twitter</a>
                  <a href="#" className={styles.socialLink}>Facebook</a>
                  <a href="#" className={styles.socialLink}>LinkedIn</a>
                </div>
              </div>

              <div className={styles.tagsSection}>
                <h3 className={styles.sidebarTitle}>Tags</h3>
                <div className={styles.tagsList}>
                  <span className={styles.tag}>Space Biology</span>
                  <span className={styles.tag}>Research</span>
                  <span className={styles.tag}>Satellite</span>
                  <span className={styles.tag}>Microgravity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Related Articles */}
      <section className={styles.relatedArticles}>
        <div className={styles.container}>
          <h2 className={styles.relatedTitle}>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {relatedArticles.map(article => (
              <Link to={`/news/article/${article.id}`} key={article.id} className={styles.relatedCard}>
                <div className={styles.relatedImageContainer}>
                  <img src={article.image} alt={article.title} className={styles.relatedImage} />
                </div>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCategory}>{article.category}</span>
                  <h3 className={styles.relatedCardTitle}>{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Stay Updated</h2>
            <p className={styles.ctaDescription}>
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/news" className={styles.ctaButton}>
                More Articles
              </Link>
              <Link to="/contact" className={styles.ctaButtonOutline}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsArticlePage;
