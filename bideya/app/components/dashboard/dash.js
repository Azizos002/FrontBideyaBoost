import React, { useState } from "react";
import { FaHome, FaComments, FaCreditCard, FaCog, FaSignOutAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div><FaHome /></div>
      <div><FaComments /></div>
      <div><FaCreditCard /></div>
      <div className="active"><FaCog /></div>
      <div><FaSignOutAlt /></div>
    </div>
  );
};


const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <header className="topbar">
          <input type="text" placeholder="Search for something..." />
          <div className="user-info">
            <span>Aziz Dhifaoui</span>
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
        </header>

        <section className="greeting">
          <h2>Good Morning, <span>Mr. Aziz Dhifaoui</span></h2>
        </section>

        <section className="cards">
  <div className="card">
    <div className="time-spendings-header">
      <h2>Time Spendings</h2>
      <div className="month-selector">
        February
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
  <div className="card">Statistics</div>
  <div className="card">My Favorites</div>
</section>

      </main>

      <aside className="right-panel">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="upcoming-events">
          <h3>Upcoming Events</h3>
          <div className="event">🟥 UI/UX Design - 11 March 2025</div>
          <div className="event">🟥 UI/UX Design - 13 March 2025</div>
          <div className="event">🟥 UI/UX Design - 15 March 2025</div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;