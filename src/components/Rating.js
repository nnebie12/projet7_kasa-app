import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

//// Rating récupère 2 prop => rating et className
function Rating({ rating, className }) {
   const stars = [];
   for (let i = 1; i <= 5; i++) {
      stars.push(
         <FontAwesomeIcon
         // on boucle pour afficher les étoiles en fonction des notes accordées
            icon={solidStar}
            style={{
               color: i <= rating ? '#ff6060' : '#e3e3e3',
               fontSize: '23px',
            }}
         />,
      );
   }

   return <div className={className}>{stars}</div>;
}

export default Rating;