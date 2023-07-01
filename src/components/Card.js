import '../styles/Card.css'
/*import { Link } from 'react-router-dom';*/
import GalleryCard from '../assets/GalleryCard.png'




function Card({ id, title, cover }) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <span>{cover}</span>
                <img src={GalleryCard} alt="freelance" height={80} width={80} />
                <h3>{title}</h3>
            </div>
        )
    }
     
    export default Card