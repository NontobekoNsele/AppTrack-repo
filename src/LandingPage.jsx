// Landing page.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const LandingPage = () => {
  return (
  
    <div className="landing-container">
      <header className="header">
       <div className="logo-container">
          {/* <img src="/logo.png" alt="AppTrack Logo" className="logo" /> */}
          <h1>AppTrack</h1>
       </div>

        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Track Your Job Applications Effortlessly</h2>
        <p>Organize, monitor, and follow up on your career opportunities in one place.</p>
        <a href="#signup" className="cta-button">Get Started</a>
      </section>

      <section className="features" id="features">
        <h2>Features</h2>
        <div className="feature-cards">
         <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
           <div className="card">
            <h3>Dashboard</h3>
            <p>Get a clear overview of all your applications and statuses.</p>
          </div>
        </Link>
          <div className="card">
            <h3>Reminders</h3>
            <p>Set follow-ups and deadlines so you never miss an opportunity.</p>
          </div>
          <div className="card">
            <h3>Analytics</h3>
            <p>Visualize your progress and track your application success rate.</p>
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      {/* <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Add Applications</h3>
            <p>Easily input your job applications into AppTrack.</p>
          </div>
          <div className="step">
            <h3>2. Track Progress</h3>
            <p>Monitor each application’s status and follow-ups.</p>
          </div>
          <div className="step">
            <h3>3. Gain Insights</h3>
            <p>Analyze your success rate and optimize your job hunt strategy.</p>
          </div>
        </div>
      </section> */}


      {/* ===== About ===== */}
      <section className="about" id="about">
        <h2>About AppTrack</h2>
        <p>
          AppTrack is a simple and powerful tool to help job seekers stay organized and focused during their job hunt. Track applications, follow up on deadlines, and visualize your career growth.
        </p>
      </section>

      <section className="signup" id="signup">
        <h2>Sign Up Now</h2>
        <a href="/signup" className="cta-button">Create an Account</a>
      </section>

      <footer className="footer">
        <p>&copy; 2026 AppTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
