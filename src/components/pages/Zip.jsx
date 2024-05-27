import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import SkillPill from "../components/SkillPill";
import { SiPytorch } from "react-icons/si";

export default function Zip() {
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
      <h1>Neural Network-Based Character-to-Symbol Text Compression</h1>
      <p>
        This project explores the possibility of the application of neural
        network models to a sequence to sequence translation task with the aim
        of text compression. We investigate the feasibility of using deep
        learning techniques to emulate traditional zipping software, focusing on
        the Deflate algorithm for its balance between simplicity and efficiency.
        Our approach involves converting text and zipped files into hexadecimal
        format to facilitate model training and prediction.
        <br />
        🌐 Check out the code in the{" "}
        <a href="https://github.com/simoneteglia/sequence_translation_for_text_compression">
          github repository
        </a>
      </p>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <SkillPill
          skill="Pytorch"
          bgColor="#de3412"
          color="#fff"
          icon={<SiPytorch color="#fff" />}
        />
        <SkillPill
          skill="Hugging Face"
          bgColor="mediumorchid"
          color="#fff"
          icon={
            <img
              src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"
              width="30px"
            />
          }
        />
      </div>
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <img
          width="100%"
          src="https://raw.githubusercontent.com/simoneteglia/sequence_translation_for_text_compression/main/images/approach.png"
        />
      </div>
    </div>
  );
}
