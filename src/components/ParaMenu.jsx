const ParaMenu = ({ setLevelPara }) => {
  const handleChange = (e) => {
    setLevelPara(e.target.value);
  };

  return (
    <>
      <div className="levelAnz-container">
        <label htmlFor="level-input">Level:</label>{" "}
        <input
          defaultValue="1"
          id="level-input"
          onChange={handleChange}
          type="number"
          min="1"
          max="20"
        />
      </div>
    </>
  );
};

export default ParaMenu;
