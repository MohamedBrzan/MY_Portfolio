import { createContext, useContext } from 'react';

type CursorContextType = {
  setActive: (active: boolean) => void;
  setOpen: (open: boolean) => void;
};

export const CursorContext = createContext<CursorContextType>({
  setActive: () => {},
  setOpen: () => {},
});

export const useCursor = () => useContext(CursorContext);
