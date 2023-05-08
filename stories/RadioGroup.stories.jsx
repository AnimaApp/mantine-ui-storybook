import React from "react";
import * as MantineCore from "@mantine/core";
import { Default as SimpleRadio } from "./Radio.stories";

export default {
  title: "Mantine UI/Radio Group",
  component: MantineCore.Radio.Group,
  parameters: {
    docs: {
      description: {
        component: "Radio Group",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    required: { description: "Required", type: "boolean" },
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
    value: { description: "Value", type: "string" },
    items: {
      type: "story",
      description: "Items",
    },
  },
};

export const Default = (args) => {
  const { items } = args;
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Radio.Group
      {...args}
      value={value}
      onChange={setValue}
    >
      <MantineCore.Group>
        {items.map((item) => (
          <SimpleRadio key={item.value} {...item} />
        ))}
      </MantineCore.Group>
    </MantineCore.Radio.Group>
  );
};

Default.args = {
  label: "Label",
  description: "",
  error: "",
  required: false,
  orientation: "horizontal",
  size: "md",
  offset: "md",
  spacing: "md",
  value: "react",
  items: [
    {
      ...SimpleRadio.args,
      label: "Radio 1",
      value: "react",
    },
    {
      ...SimpleRadio.args,
      label: "Radio 2",
      value: "vue",
    },
    {
      ...SimpleRadio.args,
      label: "Radio 3",
      value: "angular",
    }
  ]
};
