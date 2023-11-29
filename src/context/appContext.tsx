import React from "react";

export type AppProviderValues = {
  ishamburgerOpened: boolean;
  storehamburgerOption: (value: boolean) => void;
};

const initState = {
  ishamburgerOpened: false,
  storehamburgerOption: (value: boolean) => void value
};

const AppContext = React.createContext<AppProviderValues>(initState);
export const AppProvider = AppContext.Provider;

type Props = {
  children?: React.ReactNode;
};

export const AppProviderContainer: React.FC<Props> = ({ children }) => {
  const [ishamburgerOpened, setIshamburgerOpened] = React.useState<boolean>(
    initState.ishamburgerOpened
  );
  const storehamburgerOption = (value: boolean) => {
    setIshamburgerOpened(value);
  };

  return (
    <AppProvider
      value={{
        ishamburgerOpened,
        storehamburgerOption
      }}
    >
      {children}
    </AppProvider>
  );
};

export default AppContext;
