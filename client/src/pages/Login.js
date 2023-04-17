// log in credentials
import React, { useState } from "react";

const styles = {
  formStyles: {
    alignItems: "center",
    flexWrap: "wrap",
    width: "20%",
    padding: "8px 15px",
    margin: "auto",
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-around",
    boxSizing: "borderBox",
    border: "3px solid",
    borderColor: "#1976d2",
    borderRadius: "5px",
    boxShadow: "0 0 5px 0",
    backgroundColor: "white",
  },

  inputStyles: {
    border: "1px solid",
    display: "block",
    padding: "7px 15px",
    fontSize: "16px",
    width: "100%",
    marginBottom: "15px",
    marginTop: "5px",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255, 0.75)",
  },

  buttonStyles: {
    width: "50%",
    color: "white",
    background: "#1976d2",
    textAlign: "center",
    padding: "15px 0",
    fontSize: "18px",
    border: "1px solid",
    borderColor: "black",
    borderRadius: "10px",
    mouseOver: {
      background: "#blue",
    },
  },
};

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('log button')
    // Handle login logic here, such as making an API call to authenticate user credentials
  };

  return (
    <div>
      <form style={styles.formStyles} onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            style={styles.inputStyles}
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            style={styles.inputStyles}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button style={styles.buttonStyles} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
