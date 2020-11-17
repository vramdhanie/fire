import React, { useState, useEffect } from "react";
import { verses, baha } from "./tablet";
import Slide from "./slide";
import Controls from "./controls";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  const [tablet, setTablet] = useState([]);
  const [verse, setVerse] = useState(0);
  const [time, setTime] = useState([]);

  useEffect(() => {
    setTablet(verses);
  }, []);

  const nextSlide = (key) => {
    let nextVerse;
    let newTime = [...time];
    if (key === "r") {
      nextVerse = 0;
      newTime = [];
    } else {
      const dir = ["a", "left"].includes(key) ? -1 : 1;
      nextVerse = (verse + dir) % tablet.length;
      nextVerse = nextVerse < 0 ? 0 : nextVerse;
      if (dir > 0) {
        newTime.push(Date.now());
      } else {
        if (nextVerse === 0) {
          newTime = [];
        }
      }
    }

    setVerse(nextVerse);
    setTime(newTime);
  };

  const average = () => {
    return (
      (time.length
        ? time
            .map((e, i) => e - (i === 0 ? e : time[i - 1]))
            .reduce((acc, curr) => acc + curr, 0) / verse
        : 0) *
      (tablet.length - verse)
    );
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
            <Slide verse={tablet[verse]} n={verse} />
          </CSSTransition>
        </SwitchTransition>

        <Controls nextSlide={nextSlide} n={verse} />
      </main>
      <footer className="text-center text-xs opacity-50 text-gray-700 flex justify-between p-1">
        <div>&copy; {new Date().getFullYear()} Vincent Ramdhanie</div>
        <div>{Math.ceil(average() / 1000)} s</div>
      </footer>
    </div>
  );
}

export default App;
