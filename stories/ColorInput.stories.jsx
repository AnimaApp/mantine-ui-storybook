import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Color Input",
  component: MantineCore.ColorInput,
  parameters: {
    docs: {
      description: {
        component: "ColorInput",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    required: { description: "Required", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    format: {
      description: "Format",
      control: {
        type: "select",
        options: ["hex", "rgba", "rgb", "hsl", "hsla"],
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
    withPicker: { description: "With picker", type: "boolean" },
    withPreview: { description: "With preview", type: "boolean" },
    withinPortal: { description: "Within portal", type: "boolean" },
    swatches: { description: "Swatches", type: "boolean"},
    swatchesPerRow: { description: "Swatches per row", type: "number" },
    defaultValue: { description: "Default value", type: "string" },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["unstyled", "default", "filled"],
      },
    },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

const colorSwatches = ['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5'];

export const Default = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.ColorInput
      value={value}
      onChange={setValue}
      {...args}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      swatches={args.swatches && colorSwatches}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  label: "Label",
  description: "",
  error: "",
  required: false,
  disabled: false,
  size: "md",
  format: "hex",
  iconWidth: 30,
  withPicker: true,
  withPreview: true,
  withinPortal: false,
  swatches: "",
  swatchesPerRow: 10,
  variant: "default",
  width: "300px",
  defaultValue: "#C5D899",
};
