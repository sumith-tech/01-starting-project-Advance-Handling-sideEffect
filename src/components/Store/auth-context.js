import React, { useState, useEffect } from "react";

const Authcontext = React.createContext({
  isLoggedIn: false,
  isLoggedOut: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const saveLocalStorage = localStorage.getItem("email");

    if (saveLocalStorage === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("email", "1");
    setIsLoggedIn(true);
  };

  return (
    <Authcontext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isLoggedOut: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;
