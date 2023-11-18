import React, { Component } from "react";
import { useOutletContext } from "react-router-dom";
import SkillPill from "../SkillPill";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";

import "../../resources/pages.css";

export default function BiLSTM() {
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
    <>
      <div style={styles.container}>
        <h1>Bi-LSTM Event detector</h1>
        <p>
          This is a BiLSTM model that I created for the first homework of the
          2023 NLP master course at Sapienza with instructor Roberto Navigli.
          The Bi-LSTM is coded from scratch in Pytorch and trained on the
          dataset given by the professor. The model takes in input a sentence
          and returns a tag for each word according to the BIO Tags{" "}
          <strong>scenario, sentiment, change, action, possession</strong>.
          <br />
          Check out the code in the github{" "}
          <a href="https://github.com/simoneteglia/BiLSTM_EventDetector">
            repo
          </a>
          .
        </p>
        <SkillPill
          skill="Pytorch"
          bgColor="#de3412"
          color="#fff"
          icon={<SiPytorch color="#fff" />}
        />
        <br />
        <h3>Performances on the test set</h3>
        <ol>
          <li>Macro F1-Score: 0.72136</li>
          <li>Macro Precision: 0.71571</li>
          <li>Micro Precision: 0.94911</li>
        </ol>
      </div>
    </>
  );
}
