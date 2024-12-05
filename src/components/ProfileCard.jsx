import React from 'react';
import './ProfileCard.css';  // Make sure to import the CSS file

const ProfileCard = () => {
return (
<div className="profile-card">
    <div className="profile-card-content">
    <img src="your-image-url.jpg" alt="Profile" className="profile-image" />
    <h2 className="name">Your Name</h2>
    <p className="description">A brief description about yourself, your goals, or interests.</p>
    
    <div className="social-links">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i> Twitter
        </a>
    </div>
    </div>
</div>
);
};

export default ProfileCard;
