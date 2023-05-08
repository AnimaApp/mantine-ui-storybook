import React from "react";
import * as MantineDates from "@mantine/dates";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Date RangePicker",
  component: MantineDates.DatePickerInput,
  parameters: {
    docs: {
      description: {
        component: "DateRangePicker",
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
  const [value, onChange] = React.useState([null, null])

  return (
    <MantineDates.DatePickerInput
      {...args}
      value={value}
      onChange={onChange}
      type="range"
      icon={args.iconName}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  description: "",
  error: "",
  disabled: false,
  required: false,
  multiline: false,
  size: "md",
  iconName: "IconCalendar",
  iconWidth: 28,
  variant: "default",
  width: "300px",
  defaultValue: new Date(),

};
