import { createContext, useState } from "react";

const FilterResultContext = createContext(null); 

const FilterResultContextProvider = ({children}) => {
    const [filterResult, setFilterResult] = useState([]);
    return ( 
        <FilterResultContext.Provider value={{filterResult, setFilterResult}}>
            {children}
        </FilterResultContext.Provider>
     );
}
 
export const FilterResult = FilterResultContext;

export default FilterResultContextProvider;