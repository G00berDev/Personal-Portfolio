import "./Header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="field">
        <img src={logo} alt="Company Logo" loading="lazy" />
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
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
