import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav id="hamnav">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />

      <div id="hamitems">
        <NavLink to="/talente">Alle Talente</NavLink>
        <NavLink to="/telekinet">Telekinet:in</NavLink>
        {/* <NavLink to="/technomant">Technomant:in</NavLink>
        <NavLink to="/telepath">Telepath:in</NavLink> */}
      </div>
    </nav>
  );
};

export default Navigation;
