import { useCallback, useState } from "react";
import { DialogContext, DialogDispatchContext } from "./useDialogContext";

type Props = {
  children: React.ReactNode;
  contentRef: React.RefObject<HTMLDialogElement>;
};

export const DialogProvider = ({ children, contentRef }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = useCallback(() => {
    setIsOpen(true);
    contentRef.current?.showModal();
  }, [contentRef.current?.showModal]);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    contentRef.current?.close();
  }, [contentRef.current?.close]);

  return (
    <DialogContext.Provider value={{ isOpen }}>
      <DialogDispatchContext.Provider value={{ openDialog, closeDialog }}>
        {children}
      </DialogDispatchContext.Provider>
    </DialogContext.Provider>
  );
};
