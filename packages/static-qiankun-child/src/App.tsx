import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <ul>
        {/* <li>
          <Link to="/swr">swr</Link>
        </li>
        <li>
          <Link to="/swr/multi-child">swr/multi-child</Link>
        </li> */}
        <li>
          <Link to="/redux-demo">redux-demo</Link>
        </li>
        <li>
          <Link to="/style">style</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
