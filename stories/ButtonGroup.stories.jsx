import React from "react";
import * as MantineCore from "@mantine/core";
import { Default as SimpleButton } from "./Button.stories";

export default {
  title: "Mantine UI/Button Group",
  component: MantineCore.Button.Group,
  parameters: {
    docs: {
      description: {
        component: "Button Group",
      },
    },
  },
  argTypes: {
    orientation: {
      description: "Orientation",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    buttonBorderWidth: { description: "Button border width", type: "number" },
    items: {
      type: "story",
      description: "Items",
    },
  },
};

export const Default = (args) => {
  const {items} = args;

  return (
    <MantineCore.Button.Group
      {...args}
    >
      {items.map((item) => (
        <SimpleButton {...item} />
      ))}
    </MantineCore.Button.Group>
  );
};

Default.args = {
  orientation: "horizontal",
  buttonBorderWidth: 1,
  items: [
    {
      ...SimpleButton.args,
      label: "Button 1",
      variant: "outline",
    },
    {
      ...SimpleButton.args,
      label: "Button 2",
      variant: "outline",
    },
    {
      ...SimpleButton.args,
      label: "Button 3",
      variant: "outline",
    }
  ]
};

Default.storyInfo = {
  name: "SimpleButtonGroup",
  kind: "Mantine UI/Button Group",
};
