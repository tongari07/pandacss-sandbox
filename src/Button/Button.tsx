import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cva, cx } from "../../styled-system/css";

type Props = {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
} & ComponentPropsWithoutRef<"button">;

/**j
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "secondary", size = "medium", className, ...props }, ref) => {
    const style = buttonRecipe({
      variant,
      size,
    });

    return (
      <button
        ref={ref}
        type="button"
        className={cx(style, className)}
        {...props}
      />
    );
  },
);

const buttonRecipe = cva({
  base: {
    font: "Nunito Sans",
    fontWeight: "bold",
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
  },
  variants: {
    variant: {
      primary: {
        color: "white",
        bg: "#1ea7fd",
      },
      secondary: {
        color: "#333",
        bg: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      },
    },
    size: {
      small: {
        fontSize: "12px",
        padding: "10px 16px",
      },
      medium: {
        fontSize: "14px",
        padding: "11px 20px",
      },
      large: {
        fontSize: "16px",
        padding: "12px 24px",
      },
    },
  },
});
