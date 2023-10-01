import React, { Component } from "react";
import "../resources/landing.css";
import CustomLink from "./CustomLink";

const Landing = ({ isDarkMode }) => {
  const styles = {
    container: {
      width: "708px",
      marginTop: "70px",
    },
    mainIcon: {
      fontSize: "80px",
    },
  };

  return (
    <section style={styles.container}>
      <span style={styles.mainIcon}>👨🏼‍💻</span>
      <h2 style={{ color: isDarkMode ? "white" : "black" }}>Simone Teglia</h2>
      <p style={{ color: isDarkMode ? "white" : "black" }}>
        Hi I’m Simone Teglia, graduated in computer science and currently
        enrolled in a M.sc. in engineering in computer science at Sapienza
        University of Rome. My main interests are Machine Learning, Deep
        learning and Natural language processing.
      </p>
      <h3 style={{ color: isDarkMode ? "white" : "black" }}>My recent works</h3>
      <h4 style={{ color: isDarkMode ? "white" : "black" }}>NLP</h4>
      <CustomLink
        icon={"🔎"}
        text={"Bi-LSTM Event Detector"}
        isDarkMode={isDarkMode}
      />
      <CustomLink
        icon={"🤗"}
        text={"Low Resource Language detection transformer model"}
        isDarkMode={isDarkMode}
      />
      <CustomLink
        icon={"💬"}
        text={"DistilBERT for WSD"}
        isDarkMode={isDarkMode}
      />

      <h4 style={{ color: isDarkMode ? "white" : "black" }}>Web Developing</h4>
      <CustomLink
        icon={"❌"}
        text={"TedxSapienzaU Website"}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};

export default Landing;
