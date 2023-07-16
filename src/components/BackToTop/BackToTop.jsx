import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./BackToTop.css";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  /* Using "Event"
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setBackToTop(true);
        } else {
          setBackToTop(false);
        }
      });
    }, []);
    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  */

  // Using "onscroll"
  const handleScroll = () => {
    setBackToTop(window.scrollY > 100);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button className="scroll-button" onClick={scrollUp}>
          <IoIosArrowUp />
        </button>
      )}
      <script>{(window.onscroll = handleScroll)}</script>
    </div>
  );
};

export default BackToTop;
