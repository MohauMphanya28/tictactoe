import { createContext, useState } from "react";
import { useModal } from "../hooks/useModal";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const { modal, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ modal, modalContent, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ThemeContext;
