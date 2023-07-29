import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home/Home';
import LogementsPages from "./pages/Logements/LogemenstPages";
import AproposPages from "./pages/Apropos/AproposPages"
import NotFoundPages from "./pages/NoFoundPage/NoFoundPages"




function App() {
	return (
		<BrowserRouter>
      <div className="App">
        <Header/>
        <div>
        <Routes>
        { /* renvoie sur la home */}
            <Route path="/" element={<Home />} />
            { /* renvoie sur la page logements */}
            <Route path="/logement/:id" element={<LogementsPages />}/>
            <Route path="/about" element={<AproposPages />} />
            <Route path="*" element={<NotFoundPages />} />
            <Route path="/not-found" element={<NotFoundPages />} />
            

					
				
				</Routes>
        </div>
        <Footer/>
      
      </div>

    </BrowserRouter>
	);
}

export default App;