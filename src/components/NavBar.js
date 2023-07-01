import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'



export default function NavBar() {
	return (
		//Affichage du logo en h1 et du menu
		<nav className="NavBar">
			{/*Les imahes importées depuis la balise img sont accessible dans public */}
			<ul>
                <li><Link to="/" className="nav-header">Acceuil</Link></li>
                <li><Link to="/" className="nav-header">À propos</Link></li>
            </ul>
			
		</nav>
	);
}