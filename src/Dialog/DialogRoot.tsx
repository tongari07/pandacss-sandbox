import { Children, cloneElement, useRef } from "react";
import { DialogContent } from "./DialogContent";
import { DialogProvider } from "./DialogProvider";

type Props = {
  children: React.ReactNode;
};

export const DialogRoot = ({ children }: Props) => {
  const contentRef = useRef<HTMLDialogElement>(null);
  const childArray = Children.toArray(children);

  const clonedChildArray = childArray.map((child) => {
    if (typeof child === "object" && "type" in child) {
      if (child.type === DialogContent) {
        return cloneElement(child, {
          ref: contentRef,
        });
      }
    }

    return child;
  });

  return (
    <DialogProvider contentRef={contentRef}>{clonedChildArray}</DialogProvider>
  );
};
