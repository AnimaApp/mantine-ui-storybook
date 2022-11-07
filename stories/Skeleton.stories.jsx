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
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    visible: { description: "Visible", type: "boolean" },
    width: {
      description: "Width",
      type: "number",
    },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Skeleton
      animate={args.animate}
      circle={args.circle}
      height={args.height}
      radius={args.radius}
      visible={args.visible}
      width={args.width}
    />
  );
};

export const SimpleSkeleton = Template.bind({});

SimpleSkeleton.args = {
  animate: true,
  circle: false,
  height: 120,
  visible: true,
  width: 400,
  radius: "md",
};
