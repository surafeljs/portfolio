import React, { useState } from "react";
import "./styles.css";
import { TypeAnimation } from "react-type-animation";
import { Button } from "react-bootstrap";
import { LinearProgress, Link } from "@mui/material";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../components/database/firebase";
import {
  Facebook,
  Telegram,
  Instagram,
  Github,
  Telephone,
  Envelope,
  GeoAlt,
  ArrowUpCircle,
  Linkedin,
} from "react-bootstrap-icons";
// import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (email.includes("@") === false) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "portfolio"), {
        name,
        email,
        subject,
        message,
      });
      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <>
        <div>
          <div id="nav" className="bg-[rgb(236,240,241)]   ">
            {" "}
          </div>
          <header className="bg-[rgb(255,255,255)] shadow-lg  pb-6 sticky top-0 z-50  ">
            <nav className="flex justify-between   items-center">
              <div class="logo mx-5 font-sans text-[rgb(44,62,80)] font-bold text-[26px]">
                <a href="#nav"> Surafel Delelegn</a>
              </div>
              <ul class="nav-links flex justify-between [@media(max-width:768px)]:hidden gap-12 text-[rgb(44,62,80)] text-[16px] leading-[38px]">
                <li>
                  <a href="#nav">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li class="menu-btn">
                  <i class="fas fa-bars"></i>
                </li>
              </ul>
            </nav>
          </header>

          <motion.section
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" pt-20  pb-28 bg-[rgb(236,240,241)]   "
          >
            <div class="px-5   md:px-6  flex items-center   justify-evenly lg:flex-row flex-col  gap-24">
              <div class="">
                <h1 className="font-bold font-sans text-3xl  md:text-4xl lg:text-5xl tracking-tight leading-tight  mb-5  ">
                  Hi, I'm{" "}
                  <span className="text-[rgb(52,152,219)]">
                    Surafel Delelegn
                  </span>
                </h1>

                <h2 className="text-3xl font-sans text-[rgb(44,62,80)] mt-7 mb-6 ">
                  Software Engineer
                </h2>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1000,
                    "Frontend Specialist",
                    1000,
                    "Backend Engineer",
                    1000,
                    "UI/UX Enthusiast",
                    1000,
                  ]}
                  wrapper="span"
                  speed={20}
                  className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200  "
                  repeat={Infinity}
                />
                <p className="text-lg opacity-70 font-sans text-[rgb(44,62,80)] mt-7">
                  Building innovative web solutions with modern technologies
                </p>
                <div className=" flex gap-7">
                  <button className=" transition-all ease-in-out duration-500 mt-7 bg-[rgb(52,152,219)] hover:bg-white p-3 font-semibold text-white hover:text-[rgb(52,152,219)] px-7 rounded-md">
                    <a href="#projects">View My Work</a>
                  </button>

                  <button className="bg-white transition-all mt-7 ease-in-out duration-500 hover:bg-[rgb(52,152,219)] p-3 font-semibold text-[rgb(52,152,219)] hover:text-white  px-7 rounded-md  ">
                    <a href="#contact">Contact Me</a>
                  </button>
                </div>
              </div>
              <div className=" border-8   bg-slate-950 w-80 rounded-full   border-solid  border-[rgb(52,152,219)]">
                <img
                  src="/images/my-passport-photo (3)-Picsart-AiImageEnhancer.jpg"
                  alt="Surafel Delelegn"
                  className=" rounded-full w-80    h-80 object-cover  "
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="about"
            class="about"
          >
            <div class="">
              <h2 class="text-4xl font-bold text-center  text-[rgb(44,62,80)] mb-12    mt-20 font-sans md:text-2xl lg:text-4xl">
                About Me
              </h2>

              <div className="gap-10 grid grid-cols-1 lg:grid-cols-2 m-5 items-center ">
                <div class="about-image  ">
                  <img
                    src="/images/OIP.jfif"
                    alt="Surafel Delelegn"
                    className="rounded-lg shadow-lg w-full   mb-10 md:mt-0 object-cover h-80  lg:h-96"
                  />
                </div>
                <div className="">
                  <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)]  ">
                    I'm a passionate software engineer with expertise in
                    building robust web applications. With a strong foundation
                    in JavaScript and its ecosystem, I specialize in creating
                    efficient, scalable, and user-friendly solutions.
                  </p>
                  <br></br>
                  <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)]">
                    My journey in software development began several years ago,
                    and since then I've worked on various projects ranging from
                    small business websites to complex enterprise applications.
                  </p>
                  <div className=" justify-start gap-8 mt-9 items-center   sm:flex text-center ">
                    <div className="bg-[rgb(236,240,241)] p-6  rounded-lg shadow-lg mt-5">
                      <h3 className="font-sans text-3xl font-bold text-center text-[rgb(52,152,219)]">
                        3+
                      </h3>
                      <br></br>
                      <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)]">
                        Years Experience
                      </p>
                    </div>
                    <div className="bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg mt-5">
                      <h3 className="font-sans text-3xl font-bold text-center text-[rgb(52,152,219)]">
                        3+
                      </h3>{" "}
                      <br></br>
                      <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)]">
                        Projects Completed
                      </p>
                    </div>
                    <div className="bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg mt-5">
                      <h3 className="font-sans text-3xl font-bold text-center text-[rgb(52,152,219)]">
                        2+
                      </h3>{" "}
                      <br></br>
                      <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)]">
                        Happy Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="skills"
            class="skills"
          >
            <div class="">
              <h2 class="text-4xl font-bold text-center mb-10 text-[rgb(44,62,80)] mt-20 font-sans md:text-2xl lg:text-4xl">
                My Skills
              </h2>
              <div class="container mx-auto py-5 grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {/* Frontend Skills */}
                <div class="skill-category bg-[rgb(236,240,241)] border rounded-lg shadow-lg p-8 hover:scale-[1.02] transition-transform duration-300">
                  <h3 class="mb-4 font-sans font-bold text-3xl text-[rgb(52,152,219)]">
                    Frontend
                  </h3>
                  <div class="skill-items font-sans text-md">
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>React.js</span>
                        <span>90%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={90}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>HTML/CSS</span>
                        <span>95%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={95}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>JavaScript</span>
                        <span>85%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Skills */}
                <div class="skill-category bg-[rgb(236,240,241)] border rounded-lg shadow-lg p-8 hover:scale-[1.02] transition-transform duration-300">
                  <h3 class="mb-4 font-sans font-bold text-3xl text-[rgb(52,152,219)]">
                    Backend
                  </h3>
                  <div class="skill-items font-sans text-md">
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>Node.js</span>
                        <span>88%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={88}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>Express.js</span>
                        <span>85%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database Skills */}
                <div class="skill-category bg-[rgb(236,240,241)] border rounded-lg shadow-lg p-8 hover:scale-[1.02] transition-transform duration-300">
                  <h3 class="mb-4 font-sans font-bold text-3xl text-[rgb(52,152,219)]">
                    Database
                  </h3>
                  <div class="skill-items font-sans text-md">
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>MySQL</span>
                        <span>80%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={80}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>PostgreSQL</span>
                        <span>70%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={80}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div class="skill-item">
                      <div class="skill-info flex justify-between mb-1">
                        <span>Firebase</span>
                        <span>75%</span>
                      </div>
                      <div class="progress-bar mb-4 animate-fade-in">
                        <LinearProgress
                          variant="determinate"
                          value={75}
                          sx={{
                            height: 10,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgb(229, 231, 235)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              backgroundColor: "rgb(52, 152, 219)",
                              transition: "transform 1.5s ease-in-out",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="projects"
            className="projects container mx-auto py-5"
          >
            <div>
              <h2 className="text-4xl font-bold text-center mb-14 text-[rgb(44,62,80)] mt-20 font-sans md:text-2xl lg:text-4xl">
                My Projects
              </h2>
              <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {/* Project 1 */}
                <div className="project-card bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="project-image overflow-hidden rounded-lg">
                    {/* <img
                      src="/images/03217e2517907c95659946ce9b9ba39e.jpg"
                      alt="E-commerce Platform"
                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                    /> */}
                  </div>
                  <div className="project-info mt-4">
                    <h3 className="text-2xl font-bold text-[rgb(44,62,80)] mb-4">
                      E-commerce Platform
                    </h3>
                    <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)] mb-3">
                      A full-stack e-commerce solution built with React,
                      Node.js, and MySQL.
                    </p>
                    <div className="project-tech flex gap-2 text-md opacity-95 font-sans text-[rgb(44,62,80)] mb-3">
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        React
                      </span>
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        Node.js
                      </span>
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        MySQL
                      </span>
                    </div>
                    <a
                      href="#"
                      className="inline-block bg-[rgb(52,152,219)] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[rgb(52,152,219)] transition-all duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="project-card bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="project-image overflow-hidden rounded-lg">
                    {/* <img
                      src="/images/03217e2517907c95659946ce9b9ba39e.jpg"
                      alt="Task Management App"
                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                    /> */}
                  </div>
                  <div className="project-info mt-4">
                    <h3 className="text-2xl font-bold text-[rgb(44,62,80)] mb-4">
                      Task Management App
                    </h3>
                    <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)] mb-3">
                      A real-time task management application using React and
                      Firebase.
                    </p>
                    <div className="project-tech flex gap-2 text-md opacity-95 font-sans text-[rgb(44,62,80)] mb-3">
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        React
                      </span>
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        Firebase
                      </span>
                    </div>
                    <a
                      href="#"
                      className="inline-block bg-[rgb(52,152,219)] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[rgb(52,152,219)] transition-all duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                {/* Project 3 */}
                <div className="project-card bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="project-image overflow-hidden rounded-lg">
                    {/* <img
                      src="/images/03217e2517907c95659946ce9b9ba39e.jpg"
                      alt="API Service"
                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                    /> */}
                  </div>
                  <div className="project-info mt-4">
                    <h3 className="text-2xl font-bold text-[rgb(44,62,80)] mb-4">
                      React_video_uploader
                    </h3>
                    <p className="text-md opacity-95 font-sans text-[rgb(44,62,80)] mb-3">
                      A React_video_uploader service built with Node.js
                      ,React.js and Express.js.
                    </p>
                    <div className="project-tech flex gap-2 text-md opacity-95 font-sans text-[rgb(44,62,80)] mb-3">
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        Node.js
                      </span>
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        Express.js
                      </span>
                      <span className="bg-[rgb(52,152,219)] text-white px-2 py-1 rounded-md">
                        MySQL
                      </span>
                    </div>
                    <a
                      href="#"
                      className="inline-block bg-[rgb(52,152,219)] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[rgb(52,152,219)] transition-all duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="certificates"
            className="certificates container mx-auto py-10"
          >
            <div>
              <h2 className="text-4xl font-bold text-center mb-14 text-[rgb(44,62,80)] mt-20 font-sans md:text-2xl lg:text-4xl">
                Certificates
              </h2>
              <div className="certificates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Certificate 1 */}
                {/* <div className="certificate-card bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src="/images/03217e2517907c95659946ce9b9ba39e.jpg"
                    alt="Full-Stack Web Development Certificate"
                    className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="text-2xl font-bold text-[rgb(44,62,80)] mb-4">
                    Full-Stack Web Development
                  </h3>
                  <p className="text-md font-sans text-[rgb(44,62,80)] opacity-95">
                    Issued by: FreeCodeCamp
                  </p>
                  <p className="text-md font-sans text-[rgb(44,62,80)] opacity-95">
                    Date: January 2025
                  </p>
                </div> */}
                {/* Certificate 2 */}
                <div className="certificate-card bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src="/images/Screenshot (72).png"
                    alt="React Developer Certification"
                    className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="text-2xl font-bold text-[rgb(44,62,80)] mb-4">
                    Artificial Intelligence Fundamentals
                  </h3>
                  <p className="text-md font-sans text-[rgb(44,62,80)] opacity-95">
                    Issued by: Udacity
                  </p>
                  <p className="text-md font-sans text-[rgb(44,62,80)] opacity-95">
                    Date:April 2025
                  </p>
                </div>
                {/* Certificate 3 */}
                <div className="certificate-card bg-[rgb(236,240,241)] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src="/images/Screenshot (73).png"
                    alt="UI/UX Design Fundamentals Certificate"
                    className="w-full h-40 object-cover rounded-lg mb-4  transition-transform duration-300 hover:scale-110 "
                  />
                  <h3 className="text-2xl font-bold text-[rgb(44,62,80)] mb-4">
                    Programming Fundamentals
                  </h3>
                  <p className="text-md font-sans text-[rgb(44,62,80)] opacity-95">
                    Issued by: Udacity
                  </p>
                  <p className="text-md font-sans text-[rgb(44,62,80)] opacity-95">
                    Date: January 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="contact"
            className="contact mb-28  "
          >
            <h2 className="text-4xl font-bold text-center mb-20 text-[rgb(44,62,80)]  mt-20 font-sans md:text-2xl lg:text-4xl">
              Get In Touch
            </h2>
            <div class=" container mx-auto py-4 flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="contact-info   bg-[rgb(236,240,241)] p-10  shadow-lg rounded-lg w-full lg:w-1/2  ">
                <h3 className="font-sans text-2xl font-bold mb-5  text-[rgb(52,152,219)]">
                  Contact Information
                </h3>
                <p className="font-sans text-md  opacity-95 mb-5  text-[rgb(44,62,80)]">
                  Feel free to reach out to me for any questions or
                  opportunities!
                </p>
                <div className="info-item mb-5 flex items-center gap-3">
                  <Envelope
                    className="text-[rgb(52,152,219)] "
                    size={22}
                  ></Envelope>
                  <span className="font-sans text-mdmb-3 opacity-95  text-[rgb(44,62,80)]">
                    surafel.js@gmail.com
                  </span>
                </div>
                <div className="info-item mb-5 flex items-center gap-3">
                  <Telephone
                    className="text-[rgb(52,152,219)] "
                    size={22}
                  ></Telephone>

                  <span className="font-sans text-text-md opacity-95  text-[rgb(44,62,80)]">
                    +251 952438087
                  </span>
                </div>
                <div className="info-item mb-3 flex items-center gap-3">
                  <GeoAlt
                    className="text-[rgb(52,152,219)] "
                    size={22}
                  ></GeoAlt>
                  <span className="font-sans text-md opacity-95  text-[rgb(44,62,80)] ">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
                <div className="social-links flex gap-5 mt-10 ">
                  <a href="#">
                    <Facebook
                      className="text-[rgb(52,152,219)] "
                      size={38}
                    ></Facebook>
                  </a>

                  <a href="https://t.me/Surafel_js" target="_blank">
                    <Telegram
                      className="text-[rgb(52,152,219)] "
                      size={38}
                    ></Telegram>
                  </a>
                  <a href="https://github.com/surafeljs">
                    <Github
                      className="text-[rgb(52,152,219)] "
                      size={38}
                    ></Github>
                  </a>
                  <a href="https://in/surafeljs">
                    <Linkedin
                      className="text-[rgb(52,152,219)]  ease-in-out"
                      size={38}
                    ></Linkedin>
                  </a>
                  <a href="#">
                    <Instagram
                      className="text-[rgb(52,152,219)]  ease-in-out"
                      size={38}
                    ></Instagram>
                  </a>
                </div>
              </div>
              <div className="contact-form     px-5 w-full lg:w-1/2  ">
                <form id="contactForm ">
                  <div class="form-group ">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      placeholder="Your Name"
                      required
                      className=" w-full font-sans border border-solid opacity-30 border-gray-600  mt-5   p-2 rounded-lg mb-4"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      className="w-full font-sans border border-solid opacity-30 border-gray-600  p-2 rounded-lg mb-4"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="w-full font-sans border border-solid opacity-30 border-gray-600  p-2 rounded-lg mb-4"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      rows="5"
                      placeholder="Your Message"
                      required
                      className=" w-full font-sans border border-solid opacity-30 border-gray-600  p-2 rounded-lg mb-4"
                    ></textarea>
                  </div>

                  <div>
                    {success && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        <strong className="font-sans">Success!</strong>{" "}
                        {success}
                      </div>
                    )}
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                        <strong className="font-sans">Error!</strong> {error}
                      </div>
                    )}
                  </div>

                  <input
                    onClick={handleSubmit}
                    id="submit"
                    disabled={loading}
                    type="submit"
                    value={loading ? "Sending..." : "Send Message"}
                    className="bg-[rgb(52,152,219)] text-white font-sans font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-[rgb(52,152,219)] transition-all duration-300"
                  />
                </form>
              </div>
            </div>
          </motion.section>
          <section className=" flex justify-end m-11">
            <a href="#nav">
              <ArrowUpCircle
                className="text-[rgb(52,152,219)] animate-bounce "
                size={49}
              ></ArrowUpCircle>
            </a>
          </section>
          <footer>
            <div className="bg-[rgb(44,62,80)] text-center ">
              <p className="pt-5 pb-10 text-white font-sans opacity-85">
                &copy; <span id="year">{new Date().getFullYear()}</span> Surafel
                Delelegn. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </>
    </>
  );
};

export default Home;
