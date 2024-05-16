import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface UiContext {
  isAddFarmModalOpen: boolean;
  setIsAddFarmModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UiContext = createContext<UiContext | null>(null);

export default function UiContextProvider({ children }: PropsWithChildren) {
  const [isAddFarmModalOpen, setIsAddFarmModalOpen] = useState<boolean>(false);

  return (
    <UiContext.Provider value={{ isAddFarmModalOpen, setIsAddFarmModalOpen }}>
      {children}
    </UiContext.Provider>
  );
}

export function useUiContext() {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error('useUiContext must be used within a UiContextProvider');
  }
  return context;
}
