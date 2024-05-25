import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import SkillPill from "../components/SkillPill";
import { SiD3Dotjs } from "react-icons/si";
import { FaReact, FaJsSquare } from "react-icons/fa";

export default function Careers() {
  const [windowSize, setWindowSize, isDarkMode] = useOutletContext();

  const styles = {
    container: {
      maxWidth: "708px",
      marginTop: "70px",
      padding: "20px",
      display: "block",
      color: isDarkMode ? "white" : "black",
    },
    iconStyle: {
      fontSize: "35px",
      color: "black",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Sapienza's students careers visualization</h1>
      <p>
        This is the final project of the course of Visual Analytics at Sapienza,
        held by professor Giuseppe Santucci. The project consists in the
        visualization of the careers of Sapienza's students, with the aim of
        understanding the most common paths and the behavior of the students in
        the computer science bachelor. The project is developed using D3.js and
        React.
        <br />
        Check the website{" "}
        <a href="https://visual-analytics-sapienza-students.vercel.app/">
          here
        </a>
      </p>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <SkillPill
          skill="D3.js"
          bgColor="#000"
          color="#fff"
          icon={<SiD3Dotjs color="#fff" />}
        />
        <SkillPill skill="React" bgColor="#61DBFB" icon={<FaReact />} />
        <SkillPill skill="Javascript" bgColor="#f7df1e" icon={<FaJsSquare />} />
      </div>
      <br />
      <div
        onClick={() =>
          (window.location.href =
            "https://visual-analytics-sapienza-students.vercel.app/")
        }
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          cursor: "pointer",
        }}
      >
        <img width="100%" src="/media/careers_screenshot.png" />
      </div>
    </div>
  );
}
