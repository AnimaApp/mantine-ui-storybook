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

export const Default = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Checkbox.Group
      {...args}
      value={value}
      onChange={setValue}
    >
      <SimpleCheckbox {...args.item} />
      <SimpleCheckbox {...args.item2} />
      <SimpleCheckbox {...args.item3} />
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
