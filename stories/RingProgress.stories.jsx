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
    size: { description: "Size", type: "number" },
    thickness: { description: "Thickness", type: "number" },
    roundCaps: { description: "RoundCaps", type: "boolean" },
    sections: { description: "Sections", type: "array" },
  },
};

const sections = [
  { value: 40, color: "cyan" },
  { value: 15, color: "orange" },
  { value: 15, color: "grape" },
];

export const Default = (args) => {
  return (
    <MantineCore.RingProgress
      {...args}
      label={<div style={{ textAlign: "center" }}>{args.label}</div>}
    />
  );
};

Default.args = {
  label: "Label",
  size: 120,
  thickness: 10,
  roundCaps: false,
  sections: sections,
};
