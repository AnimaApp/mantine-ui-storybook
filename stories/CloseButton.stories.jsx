import React from "react";
import * as MantineCore from "@mantine/core";
import {color} from "../src/colors";

export default {
  title: "Mantine UI/Close Button",
  component: MantineCore.CloseButton,
  parameters: {
    docs: {
      description: {
        component: "CloseButton",
      },
    },
  },
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    iconSize: { description: "Icon size", type: "number" },
    loading: { description: "Loading", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: [
          "outline",
          "transparent",
          "light",
          "filled",
          "default",
          "subtle",
        ],
      },
    },
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
    <MantineCore.CloseButton
      {...args}
    />
  );
};

Default.args = {
  disabled: false,
  iconSize: 20,
  loading: false,
  size: "md",
  variant: "filled",
  color: "blue",
};

Default.storyInfo = {
  name: "CloseButton",
  kind: "Mantine UI/Close Button",
};
