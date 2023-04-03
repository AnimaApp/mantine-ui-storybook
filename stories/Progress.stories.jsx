import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Progress",
  component: MantineCore.Progress,
  parameters: {
    docs: {
      description: {
        component: "Progress",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    animate: { description: "Animate", type: "boolean" },
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
    striped: { description: "Striped", type: "boolean" },
    value: { description: "Value", type: "number" },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <MantineCore.Progress
      {...args}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  label: "Label",
  animate: true,
  radius: "md",
  size: "xl",
  striped: false,
  value: 50,
  width: "360px",
};
