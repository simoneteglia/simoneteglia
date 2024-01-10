import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import ResultBar from "../components/ResultBar";
import SkillPill from "../components/SkillPill";
import { SiPytorch } from "react-icons/si";

import "../../resources/pages.css";

export default function Langid() {
  const [windowSize, setWindowSize, isDarkMode] = useOutletContext();
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const requestLanguage = () => {
    console.log(text);
    let data = JSON.stringify(text);
    axios
      .post(
        "https://api-inference.huggingface.co/models/simoneteglia/xlm-roberta-europarl-language-detection",
        data,
        {
          headers: {
            Authorization: "Bearer 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",
          },
        }
      )
      .then((res) => {
        setError(false);
        setResults(res.data[0]);
      })
      .catch((err) => {
        setError(true);
      });
  };

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
      <h1>Xlm-Roberta for europarl language detection</h1>
      <p>
        The model is trained on the Europarl corpus, which contains the
        proceedings of the European Parliament from 1996 to 2011. The model is
        able to recognize all the 21 languages present in the corpus with an
        accuracy of 0.99 and F1 score of 0.99
      </p>
      <p>
        Check the{" "}
        <a href="https://huggingface.co/simoneteglia/xlm-roberta-europarl-language-detection">
          model card{" "}
        </a>
        on the HuggingFace website
      </p>
      <SkillPill
        skill="Pytorch"
        bgColor="#de3412"
        color="#fff"
        icon={<SiPytorch color="#fff" />}
      />
      <br />
      <h1>Test the model here</h1>
      <section
        id="inference-section"
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <input
          onChange={(e) => setText(e.target.value)}
          onSubmit={requestLanguage}
          style={{
            fontSize: "20px",
            border: "2px solid rgba(0,0,0,0.2)",
            borderRadius: "15px",
            padding: "0 10px",
            flex: 1,
            minHeight: "50px",
          }}
          type="text"
        />
        <button
          id="submit-button"
          onClick={requestLanguage}
          style={{
            width: "100px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "22px",
            borderRadius: "15px",
            padding: "0 40px",
          }}
        >
          Submit
        </button>
      </section>
      <section id="results" style={{ paddingTop: "30px" }}>
        {!error ? (
          results.map((element) => {
            return <ResultBar result={element.score} label={element.label} />;
          })
        ) : (
          <p style={{ color: "red", maxWidth: "35ch" }}>
            There has been an error communicating with the HuggingFace servers.
            Please try again
          </p>
        )}
      </section>
    </div>
  );
}
