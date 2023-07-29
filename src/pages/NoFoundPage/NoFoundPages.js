import { Link } from 'react-router-dom';
import '../../styles/NoFoundPage.css';

function NotFoundPages() {
   return (
      <div className="notFound">
         <h3 className="title">404</h3>
         <p className="oups">
            Oups ! La page que vous demandez n'existe pas.
         </p>
         <Link to="/" className="link">
            Retourner sur la page d'accueil
         </Link>
      </div>
   );
}

export default NotFoundPages;