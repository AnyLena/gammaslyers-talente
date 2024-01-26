import Talent from "./Talent";

const Talente = ({talents}) => {
    return ( 
        <div className="container">
        {talents &&
          talents.map((talent, index) => <Talent key={index} talent={talents[index]} />)}
      </div>
     );
}
 
export default Talente;