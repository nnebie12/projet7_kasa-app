import '../styles/Card.css'
import { Link } from 'react-router-dom';



function Card({ id, title, cover }) {

    
        return (
            
                <Link to={`/logement/${id}`} className="card">
                    <img className="cardImage" src={cover} alt={title} />
                    <h1 className="cardTitle">{title}</h1>
                 </Link>
                
              
             );
    
        
            
       
    }
     
    export default Card