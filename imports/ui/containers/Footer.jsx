/*
   Footer

 */
/** ****************************** Import packages *************************** */
import React from "react";
import { NavLink } from "react-router-dom";

/** ****************************** Import components *************************** */
import FooterConstants from "/imports/constants/footer";
import { footerLogo } from "/imports/constants/images";
import FilePath from "/imports/constants/folder";

const fileUrl = FilePath["footer-logo"] + footerLogo.name;

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg">
      <img
        src="/image/logo/bglogo-white.svg"
        width="600"
        height="600"
        className="img-fluid"
        alt=""
      />
    </div>
    <div className="container">
      <div className="row">
        <div className="offset-1 hidden-md" />
        <div className="col-xl-4 col-lg-4 col-md-4">
          <div className="footer-logo">
            <img
              className="img-fluid"
              src={fileUrl}
              width="300"
              height="70"
              alt=""
            />
            <p name="footerlogoDesc">{FooterConstants.footerlogoDesc.text}</p>
            <div className="social-icons">
              <span className="fa fa-linkedin" />
              <span className="fa fa-facebook" />
              <span className="fa fa-twitter" />
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2">
          <div className="footer-links">
            <h5>Explore</h5>
            <ul className="pl-0">
              <li>
                <NavLink
                  to="/"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.footerLinks.link1}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.footerLinks.link2}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/charity/list"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.footerLinks.link3}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.footerLinks.link4}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.footerLinks.link5}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.footerLinks.link6}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="footer-blog">
            <h5>From Our Charity News</h5>
            <ul className="pl-0">
              <li>
                <a href="#" className="news-title">
                  {FooterConstants.footerlatestNews1.title}
                </a>
                <p className="mdm-txt news-content mt-2 mr-4">
                  {FooterConstants.footerlatestNews1.desc}
                </p>
              </li>
              <li>
                <a href="#" className="news-title">
                  {FooterConstants.footerlatestNews2.title}
                </a>
                <p className="mdm-txt news-content mt-2 mr-4">
                  {FooterConstants.footerlatestNews2.desc}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="row">
          <div className="offset-1 hidden-md" />
          <div className="col-xl-3 col-lg-3 col-md-3">
            <p>{FooterConstants.copyright.text}</p>
          </div>
          <div className="col">
            <ul className="d-flex flex-row pl-0">
              <li>
                <NavLink
                  to="/"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.copyright.link1}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="nav-link p-0"
                  activeclassname="active"
                >
                  {FooterConstants.copyright.link2}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
