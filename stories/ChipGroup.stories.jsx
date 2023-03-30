import React from "react";
import * as MantineCore from "@mantine/core";
import { Default as SimpleChip } from "./Chip.stories";

export default {
  title: "Mantine UI/Chip Group",
  component: MantineCore.Chip.Group,
  parameters: {
    docs: {
      description: {
        component: "Chip Group",
      },
    },
  },
  argTypes: {
    spacing: {
      description: "Spacing",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    multiple: { description: "Multiple", type: "boolean" },
    position: {
      description: "Position",
      control: {
        type: "select",
        options: ["left", "right", "center", "apart"],
      },
    },
    value: { description: "Value", type: "string" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleChip.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleChip.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleChip.storyInfo,
    },
  },
};

export const Default = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Chip.Group
      value={value}
      onChange={setValue}
      spacing={args.spacing}
      multiple={args.multiple}
      position={args.position}
    >
      <SimpleChip {...args.item} />
      <SimpleChip {...args.item2} />
      <SimpleChip {...args.item3} />
    </MantineCore.Chip.Group>
  );
};

Default.args = {
  spacing: "md",
  multiple: false,
  position: "left",
  value: "vue",
  item: {
    ...SimpleChip.args,
    label: "Label 1",
    value: "react",
  },
  item2: {
    ...SimpleChip.args,
    label: "Label 2",
    value: "vue",
  },
  item3: {
    ...SimpleChip.args,
    label: "Label 3",
    value: "angular",
  },
};
