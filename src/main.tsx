import React from "react";
import ReactDOM from "react-dom/client";
import About from "./typescript/About";
import Books from "./typescript/Books";
import ManageBook from "./typescript/ManageBook";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./typescript/Navbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/manage-book" element={<ManageBook />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
