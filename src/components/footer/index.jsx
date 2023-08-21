import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
// import siteLogo from "../../assets/images/site-logo.svg";
import logo from "../../assets/images/logo.png"
import call from "../../assets/images/call.png"
import email from "../../assets/images/email.png"

const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" style={{display: "inline-block"}} title="logo">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <p className="footer-text">
                © 2023 Sunil Chudasama
              </p>
              <div className="footer-contact">
                <p>Contact us:</p>
                <p className="footer-phone">
                    <img src={call} alt="phone" />
                    : +91 1234567890
                  </p>
                <p className="footer-email">
                    <img src={email} alt="email" />
                    : admin@bookstore.com
                  </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
