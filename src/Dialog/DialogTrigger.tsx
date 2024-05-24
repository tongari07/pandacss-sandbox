import { Button } from "../Button";
import { useDialogDispatchContext } from "./useDialogContext";

type Props = {
  children: React.ReactNode;
};

export const DialogTrigger = ({ children }: Props) => {
  const { openDialog } = useDialogDispatchContext();

  return (
    <Button type="button" onClick={openDialog}>
      {children}
    </Button>
  );
};
