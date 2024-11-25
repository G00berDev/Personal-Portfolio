import React from "react";
import "./Footer.scss";

const Footer = () => {
return (
<footer>
    <div className="container">
    <div className="sec aboutus">
        <h2>About Me</h2>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        ratione qui esse sed illo nam, sint ut exercitationem quam nesciunt.
        </p>
        <ul className="sci">
        <li>
            <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa-brands fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa-brands fa-youtube"></i>
            </a>
        </li>
        </ul>
    </div>
    <div className="sec quicklinks">
        <h2>Support</h2>
        <ul>
        <li>
            <a href="#">FAQ</a>
        </li>
        <li>
            <a href="#">Privacy Policy</a>
        </li>
        <li>
            <a href="#">Help</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
        </ul>
    </div>
    <div className="sec quicklinks">
        <h2>Intersting Facts</h2>
        <ul>
        <li>
            <a href="#">The Color Purple</a>
        </li>
        <li>
            <a href="#">Space</a>
        </li>
        <li>
            <a href="#">The lotus Flower</a>
        </li>
        <li>
            <a href="#">Human attention span</a>
        </li>
        </ul>
    </div>
    <div className="sec contact">
        <h2>Contact Us</h2>
        <ul className="info">
        <li>
            <span>
            <i className="fa-solid fa-phone"></i>
            </span>
            <p>
            <a href="tel:+12345678900">+1 234 567 8900</a>
            </p>
        </li>
        <li>
            <span>
            <i className="fa-solid fa-envelope"></i>
            </span>
            <p>
            <a href="mailto:knowmore@emailto.meee">knowmore@emailto.meee</a>
            </p>
        </li>
        </ul>
    </div>
    </div>
    <div className="copyrightText">
    <p>Copyright ©2024 Stryder Bateman. All Rights Reserved.</p>
    </div>
</footer>
);
};

export default Footer;

