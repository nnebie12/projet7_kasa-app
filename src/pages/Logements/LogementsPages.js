import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import logementsData from '../../data/logements.json';
import '../../styles/LogementsPages.css';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';


function LogementsPages() {
   //useParams est un hook de composant client qui permet de récupérer l'id dans l'URL
   const { id } = useParams();
   const navigate = useNavigate();
   // on récupère le logement associé à l'id de l'URL
   const logement = logementsData.find((logement) => logement.id === id);
// useEffect  est un hook qui permet d'exécuter des actions après le rendu des composants en choisissant à quel moment et à quelle fréquence cette action doit être exécutée
   useEffect(() => {
      if (!logement) {
         navigate('/not-found');
      }
   }, [logement, navigate]);

   if (!logement) {
      return null;
   }

   return (
      <div>
         <Gallery pictures={logement.pictures} />
         <div className="logementContainer">
            <h4 className="logement_title">{logement.title}</h4>
            <h5 className="location">{logement.location}</h5>
            <ul className="tagsContainer">
               {logement.tags.map((tag, index) => (
                  <li key={index} className="tags">
                     {tag}
                  </li>
               ))}
            </ul>
            <div className="hostContainer">
               <div className="hostDef">
                  <h2>{logement.host.name}</h2>
                  <img src={logement.host.picture} alt={logement.host.name} />
               </div>
               <Rating rating={logement.rating} className="rating" />
            </div>
            <div className="collapseContainer">
               <div className="collapseDescription">
               <Collapse
                  title="Description"
                  content={logement.description}  /*Pour toutes les autres descriptions*/
               >
                 
               </Collapse>
               </div>
              
               <Collapse
                  title="Equipements"
                  className="collapseEquipments"
                  content=
                  {<ul className="collapseUl">
                     {logement.equipments.map((equipments, index) => ( // Pour les listes d'équipements des appartements
                        <li key={index} className="equipments">
                           {equipments}
                        </li>
                     ))}
                  </ul>}

                  
               >
                  
               </Collapse>
            </div>
         </div>
      </div>
   );
}

export default LogementsPages;



