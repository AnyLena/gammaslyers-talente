import ParaTalent from "../components/ParaTalent";
import { data } from "../../data/parafaehigkeiten";
import { useState, useEffect } from "react";
import "../styles/ParaTalent.css";
import ParaMenu from "../components/ParaMenu";
import Links from "../components/Links";

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
    <div className="main-section">
      <h1>Technomantie</h1>
      <p>In Level {levelPara} sind {filteredParas.length} Parafähigkeiten von insgesamt {paras.length} verfügbar.</p>
      <div className="para-links"><Links links={filteredParas}/></div>
      <ParaMenu levelPara={levelPara} setLevelPara={setLevelPara} />
      <section className="para-container--all">
        {filteredParas &&
          filteredParas.map((para, index) => (
            <ParaTalent key={index} para={filteredParas[index]} />
          ))}
      </section>
      </div>
    </>
  );
};

export default Technomantie;
