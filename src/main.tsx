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
import NavBar from "./reusable/Navbar";
import { Link } from "./reusable/Navbar";

const links: Link[] = [
  { label: "Home", path: "/" },
  { label: "Add Book", path: "/manage-book" },
  { label: "about", path: "/about" },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar links={links} />
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
