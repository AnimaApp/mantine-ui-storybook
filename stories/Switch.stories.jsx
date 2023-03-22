import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Switch",
  component: MantineCore.Switch,
  parameters: {
    docs: {
      description: {
        component: "Switch",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    offLabel: { description: "Off label", type: "string" },
    onLabel: { description: "On label", type: "string" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    // thumbIcon: to do
  },
};

const Template = (args) => {
  return (
    <MantineCore.Switch
      label={args.label}
      offLabel={args.offLabel}
      onLabel={args.onLabel}
      size={args.size}
      thumbIcon={args.thumbIcon}
    />
  );
};

export const SimpleSwitch = Template.bind({});

SimpleSwitch.args = {
  label: "Label",
  offLabel: "",
  onLabel: "onLabel",
  size: "md",
  // thumbIcon: to do
};
