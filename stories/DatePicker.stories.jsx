import React from "react";
import * as MantineDates from "@mantine/dates";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Date Picker",
  component: MantineDates.DatePicker,
  parameters: {
    docs: {
      description: {
        component: "DatePicker",
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
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
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
    <MantineDates.DatePicker
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
  placeholder: "placeholder",
  description: "",
  error: "",
  disabled: false,
  required: false,
  multiline: false,
  size: "md",
  iconName: "IconCalendar",
  iconWidth: 30,
  variant: "default",
  width: "300px",
};
