import LOGOHeader from '../assets/LOGOHeader.png';
import styles from '../styles/Header.css'
import NavBar from '../components/NavBar';
import  '../styles/NavBar.css'



export default function Header() {
	return (
		//Affichage du logo en h1 et du menu
		<header>
			{/*Les images importées depuis la balise img sont accessible dans public */}
			<img src={LOGOHeader} alt="logo de l'agence kasa" className= {styles.logo}/>
		
			<NavBar></NavBar>
		</header>
	);
}


