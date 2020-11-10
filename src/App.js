import React, { useState, useEffect } from "react";
import { verses, baha } from "./tablet";
import Slide from "./slide";
import Controls from "./controls";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  const [tablet, setTablet] = useState([]);
  const [verse, setVerse] = useState(0);

  useEffect(() => {
    setTablet(verses);
  }, []);

  const nextSlide = (key) => {
    let nextVerse;
    if (key === "r") {
      nextVerse = 0;
    } else {
      const dir = ["a", "left"].includes(key) ? -1 : 1;
      nextVerse = (verse + dir) % tablet.length;
      nextVerse = nextVerse < 0 ? 0 : nextVerse;
    }

    setVerse(nextVerse);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="p-2 text-center">
        <h1 className="text-teal-800 text-3xl">Fire Tablet</h1>
        <h4 className="text-teal-500">{baha}</h4>
      </header>
      <main
        className="flex-1 bg-gray-200 flex flex-col"
        onClick={() => {
          nextSlide("right");
        }}
      >
        <Controls nextSlide={nextSlide} n={verse} />
        <SwitchTransition>
          <CSSTransition
            key={verse}
            in={false}
            timeout={500}
            classNames="page"
            unmountOnExit
          >
            <Slide verse={tablet[verse]} />
          </CSSTransition>
        </SwitchTransition>

        <Controls nextSlide={nextSlide} n={verse} />
      </main>
      <footer className="text-center text-xs opacity-50 text-gray-700">
        &copy; {new Date().getFullYear()} Vincent Ramdhanie
      </footer>
    </div>
  );
}

export default App;
