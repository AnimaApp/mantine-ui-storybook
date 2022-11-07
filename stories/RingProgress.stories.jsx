import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Ring Progress",
  component: MantineCore.RingProgress,
  parameters: {
    docs: {
      description: {
        component: "RingProgress",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    size: {
      description: "Size",
      type: "number",
    },
    thickness: {
      description: "Thickness",
      type: "number",
    },
    roundCaps: { description: "RoundCaps", type: "boolean" },
    sections: { description: "Sections", type: "array" },
  },
};

const sections = [
  { value: 40, color: "cyan" },
  { value: 15, color: "orange" },
  { value: 15, color: "grape" },
];

const Template = (args) => {
  return (
    <MantineCore.RingProgress
      label={<div style={{ textAlign: "center" }}>{args.label}</div>}
      size={args.size}
      thickness={args.thickness}
      roundCaps={args.roundCaps}
      sections={args.sections}
    />
  );
};

export const SimpleRingProgress = Template.bind({});

SimpleRingProgress.args = {
  label: "Label",
  size: 120,
  thickness: 10,
  roundCaps: false,
  sections: sections,
};
