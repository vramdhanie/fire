import React, { useState, useEffect, useCallback } from "react";
import { verses, baha } from "./tablet";
import Slide from "./slide";
import Controls from "./controls";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

function App() {
  const [tablet, setTablet] = useState([]);
  const [verse, setVerse] = useState(0);
  const [time, setTime] = useState([]);
  
  // Touch handling state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  
  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  // Wrap nextSlide in useCallback to prevent recreation on each render
  const nextSlide = useCallback((key) => {
    let nextVerse;
    let newTime = [...time];
    
    if (key === "r") {
      // Reset to first slide
      nextVerse = 0;
      newTime = [];
    } else {
      // Determine direction: -1 for left, +1 for right
      const dir = key === "left" ? -1 : 1;
      
      // Calculate next verse with proper wrapping in both directions
      if (dir < 0 && verse === 0) {
        // If going left from first slide, wrap to last slide
        nextVerse = tablet.length - 1;
      } else if (dir > 0 && verse === tablet.length - 1) {
        // If going right from last slide, wrap to first slide
        nextVerse = 0;
      } else {
        // Normal increment/decrement
        nextVerse = verse + dir;
      }
      
      // Update timing information
      if (dir > 0) {
        newTime.push(Date.now());
      } else if (nextVerse === 0) {
        newTime = [];
      }
    }

    setVerse(nextVerse);
    setTime(newTime);
  }, [verse, tablet, time]); // Include dependencies that the function uses from component scope

  useEffect(() => {
    setTablet(verses);
    
    // Add keyboard event listener for arrow key navigation
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          nextSlide('right');
          break;
        case 'ArrowLeft':
          nextSlide('left');
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide]); // nextSlide is now stable thanks to useCallback

  // Handle touch start event
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move event
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (touchStart && e.targetTouches[0].clientX) {
      const currentDistance = touchStart - e.targetTouches[0].clientX;
      
      if (Math.abs(currentDistance) > 20) {
        // Show visual indicator based on swipe direction
        setSwipeDirection(currentDistance > 0 ? 'right' : 'left');
      } else {
        setSwipeDirection(null);
      }
    }
  };

  // Handle touch end event
  const onTouchEnd = () => {
    setSwipeDirection(null);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    // Navigate based on swipe direction
    if (isLeftSwipe) {
      nextSlide("right"); // Swipe left means go to next slide
    } else if (isRightSwipe) {
      nextSlide("left"); // Swipe right means go to previous slide
    }
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
    <div className="flex flex-col h-screen religious-bg">
      <header className="p-4 text-center">
        <h1 className="text-parchment-light text-4xl font-decorative font-bold">Fire Tablet</h1>
        <h4 className="text-parchment-light opacity-75 font-script text-2xl mt-2">{baha}</h4>
      </header>
      <main
        className="flex-1 flex flex-col items-center justify-center py-4 swipe-area relative"
        onClick={() => {
          nextSlide("right");
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Swipe indicators */}
        <div className={`swipe-indicator swipe-indicator-left ${swipeDirection === 'left' ? 'active' : ''}`}>
          &#8592;
        </div>
        <div className={`swipe-indicator swipe-indicator-right ${swipeDirection === 'right' ? 'active' : ''}`}>
          &#8594;
        </div>
        
        <Controls nextSlide={nextSlide} n={verse} />
        
        <div className="flex-grow flex items-center justify-center w-full max-w-6xl">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={verse}
              timeout={800}
              classNames="page"
              unmountOnExit
            >
              <Slide verse={tablet[verse]} n={verse} />
            </CSSTransition>
          </SwitchTransition>
        </div>

        <Controls nextSlide={nextSlide} n={verse} />
      </main>
      <footer className="text-center text-parchment-light opacity-70 p-3 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 max-w-6xl mx-auto">
          <div className="font-serif flex items-center order-1 sm:order-1">
            &copy; {new Date().getFullYear()} 
            <a 
              href="https://vincentramdhanie.com" 
              className="ml-1 hover:text-illumination-gold transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Vincent Ramdhanie
            </a>
          </div>
          
          <div className="font-script text-base order-3 sm:order-2">
            {Math.ceil(average() / 1000)} s
          </div>
          
          <div className="flex items-center space-x-4 order-2 sm:order-3">
            <a 
              href="https://github.com/vramdhanie" 
              className="text-parchment-light hover:text-illumination-gold transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-lg" />
            </a>
            <a 
              href="https://twitter.com/vramdhanie" 
              className="text-parchment-light hover:text-illumination-gold transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vramdhanie" 
              className="text-parchment-light hover:text-illumination-gold transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a 
              href="https://vincentramdhanie.com" 
              className="text-parchment-light hover:text-illumination-gold transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Personal Website"
            >
              <FaGlobe className="text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
