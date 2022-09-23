import "./App.css";
import Main from "./components/Main";
import { useState } from "react";
import { getUserToken, setUserToken, clearUserToken } from "./utils/authToken";

function App() {
  // need to implement useState for user auth
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //! need to test function velwo if it working
  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newUser = await fetch("localhost website", configs); //! need to get localhost

      const parsedUser = await newUser.json();

      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.currentUser);
      setIsAuthenticated(parsedUser.loggedIn);

      return parsedUser;
    } catch (err) {
      console.log(err);
      clearUserToken();
      setIsAuthenticated(false);
    }
  };

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("localhost website", configs); //!  need to get localhost

      const user = await response.json();
      setUserToken(user.token);
      setCurrentUser(user.currentUser);
      setIsAuthenticated(user.loggedIn);

      return user;
    } catch (err) {
      console.log(err);
      clearUserToken();
      setIsAuthenticated(false);
    }
  };

  //
  return (
    <div className="App">
      {/* <Header user={currentUser}/> */}
      <Main
        isLoggedIn={isAuthenticated}
        signup={registerUser}
        login={loginUser}
        user={currentUser}
      />
    </div>
  );
}

export default App;
