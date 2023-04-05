import React from "react";
import { Radio } from '@mantine/core';

export default {
  title: "Mantine UI/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "Radio",
      },
    },
    titleArg: "label",
  },
  argTypes: {
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    label: { description: "Label", type: "string" },
    value: { description: "Value", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
  },
};

export const Default = (args) => {
  return (
    <Radio
      {...args}
    />
  );
};

Default.args = {
  size: "md",
  label: "Label",
  description: "description",
  error: "error",
  value: "react",
};

Default.storyInfo = {
  name: "SimpleRadio",
  kind: "Mantine UI/Radio",
};
