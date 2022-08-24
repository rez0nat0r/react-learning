import "./app-footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__content-text">
            © Simple Art,Inc.2021
            <br />
            All rights reserved
          </p>
          <nav className="menu__footer">
            <ul className="menu__footer-list">
              <li className="menu__footer-item">
                <a href="/" className="menu__footer-link">
                  Terms
                </a>
              </li>
              <li className="menu__footer-item">
                <a href="/" className="menu__footer-link">
                  Privacy policy
                </a>
              </li>
              <li className="menu__footer-item">
                <a href="/" className="menu__footer-link">
                  Help & Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;