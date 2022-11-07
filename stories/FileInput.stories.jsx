import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/File Input",
  component: MantineCore.FileInput,
  parameters: {
    docs: {
      description: {
        component: "File Input",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    multiple: { description: "Multiple", type: "boolean" },
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
  return (
    <MantineCore.FileInput
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      multiple={args.multiple}
      size={args.size}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      variant={args.variant}
      style={{ width: args.width }}
    />
  );
};

export const SimpleFileInput = Template.bind({});

SimpleFileInput.args = {
  label: "Label",
  description: "",
  error: "",
  disabled: false,
  required: false,
  multiple: false,
  size: "md",
  iconName: "IconUpload",
  iconWidth: 28,
  variant: "default",
  width: "300px",
};
