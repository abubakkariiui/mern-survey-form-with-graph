import { Routes, Route } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Survey from "./views/home/Survey";
import Header from "./views/Header";
import Reports from "./views/reports/Reports";

const App = () => {
  const [apiRes, setApiRes] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/api/survey/getall")
      .then((res) => res.json())
      .then((res) => setApiRes(res));
  }, [apiRes]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/Reports" element={<Reports data={apiRes} />} />
      </Routes>
    </>
  );
};

export default App;
