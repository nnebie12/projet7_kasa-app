import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import NoFoundPage from './pages/NoFoundPage/NoFoundPage';
import Logements from './pages/Logements/Logements';



function App() {
	return (
		<BrowserRouter>
      <div className="App">
        <Header/>
        <div>
        <Routes>
        { /* renvoie sur la home */}
            <Route path="/" element={<Home />} />
            { /* renvoie sur la page a propos */}
            <Route path="/a_propos" element={<Apropos />} />
            { /* renvoie sur la page fiche logement */}
            <Route path="/fiche_logement/:id" element={<Logements />} />
            { /* path="*" fonctionne si jamais l'URL ne correspond à rien de déclaré au dessus */}
            <Route path="/*" element={<NoFoundPage />} />

					
				
				</Routes>
        </div>
        <Footer/>
      
      </div>

    </BrowserRouter>
	);
}

export default App;