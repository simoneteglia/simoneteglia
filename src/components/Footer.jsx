import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = ({ isDarkMode }) => {
  const styles = {
    footer: {
      marginTop: "40px",
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "25px",
    },
    iconStyle: {
      fontSize: "35px",
      cursor: "pointer",
      color: isDarkMode ? "white" : "black",
    },
  };
  return (
    <footer style={styles.footer}>
      <a href="https://github.com/simoneteglia">
        <AiFillGithub style={styles.iconStyle} />
      </a>
      <a href="https://www.linkedin.com/in/simone-teglia/">
        <AiFillLinkedin style={styles.iconStyle} />
      </a>
      <a href="https://huggingface.co/simoneteglia">
        <img
          src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"
          width="35px"
        />
      </a>
    </footer>
  );
};

export default Footer;
