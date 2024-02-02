import ParaTalent from "../components/ParaTalent";
import { data } from "../../data/parafaehigkeiten";
import { useState, useEffect } from "react";
import '../styles/ParaTalent.css'

const Telekinet = () => {
  const [paras, setParas] = useState([]);

  useEffect(() => {
    setParas(data.telekinet);
    console.log(paras);
  }, []);

  return (
    <>
      <h1>Parafähigkeiten Telekinet:in</h1>
      <section className="para-container--all">
        {paras &&
          paras.map((para, index) => (
            <ParaTalent key={index} para={paras[index]} />
          ))}
      </section>
    </>
  );
};

export default Telekinet;
