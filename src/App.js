import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  return <div className="App">Cake</div>;
}

export default App;
