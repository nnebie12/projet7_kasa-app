import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LogementsPages from "./pages/Logements/LogementsPages";
import AproposPages from "./pages/Apropos/AproposPages"
import NotFoundPages from "./pages/NoFoundPage/NotFoundPages"
import Header from "./components/Header";
import Footer from "./components/Footer"




function App() {
   return (
      <Router>
         <Header />
         <Routes>
            
            <Route path="/" element={<Home />} />
            { /* renvoie sur la page logements */}
            <Route path="/logement/:id" element={<LogementsPages />}/>
            <Route path="/about" element={<AproposPages />} />
            <Route path="*" element={<NotFoundPages />} />
            <Route path="/not-found" element={<NotFoundPages />} />
            

					
				
				</Routes>
       
        <Footer/>
      
      

    </Router>
	);
}

export default App;