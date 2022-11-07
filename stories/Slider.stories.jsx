import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Slider",
  component: MantineCore.Slider,
  parameters: {
    docs: {
      description: {
        component: "Slider",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    labelAlwaysOn: { description: "Label always on", type: "boolean" },
    showLabelOnHover: { description: "Show label on hover", type: "boolean" },
    precision: { description: "Precision", type: "number" },
    min: { description: "Min", type: "number" },
    max: { description: "Max", type: "number" },
    step: { description: "Step", type: "number" },
    thumbSize: { description: "Thumb size", type: "number" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    width: { description: "Width", type: "string" },
    defaultValue: { description: "Default value", type: "number" },
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.Slider
      value={value}
      onChange={setValue}
      label={args.label}
      disabled={args.disabled}
      labelAlwaysOn={args.labelAlwaysOn}
      showLabelOnHover={args.showLabelOnHover}
      precision={args.precision}
      min={args.min}
      max={args.max}
      step={args.step}
      thumbSize={args.thumbSize}
      size={args.size}
      style={{ width: args.width }}
    />
  );
};

export const SimpleSlider = Template.bind({});

SimpleSlider.args = {
  label: "Label",
  disabled: false,
  labelAlwaysOn: false,
  showLabelOnHover: false,
  precision: 1,
  min: 1,
  max: 10,
  step: 1,
  thumbSize: 10,
  size: "md",
  width: "360px",
  defaultValue: 4,
};
