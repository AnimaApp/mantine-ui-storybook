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
    alphaLabel: { description: "Alpha label", type: "string" },
    defaultValue: { description: "Default value", type: "string" },
    focusable: { description: "Focusable", type: "boolean" },
    format: {
      description: "Format",
      control: { type: "select" },
      options: ["hex", "rgba", "rgb", "hsl", "hsla"],
    },
    fullWidth: { description: "Full width", type: "boolean" },
    hueLabel: { description: "Hue label", type: "string" },
    saturationLabel: { description: "Saturation label", type: "string" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    swatches: { description: "Swatches", type: "string" },
    swatchesPerRow: { description: "Swatches per row", type: "number" },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.ColorPicker
      value={value}
      onChange={setValue}
      withPicker={args.withPicker}
      alphaLabel={args.alphaLabel}
      defaultValue={args.defaultValue}
      focusable={args.focusable}
      format={args.format}
      fullWidth={args.fullWidth}
      hueLabel={args.hueLabel}
      saturationLabel={args.saturationLabel}
      size={args.size}
      swatches={args.swatches}
      swatchesPerRow={args.swatchesPerRow}
    />
  );
};

export const SimpleColorPicker = Template.bind({});

SimpleColorPicker.args = {
  withPicker: true,
  alphaLabel: "",
  defaultValue: "rgba(47, 119, 150, 0.93)",
  focusable: false,
  format: "rgba",
  fullWidth: false,
  hueLabel: "",
  saturationLabel: "",
  size: "md",
  swatches: "",
  swatchesPerRow: 10,
};

SimpleColorPicker.storyInfo = {
  name: "SimpleColorPicker",
  kind: "Mantine UI/Color Picker",
};
