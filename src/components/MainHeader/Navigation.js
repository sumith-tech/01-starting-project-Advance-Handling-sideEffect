import React, { Context, useContext } from "react";

import classes from "./Navigation.module.css";
import Authcontext from "../Store/auth-context";

const Navigation = (props) => {
  const ctx = useContext(Authcontext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.isLoggedOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
