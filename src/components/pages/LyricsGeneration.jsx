import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import SkillPill from "../components/SkillPill";
import { SiPytorch } from "react-icons/si";

export default function LyricsGeneration() {
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
      <h1>Lyrics Generation with LLM</h1>
      <p></p>
      <SkillPill
        skill="Pytorch"
        bgColor="#de3412"
        color="#fff"
        icon={<SiPytorch color="#fff" />}
      />
      <br />
    </div>
  );
}
