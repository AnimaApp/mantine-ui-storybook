import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Segmented Control",
  component: MantineCore.SegmentedControl,
  parameters: {
    docs: {
      description: {
        component: "SegmentedControl",
      },
    },
  },
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    orientation: {
      description: "Orientation",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    defaultValue: { description: "Default value", type: "string" },
  },
};

const data = [
  { label: "React", value: "react" },
  { label: "Angular", value: "ng" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

export const Default = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.SegmentedControl
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

Default.args = {
  disabled: false,
  orientation: "horizontal",
  size: "md",
  data: data,
  defaultValue: "react",
};
