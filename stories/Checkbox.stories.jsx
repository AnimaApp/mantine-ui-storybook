import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Checkbox",
  component: MantineCore.Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Checkbox",
      },
    },
    titleArg: "label",
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    indeterminate: { description: "Indeterminate", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: { description: "Disabled", type: "boolean" },
    value: { description: "Value", type: "string" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Checkbox
      label={args.label}
      indeterminate={args.indeterminate}
      size={args.size}
      disabled={args.disabled}
      value={args.value}
    />
  );
};

export const SimpleCheckbox = Template.bind({});

SimpleCheckbox.args = {
  label: "Label",
  indeterminate: false,
  size: "md",
  disabled: false,
  value: "react"
};

SimpleCheckbox.storyInfo = {
  name: "SimpleCheckbox",
  kind: "Mantine UI/Checkbox",
};
