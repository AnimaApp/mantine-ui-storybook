import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Native Select",
  component: MantineCore.NativeSelect,
  parameters: {
    docs: {
      description: {
        component: "NativeSelect",
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
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "filled", "default"],
    },
    width: { description: "Width", type: "string" },
    defaultValue: { description: "Default value", type: "string" },

  },
  decorators: [withIconMapped],
};

const data = ["React", "Vue", "Angular", "Svelte"];

const Template = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.NativeSelect
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
      iconWidth={args.iconWidth}
      variant={args.variant}
      data={args.data}
      style={{ width: args.width }}
    />
  );
};

export const SimpleNativeSelect = Template.bind({});

SimpleNativeSelect.args = {
  label: "Label",
  placeholder: "Placeholder",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  size: "md",
  variant: "filled",
  data: data,
  width: "300px",
  defaultValue: "React",
};
