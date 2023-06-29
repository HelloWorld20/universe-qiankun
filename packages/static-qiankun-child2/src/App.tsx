import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/redux-demo">redux-demo</Link>
        </li>
        <li>
          <Link to="/style">style demo</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
