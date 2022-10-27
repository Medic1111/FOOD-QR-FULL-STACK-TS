import React, { createContext, useState } from "react";
import { CatInfo, DishInfo, GenInfo, Menu } from "../models/dataType";

interface Values {
  genInput: GenInfo;
  setGenInput: React.Dispatch<React.SetStateAction<GenInfo>>;
  catInput: CatInfo;
  setCatInput: React.Dispatch<React.SetStateAction<CatInfo>>;
  menu: Menu;
  setMenu: React.Dispatch<React.SetStateAction<Menu>>;
}

export const MenuCtx = createContext<Values>({
  genInput: {
    resName: "",
    resHours: "",
    resNumber: "",
    resAddress: "",
  },

  setGenInput: () => {},
  catInput: {
    category: "",
    dishes: [],
  },
  setCatInput: () => {},

  menu: [],
  setMenu: () => {},
});

const MenuCtxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [genInput, setGenInput] = useState<GenInfo>({
    resName: "",
    resHours: "",
    resNumber: "",
    resAddress: "",
  });

  const [catInput, setCatInput] = useState<CatInfo>({
    category: "",
    dishes: [],
  });

  const [menu, setMenu] = useState<Menu>([]);

  return (
    <MenuCtx.Provider
      value={{
        genInput: genInput,
        setGenInput: setGenInput,
        catInput: catInput,
        setCatInput: setCatInput,
        menu: menu,
        setMenu: setMenu,
      }}
    >
      {children}
    </MenuCtx.Provider>
  );
};

export default MenuCtxProvider;
