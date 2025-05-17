import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-content">
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn-solid-reg">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
