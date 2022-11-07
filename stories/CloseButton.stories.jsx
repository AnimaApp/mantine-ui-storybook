import React from "react";
import * as MantineCore from "@mantine/core";

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
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
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
};

const Template = (args) => {
  return (
    <MantineCore.CloseButton
      disabled={args.disabled}
      iconSize={args.iconSize}
      loading={args.loading}
      size={args.size}
      variant={args.variant}
    />
  );
};

export const SimpleCloseButton = Template.bind({});

SimpleCloseButton.args = {
  disabled: false,
  iconSize: 20,
  loading: false,
  size: "md",
  variant: "filled",
};

SimpleCloseButton.storyInfo = {
  name: "SimpleCloseButton",
  kind: "Mantine UI/Close Button",
};
