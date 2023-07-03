import { useParams } from 'react-router-dom';
import Logements from './LogementsPagesRoutes';
import logements from '../../data/logements.json';

function LogementsPagesRoutes() {
   const { id } = useParams();
   const logement = logements.find((logement) => logement.id === id);

   return (
      <div>
         <Logements logement={logement} />
      </div>
   );
}

export default LogementsPagesRoutes;