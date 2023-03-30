import React from "react";
import * as MantineCore from "@mantine/core";
import {color} from "../src/colors";

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
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    disabled: { description: "Disabled", type: "boolean" },
    value: { description: "Value", type: "string" },
    color: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Checkbox
      {...args}
    />
  );
};

Default.args = {
  label: "Label",
  indeterminate: false,
  size: "md",
  disabled: false,
  value: "react",
  color: "blue",
};

Default.storyInfo = {
  name: "Checkbox",
  kind: "Mantine UI/Checkbox",
};
