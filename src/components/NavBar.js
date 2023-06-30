import React from 'react';
import { Link } from 'react-router-dom';



export default function NavBar() {
	return (
		//Affichage du logo en h1 et du menu
		<nav className="NavBarr">
			{/*Les imahes importées depuis la balise img sont accessible dans public */}
			<ul>
                <li><Link to="/" className="nav-header_link-home">Acceuil</Link></li>
                <li><Link>À propos</Link></li>
            </ul>
			
		</nav>
	);
}