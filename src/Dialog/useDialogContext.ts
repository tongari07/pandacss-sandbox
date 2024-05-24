import { createContext, useContext } from "react";

export type DialogContextValue = {
  isOpen: boolean;
};

export const DialogContext = createContext<DialogContextValue | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (context === null) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }

  return context;
};

export type DialogDispatchContextValue = {
  openDialog: () => void;
  closeDialog: () => void;
};

export const DialogDispatchContext =
  createContext<DialogDispatchContextValue | null>(null);

export const useDialogDispatchContext = () => {
  const context = useContext(DialogDispatchContext);

  if (context === null) {
    throw new Error(
      "useDialogDispatchContext must be used within a DialogProvider",
    );
  }

  return context;
};
