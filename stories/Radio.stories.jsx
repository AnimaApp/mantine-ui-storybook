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
    label: { description: "Label", type: "string" },
    value: { description: "Value", type: "string" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Radio
      label={args.label}
      value={args.value} />
  );
};

export const SimpleRadio = Template.bind({});

SimpleRadio.args = {
  label: "Label",
  value: "react",
};

SimpleRadio.storyInfo = {
  name: "SimpleRadio",
  kind: "Mantine UI/Radio",
};
