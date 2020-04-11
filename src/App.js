import React, { useState, useEffect } from "react";
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
    <div className="flex flex-col h-screen bg-blue-200">
      <header className="p-2 text-center">
        <h1 className="text-teal-800 text-3xl">Fire Tablet</h1>
        <h4 className="text-teal-500">{baha}</h4>
      </header>
      <main className="flex-1">
        <Slide verse={tablet[n]} />
      </main>
      <footer className="text-center text-sm opacity-50 text-gray-700">
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
