import React, { useState } from "react";
import "../../resources/landing.css";
import { Link } from "react-router-dom";

export default function CustomLink({ icon, text, link, isDarkMode }) {
  return (
    <a
      href={link}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        height: "40px",
        textOverflow: "ellipsis",
        textDecoration: "none",
      }}
    >
      <span>{icon}</span>
      <p
        className="custom-text"
        style={{ color: isDarkMode ? "white" : "black" }}
      >
        {text}
      </p>
    </a>
  );
}
