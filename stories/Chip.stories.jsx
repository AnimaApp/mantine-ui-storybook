import React from "react";
import * as MantineCore from "@mantine/core";
import { color } from "../src/colors";

export default {
  title: "Mantine UI/Chip",
  component: MantineCore.Chip,
  parameters: {
    docs: {
      description: {
        component: "Chip",
      },
    },
    titleArg: "label",
  },
  argTypes: {
    label: { description: "Label", type: "string" },
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
    disabled: { description: "Disabled", type: "boolean" },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["outline", "filled"],
      },
    },
    value: { description: "Value", type: "string" },
    color: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Chip
      {...args}
    >
      {args.label}
    </MantineCore.Chip>
  );
};

Default.args = {
  label: "Label",
  size: "md",
  radius: "xl",
  disabled: false,
  variant: "outline",
  value: "",
  color: "blue",
};

Default.storyInfo = {
  name: "Chip",
  kind: "Mantine UI/Chip",
};
