import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./Contact.css";
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

const Contact = () => {
  return (
    <>
      <Header />
      <div className="Contact-container">
        <div className="left">
          <div className="address">
            <FaHome
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div className="adresstext">
              <p>Nerul(w), Navi Mumbai, 400706 </p>
            </div>
          </div>
          <div className="Phone">
            <FaPhone
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div className="Phonetext">
              <p> +91-8169796314 </p>
            </div>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div className="emailText">
              <p> udayvasave94@gmail.com </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <a href="https://www.facebook.com/uday.vasave/">
              <FaFacebook
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.instagram.com/uday__vasave/">
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/udayvasave">
              <FaTwitter
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/uday-vasave/">
              <FaLinkedin
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/udayvasave">
              <FaGithub
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
