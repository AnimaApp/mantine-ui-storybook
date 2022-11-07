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
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    loading: { description: "Loading", type: "boolean" },
    radius: {
      description: "Radius",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    title: { description: "Title", type: "string" },
    disallowClose: { description: "Disallow close", type: "boolean" },
    description: { description: "Description", type: "string" },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MantineCore.Notification
      icon={args.iconName}
      loading={args.loading}
      radius={args.radius}
      title={args.title}
      disallowClose={args.disallowClose}
      style={{ width: args.width }}
    >
      {args.description}
    </MantineCore.Notification>
  );
};

export const SimpleNotification = Template.bind({});

SimpleNotification.args = {
  iconName: "IconCheck",
  loading: false,
  radius: "md",
  title: "Title",
  description: "This is description",
  disallowClose: true,
  width: "300px",
};
