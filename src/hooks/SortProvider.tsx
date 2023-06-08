import React, { createContext, useState } from "react";

export type SortingAlgorithm =
  | "bubble"
  | "insertion"
  | "selection"
  | "merge"
  | "quick";

export interface SortingContextData {
  sortType: SortingAlgorithm;
  changeSortType: (type: SortingAlgorithm) => void;
}

export const SortingContext = createContext<SortingContextData>(
  {} as SortingContextData
);

const SortProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortType, setSortType] = useState<SortingAlgorithm>("bubble");

  const changeSortType = (type: SortingAlgorithm) => {
    setSortType(type);
  };

  const contextValue: SortingContextData = {
    sortType,
    changeSortType,
  };

  return (
    <SortingContext.Provider value={contextValue}>
      {children}
    </SortingContext.Provider>
  );
};

export { SortProvider };
