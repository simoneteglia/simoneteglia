import React, { useState } from "react";
import "../resources/landing.css";

export default function CustomLink({ icon, text, link, isDarkMode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        height: "40px",
      }}
    >
      <span>{icon}</span>
      <p
        className="custom-text"
        style={{ color: isDarkMode ? "white" : "black" }}
      >
        {text}
      </p>
    </div>
  );
}
