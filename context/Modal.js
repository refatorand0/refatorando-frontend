import React from 'react';

const ModalContext = React.createContext();

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      { children }
    </ModalContext.Provider>
  )
};

export function useModal() {
  const context = React.useContext(ModalContext);
  const { isOpen, setIsOpen } = context;

  return { isOpen, setIsOpen };
};
