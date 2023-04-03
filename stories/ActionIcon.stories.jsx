import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Action Icon",
  component: MantineCore.ActionIcon,
  parameters: {
    docs: {
      description: {
        component: "Action Icon",
      },
    },
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
    iconName: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    loading: { description: "Loading", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <MantineCore.ActionIcon
      {...args}
      icon={args.iconName}
    >
      {args.iconName && args.iconName}
    </MantineCore.ActionIcon>
  );
};

Default.args = {
  variant: "default",
  iconName: "IconAdjustments",
  size: "md",
  loading: false,
  disabled: false,
};

Default.storyInfo = {
  name: "SimpleActionIcon",
  kind: "Mantine UI/Action Icon",
};
