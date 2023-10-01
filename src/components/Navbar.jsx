import React, { useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = ({ setIsDarkMode }) => {
  const [isDark, setIsDark] = useState(false);

  const styles = {
    navbarStyle: {
      padding: "8px 30px",
      height: "60px",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "Syne",
      color: isDark ? "white" : "black",
    },
    titleStyle: {
      cursor: "pointer",
      color: isDark ? "white" : "black",
    },
  };

  return (
    <nav style={styles.navbarStyle}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={styles.titleStyle}>Simone Teglia</h1>
      </Link>

      <LuSunMoon
        onClick={() => {
          setIsDarkMode(!isDark);
          setIsDark(!isDark);
        }}
        style={{
          fontSize: "25px",
          cursor: "pointer",
          color: isDark ? "white" : "black",
        }}
      />
    </nav>
  );
};

export default Navbar;
