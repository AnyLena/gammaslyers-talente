import { useState, useEffect } from "react";
import "./styles/App.css";
import { data } from "../data/talents.js";
import TalentList from "./views/TalentList.jsx";
import Navigation from "./components/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import Telekinese from "./views/Telekinese.jsx";

function App() {
  const [talents, setTalents] = useState();
  const [filteredTalents, setFilteredTalents] = useState();
  const [klasse, setKlasse] = useState();
  const [level, setLevel] = useState(1);

  const filterTalents = () => {
    if (klasse) {
      const filter = talents.filter(
        (talent) => talent.level[klasse] && talent.level[klasse] <= level
      );
      setFilteredTalents(filter);
    }
  };

  useEffect(() => {
    setTalents(data.talente);
  }, []);

  useEffect(() => {
    filterTalents();
  }, [klasse, level]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/talente"
          element={
            <TalentList
              setKlasse={setKlasse}
              setLevel={setLevel}
              klasse={klasse}
              filteredTalents={filteredTalents}
              level={level}
            />
          }
        />
         <Route
          path="/telekinese"
          element={<Telekinese/>}
        />
      </Routes>
    </>
  );
}

export default App;
