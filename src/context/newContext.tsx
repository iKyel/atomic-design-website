import React, { createContext, useContext } from "react";
import newsStore from "../store/newStore"; // Adjust the path as necessary

const NewsContext = createContext(newsStore);

export const useNewsStore = () => useContext(NewsContext);

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NewsContext.Provider value={newsStore}>
      {children}
    </NewsContext.Provider>
  );
};
