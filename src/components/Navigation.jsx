import React, { useState,  useCallback, useRef,  } from "react";
import "../style/Navigation.css"

const ThemeContext = React.createContext();

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState("");


  // const navigationLinks = useMemo(
  //   () => [
  //     { label: "Գլխավոր", path: "/" },
  //     { label: "Զեղչեր", path: "/sales" },
  //     { label: "Ծառայություններ", path: "/services" },
  //     { label: "Մեր մասին", path: "/about-us" },
  //   ],
  //   []
  // );

  
  const handleSearch = useCallback((event) => {
    event.preventDefault();
    console.log("Search for:", searchQuery);
  }, [searchQuery]);



  return (
    <div className="flexgap-x-2">
      {/* Filter Button */}
      <button className="py-3 px-6 relative rounded-[40px] overflow-hidden transition-colors duration-300 text-secondary border border-secondary-extra-light hover:bg-gray sm-max:w-max shrink-0 max-sm:order-3 h-[42px] max-sm:!p-3 !px-10 !py-0 flex justify-center items-center !border-secondary lg:hidden">
        <div className="w-full sm-max:w-max flex justify-center items-center gap-x-4">
          <p className="filtr">
            Ֆիլտր
          </p>
          <div
            className="bg-secondary"
            // style={{
            //   maskImage: "url(/images/filter-icon.svg)",
            //   maskRepeat: "no-repeat",
            //   maskPosition: "center",
            //   maskSize: "cover",
            //   width: "16px",
            //   height: "16px",
            // }}
          ></div>
        </div>
      </button>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="py-3 px-4 border flex flex-row justify-between space-x-4 rounded-[40px] w-[240px] border-secondary-extra-light sm:hidden order-2 h-[42px] w-full"
      >
        {/* <input
          ref={inputRef}
          className="outline-none w-full border-none bg-transparent text-text2 placeholder:text-secondary/20 text-secondary"
          placeholder="Որոնում"
          value={searchQuery}
          onChange={handleInputChange}
        /> */}
        <button type="submit">
          <div
            className="bg-secondary"
            // style={{
            //   maskImage: "url(/images/header/search.svg)",
            //   maskRepeat: "no-repeat",
            //   maskPosition: "center",
            //   maskSize: "cover",
            //   width: "16px",
            //   height: "16px",
            // }}
          ></div>
        </button>
      </form>

      {/* Map Button */}
      <button className="py-3 px-6 relative rounded-[40px] overflow-hidden transition-colors duration-300 text-secondary border border-secondary-extra-light hover:bg-gray max-sm:hidden max-sm:order-1 !p-3 lg:!px-6 max-lg:h-[42px] flex shrink-0 justify-center items-center gap-x-3 !border-secondary">
        <p className="text-secondary text-xs xs:text-text3 sm:text-text2">
          Քարտեզ
        </p>
        <div
          className="bg-secondary"
          // style={{
          //   maskImage: "url(/images/map.svg)",
          //   maskRepeat: "no-repeat",
          //   maskPosition: "center",
          //   maskSize: "cover",
          //   width: "16px",
          //   height: "16px",
          // }}
        ></div>
      </button>

      {/* Calendar Button */}
      <div className="flex items-center">
        <button className="py-3 px-6 relative rounded-[40px] overflow-hidden transition-colors duration-300 text-secondary border border-secondary-extra-light hover:bg-gray w-[42px] h-[42px] !p-0 flex justify-center items-center !border-secondary">
          <div
            className="bg-secondary"
            // style={{
            //   maskImage: "url(/images/calendar.svg)",
            //   maskRepeat: "no-repeat",
            //   maskPosition: "center",
            //   maskSize: "cover",
            //   width: "16px",
            //   height: "16px",
            // }}
          ></div>
        </button>
      </div>
    </div>
  );
};


export default NavigationBar