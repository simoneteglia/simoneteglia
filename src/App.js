import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import BiLSTM from "./components/pages/BiLSTM";
import TedxSapienza from "./components/pages/TedxSapienza";
import Langid from "./components/pages/Langid";
import Zip from "./components/pages/Zip";
import Careers from "./components/pages/Careers";
import LyricsGeneration from "./components/pages/LyricsGeneration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeManager />,
    errorElement: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: " 100%",
          height: "100vh",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <p> 404: Not found</p>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <button
            style={{
              backgroundColor: "violet",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Return to homepage
          </button>
        </Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/bilstm",
        element: <BiLSTM />,
      },
      {
        path: "/tedx",
        element: <TedxSapienza />,
      },
      {
        path: "/langid",
        element: <Langid />,
      },
      {
        path: "/zip",
        element: <Zip />,
      },
      {
        path: "/lyricsgeneration",
        element: <LyricsGeneration />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
    ],
  },
]);

function HomeManager() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDark") === "true" ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.body.style.backgroundColor = isDarkMode ? "#15202B" : "#fff";
  });

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <div style={{ margin: 0 }}>
      <Navbar
        windowSize={windowSize}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet context={[windowSize, setWindowSize, isDarkMode]} />
      </section>

      {/* <Footer isDarkMode={isDarkMode} /> */}
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
