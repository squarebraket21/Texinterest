import React from "react";
import "./Courses.css";

const Courses = () => {

 

  return (
    <div className="courses-container">

      {/* Top Banner */}
      <div className="courses-banner">
        <input type="text" placeholder="Search courses..." />
        <button>Discover</button>
      </div>

  
     
      {/* Title */}
      <h1 className="courses-title">
        Online IT Courses in Collaboration with IT Companies
      </h1>

      {/* Main Content */}
      <div className="courses-content">

        {/* Left Section */}
        <div className="courses-list">

            <p>Texinterest offers job-oriented online IT courses in India and worldwide, developed in collaboration with IT companies to help learners build job-ready skills. Our programs focus on placement-ready skills, hands-on projects, real-world projects, and industry tools for students, freshers, and working professionals.

Whether you are a beginner or looking to upgrade your IT skills, our courses are designed to match current industry requirements and real job roles. Texinterest focuses on technical areas such as web development, frontend and backend development, SEO, and digital marketing.</p>

        <h2 className="courses-subtitle">
      Explore Job-Oriented IT Courses for Beginners
    </h2>

  <div className="course-filter">
     <button className="active">Complete Course List</button>
    <button>Frontend</button>
   <button>Backend</button>
   <button>Full stack</button>
   <button>More</button>
  </div>

          <div className="course-card">
            <h3>WordPress Development Course Details for Beginners to Advanced</h3>
            <p>
             This course is for anyone new to front-end development who wants to build and customize websites with WordPress. You will learn key WordPress concepts, practice hands-on skills, and use front-end tools. Even if you have little or no coding experience, thi
                </p>
             <div className="course-filters">
            <button className="active">Fee:30,000</button>
              <button>Duration :3 months</button>
              <button>view course curriculum </button>
               </div>
  
         
          </div>

          <div className="course-card">
            <h3>UI/UX Design Course Details with AI Integration for Freshers</h3>
            <p>
             This course is for anyone new to front-end development who wants to build and customize websites with WordPress. You will learn key WordPress concepts, practice hands-on skills, and use front-end tools. Even if you have little or no coding experience, thi
              </p>
             <div className="course-filters">
            <button className="active">Fee:30,000</button>
              <button>Duration :3 months</button>
              <button>view course curriculum </button>
               </div>
  
           
          </div>

          <div className="course-card">
            <h3>Search Engine Optimization (SEO) with AI Course Details</h3>
            <p>
             This beginner-friendly SEO course integrates foundational search engine optimisation with AI tools. You will learn to use Google’s algorithms and platforms, including ChatGPT, Surfer SEO, and Jasper AI. Over 16 weeks, the curriculum covers keyword research, on-page and off-page SEO, technical optimisation, and AI applications for content, audits, and analytics. No prior experience is required. You will complete practical projects, including creating AI-optimised blogs and improving their Google rankings. This course is ideal for those pursuing a career in India’s digital marketing industry. </p>
             <div className="course-filters">
            <button className="active">Fee:40,000</button>
              <button>Duration :3 months</button>
              <button>view course curriculum </button>
               </div>
  
           
          </div>

          <div className="course-card">
            <h3>Front-End Development Course Details</h3>
            <p>
             The Frontend Development course is designed for beginners and covers essential web technologies such as HTML, CSS, JavaScript, and React, as well as AI tools like GitHub Copilot and Cursor AI. Over 12 weeks, you will learn to build responsive applications, integrate APIs, and use AI for code generation, debugging, and optimization. No prior coding experience is required. By the end of the course, you will have completed three portfolio projects, ready for deployment on Vercel or Netlify, to support your entry into India's growing tech sector.
                 </p>
             <div className="course-filters">
            <button className="active">Fee:35,000</button>
              <button>Duration :3 months</button>
              <button>view course curriculum </button>
               </div>
  
        
          </div>


          <div className="course-card">
            <h3>Social Media Marketing Course Details</h3>
            <p>
            This Social Media Marketing (SMM) course is tailored for beginners and covers major platforms including Instagram, Facebook, LinkedIn, and YouTube. You will learn to use AI tools such as Canva AI, ChatGPT, and Meta AI to prepare for India's rapidly expanding digital creator economy. Over 12 weeks, you will develop content calendars, manage AI-driven ad campaigns, and analyze results using GA4. No prior experience is required. You will work on real brand campaigns and earn certifications for SMM roles with salaries ranging from ₹3 to 6 LPA.
            </p>
             <div className="course-filters">
            <button className="active">Fee:40,000</button>
              <button>Duration :3 months</button>
              <button>view course curriculum </button>
               </div>
  
     
          </div>


          <div className="course-card">
            <h3>Python Django Course With Certificate</h3>
            <p>
                This course is designed for anyone new to backend web development who wants to build secure, scalable web applications using Python and Django. You will learn core backend concepts, work on real-world projects, and gain hands-on experience with Django’s powerful features. Even if you have little or no prior programming experience, this course will guide you step by step.
               </p>

             <div className="course-filters">
            <button className="active">Fee:35,000</button>
              <button>Duration :3 months</button>
              <button>view course curriculum </button>
               </div>
  
         
          </div>

       

        </div>

        {/* Right Sidebar */}
        <div className="courses-sidebar">
          <h3>Quick Links for IT Courses</h3>
          <ul>
            <li>Our Collaberating IT Companies and Hiring Partners</li>
            <li>IT Certifications</li>
            <li>PIP With Python</li>
            <li>IT Interview Questions and Answers</li>
            <li>Career IT Blogs</li>
            <li>Internship programs for students</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Courses;
