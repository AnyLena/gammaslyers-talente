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
      <h1>Gammaslayers Talente</h1>
      <Menus
        setKlasse={setKlasse}
        setLevel={setLevel}
        klasse={klasse}
        level={level}
      />
      <Links talents={filteredTalents} />
      <Talente talents={filteredTalents} />
    </>
  );
};

export default TalentList;
