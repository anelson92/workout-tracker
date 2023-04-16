// goals, workouts, *components for these*
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import profilePic from "../assets/thisguy.jpg";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/dashboard.css";

const Dashboard = () => {
  const styles = {
    dashStyles: {
      margin: "50px",
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      flexDirection: "row",
    },

    dashLeft: {
      margin: "5px",
      width: "45%",
      height: "100vh",
    },

    dashRight: {
      margin: "5px",
      width: "45%",
    },

    dashRightItems: {
      margin: "15px",
    },

    boxStyles: {
      maxWidth: "sm",
      justifyContent: "space-around",
      border: "3px solid",
      borderColor: "#1976d2",
      borderRadius: "10px",
      boxShadow: "0 0 5px 0",
      backgroundColor: "white",
    },

    heroStyle: {
      display: "flex",
      margin: "auto",
      padding: 0,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "spaceBetween",
    },

    heroImage: {
      objectFit: "cover",
      maxWidth: "50%",
      border: "1px solid #1976d2",
      borderRadius: "5px",
      boxShadow: "0 0 5px 0",
    },

    heroText: {
      maxWidth: "50%",
    },
  };

  const user = {
    name: "John Doe",
    profilePicture: profilePic,
    workoutsCompleted: 10,
    totalWeightLifted: 500,
    timeSpentExercising: 120,
  };

  const goals = [
    { title: "Lose Weight", progress: 50 },
    { title: "Gain Strength", progress: 75 },
    { title: "Run 5k", progress: 25 },
  ];

  const recentActivities = [
    {
      type: "Lifting",
      exercise: "Bench Press",
      sets: 3,
      reps: 10,
      weight: 100,
    },
    { type: "Running", exercise: "Treadmill", distance: 3, time: "25:00" },
    { type: "Yoga", exercise: "Downward Dog", duration: 20 },
  ];

  const motivationalQuotes = [
    "The only bad workout is the one that didn't happen.",
    "Believe you can and you're halfway there.",
    "You don't have to be great to start, but you have to start to be great.",
  ];

  return (
    <div style={styles.dashStyles} className="dashboard__container">
      <div style={styles.dashRight} className="dashboard__user">
        <Box sx={styles.boxStyles}>
          <div style={styles.heroStyle}>
            <img
              src={user.profilePicture}
              style={styles.heroImage}
              alt={user.name}
            />

            {/* <div style={styles.heroImage}>
              <img
                src={user.profilePicture}
                alt={user.name}
              />
            </div> */}
            <div style={styles.heroText}>
              <h1>{user.name}</h1>
              <List>
                <ListItem>
                  Workouts Completed: {user.workoutsCompleted}
                </ListItem>
                <ListItem>
                  Total Weight Lifted: {user.totalWeightLifted} lbs
                </ListItem>
                <ListItem>
                  Time Spent Exercising: {user.timeSpentExercising} min
                </ListItem>
              </List>
            </div>
          </div>
        </Box>
      </div>

      <div style={styles.dashRight}>
        <div style={styles.dashRightItems} className="dashboard__goals">
          <Box sx={styles.boxStyles}>
            <h2>Goals Progress</h2>
            <List>
              {goals.map((goal, index) => (
                <ListItem key={index}>
                  {goal.title}: {goal.progress}%
                </ListItem>
              ))}
            </List>
          </Box>
        </div>

        <div
          style={styles.dashRightItems}
          className="dashboard__recent-activities"
        >
          <Box sx={styles.boxStyles}>
            <h2>Recent Activities</h2>
            <List>
              {recentActivities.map((activity, index) => (
                <ListItem key={index}>
                  {activity.type} - {activity.exercise}
                </ListItem>
              ))}
            </List>
          </Box>
        </div>

        <div
          style={styles.dashRightItems}
          className="dashboard__social-sharing"
        >
          <Box sx={styles.boxStyles}>
            <h2>Share your progress</h2>
            <ul>
              <IconButton>
                <FacebookIcon
                  type="button"
                  onClick={() => window.open("https://www.facebook.com/")}
                />
              </IconButton>
              <IconButton>
                <TwitterIcon
                  type="button"
                  onClick={() => window.open("https://www.twitter.com/")}
                />
              </IconButton>
              <IconButton>
                <InstagramIcon
                  type="button"
                  onClick={() => window.open("https://www.instagram.com/")}
                />
              </IconButton>
            </ul>
          </Box>
        </div>

        <div style={styles.dashRightItems} className="dashboard__motivation">
          <Box sx={styles.boxStyles}>
            <h2>Motivational Quotes or Tips</h2>
            <p>
              {
                motivationalQuotes[
                  Math.floor(Math.random() * motivationalQuotes.length)
                ]
              }
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
