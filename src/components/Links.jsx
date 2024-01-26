import "../styles/Links.css";

const Links = ({talents}) => {
    return ( <>
    <div className="links-container">
    {talents && talents.map((talent,index)=> (
        <div key={index}><a href={`#${talent.name}`}>{talent.name}</a></div>
    ))}
    </div>
    
    </> );
}
 
export default Links;