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
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    striped: { description: "Striped", type: "boolean" },
    value: { description: "Value", type: "number" },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MantineCore.Progress
      label={args.label}
      animate={args.animate}
      radius={args.radius}
      size={args.size}
      striped={args.striped}
      value={args.value}
      style={{ width: args.width }}
    />
  );
};

export const SimpleProgress = Template.bind({});

SimpleProgress.args = {
  label: "Label",
  animate: true,
  radius: "md",
  size: "xl",
  striped: false,
  value: 50,
  width: "360px",
};
