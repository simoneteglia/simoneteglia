import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import ResultBar from "../components/ResultBar";

import "../../resources/pages.css";

export default function Langid() {
  const [windowSize, setWindowSize, isDarkMode] = useOutletContext();
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

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
        console.log(res);
        setResults(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, animi
        temporibus corporis expedita explicabo, quod adipisci non consequatur
        atque quasi quos enim repellendus et nesciunt accusamus pariatur
        quibusdam velit corrupti aliquid deleniti quis voluptatibus. Expedita
        laboriosam saepe dignissimos, debitis nostrum, illo eum eaque autem
        mollitia in exercitationem? Perferendis, amet quis.
      </p>
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
        {results.map((element) => {
          return <ResultBar result={element.score} label={element.label} />;
        })}
      </section>
    </div>
  );
}
