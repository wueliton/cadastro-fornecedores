import { createContext, PropsWithChildren, useContext, useState } from "react";
import { FilterModalContextProps } from "./types";

const FilterModalContext = createContext<FilterModalContextProps>(
  {} as FilterModalContextProps
);

export const FilterModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpenedState, setIsOpenedState] = useState(false);

  const handleOpen = () => {
    setIsOpenedState(true);
  };

  const handleClose = () => {
    setIsOpenedState(false);
  };

  return (
    <FilterModalContext.Provider
      value={{ isOpened: isOpenedState, open: handleOpen, close: handleClose }}
    >
      {children}
    </FilterModalContext.Provider>
  );
};

export const useFilterModalContext = () => {
  return useContext(FilterModalContext);
};
