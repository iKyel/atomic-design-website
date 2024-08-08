import React, { ReactNode } from 'react';
import newsStore from './newStore'; // Adjust the path as necessary

const NewsContext = React.createContext(newsStore);

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  return (
    <NewsContext.Provider value={newsStore}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsStore = () => React.useContext(NewsContext);