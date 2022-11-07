import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Alert",
  component: MantineCore.Alert,
  parameters: {
    docs: {
      description: {
        component: "Alert",
      },
    },
  },
  argTypes: {
    title: { description: "Title", type: "string" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["outline", "light", "filled"],
    },
    withCloseButton: { description: "With close button", type: "boolean" },
    width: { description: "Width", type: "string" },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    description: { description: "Description", type: "string" },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MantineCore.Alert
      title={args.title}
      variant={args.variant}
      withCloseButton={args.withCloseButton}
      icon={args.iconName}
      style={{ width: args.width }}
    >
      {args.description}
    </MantineCore.Alert>
  );
};

export const SimpleAlert = Template.bind({});

SimpleAlert.args = {
  title: "Title",
  variant: "outline",
  withCloseButton: false,
  iconName: "IconAlertCircle",
  width: "300px",
  description: "Alert Description",
};
