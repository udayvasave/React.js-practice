import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import resume from "../data/images/Uday__Vasave.pdf";
import logo from "../data/images/MU logo.png";
import resumes from "../routes/Resume.css";
const Resume = () => {
  return (
    <>
      <Header />
      <div className="Resume-download">
        <a href={resume} download="Uday_Vasave">
          {" "}
          Click Here to Download Resume
        </a>{" "}
      </div>
      <div className="container-main">
        <div className="education-details">
          <div className="EduTitle">
            <span>Education</span>
          </div>
          <div className="edulogoclgdetails">
            <div className="MUlogo">
              <img src={logo} alt="logo" />
            </div>
            <div className="clgName">
              <span>Mumbai University</span>
              <p>Bachelor of Enginnering in Computer Science.</p>
            </div>
          </div>
        </div>

        <div className="skillls">
          <div className="skilltitle">
            <span>Skills</span>
          </div>
          <div className="skill1">
            <div className="content">
              <div className="leftside">
                <span>Programming Language:</span>
              </div>
              <div className="rightside">
                <span>HTML5, CSS3, JavaScript(ES6)</span>
              </div>
            </div>
          </div>
          <div className="skill1">
            <div className="content">
              <div className="leftside">
                <span>Tools & Technologies:</span>
              </div>
              <div className="rightside">
                <span>Bootstrap, jQuery, React</span>
              </div>
            </div>
          </div>
          <div className="skill1">
            <div className="content">
              <div className="leftside">
                <span>Database:</span>
              </div>
              <div className="rightside">
                <span>My SQL, MongoDB</span>
              </div>
            </div>
          </div>
          <div className="skill1">
            <div className="content">
              <div className="leftside">
                <span>Tools & Platforms:</span>
              </div>
              <div className="rightside">
                <span>Github, Netlify, JSON, Microsoft Office</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resume;

{
  /* <div className="skills">
          
          
          <div className="Programming-Lang">
            
            <
          </div>
          <div className="tools-techno">
            
            
          </div>
          <div className="Database">
           
            
          </div>
          <div className="platforms">
            
            
          </div>
        </div> */
}
