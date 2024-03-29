import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Skeleton",
  component: MantineCore.Skeleton,
  parameters: {
    docs: {
      description: {
        component: "Skeleton",
      },
    },
  },
  argTypes: {
    animate: { description: "Animate", type: "boolean" },
    circle: { description: "Circle", type: "boolean" },
    height: {
      description: "Height",
      type: "number",
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    visible: { description: "Visible", type: "boolean" },
    width: {
      description: "Width",
      type: "number",
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Skeleton {...args}/>
  );
};

Default.args = {
  animate: true,
  circle: false,
  height: 120,
  visible: true,
  width: 400,
  radius: "md",
};
