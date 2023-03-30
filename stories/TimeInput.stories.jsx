import React from "react";
import * as MantineDates from "@mantine/dates";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Time Input",
  component: MantineDates.TimeInput,
  parameters: {
    docs: {
      description: {
        component: "TimeInput",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    placeholder: { description: "Placeholder", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    multiline: { description: "Multiline", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    iconName: {
      control: {
        type: "select",
        options: iconOptions,
        description: "Icon",
        transform: iconTransform,
        required: false,
      },
    },
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["unstyled", "filled", "default"],
      },
    },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  const [value, setValue] = React.useState();
  return (
    <MantineDates.TimeInput
      {...args}
      value={value}
      onChange={setValue}
      icon={args.iconName}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  multiline: false,
  size: "md",
  variant: "default",
  width: "300px",
};
