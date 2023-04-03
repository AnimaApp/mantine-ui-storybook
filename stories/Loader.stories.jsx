import React from "react";
import * as MantineCore from "@mantine/core";
import { color } from "@storybook/theming";

export default {
  title: "Mantine UI/Loader",
  component: MantineCore.Loader,
  parameters: {
    docs: {
      description: {
        component: "Loader",
      },
    },
  },
  argTypes: {
    color: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      }
    },
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
        options: ["bars", "oval", "dots"],
      },
    },
  },
};

export const Default = (args) => {
  return <MantineCore.Loader {...args} />;
};

Default.args = {
  size: "md",
  variant: "oval",
  color: "blue",
};
