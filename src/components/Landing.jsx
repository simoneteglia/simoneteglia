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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div className="personal-info">
          <h1
            style={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}
          >
            👋 Hey there! <br /> I'm Simone Teglia
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              <FiGlobe
                style={{
                  fontSize: "20px",
                  color: isDarkMode ? "white" : "black",
                }}
              />
              Rome, IT
            </p>
          </h1>

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
        </div>
        <div
          className="personal-image"
          style={{
            width: "300px",
            height: "300px", // Ensure the height and width are the same for a perfect circle
            backgroundImage: `url('/media/simone.webp')`,
            backgroundSize: "cover", // Cover ensures the image covers the entire div without being stretched
            backgroundPosition: "center", // Center the image within the div
            borderRadius: "50%", // This makes the div circular
          }}
        />
      </div>
      <p
        style={{
          color: isDarkMode ? "white" : "black",
          fontFamily: "monospace",
          fontSize: "16px",
        }}
      >
        I recently graduated with honors in a M.sc. in engineering in computer
        science at Sapienza University of Rome. I now work as a fellow
        researcher at <a href="https://alcorlab.diag.uniroma1.it/">ALCOR Lab</a>{" "}
        on <strong>Multimodal DeepFake Detection</strong> and{" "}
        <strong>
          Deep Learning methods for trajectory forecasting of vehicles on the
          road
        </strong>
        .
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
      <p
        style={{
          fontSize: "18px",
          color: isDarkMode ? "white" : "black",
          fontWeight: "600",
        }}
      >
        ✉️ <strong>Email: </strong> teglia@diag.uniroma1.it
      </p>
      <h2 style={{ color: isDarkMode ? "white" : "black" }}>Publications</h2>
      <p>
        1️⃣ Simone Teglia, Simone Tedeschi, Roberto Navigli. How Much Do
        Pretrained Language Models Know About Word Senses? In{" "}
        <span style={{ fontStyle: "italic" }}>
          Proceedings of the 63st Annual Meeting of the Association for
          Computational Linguistics (ACL 2025)
        </span>
      </p>
      <p>
        2️⃣ Simone Teglia, Claudia Melis Tonti, Francesco Pro, Leonardo Russo,
        Andrea Alfarano, Matteo Pentassuglia, Irene Amerini. R3ST: A Synthetic
        Dataset with Real Trajectories for Urban Traffic Analysis In{" "}
        <span style={{ fontStyle: "italic" }}>
          Synthetic Data for Computer Vision Workshop@ CVPR 2025.
        </span>
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
