import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#15202B" : "#fff";
  });

  return (
    <div style={{ margin: 0 }}>
      <Navbar setIsDarkMode={setIsDarkMode} />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Landing isDarkMode={isDarkMode} />
      </section>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
