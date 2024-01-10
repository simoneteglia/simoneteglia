import React, { Component } from "react";
import "../resources/landing.css";
import CustomLink from "./components/CustomLink";
import { useOutletContext } from "react-router-dom";

const Landing = () => {
  const [windowSize, setWindowSize, isDarkMode] = useOutletContext();
  const styles = {
    container: {
      width: "708px",
      marginTop: "70px",
      padding: "20px",
      display: "block",
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
      <p style={{ color: isDarkMode ? "white" : "black" }}>
        🧑‍💻 I'm also a ReactJs enjoyer, I've developed lots of websites for fun,
        university projects and work. The last website I've been working on is
        the official website of{" "}
        <a style={{ color: "violet" }} href="https://www.tedxsapienzau.com">
          TedxSapienzaU
        </a>
        .
      </p>
      <p style={{ color: isDarkMode ? "white" : "black" }}>
        In my free time I play football⚽️ and beach volley🏐
      </p>
      <h3 style={{ color: isDarkMode ? "white" : "black" }}>My recent works</h3>
      <h4 style={{ color: isDarkMode ? "white" : "black" }}>NLP</h4>
      <CustomLink
        icon={"🔎"}
        text={"Bi-LSTM Event Detector"}
        isDarkMode={isDarkMode}
        link={"bilstm"}
      />
      <CustomLink
        icon={"🤗"}
        text={"Europarl Language Detection"}
        isDarkMode={isDarkMode}
        link={"langid"}
      />
      {/* <h4 style={{ color: isDarkMode ? "white" : "black" }}>
        Machine Learning
      </h4> */}
      <h4 style={{ color: isDarkMode ? "white" : "black" }}>Web Developing</h4>
      <CustomLink
        icon={"❌"}
        text={"TedxSapienzaU Website"}
        isDarkMode={isDarkMode}
        link={"tedx"}
      />
    </section>
  );
};

export default Landing;
