import "../styles/Links.css";

const Links = ({links}) => {
    return ( <>
    <div className="links-container">
    {links && links.map((link,index)=> (
        <div key={index}><a href={`#${link.name}`}>{link.name}</a></div>
    ))}
    </div>
    
    </> );
}
 
export default Links;