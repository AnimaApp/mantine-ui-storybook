import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Radio",
  component: MantineCore.Radio,
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
    labelPosition: {
      description: "Label Position",
      control: {
        type: "select",
        options: ["left", "right"],
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
    <MantineCore.Radio
      {...args}
    />
  );
};

Default.args = {
  labelPosition: "left",
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
