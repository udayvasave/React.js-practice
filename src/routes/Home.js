import React from "react";
import Header from "../components/Header";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container1">
        <h2> Hello!</h2>
        <h3> I'm Uday</h3>
        <span>Welcome to my Personal Website</span>
        <p>
          I am a Computer Engineer, I have completed my graduation from Ramrao
          Adik Institute of Technology, Navi Mumbai.{" "}
        </p>
        <p>
          I am willing to work in a organization as a frontend developer, where
          I can utilised my knowledge and skills to work on various technologies
          such as: React.js, JavaScript, HTML, CSS and contribute in
          organization's success.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;

// <div className="container1">
//         <h1> Hello</h1>
//         <h2> I'm Uday</h2>
//         <h3>Welcome to my Personal Website!</h3>
//         <p>
//           I am a Computer Engineer, I have completed my graduation from Ramrao
//           Adik Institute of Technology, Navi Mumbai.{" "}
//         </p>
//         <p>
//           I am willing to work in a organization as a frontend developer, where
//           I can utilised my knowledge and skills to work on various technologies
//           such as: React.js, JavaScript, HTML, CSS and contribute in
//           organization's success.{" "}
//         </p>
//       </div>
