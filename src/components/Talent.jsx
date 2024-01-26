import "../styles/Talent.css";

const Talent = ({ talent }) => {
  const obj = Object.fromEntries(
    Object.entries(talent.level).filter(([key, value]) => value !== null)
  );

  return (
    <>
      {talent && (
        <div key={talent.id} id={talent.name} className="talent-container">
          <h2>{talent.name}</h2>
          <div className="level-container">
          {Object.entries(obj).map(([key, value], index) => {
            let maxLv = talent.max[key];
            switch (maxLv) {
              case 1:
                maxLv = "I";
                break;
              case 2:
                maxLv = "II";
                break;
              case 3:
                maxLv = "III";
                break;
              case 4:
                maxLv = "IV";
                break;
              case 5:
                maxLv = "V";
                break;
              case 6:
                maxLv = "VI";
                break;
              case 7:
                maxLv = "VII";
                break;
              case 8:
                maxLv = "VIII";
                break;
              case 9:
                maxLv = "IX";
                break;
              case 10:
                maxLv = "X";
                break;

              default:
                break;
            }
            return (
             
              <p key={index}>
                {key} {value} ({maxLv})
              </p>
            );
          })}
          </div>
          <p>{talent.description}</p>
        </div>
      )}
    </>
  );
};

export default Talent;
