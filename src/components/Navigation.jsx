import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setIsOpen(true);
    } else if (!isLargeScreen) {
      setIsOpen(false);
    }
  }, [isLargeScreen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="hamnav">
      <button onClick={handleClick}>&#9776;</button>

      {isOpen && (
        <div id="hamitems">
          <NavLink
            to="/talente"
            onClick={!isLargeScreen ? handleClick : undefined}
          >
            Alle Talente
          </NavLink>
          <NavLink
            to="/telekinet"
            onClick={!isLargeScreen ? handleClick : undefined}
          >
            Telekinet:in
          </NavLink>
          {/* <NavLink to="/technomant" onClick={!isLargeScreen ? handleClick : undefined}>Technomant:in</NavLink>
        <NavLink to="/telepath" onClick={!isLargeScreen ? handleClick : undefined}>Telepath:in</NavLink> */}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
