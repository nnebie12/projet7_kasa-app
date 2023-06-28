import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'



function App() {
	return (
		<BrowserRouter>
      <div>
        <div>
        <Routes>
        { /* renvoie sur la home */}
            <Route path="/" element={<Home />} />
					
				
				</Routes>
        </div>
      
      </div>

    </BrowserRouter>
	);
}

export default App;