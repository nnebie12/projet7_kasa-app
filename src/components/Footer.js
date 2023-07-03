import React from 'react'
import LOGOFooter from '../assets/LOGOFooter.png';


export default function Footer() {
	return (
		//Affichage du logo en h1 et du menu
		<footer>
			{/*Les imahes importées depuis la balise img sont accessible dans public */}
			
			<img src={LOGOFooter} alt="logo de l'agence kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
            
			
			
		</footer>
	);
}