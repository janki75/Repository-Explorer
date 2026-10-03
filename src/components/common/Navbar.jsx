import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div
        style={{
          width: "200px",
          background: "#111",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>GitHub Explorer</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <Link to="/">Home</Link><br/>
          <Link to="/repositories">Repositories</Link>
        </ul>
      </div>
  );
};

export default Navbar;
