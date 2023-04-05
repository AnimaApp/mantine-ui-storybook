import React from "react";
import * as MantineCore from "@mantine/core";
import { Default as SimpleCheckbox } from "./Checkbox.stories";

export default {
  title: "Mantine UI/Checkbox Group",
  component: MantineCore.Checkbox.Group,
  parameters: {
    docs: {
      description: {
        component: "Checkbox Group",
      },
    },
  },
  argTypes: {
    label: {description: "Label", type: "string"},
    orientation: {
      description: "Orientation",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    offset: {
      description: "Offset",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    spacing: {
      description: "Spacing",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    value: { description: "Value", type: "string" },
    withAsterisk: {description: "With Asterisk", type: "boolean"},
    items: {
      type: "story",
      description: "item",
    },
  },
};

export const Default = (args) => {
  const {items} = args;
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Checkbox.Group
      {...args}
      value={value}
      onChange={setValue}
    >
      {items.map((item) => (
        <SimpleCheckbox {...item} />
      ))}
    </MantineCore.Checkbox.Group>
  );
};

Default.args = {
  label: "Label",
  withAsterisk: false,
  orientation: "horizontal",
  offset: "md",
  spacing: "md",
  description: "Description",
  error: "",
  value: ["react"],
  items: [
    {
      ...SimpleCheckbox.args,
      label: "Label 1",
      indeterminate: false,
      size: "md",
      disabled: false,
      value: "react",
    },
    {
      ...SimpleCheckbox.args,
      label: "Label 2",
      indeterminate: false,
      size: "md",
      disabled: false,
      value: "vue",
    },
    {
      ...SimpleCheckbox.args,
      label: "Label 3",
      indeterminate: false,
      size: "md",
      disabled: false,
      value: "angular",
    }
  ]
};
