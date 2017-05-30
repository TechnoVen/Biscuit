import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <a
            href="https://www.github.com/edwinla"
            target="_blank"
            className="social-circle">
            <i className="social-icon fa fa-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/edwinla"
            target="_blank"
            className="social-circle">
            <i className="social-icon fa fa-linkedin"></i>
          </a>
          <a
            href="http://www.edwinla.com"
            target="_blank"
            className="social-circle">
            <i className="social-icon fa fa-vcard"></i>
          </a>
        </div>
        <ul className="footer-nav">
            <a href="#"><li className="footer-link">About</li></a>
            <a href="#"><li className="footer-link">Contact</li></a>
            <a href="#"><li className="footer-link">Support</li></a>
        </ul>
        <div className="footer-copyright">
          © Biscuit 2017
        </div>
      </div>
    </footer>
  )
}
