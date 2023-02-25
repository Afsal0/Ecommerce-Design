import React from "react";
import "./Udemy.css";
import UdemyLogo from "../theme/img/udemylogo.png";
import SearchSvg from "../theme/img/search.png";
import CartSVG from "../theme/img/cart.png";
import NetworkSVG from "../theme/img/network.png";
import NasdaqSVG from "../theme/img/nasdaq.svg";
import BoxSVG from "../theme/img/boxas.svg";
import LongSVG from "../theme/img/long.jpg";
import JamesSVG from "../theme/img/james.jpeg";
import CourseSVG from "../theme/img/courseimg.jpg";
import TrainerSVG from "../theme/img/trainerimg.jpg";
import BusinessSVG from "../theme/img/business.jpg";
import InstructorSVG from "../theme/img/instructorimg.jpg";

export default function Udemy() {
  return (
    <div>
      {/* header */}
      <div className="header_container">
        <img src={UdemyLogo} className="logo_udemy" />
        <p className="header_text">Categories</p>
        <div className="search_engine">
          <img src={SearchSvg} className="search_svg" />
          <p className="search_text">Search for anything</p>
        </div>
        <p className="header_text">Udemy Business on</p>
        <p className="header_text">Teach on Udemy</p>
        <img src={CartSVG} width="32px" height={"32px"} />
        <div className="login_button">
          <p style={{ fontWeight: "bold" }}>Log in</p>
        </div>
        <div className="signup_button">
          <p style={{ fontWeight: "bold", color: "white" }}>Sign up</p>
        </div>
        <div className="network_button">
          <img src={NetworkSVG} width="20px" height={"14px"} />
        </div>
      </div>
      {/* <div>
        <fieldset>
          <legend>Gender</legend>
          <div>
            <label>Color</label>
          </div>
          <div>
            <input type="text" list="color-list"></input>
            <datalist id="color-list">
              <option value="yellow"></option>
              <option value="red"></option>
              <option value="green"></option>
            </datalist>
          </div>
        </fieldset>
      </div> */}

      <div className="details_swiper_container">
        <img src={LongSVG} width="100%" />
        <div className="card_img">
          <p style={{ fontSize: "40px", fontWeight: "700" }}>
            Learning that gets you
          </p>
          <p>Skills for your present (and your future). Get started with us.</p>
        </div>
      </div>
      <div className="courses_container">
        <p className="bolder_course_topic">A broad selection of courses</p>
        <p style={{ fontSize: "24px", marginTop: "10px" }}>
          Choose from 213,000 online video courses with new additions published
          every month
        </p>
        <div className="course_list">
          <p className="course_item course_item_active">Python</p>
          <p className="course_item">C++</p>
          <p className="course_item">CSS</p>
          <p className="course_item">HTML</p>
          <p className="course_item">Node</p>
          <p className="course_item">React</p>
        </div>
        <div className="courses_sub_container">
          <p className="bolder_course_topic">
            Expand your career opportunities with Python
          </p>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to
          </p>
          <div className="explore_button">
            <p style={{ fontWeight: "bold" }}>Explore python</p>
          </div>
          <div className="courses_swiper">
            <div className="course_card">
              <img src={CourseSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
            </div>
            <div className="course_card">
              <img src={TrainerSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
              <div className="best_seller">
                <p>BestSeller</p>
              </div>
            </div>
            <div className="course_card">
              <img src={CourseSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
            </div>
            <div className="course_card">
              <img src={TrainerSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
            </div>
          </div>
        </div>
        <div className="students_container">
          <p className="bolder_course_topic">Students are viewing</p>
          <div className="courses_swiper">
            <div className="course_card">
              <img src={TrainerSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
              <div className="best_seller">
                <p>BestSeller</p>
              </div>
            </div>
            <div className="course_card">
              <img src={TrainerSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
              <div className="best_seller">
                <p>BestSeller</p>
              </div>
            </div>
            <div className="course_card">
              <img src={TrainerSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
              <div className="best_seller">
                <p>BestSeller</p>
              </div>
            </div>
            <div className="course_card">
              <img src={TrainerSVG} width="240" height={"135"} />
              <p style={{ fontWeight: "700" }}>
                Learn Python: The Complete Python Programming Course
              </p>
              <p> Avinash Jain, The Codex</p>
              <p>4.3 star</p>
              <p style={{ fontWeight: "700" }}>$30978</p>
              <div className="best_seller">
                <p>BestSeller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured_container">
        <div className="featured_content">
          <p className="bolder_course_topic">Featured topics by category</p>
          <div className="feature_details">
            <div className="description">
              <p className="data_topic">Development</p>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Python
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Web Development
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Machine Learning
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
            </div>
            <div className="description">
              <p className="data_topic">Business</p>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Financial Analysis
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>

              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  SQL
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  PMP
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
            </div>
            <div className="description">
              <p className="data_topic">IT and Software</p>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  AWS Certification
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Ethical Hacking
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Cyber Security
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
            </div>
            <div className="description">
              <p className="data_topic">Design</p>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Photoshop
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Graphic Design
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
              <div className="students_datas">
                <a
                  href="www.google.com"
                  style={{ color: "#5624d0", fontSize: "1.4rem" }}
                >
                  Drawing
                </a>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#6a6f73",
                    marginTop: "6px",
                  }}
                >
                  36,354,994 students
                </p>
              </div>
            </div>
          </div>
          <div className="explore_topics_button">
            <p style={{ fontWeight: "bold" }}>Explore more topics</p>
          </div>
        </div>
      </div>
      <div className="trusted_container">
        <div className="trusted_content">
          <p className="bolder_course_topic">
            Trusted by over 13,400 great teams
          </p>
          <p>
            Leading companies use the same courses to help employees keep their
            skills fresh.
          </p>
          <div className="logo_container">
            <img src={NasdaqSVG} width="115px" height={"44px"} />
            <img src={BoxSVG} width="115px" height={"44px"} />
            <img src={NasdaqSVG} width="115px" height={"44px"} />
            <img src={BoxSVG} width="115px" height={"44px"} />
            <img src={NasdaqSVG} width="115px" height={"44px"} />
            <img src={BoxSVG} width="115px" height={"44px"} />
          </div>
        </div>
      </div>
      <div className="thanks_container">
        <div className="thanks_card">
          <div className="description_thanks">
            <p>
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its data scientists, with highly relevant and
              in-demand tech skills that are enabling consultants to stay ahead
              of big data trends and raise the bar on proficiency, skills, and
              competencies to meet client demand.
            </p>
            <a href="www.gg\.com">Read full story</a>
          </div>
          <div className="profile_description">
            <img src={JamesSVG} className="profile_img" />
            <div className="profile_names">
              <p style={{ fontWeight: "bolder" }}>Jim hemgen</p>
              <p>Principal</p>
            </div>
            <p>Booz Allen Hamilton</p>
          </div>
        </div>
        {/* <p>{`View more customer stories >`} </p> */}
      </div>
      <div className="udemy_porfolio">
        <div className="udmey_business">
          <div className="business_description">
            <p style={{ fontSize: "36px", fontWeight: "600" }}>
              udemy business
            </p>
            <p style={{ fontSize: "40px", fontWeight: "600" }}>
              Upskill your team with Udemy Business
            </p>
            <ul style={{ marginLeft: "18px", lineHeight: "28px" }}>
              <li style={{ fontSize: "22px" }}>
                Unlimited access to 19,000+ top Udemy courses, anytime, anywhere
              </li>
              <li style={{ fontSize: "22px" }}>
                International course collection in 14 languages
              </li>
              <li style={{ fontSize: "22px" }}>
                Top certifications in tech and business
              </li>
            </ul>
            <div className="business_buttons">
              <div className="signup_button" style={{ marginLeft: "0px" }}>
                <p style={{ fontWeight: "bold", color: "white" }}>
                  Get Udemy Business
                </p>
              </div>
              <div className="login_button">
                <p style={{ fontWeight: "bold" }}>Learrn more</p>
              </div>
            </div>
          </div>

          <img
            src={BusinessSVG}
            className="business_logo"
            width="400px"
            height={"400px"}
          />
        </div>
        <div className="udemy_instructor">
          <img
            src={InstructorSVG}
            className="instructor_img"
            width="400px"
            height={"400px"}
          />
          <div className="business_description">
            <p style={{ fontSize: "36px", fontWeight: "600" }}>
              Become an instructor
            </p>
            <p style={{ fontSize: "24px", lineHeight: "28px" }}>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>

            <div className="business_buttons">
              <div className="signup_button" style={{ marginLeft: "0px" }}>
                <p style={{ fontWeight: "bold", color: "white" }}>
                  Start teaching today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="lists">
          <div className="business_list">
            <p>Udemy Business</p>
            <p>Teach on udemy</p>
            <p>Get the app</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div className="business_list">
            <p>Careers</p>
            <p>Blog</p>
            <p>Help and support</p>
            <p>Affiliate</p>
            <p>Investor</p>
          </div>
          <div className="business_list">
            <p>Terms</p>
            <p>Privacy policy</p>
            <p>Cookie settings</p>
            <p>Sitemap</p>
            <p>Accesibility statement</p>
          </div>
          <div
            className="login_button"
            style={{
              border: "1px solid white",
              height: "20px",
              marginLeft: "12rem",
            }}
          >
            <p style={{ fontWeight: "bold" }}>English</p>
          </div>
        </div>
        <div className="down_footer">
          <p style={{ fontSize: "26px", fontWeight: "600" }}>Udemy</p>
          <p style={{ fontSize: "12px" }}>© 2023 Udemy, Inc.</p>
        </div>
      </div>
    </div>
  );
}
