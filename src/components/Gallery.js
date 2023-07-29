import { useState } from 'react';
import leftVector from '../assets/leftVector.png';
import rightVector from '../assets/rightVector.png';
import '../styles/Gallery.css';

function Gallery({ pictures }) {
    // on définit l'index de la première slide
   const [currentIndex, setCurrentIndex] = useState(0);

   // SI on est à la 1ère slide : current === 0
  // => on retourne à la dernière : length - 1
  // SINON => on va à la précèdente : current - 1
   const handleLeftClick = () => {
      if (currentIndex === 0) {
         setCurrentIndex(pictures.length - 1);
      } else {
         setCurrentIndex(currentIndex - 1);
      }
   };

   // SI on est à la dernière slide : current === length - 1
  // => on passe à la première : 0
  // SINON => on passe à la prochaine : current + 1
   const handleRightClick = () => {
      if (currentIndex === pictures.length - 1) {
         setCurrentIndex(0);
      } else {
         setCurrentIndex(currentIndex + 1);
      }
   };

   return ( // SI il y a plus d'une image, ALORS on affiche les flèches  //
      <div className="gallery">
         {pictures.length > 1 && (
            <img
               className="leftVector"
               src={leftVector}
               alt="Précédent"
               onClick={handleLeftClick}
            />
         )}
         <img
            className="currentPicture"
            src={pictures[currentIndex]}
            alt={`Logement ${currentIndex + 1}`}
         />
         {pictures.length > 1 && (
            <img
               className="rightVector"
               src={rightVector}
               alt="Suivant"
               onClick={handleRightClick}
            />
         )}
      </div>
   );
}

export default Gallery;


