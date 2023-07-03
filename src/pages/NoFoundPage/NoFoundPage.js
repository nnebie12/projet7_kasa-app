import { Link } from 'react-router-dom';
import styles from '../../styles/NoFoundPage.css';

function NoFoundPage() {
   return (
      <div className={styles.noFound}>
         <h2 className={styles.title}>404</h2>
         <p className={styles.oups}>
            Oups ! La page que vous demandez n'existe pas.
         </p>
         <Link to="/" className={styles.link}>
            Retourner sur la page d'accueil
         </Link>
      </div>
   );
}

export default NoFoundPage;