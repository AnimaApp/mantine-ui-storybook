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
    hideControls: { description: "Hide controls", type: "boolean" },
    width: { description: "Width", type: "string" },
    defaultValue: { description: "Default value", type: "number" },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.NumberInput
      value={value}
      onChange={(val) => setValue(val)}
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      decimalSeparator={args.decimalSeparator}
      precision={args.precision}
      min={args.min}
      max={args.max}
      size={args.size}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      variant={args.variant}
      hideControls={args.hideControls}
      style={{ width: args.width }}
    />
  );
};

export const SimpleNumberInput = Template.bind({});

SimpleNumberInput.args = {
  label: "Label",
  placeholder: "",
  description: "",
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
  hideControls: false,
  width: "300px",
  defaultValue: 2,
};
