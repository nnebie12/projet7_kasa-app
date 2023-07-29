import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import '../styles/NavBar.css'



export default function NavBar() {
	const location = useLocation();
		return (
			//Affichage du logo en h1 et du menu
			<nav>
            <ul >
               <li>
                  <NavLink
                     to="/"
                     style={
                        location.pathname === '/'
                           ? {
                                textDecoration: 'underline',
                                color: '#ff6060',
                                fontSize: '1.3em',
								
                             }
                           : {
                                textDecoration: 'none',
                                color: '#ff6060',
                                fontSize: '1.3em',
                             }
                     }
                  >
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     style={
                        location.pathname === '/about'
                           ? {
                                textDecoration: 'underline',
                                color: '#ff6060',
                                fontSize: '1.3em',
                             }
                           : {
                                textDecoration: 'none',
                                color: '#ff6060',
                                fontSize: '1.3em',
                             }
                     }
                  >
                     A propos
                  </NavLink>
               </li>
            </ul>
         </nav>
		);
	
	
	
}