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
    width: { description: "Width", type: "string" },
    defaultValue: { description: "Default value", type: "string" },

  },
  decorators: [withIconMapped],
};

const data = ["React", "Vue", "Angular", "Svelte"];

export const Default = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.NativeSelect
      {...args}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      icon={args.iconName}
      data={data}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  size: "md",
  variant: "filled",
  radius: "sm",
  width: "300px",
  defaultValue: "React",
};
