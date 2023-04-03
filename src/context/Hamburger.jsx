import { createContext, useState, useContext } from "react";

const hamburgerData = createContext(false);

export const HamburgerProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <hamburgerData.Provider value={[hamburger, setHamburger]}>
      {children}
    </hamburgerData.Provider>
  );
};

export const UseHamburger = () => useContext(hamburgerData);
