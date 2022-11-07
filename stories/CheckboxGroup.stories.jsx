import React from "react";
import * as MantineCore from "@mantine/core";
import { SimpleCheckbox } from "./Checkbox.stories";

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
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
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
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    value: { description: "Value", type: "string" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleCheckbox.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleCheckbox.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleCheckbox.storyInfo,
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Checkbox.Group
      value={value}
      onChange={setValue}
      orientation={args.orientation}
      offset={args.offset}
      spacing={args.spacing}
      description={args.description}
      error={args.error}
    >
      <SimpleCheckbox {...args.item} />
      <SimpleCheckbox {...args.item2} />
      <SimpleCheckbox {...args.item3} />
    </MantineCore.Checkbox.Group>
  );
};

export const SimpleCheckboxGroup = Template.bind({});

SimpleCheckboxGroup.args = {
  orientation: "horizontal",
  offset: "md",
  spacing: "md",
  description: "Description",
  error: "",
  value: ["react"],
  item: {
    ...SimpleCheckbox.args,
    label: "Label 1",
    indeterminate: false,
    size: "md",
    disabled: false,
    value: "react",
  },
  item2: {
    ...SimpleCheckbox.args,
    label: "Label 2",
    indeterminate: false,
    size: "md",
    disabled: false,
    value: "vue",
  },
  item3: {
    ...SimpleCheckbox.args,
    label: "Label 3",
    indeterminate: false,
    size: "md",
    disabled: false,
    value: "angular",
  },
};
