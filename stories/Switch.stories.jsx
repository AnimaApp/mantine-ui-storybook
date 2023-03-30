import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Switch",
  component: MantineCore.Switch,
  parameters: {
    docs: {
      description: {
        component: "Switch",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    offLabel: { description: "Off label", type: "string" },
    onLabel: { description: "On label", type: "string" },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    // thumbIcon: to do
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Switch
      {...args}
    />
  );
};

Default.args = {
  label: "Label",
  offLabel: "",
  onLabel: "onLabel",
  size: "md",
  radius: "xl",
  // thumbIcon: to do
};
