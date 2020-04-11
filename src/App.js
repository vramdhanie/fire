import React, { useState, useEffect } from "react";
import "./app.css";
import { verses, baha } from "./tablet";
import Slide from "./slide";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { useHistory, useParams } from "react-router-dom";

function App() {
  const [tablet, setTablet] = useState([]);

  const history = useHistory();
  let { n = 0 } = useParams();

  useEffect(() => {
    setTablet(verses);
  }, []);

  const nextSlide = (key) => {
    let nextVerse;
    if (key === "r") {
      nextVerse = 0;
    } else {
      const dir = ["a", "left"].includes(key) ? -1 : 1;
      nextVerse = (+n + dir) % tablet.length;
      nextVerse = nextVerse < 0 ? 0 : nextVerse;
    }

    history.push(`/${nextVerse}`);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>Fire Tablet</h1>
        <h4 className="app__baha">{baha}</h4>
      </header>
      <main className="app__main">
        <Slide verse={tablet[n]} />
      </main>
      <footer className="app__footer">
        &copy; {new Date().getFullYear()} Vincent Ramdhanie
      </footer>
      <KeyboardEventHandler
        handleKeys={["a", "s", "r", "right", "left"]}
        onKeyEvent={(key, e) => nextSlide(key)}
      />
    </div>
  );
}

export default App;
