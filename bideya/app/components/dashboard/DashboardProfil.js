import React, { useState } from "react";
import { FaHome, FaComments, FaCreditCard, FaCog, FaSignOutAlt, FaEdit } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Dashboard.css';
import './ProfileCard.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div title="Home"><FaHome /></div>
      <div title="Messages"><FaComments /></div>
      <div title="Payments"><FaCreditCard /></div>
      <div title="Settings" className="active"><FaCog /></div>
      <div title="Logout"><FaSignOutAlt /></div>
    </div>
  );
};

const ProfileCard = () => {
  const [profile, setProfile] = useState({
    firstName: "Aziz",
    lastName: "Dhifaoui",
    identifier: "144*****",
    email: "Azizdhifaoui06@gmail.com",
    phone: "52 576 552",
    profession: "Student",
    bio: "Just keep ENACTING"
  });
  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h2 className="profile-card-title">My Profile</h2>
        <button className="profile-card-save-btn" disabled>Save</button>
      </div>
      <div className="profile-card-details">
        {Object.keys(profile).map((key, index) => (
          <div key={index} className="profile-card-item">
            <span className="profile-card-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <div className="profile-card-value">
              {isEditing === key ? (
                <input
                  type="text"
                  value={profile[key]}
                  onChange={(e) => handleEdit(key, e.target.value)}
                  onBlur={() => setIsEditing(null)}
                  autoFocus
                />
              ) : (
                <span>{profile[key]}</span>
              )}
              <FaEdit className="profile-card-edit-icon" onClick={() => setIsEditing(key)} />
            </div>
          </div>
        ))}
      </div>
      <div className="profile-card-footer">
        <img className="profile-card-img" src="./assets/Profil.jpeg" alt="Profile" />
        <div className="profile-card-actions">
          <button className="profile-card-btn">Change Photo</button>
          <span className="profile-card-remove">Remove</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const events = [
    { title: "UI/UX Design", date: "11 March 2025" },
    { title: "UI/UX Design", date: "13 March 2025" },
    { title: "UI/UX Design", date: "15 March 2025" }
  ];

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

        <section className="profile-section">
          <ProfileCard />
        </section>
      </main>

      <aside className="right-panel">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="upcoming-events">
          <h3>Upcoming Events</h3>
          {events.map((event, index) => (
            <div key={index} className="event">🟥 {event.title} - {event.date}</div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;