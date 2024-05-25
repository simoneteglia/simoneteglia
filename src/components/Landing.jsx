import React, { Component } from "react";
import "../resources/landing.css";
import CustomLink from "./components/CustomLink";
import { useOutletContext } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiGlobe } from "react-icons/fi";

const Landing = () => {
  const [windowSize, setWindowSize, isDarkMode] = useOutletContext();
  const styles = {
    container: {
      width: "708px",
      marginTop: "70px",
      padding: "20px",
      display: "block",
      marginBottom: "100px",
    },
    mainIcon: {
      fontSize: "80px",
      marginRight: "30px",
    },
    iconStyle: {
      fontSize: "30px",
      cursor: "pointer",
      color: isDarkMode ? "white" : "black",
    },
  };

  return (
    <section style={styles.container}>
      <h1 style={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}>
        Simone Teglia
      </h1>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <FiGlobe
          style={{ fontSize: "30px", color: isDarkMode ? "white" : "black" }}
        />
        Rome, IT,
      </p>
      <div style={{ marginBottom: "60px", display: "flex", gap: "30px" }}>
        <a href="https://github.com/simoneteglia">
          <FiGithub style={styles.iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/simone-teglia/">
          <FiLinkedin style={styles.iconStyle} />
        </a>
        <a href="https://twitter.com/Enimoss9">
          <FiTwitter style={styles.iconStyle} />
        </a>
        <a href="https://huggingface.co/simoneteglia">
          <img
            src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"
            width="35px"
          />
        </a>
      </div>
      <h2 style={{ color: isDarkMode ? "white" : "black" }}>About</h2>
      <p
        style={{
          color: isDarkMode ? "white" : "black",
          fontFamily: "monospace",
          fontSize: "16px",
        }}
      >
        Hi I’m Simone Teglia, graduated in computer science and currently
        enrolled in a M.sc. in engineering in computer science at Sapienza
        University of Rome. My main interests are Machine Learning, Deep
        learning and Natural language processing.
      </p>
      <p
        style={{
          color: isDarkMode ? "white" : "black",
          fontFamily: "monospace",
          fontSize: "16px",
        }}
      >
        🧑‍💻 I'm also a ReactJs enjoyer, I've developed lots of websites for fun,
        university projects and work. The last website I've been working on is
        the official website of{" "}
        <a style={{ color: "violet" }} href="https://www.tedxsapienzau.com">
          TedxSapienzaU
        </a>
        .
      </p>
      <h2 style={{ color: isDarkMode ? "white" : "black" }}>My recent works</h2>
      <h3 style={{ color: isDarkMode ? "white" : "black" }}>NLP</h3>
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
      <h3 style={{ color: isDarkMode ? "white" : "black" }}>Deep Learning</h3>
      <CustomLink
        icon={"🤖"}
        text={"NN-Based Character-to-Symbol Text Compression"}
        isDarkMode={isDarkMode}
        link={"zip"}
      />
      {/* <CustomLink
        icon={"🎵"}
        text={"Lyrics Generation with LLM"}
        isDarkMode={isDarkMode}
        link={"lyricsgeneration"}
      /> */}
      <h3 style={{ color: isDarkMode ? "white" : "black" }}>Web Developing</h3>
      <CustomLink
        icon={"❌"}
        text={"TedxSapienzaU Website"}
        isDarkMode={isDarkMode}
        link={"tedx"}
      />
      <CustomLink
        icon={"📊"}
        text={"Sapienza's students careers visualization"}
        isDarkMode={isDarkMode}
        link={"careers"}
      />
    </section>
  );
};

export default Landing;
