import { useState } from "react";
import "../styles/Menu.css";

const Menus = ({ setKlasse, setLevel, klasse}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [klasseAnz,setKlasseAnz] = useState('Klasse wählen')

  const handleClick = (e) => {
    setKlasse(e.target.id);
    setKlasseAnz(e.target.innerText)
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  return (
    <div>
      {/* <button className="klasse-btn" onClick={() => setIsOpen(!isOpen)}>Klasse auswählen</button> */}
      <div className="menu-container">
        {!isOpen && <div className="chosen-klasse" onClick={() => setIsOpen(!isOpen)}>
                  Klasse: {klasseAnz} <span className="arrow">{`<`}</span>
                </div>}
        {isOpen && (
          <>
            <div className="klassen-container">

              <ul>
                <p>Heldenklassen</p>
                <li className="choose-klasse" id="KAM" onClick={handleClick}>
                  Kämpfer (KAM)
                </li>
                <li className="choose-klasse" id="STR" onClick={handleClick}>
                  Streuner (STR)
                </li>
                <li className="choose-klasse" id="TEC" onClick={handleClick}>
                  Tech (TEC)
                </li>
                <li className="choose-klasse" id="PAR" onClick={handleClick}>
                  Paramental (PAR)
                </li>
                <li className="choose-klasse" id="TLP" onClick={handleClick}>
                  Telepath (TLP)
                </li>
                <li className="choose-klasse" id="TKN" onClick={handleClick}>
                  Telekinet (TKN)
                </li>
                <li className="choose-klasse" id="TMT" onClick={handleClick}>
                  Technomant (TMT)
                </li>
              </ul>
              <p>Heldenklassen</p>
              <ul>
                <li className="choose-klasse" id="KOM" onClick={handleClick}>
                  Kommando (KOM)
                </li>
                <li className="choose-klasse" id="SUP" onClick={handleClick}>
                  Supertrooper (SUP)
                </li>
                <li className="choose-klasse" id="JOC" onClick={handleClick}>
                  Jockey (JOC)
                </li>
                <li className="choose-klasse" id="AGE" onClick={handleClick}>
                  Agent (AGE)
                </li>
                <li className="choose-klasse" id="JDK" onClick={handleClick}>
                  Judikator (JDK)
                </li>
                <li className="choose-klasse" id="RAN" onClick={handleClick}>
                  Ranger (RAN)
                </li>
                <li className="choose-klasse" id="SRO" onClick={handleClick}>
                  Schrottsammler (SRO)
                </li>
                <li className="choose-klasse" id="RBT" onClick={handleClick}>
                  Robotiker (RBT)
                </li>
                <li className="choose-klasse" id="BIO" onClick={handleClick}>
                  Biotech (BIO)
                </li>
                <li className="choose-klasse" id="MMO" onClick={handleClick}>
                  Metallischer Mönch (MMO)
                </li>
                <li className="choose-klasse" id="GHX" onClick={handleClick}>
                  Gravitonhexer (GHX)
                </li>
                <li className="choose-klasse" id="TER" onClick={handleClick}>
                  Teslaritter (TER)
                </li>
                <li className="choose-klasse" id="GES" onClick={handleClick}>
                  Gedankenschmied (GES)
                </li>
                <li className="choose-klasse" id="MPL" onClick={handleClick}>
                  Manipulator (MPL)
                </li>
                <li className="choose-klasse" id="NEO" onClick={handleClick}>
                  Neodruide (NEO)
                </li>
                <li className="choose-klasse" id="CHX" onClick={handleClick}>
                  Cyberhexer (CHX)
                </li>
                <li className="choose-klasse" id="RBM" onClick={handleClick}>
                  Robomancer (RBM)
                </li>
                <li className="choose-klasse" id="TEP" onClick={handleClick}>
                  Technopath (TEP)
                </li>
              </ul>
            </div>
          </>
        )}
        <div className="levelAnz-container">
          <label htmlFor="level-input">Level:</label>{" "}
          <input
            id="level-input"
            onChange={handleChange}
            type="number"
            min="1"
            max="20"
          />
        </div>
      </div>
    </div>
  );
};

export default Menus;
