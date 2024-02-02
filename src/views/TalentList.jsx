import Menus from "../components/Menus";
import Links from "../components/Links";
import Talente from "../components/Talente";

const TalentList = ({
  setKlasse,
  setLevel,
  klasse,
  filteredTalents,
  level,
}) => {
  return (
    <>
    <section className="main-section">
      <h1>Gammaslayers Talente</h1>
      <Menus
        setKlasse={setKlasse}
        setLevel={setLevel}
        klasse={klasse}
        level={level}
      />
      <Links links={filteredTalents} />
      <Talente talents={filteredTalents} />
      </section>
    </>
  );
};

export default TalentList;
