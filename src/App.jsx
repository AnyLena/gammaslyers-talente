import { useState, useEffect } from "react";
import "./styles/App.css";
import { data } from "./data.js";
import Talente from "./components/Talente.jsx";
import Menus from "./components/Menus.jsx";
import Links from "./components/Links.jsx";

function App() {
  const [talents, setTalents] = useState();
  const [filteredTalents,setFilteredTalents] = useState();
  const [klasse, setKlasse] = useState();
  const [level, setLevel] = useState(1);

  const filterTalents = () => {
    if (klasse) {
      const filter = talents.filter( talent => talent.level[klasse] && talent.level[klasse] <= level)
      setFilteredTalents(filter)  
    } 
  }

  useEffect(() => {
    setTalents(data.talente);
  }, []);

  useEffect(() => {
    filterTalents();
    console.log(filteredTalents)
  }, [klasse,level]);


  return (
    <>
      <h1>Gammaslayers Talente</h1>
      <Menus setKlasse={setKlasse} setLevel={setLevel} klasse={klasse}/>
      <Links talents={filteredTalents}/>
      <Talente talents={filteredTalents}/>
    </>
  );
}

export default App;
