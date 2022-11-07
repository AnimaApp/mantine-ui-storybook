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
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "filled", "default"],
    },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};


const Template = (args) => {
  const [value, setValue] = React.useState();
  return (
    <MantineDates.DatePicker
      value={value}
      onChange={setValue}
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      multiline={args.multiline}
      size={args.size}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      variant={args.variant}
      style={{ width: args.width }}
    />
  );
};

export const SimpleDatePicker = Template.bind({});

SimpleDatePicker.args = {
  label: "Label",
  placeholder: "",
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
