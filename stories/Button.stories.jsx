import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";
import { color } from "../src/colors/index"

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
      control: {
        type: "select",
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
    },
    label: { description: "Label", type: "string" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    uppercase: { description: "Uppercase", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
    loaderPosition: {
      description: "Loader position",
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    leftIcon: {
      description: "Left icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    rightIcon: {
      description: "Right icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    color: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      },
    },
    compact: { description: "Compact", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <MantineCore.Button
      {...args}
    >
      {args.label}
    </MantineCore.Button>
  );
};

Default.args = {
  variant: "filled",
  label: "Label",
  size: "md",
  uppercase: false,
  loading: false,
  loaderPosition: "left",
  compact: false,
  disabled: false,
  color: "blue",
};

Default.storyInfo = {
  name: "Button",
  kind: "Mantine UI/Button",
};
