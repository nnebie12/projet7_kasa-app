import React from 'react';
import LOGOHeader from '../assets/LOGOHeader.png';


export default function Header() {
	return (
		//Affichage du logo en h1 et du menu
		<header className="header">
			{/*Les imahes importées depuis la balise img sont accessible dans public */}
			<h1>
			<img src={LOGOHeader} alt="logo de l'agence kasa" />
			</h1>
			
		</header>
	);
}

