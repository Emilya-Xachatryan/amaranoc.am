import React, { useContext, useState, useMemo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App"; 
import "../style/Header.css"

const Header = () => {
  const { setSearchTerm } = useContext(AppContext); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const searchInputRef = useRef();

  const navigationLinks = useMemo(() => [
    { label: "Գլխավոր", path: "/" },
    { label: "Զեղչեր", path: "/sales" },
    { label: "Ծառայություններ", path: "/services" },
    { label: "Մեր մասին", path: "/about-us" }
  ], []);


  
  const handleSearch = useCallback(() => {
    setSearchTerm(searchQuery); 
    searchInputRef.current.blur(); 
  }, [searchQuery, setSearchTerm]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">

      <div className="logo">
        <img src="https://amaranoc.am/images/logo.svg" alt="app-logo" width="160" height="44" />
      </div>

      <nav className="flexspace-x-8">
        {navigationLinks.map((link) => (
          <div key={link.path}>
            <Link to={link.path}>
              <p className="hover:text-yellow-500">{link.label}</p>
            </Link>
          </div>
        ))}
      </nav>

    
      <div className="flex items-center space-x-4">
     
        <div className="relative">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Որոնում"
            className="p-2rounded-mdtext-black"
          />
          {/* <button
            type="button"
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          > */}
            <div className="w-5 h-5 bg-white rounded-full" /> 
          {/* </button> */}
        </div>

      
        <Link to="/login">
          <div className="bg-gray-600 p-2 rounded-full">
            <div className="w-5 h-5 bg-white rounded-full" /> 
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
