import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="name">Grishan Bajracharya</h1>
        <p className="tagline">Just another guy building cool things.</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/grishan-bajracharya-b77a7b218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tygbspartan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
