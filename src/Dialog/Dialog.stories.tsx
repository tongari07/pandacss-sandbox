import type { Meta, StoryObj } from "@storybook/react";

import { within } from "@storybook/test";
import { useRef } from "react";
import { Dialog } from ".";

const meta: Meta<typeof Dialog> = {};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (props) => {
    const ref = useRef<HTMLDialogElement>(null);

    return (
      <Dialog.Root>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content ref={ref} title="Dialog Title" {...props} />
      </Dialog.Root>
    );
  },
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);

    const button = getByRole("button", { name: "Open Dialog" });
    button.click();
  },
};
