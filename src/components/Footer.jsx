import React, { useEffect } from 'react';
import './Footer.scss'; // Ensure you have your CSS imported
import logo from '../assets/logo.png'; // Import your logo

const Footer = () => {
useEffect(() => {
const marker = document.querySelector('#footer-marker');
const items = document.querySelectorAll('.footer-links a');

const indicator = (e) => {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
};

items.forEach(link => {
    link.addEventListener('mouseover', (e) => {
    indicator(e.target);
    });
});

return () => {
    items.forEach(link => {
    link.removeEventListener('mouseover', (e) => {
        indicator(e.target);
    });
    });
};
}, []);

return (
<footer>
    <div className="footer-container">
    {/* Logo Section */}
    <div className="footer-logo">
        <img src={logo} alt="Company Logo" loading="lazy" />
    </div>

    {/* Navigation Links */}
    <div className="footer-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
        <div id="footer-marker"></div>
    </div>

    {/* Social Media Section */}
    <div className="footer-social">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    </div>
    </div>
</footer>
);
};

export default Footer;
