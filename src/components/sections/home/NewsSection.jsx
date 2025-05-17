import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/NewsSection.module.css';
import avatarImg from '../assets/images/news/avatar-square.svg';
import arrowIcon from '../assets/images/news/arrow-icon.svg';
import paginationArrow from '../assets/images/news/pagination-arrow-right.svg';

const NewsSection = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const newsCardsRef = useRef(null);
  const totalPages = 4; // Total number of pages

  // Function to calculate visible card index based on scroll position
  const updateActivePageFromScroll = () => {
    if (!newsCardsRef.current) return;

    const scrollLeft = newsCardsRef.current.scrollLeft;
    const cardWidth = 305; // Width of a card
    const gap = 16; // Gap between cards
    const visibleCardIndex = Math.round(scrollLeft / (cardWidth + gap)) + 1;

    // Only update if the page has changed
    if (visibleCardIndex !== currentPage && visibleCardIndex >= 1 && visibleCardIndex <= totalPages) {
      setCurrentPage(visibleCardIndex);
    }
  };

  // Add scroll event listener with throttling for better performance
  useEffect(() => {
    const cardsContainer = newsCardsRef.current;
    if (cardsContainer) {
      // Throttle function to improve scroll performance
      let isScrolling = false;
      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
          window.requestAnimationFrame(() => {
            updateActivePageFromScroll();
            isScrolling = false;
          });
        }
      };

      cardsContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        cardsContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentPage]);

  // Ensure the cards are properly positioned on component mount
  useEffect(() => {
    if (newsCardsRef.current) {
      // Force a reflow to ensure proper positioning
      setTimeout(() => {
        handlePageChange(currentPage);
      }, 100);
    }
  }, []);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Calculate scroll position
    if (newsCardsRef.current) {
      const cardWidth = 305; // Width of a card
      const gap = 16; // Gap between cards
      const scrollAmount = (pageNumber - 1) * (cardWidth + gap);

      // Use smooth scrolling with a slight delay to ensure animation works properly
      setTimeout(() => {
        newsCardsRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }, 10);
    }
  };

  // Function to handle next page
  const handleNextPage = () => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
    handlePageChange(nextPage);
  };

  // Function to handle previous page
  const handlePrevPage = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : totalPages;
    handlePageChange(prevPage);
  };

  // News card data
  const newsCards = [
    {
      id: 1,
      category: 'Missions',
      title: 'Exploring the Final Frontier: Future of Space Research',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000)'
    },
    {
      id: 2,
      category: 'Missions',
      title: 'Exploring the Final Frontier: Future of Space Research',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000)'
    },
    {
      id: 3,
      category: 'Missions',
      title: 'Exploring the Final Frontier: Future of Space Research',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000)'
    },
    {
      id: 4,
      category: 'Missions',
      title: 'Exploring the Final Frontier: Future of Space Research',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1000)'
    },
    {
      id: 5,
      category: 'Missions',
      title: 'Exploring the Final Frontier: Future of Space Research',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000)'
    }
  ];

  return (
    <section className={`${styles.newsSection} parallax-section`}>
      <div className={`${styles.container} parallax-content`}>
        {/* Header */}
        <div className={styles.newsLabel}>_News</div>
        <h2 className={styles.newsTitle}>Here's what's new with us</h2>

        {/* View All Button */}
        <Link to="/news" className={styles.viewAllButton}>
          View All
        </Link>

        {/* News Content */}
        <div className={styles.newsContent}>
          {/* Featured Article */}
          <div className={styles.featuredArticle}>
            <div className={styles.authorImage}>
              <img src={avatarImg} alt="John Kelly" />
            </div>
            <h3 className={styles.authorName}>John Kelly</h3>
            <p className={styles.articleExcerpt}>
              ResearchSat offers a variety of cutting-edge capabilities and features designed to advance the field of
              space biology research features designed to advance the field of space biology...
            </p>
            <Link to="/news/article" className={styles.readMoreLink}>
              Read More
            </Link>
          </div>

          {/* News Cards */}
          <div className={styles.newsCardsContainer}>
            <div className={styles.newsCards} ref={newsCardsRef}>
              {newsCards.map((card) => (
                <Link
                  to={`/news/article/${card.id}`}
                  key={card.id}
                  className={styles.newsCard}
                  style={{ backgroundImage: card.backgroundImage }}
                >
                  <img src={arrowIcon} alt="" className={styles.cardIcon} />
                  <div className={styles.cardDetails}>
                    <div className={styles.cardCategory}>{card.category}</div>
                    <h4 className={styles.cardTitle}>{card.title}</h4>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
              <div className={styles.prevPage} onClick={handlePrevPage}>
                <img src={paginationArrow} alt="Previous Page" className={styles.prevArrow} />
              </div>
              <div
                className={`${styles.pageNumber} ${currentPage === 1 ? styles.active : ''}`}
                onClick={() => handlePageChange(1)}
              >
                1
              </div>
              <div
                className={`${styles.pageNumber} ${currentPage === 2 ? styles.active : ''}`}
                onClick={() => handlePageChange(2)}
              >
                2
              </div>
              <div
                className={`${styles.pageNumber} ${currentPage === 3 ? styles.active : ''}`}
                onClick={() => handlePageChange(3)}
              >
                3
              </div>
              <div
                className={`${styles.pageNumber} ${currentPage === 4 ? styles.active : ''}`}
                onClick={() => handlePageChange(4)}
              >
                4
              </div>
              <div className={styles.nextPage} onClick={handleNextPage}>
                <img src={paginationArrow} alt="Next Page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
