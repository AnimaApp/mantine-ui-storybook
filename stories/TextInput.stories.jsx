import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Text Input",
  component: MantineCore.TextInput,
  parameters: {
    docs: {
      description: {
        component: "Text Input",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
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
  const [value, setValue] = React.useState("");
  return (
    <MantineCore.TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      label={args.label}
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

export const SimpleTextInput = Template.bind({});

SimpleTextInput.args = {
  label: "Label",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  multiline: false,
  size: "md",
  iconWidth: 20,
  variant: "filled",
  width: "300px",
};
