import React from 'react'
import LOGOFooter from '../assets/LOGOFooter.png';
import styles from "../styles/Footer.css"

export default function Footer() {
	return (
		//Affichage du logo en h1 et du menu
		<footer className={styles.footer}>
			{/*Les images importées depuis la balise img sont accessible dans public */}
			
			<img className={styles.logo} src={LOGOFooter} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
			
			
		</footer>
	);
}