import React from "react";
import Header from "components/Header";
import Top from "pages/Top";
import Detail from "pages/Detail";
import Contact from "pages/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
