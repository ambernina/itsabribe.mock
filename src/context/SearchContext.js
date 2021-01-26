import React, {createContext, useState} from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [search, setSearch] = useState("");

  // const newSearch = (e) => {
  //   setSearch(e.target.value);
  // }

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;