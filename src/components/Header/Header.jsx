import React from 'react';
import logo from "../assets/logo512.png";


export default function Header() {
	return (
		//Affichage du logo en h1 et du menu
		<header className="header">
			{/*Les imahes importées depuis la balise img sont accessible dans public */}
			<h1>
			<img src={logo} alt="logo de l'agence kasa" />
			</h1>
			
		</header>
	);
}

