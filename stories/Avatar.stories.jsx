import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Avatar",
  component: MantineCore.Avatar,
  parameters: {
    docs: {
      description: {
        component: "Avatar",
      },
    },
  },
  argTypes: {
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    src: { description: "src", type: "string" },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["outline", "light", "filled", "gradient"],
      },
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Avatar
      {...args}
      alt={args.src? " " : "no image here"}
    />
  );
};

Default.args = {
  size: "md",
  src: "https://joeschmoe.io/api/v1/random",
  variant: "outline",
  radius: "md",
};
