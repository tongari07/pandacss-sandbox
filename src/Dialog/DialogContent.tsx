import { forwardRef } from "react";
import { css } from "../../styled-system/css";
import { vstack } from "../../styled-system/patterns";
import { Button } from "../Button";
import { useDialogDispatchContext } from "./useDialogContext";

export type Props = {
  title: string;
};

export const DialogContent = forwardRef<HTMLDialogElement, Props>(
  ({ title }, ref) => {
    const { closeDialog } = useDialogDispatchContext();

    return (
      <dialog
        ref={ref}
        className={vstack({
          alignItems: "stretch",
          _backdrop: {
            position: "fixed",
            w: "100vw",
            h: "dvh",
          },
        })}
      >
        <span
          className={css({
            fontSize: "24px",
            fontWeight: "bold",
          })}
        >
          {title}
        </span>
        <div>
          <p
            className={css({
              fontSize: "16px",
            })}
          >
            Dialog content
          </p>
        </div>
        <form method="dialog">
          <Button type="button" size="small" onClick={closeDialog}>
            Cancel
          </Button>
          <Button type="submit" size="small" variant="primary">
            OK
          </Button>
        </form>
      </dialog>
    );
  },
);
