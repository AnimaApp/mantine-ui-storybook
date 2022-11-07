import React from "react";
import * as MantineCore from "@mantine/core";
import { SimpleRadio } from "./Radio.stories";

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
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    offset: {
      description: "Offset",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    spacing: {
      description: "Spacing",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    value: { description: "Value", type: "string" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleRadio.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleRadio.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleRadio.storyInfo,
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Radio.Group
      value={value}
      onChange={setValue}
      label={args.label}
      description={args.description}
      error={args.error}
      required={args.required}
      orientation={args.orientation}
      size={args.size}
      offset={args.offset}
      spacing={args.spacing}
    >
      <SimpleRadio {...args.item} />
      <SimpleRadio {...args.item2} />
      <SimpleRadio {...args.item3} />
    </MantineCore.Radio.Group>
  );
};

export const SimpleRadioGroup = Template.bind({});

SimpleRadioGroup.args = {
  label: "Label",
  description: "",
  error: "",
  required: false,
  orientation: "horizontal",
  size: "md",
  offset: "md",
  spacing: "md",
  value: "react",
  item: {
    ...SimpleRadio.args,
    label: "Radio 1",
    value: "react",
  },
  item2: {
    ...SimpleRadio.args,
    label: "Radio 2",
    value: "vue",
  },
  item3: {
    ...SimpleRadio.args,
    label: "Radio 3",
    value: "angular",
  },
};
