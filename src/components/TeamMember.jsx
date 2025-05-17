import React from 'react';

const TeamMember = ({ image, name, title, linkedIn }) => {
  return (
    <div className="team-member">
      <div className="image-wrapper">
        <img className="img-fluid" src={image} alt={name} />
      </div>
      <p className="p-large"><strong>{name}</strong></p>
      <p className="job-title">{title}</p>
      <span className="social-icons">
        <span className="fa-stack">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-linkedin-in fa-stack-1x"></i>
          </a>
        </span>
      </span>
    </div>
  );
};

export default TeamMember;
