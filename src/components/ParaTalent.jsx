import "../styles/ParaTalent.css";

const ParaTalent = ({ para }) => {
  return (
    <>
      <div className="para-talent">
        <h2>{para.name}</h2>
        <div className="para-werte">
          <p className="para-bez">Stufe</p>
          <p className="para-wert">{para.stufe}</p>
          <p className="para-bez">Preis</p>
          <p className="para-wert">{para.preis} Battens</p>
          {para.lernpw !== null && (
            <>
              <p className="para-bez">Lern-PW</p>
              <p className="para-wert">{para.lernpw}</p>
            </>
          )}
          <p className="para-bez">Kraftbonus</p>
          <p className="para-wert">{para.kraftbonus}</p>
          <p className="para-bez">Auslösedauer</p>
          <p className="para-wert">{para.ausloesedauer}</p>
          <p className="para-bez">Wirkdauer</p>
          <p className="para-wert">{para.wirkdauer}</p>
          <p className="para-bez">Distanz</p>
          <p className="para-wert">{para.distanz}</p>
          <p className="para-bez">Abklingzeit</p>
          <p className="para-wert">{para.abklingzeit}</p>
        </div>
        <div className="effekt">{para.effekt}</div>
      </div>
    </>
  );
};

export default ParaTalent;
