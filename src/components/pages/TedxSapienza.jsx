import React, { Component } from "react";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";
import SkillPill from "../SkillPill";
import { useOutletContext } from "react-router-dom";

export default function TedxSapienza() {
  const [windowSize, setWindowSize, isDarkMode] = useOutletContext();

  const styles = {
    container: {
      width: "708px",
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
      <h1>TedxSapienzaU</h1>
      <p>
        As a full stack developer at TedxSapienzaU, I created the event's
        official website using React and Node.js. I personally experimented with
        Three.js and created the 3d bubbles in the homepage, symbol of the 2023
        TedxSapienzaU edition. Now, I'm developing a React Native web app,
        delving into cross-platform mobile development.
      </p>
      <p>
        Visit the website at{" "}
        <a style={{ color: "red" }} href="https://www.tedxsapienzau.com/">
          tedxsapienzau.com
        </a>
      </p>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <SkillPill skill="React" bgColor="#61DBFB" icon={<FaReact />} />
        <SkillPill skill="Node.js" bgColor="#6cc24a" icon={<FaNodeJs />} />
        <SkillPill skill="Javascript" bgColor="#f7df1e" icon={<FaJsSquare />} />
        <SkillPill
          skill="Three.js"
          bgColor="#000"
          color="#fff"
          icon={<SiThreedotjs />}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <img width="90%" src="/media/tedx_landing.gif" />
      </div>
    </div>
  );
}

//skills: react, node.js, three.js, react native
//Foto landing page (3d bubbles in vero 3D))
