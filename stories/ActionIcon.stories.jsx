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
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    loading: { description: "Loading", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MantineCore.ActionIcon
      variant={args.variant}
      icon={args.iconName}
      size={args.size}
      loading={args.loading}
      disabled={args.disabled}
    >
      {args.iconName && args.iconName}
    </MantineCore.ActionIcon>
  );
};

export const SimpleActionIcon = Template.bind({});

SimpleActionIcon.args = {
  variant: "default",
  iconName: "IconAdjustments",
  size: "md",
  loading: false,
  disabled: false,
};

SimpleActionIcon.storyInfo = {
  name: "SimpleActionIcon",
  kind: "Mantine UI/Action Icon",
};
