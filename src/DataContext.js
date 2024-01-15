import React,{useState,createContext,useContext} from "react";
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(null);



  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to access the context
export const useData = () => {
  return useContext(DataContext);
};