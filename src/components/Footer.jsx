import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftsidefooter">
        <div className="linkText">
          <span>Links</span>
        </div>
        <div className="githublink">
          {" "}
          Github <div className="line"></div>{" "}
          <a href="https://github.com/udayvasave"> @udayvasave</a>{" "}
        </div>
      </div>
      <div className="rightsidefooter">
        <div className="Social-icons-footer">
          <a href="https://www.linkedin.com/in/uday-vasave/">
            <FaLinkedin
              size={30}
              style={{ color: "#4a5759", marginRight: "1rem" }}
            />
          </a>
          <a href="https://twitter.com/udayvasave">
            <FaTwitter
              size={30}
              style={{ color: "#4a5759", marginRight: "1rem" }}
            />
          </a>
          <a href="https://www.instagram.com/uday__vasave/">
            <FaInstagram
              size={30}
              style={{ color: "#4a5759", marginRight: "1rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
