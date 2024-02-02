import ParaTalent from "../components/ParaTalent";
import { data } from "../../data/parafaehigkeiten";
import { useState, useEffect } from "react";
import "../styles/ParaTalent.css";
import ParaMenu from "../components/ParaMenu";

const Technomantie = () => {
  const [paras, setParas] = useState([]);
  const [filteredParas, setFilteredParas] = useState([]);
  const [levelPara, setLevelPara] = useState(0);

  useEffect(() => {
    setParas(data.technomantie);
    setLevelPara(1);
  }, []);

  useEffect(() => {
    const filter = paras.filter((para) => para.stufe <= levelPara);
    setFilteredParas(filter);
    console.log(filteredParas);
  }, [levelPara]);

  return (
    <>
      <h1>Technomantie</h1>
      <p>{filteredParas.length} Parafähigkeiten</p>
      <ParaMenu levelPara={levelPara} setLevelPara={setLevelPara} />
      <section className="para-container--all">
        {filteredParas &&
          filteredParas.map((para, index) => (
            <ParaTalent key={index} para={filteredParas[index]} />
          ))}
      </section>
    </>
  );
};

export default Technomantie;
