import React from 'react';
import LOGOHeader from '../assets/LOGOHeader.png';
import './NavBar.js';


export default function Header() {
	return (
		//Affichage du logo en h1 et du menu
		<header className="header">
			{/*Les images importées depuis la balise img sont accessible dans public */}
			<img src={LOGOHeader} alt="logo de l'agence kasa" />
		
			
		</header>
	);
}

