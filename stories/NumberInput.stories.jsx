import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Number Input",
  component: MantineCore.NumberInput,
  parameters: {
    docs: {
      description: {
        component: "NumberInput",
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
    decimalSeparator: { description: "Decimal separator", type: "string" },
    precision: { description: "Precision", type: "number" },
    min: { description: "Min", type: "number" },
    max: { description: "Max", type: "number" },
    step: { description: "Step", type: "number" },
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
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    hideControls: { description: "Hide controls", type: "boolean" },
    width: { description: "Width", type: "string" },
    defaultValue: { description: "Default value", type: "number" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.NumberInput
      {...args}
      value={value}
      onChange={(val) => setValue(val)}
      icon={args.iconName}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  label: "Label",
  placeholder: "",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  decimalSeparator: ",",
  precision: 1,
  min: 1,
  max: 10,
  step: 1,
  size: "md",
  variant: "default",
  radius: "sm",
  hideControls: false,
  width: "300px",
  defaultValue: 2,
  iconWidth: 30,
};
