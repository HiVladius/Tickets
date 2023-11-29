import { createContext, useState } from "react";

const UiContext = createContext();

const UiProvider = ({ children }) => {
  const [ocultarMenu, setOcultarMenu] = useState(false);
  const showMenu = () => {
    setOcultarMenu(false);
  };
  const hideMenu = () => {
    setOcultarMenu(true);
  };
  return (
    <UiContext.Provider
      value={{
        ocultarMenu,
        showMenu,
        hideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export { UiContext, UiProvider };
