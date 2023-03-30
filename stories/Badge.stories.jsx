import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Badge",
  component: MantineCore.Badge,
  parameters: {
    docs: {
      description: {
        component: "Badge",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["outline", "light", "filled", "gradient", "dot"],
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    fullWidth: { description: "Full width", type: "boolean" },
    label: { description: "Label", type: "string" },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Badge
      {...args}
    >
      {args.label}
    </MantineCore.Badge>
  );
};

Default.args = {
  variant: "outline",
  size: "md",
  radius: "md",
  fullWidth: false,
  label: "Label",
};
