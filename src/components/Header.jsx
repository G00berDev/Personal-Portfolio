import React, { useEffect } from 'react';
import './Header.scss'; // Ensure you have your CSS imported
import logo from '../assets/logo.png'; // Make sure to import your logo

const Header = () => {
  useEffect(() => {
    const marker = document.querySelector('#marker');
    const items = document.querySelectorAll('nav a');

    const indicator = (e) => {
      marker.style.left = e.offsetLeft + 'px';
      marker.style.width = e.offsetWidth + 'px';
    };

    // Change click to mouseover
    items.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        indicator(e.target);
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      items.forEach(link => {
        link.removeEventListener('mouseover', (e) => {
          indicator(e.target);
        });
      });
    };
  }, []);

  return (
    <header>
      <div className="field">
        <img src={logo} alt="Company Logo" loading="lazy" />
      </div>

      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
        <div id="marker"></div>
      </nav>

      <div className="field tools">
        <a href="Gray and White Simple Clean Resume (2).pdf" rel="noopener noreferrer" download>
          <button>
            <span>Download Resume &rarr;</span>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
