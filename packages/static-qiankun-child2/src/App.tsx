import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/swr">swr</Link>
        </li>
        <li>
          <Link to="/swr/multi-child">swr/multi-child</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
