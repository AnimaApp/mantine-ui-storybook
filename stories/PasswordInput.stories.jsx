import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Password Input",
  component: MantineCore.PasswordInput,
  parameters: {
    docs: {
      description: {
        component: "Password Input",
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
  const [value, setValue] = React.useState("");

  return (
    <MantineCore.PasswordInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      size={args.size}
      icon={args.iconName}
      variant={args.variant}
      style={{ width: args.width }}
    />
  );
};

export const SimplePasswordInput = Template.bind({});

SimplePasswordInput.args = {
  label: "Label",
  placeholder: "Placeholder",
  description: "",
  error: "",
  disabled: false,
  required: false,
  size: "md",
  variant: "default",
  width: "300px",
};
