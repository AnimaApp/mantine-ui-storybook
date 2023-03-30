import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Notification",
  component: MantineCore.Notification,
  parameters: {
    docs: {
      description: {
        component: "Notification",
      },
    },
  },
  argTypes: {
    iconName: {
      description: "Icon",
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
        type: "color",
      },
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    title: { description: "Title", type: "string" },
    description: { description: "Description", type: "string" },
    width: { description: "Width", type: "string" },
    disallowClose: { description: "Disallow close", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <MantineCore.Notification
      {...args}
      icon={args.iconName}
      style={{ width: args.width }}
    >
      {args.description}
    </MantineCore.Notification>
  );
};

Default.args = {
  iconName: "IconCheck",
  loading: false,
  radius: "md",
  title: "Title",
  description: "This is description",
  disallowClose: true,
  width: "300px",
};
