import React, { createContext, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import NavigationBar from "./components/Navigation";  
import Carousel from "./components/Carusel";



export const AppContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');  

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Header /> 
          <NavigationBar /> 
          <Carousel />
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/sales" element={<div>Sales Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/about-us" element={<div>About Us Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
