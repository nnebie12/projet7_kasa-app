import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import LogementsPagesRoutes from './pages/Logements/LogementsPagesRoutes';
import Header from './components/Header';
import NoFoundPage from './pages/NoFoundPage/NoFoundPage';
import Footer from './components/Footer';

function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<LogementsPagesRoutes />} />
            <Route path="*" element={<NoFoundPage />} />
            <Route path="/nofound" element={<NoFoundPage />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;