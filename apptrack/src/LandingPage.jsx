// Landing page.jsx
import React from "react";
import "./App.css";


const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>AppTrack</h1>
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
          <div className="card">
            <h3>Dashboard</h3>
            <p>Get a clear overview of all your applications and statuses.</p>
          </div>
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
