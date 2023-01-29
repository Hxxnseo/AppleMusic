/*eslint-disable */
import React from "react";
import "./App.css";
import Browse from "./components/Browse";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <wrapper className="wrapper">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Browse" element={<Browse />} />
          </Routes>
        </BrowserRouter>
      </wrapper>
    </div>
  );
}

export default App;
