import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Textarea",
  component: MantineCore.Textarea,
  parameters: {
    docs: {
      description: {
        component: "Textarea",
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
    autosize: { description: "Autosize", type: "boolean" },
    minRows: { description: "Min rows", type: "number" },
    maxRows: { description: "Max rows", type: "number" },
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
    <MantineCore.Textarea
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      autosize={args.autosize}
      minRows={args.minRows}
      maxRows={args.maxRows}
      size={args.size}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      variant={args.variant}
      style={{ width: args.width }}
    />
  );
};

export const SimpleTextarea = Template.bind({});

SimpleTextarea.args = {
  label: "Label",
  placeholder: "",
  description: "",
  error: "",
  disabled: false,
  required: false,
  autosize: false,
  minRows: 2,
  maxRows: 4,
  size: "md",
  iconWidth: 20,
  variant: "default",
  width: "300px",
};
