import React, {useCallback} from "react";
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
    value: { description: "Value", type: "string" },
    position: {
      description: "Position",
      control: {
        type: "select",
        options: ["left", "right", "center", "apart"],
      },
    },
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
  const [valueMulti, setValueMulti] = React.useState([args.value]);

  return (
    <MantineCore.Chip.Group
      {...args}
      value={args.multiple? valueMulti : value}
      onChange={args.multiple? setValueMulti : setValue}
    >
      <MantineCore.Chip value={args.item.value}>{args.item.label}</MantineCore.Chip>
      <MantineCore.Chip value={args.item2.value}>{args.item2.label}</MantineCore.Chip>
      <MantineCore.Chip value={args.item3.value}>{args.item3.label}</MantineCore.Chip>
    </MantineCore.Chip.Group>
  );
};

Default.args = {
  spacing: "md",
  multiple: false,
  position: "left",
  value: "react",
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
