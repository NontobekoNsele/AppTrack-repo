import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">AppTrack</h2>
        <nav>
          <Link to="/dashboard" className="active">Dashboard</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/reminders">Reminders</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Top Navbar */}
        <div className="topbar">
          <h1>Dashboard</h1>
          <button className="primary-btn">+ Add Application</button>
        </div>

        {/* Stats Cards */}
        <div className="stats">
          <div className="card stat-card">
            <h3>Total Applications</h3>
            <p>6</p>
          </div>

          <div className="card stat-card">
            <h3>Interviews</h3>
            <p>2</p>
          </div>

          <div className="card stat-card">
            <h3>Offers</h3>
            <p>1</p>
          </div>

          <div className="card stat-card">
            <h3>Rejected</h3>
            <p>1</p>
          </div>
        </div>

        {/* Applications Table */}
        <div className="table-card table-card">
          <h3>Recent Applications</h3>
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date Applied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google</td>
                <td>Frontend Developer</td>
                <td className="status interview">Interview</td>
                <td>Feb 10, 2026</td>
              </tr>
              <tr>
                <td>Amazon</td>
                <td>Software Engineer</td>
                <td className="status applied">Applied</td>
                <td>Feb 08, 2026</td>
              </tr>
              <tr>
                <td>Takealot</td>
                <td>Full Stack Developer</td>
                <td className="status offer">Offer</td>
                <td>Feb 06, 2026</td>
              </tr>
              <tr>
                <td>Takealot</td>
                <td>Java Developer</td>
                <td className="status rejected">Rejected</td>
                <td>Jan 28, 2026</td>
              </tr>
              <tr>
                <td>BBD Software</td>
                <td>Software Developer</td>
                <td className="status applied">Applied</td>
                <td>Jan 28, 2026</td>
              </tr>
              <tr>
                <td>Standard Bank</td>
                <td>Software Developer</td>
                <td className="status interview">Interview</td>
                <td>Jan 20, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
