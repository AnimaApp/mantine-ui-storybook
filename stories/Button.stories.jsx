import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Button",
  component: MantineCore.Button,
  parameters: {
    docs: {
      description: {
        component: "Button",
      },
    },
    titleArg: "label",
  },
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: [
        "outline",
        "white",
        "light",
        "default",
        "filled",
        "subtle",
        "gradient",
      ],
    },
    label: { description: "Label", type: "string" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    uppercase: { description: "Uppercase", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
    loaderPosition: {
      description: "Loader position",
      control: { type: "select" },
      options: ["left", "right"],
    },
    leftIcon: {
      control: { type: "select" },
      options: iconOptions,
      description: "Left icon",
      transform: iconTransform,
      required: false,
    },
    rightIcon: {
      control: { type: "select" },
      options: iconOptions,
      description: "Right icon",
      transform: iconTransform,
      required: false,
    },
    compact: { description: "Compact", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MantineCore.Button
      variant={args.variant}
      size={args.size}
      uppercase={args.uppercase}
      loading={args.loading}
      loaderPosition={args.loaderPosition}
      leftIcon={args.leftIcon}
      rightIcon={args.rightIcon}
      compact={args.compact}
      disabled={args.disabled}
    >
      {args.label}
    </MantineCore.Button>
  );
};

export const SimpleButton = Template.bind({});

SimpleButton.args = {
  variant: "filled",
  label: "Label",
  size: "md",
  uppercase: false,
  loading: false,
  loaderPosition: "left",
  compact: false,
  disabled: false,
};

SimpleButton.storyInfo = {
  name: "SimpleButton",
  kind: "Mantine UI/Button",
};
