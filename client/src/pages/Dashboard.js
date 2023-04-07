// goals, workouts, *components for these*
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    profilePicture: "https://example.com/profile-picture.jpg",
    workoutsCompleted: 10,
    totalWeightLifted: 500,
    timeSpentExercising: 120
  };

  const goals = [
    { title: "Lose Weight", progress: 50 },
    { title: "Gain Strength", progress: 75 },
    { title: "Run 5k", progress: 25 }
  ];

  const recentActivities = [
    { type: "Lifting", exercise: "Bench Press", sets: 3, reps: 10, weight: 100 },
    { type: "Running", exercise: "Treadmill", distance: 3, time: "25:00" },
    { type: "Yoga", exercise: "Downward Dog", duration: 20 }
  ];

  const motivationalQuotes = [
    "The only bad workout is the one that didn't happen.",
    "Believe you can and you're halfway there.",
    "You don't have to be great to start, but you have to start to be great."
  ];

  return (
    <div className="dashboard">
      <nav className="dashboard__nav">
        <ul>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="dashboard__user">
        <img src={user.profilePicture} alt={user.name} />
        <h1>{user.name}</h1>
        <ul>
          <li>Workouts Completed: {user.workoutsCompleted}</li>
          <li>Total Weight Lifted: {user.totalWeightLifted} lbs</li>
          <li>Time Spent Exercising: {user.timeSpentExercising} min</li>
        </ul>
      </div>
      <div className="dashboard__goals">
        <h2>Goals Progress</h2>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal.title}: {goal.progress}%</li>
          ))}
        </ul>
      </div>
      <div className="dashboard__recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity.type} - {activity.exercise}</li>
          ))}
        </ul>
      </div>
      <div className="dashboard__motivation">
        <h2>Motivational Quotes or Tips</h2>
        <p>{motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}</p>
      </div>
      <div className="dashboard__social-sharing">
        <h2>Share your progress</h2>
        <ul>
        <button type="button" onClick={() => window.open('https://www.facebook.com/')}>Facebook</button>
        <button type="button" onClick={() => window.open('https://www.twitter.com/')}>Twitter</button>
        <button type="button" onClick={() => window.open('https://www.instagram.com/')}>Instagram</button>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
