import { useState } from 'react';
import downVector from '../assets/downVector.png';
import upVector from '../assets/upVector.png';
import'../styles/Collapse.css';

function Collapse({ title, content }) {
   const [isOpen, setIsOpen] = useState(false); //useSate est un hook qui permet d'ajouter un state local dans un composant fonction

   const toggleOpen = () => setIsOpen(!isOpen);

   return (
      <div className="collapse">
         <div className="header" onClick={toggleOpen}>
            <h2>{title}</h2>
            <img
               src={isOpen ? upVector : downVector}
               alt={isOpen ? 'Fermer' : 'Ouvrir'}
            />
         </div>
         {isOpen && (
            <div className="content">
               {content}
            </div>
         )}
      </div>
   );
}

export default Collapse;
