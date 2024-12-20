import React, { createContext, useContext, useState } from "react";

const appContext =  createContext();


export default function AppProvider({children}) {
    const [searchItem,setSearchItem] = useState("");
    const [drinksList, setDrinksList] = useState([]);
    const [drink, setDrink] = useState({});
    const [id,setId] = useState(0);
    const getsearchedData = (e)=>{
      e.preventDefault();
      setSearchItem(e.target.elements.search.value);
    }
  return (
    <appContext.Provider value={{searchItem,drinksList,drink,id,setId,getsearchedData,setSearchItem,setDrinksList,setDrink}}>
      {children}
    </appContext.Provider>
  )
}

export const useGlobalContext = ()=>{
  return useContext(appContext);
}
