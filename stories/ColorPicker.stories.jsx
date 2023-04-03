import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Color Picker",
  component: MantineCore.ColorPicker,
  parameters: {
    docs: {
      description: {
        component: "ColorPicker",
      },
    },
  },
  argTypes: {
    withPicker: { description: "With picker", type: "boolean" },
    defaultValue: { description: "Default value", type: "string" },
    focusable: { description: "Focusable", type: "boolean" },
    format: {
      description: "Format",
      control: {
        type: "select",
        options: ["hex", "rgba", "rgb", "hsl", "hsla"],
      },
    },
    fullWidth: { description: "Full width", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    swatches: { description: "Swatches", type: "boolean" },
    swatchesPerRow: { description: "Swatches per row", type: "number" },
  },
};

const colorSwatches = ['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5'];

export const Default = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.ColorPicker
      {...args}
      value={value}
      onChange={setValue}
      swatches={args.swatches && colorSwatches}
    />
  );
};

Default.args = {
  withPicker: true,
  defaultValue: "rgba(47, 119, 150, 0.93)",
  focusable: false,
  format: "rgba",
  fullWidth: false,
  size: "md",
  swatches: true,
  swatchesPerRow: 10,
};

Default.storyInfo = {
  name: "ColorPicker",
  kind: "Mantine UI/Color Picker",
};
