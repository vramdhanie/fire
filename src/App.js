import React, { useState, useEffect } from "react";
import "./app.css";
import { verses, baha } from "./tablet";

function App() {
  const [tablet, setTablet] = useState([]);
  const [verse, setVerse] = useState(0);

  useEffect(() => {
    setTablet(verses);
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Fire Tablet</h1>
        <h4 className="app__baha">{baha}</h4>
      </header>
      <main className="app__main">{tablet[0]}</main>
      <footer className="app__footer">
        &copy; {new Date().getFullYear()} Vincent Ramdhanie
      </footer>
    </div>
  );
}

export default App;
