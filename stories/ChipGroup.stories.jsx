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
    items: {
      type: "story",
      description: "item",
    },
  }
};

export const Default = (args) => {
  const {items} = args;
  const [value, setValue] = React.useState(args.value);
  const [valueMulti, setValueMulti] = React.useState([args.value]);

  return (
    <MantineCore.Chip.Group
      {...args}
      value={args.multiple? valueMulti : value}
      onChange={args.multiple? setValueMulti : setValue}
    >
      {items.map((item) => (
        <SimpleChip {...item} />
      ))}
    </MantineCore.Chip.Group>
  );
};

Default.args = {
  spacing: "md",
  multiple: false,
  position: "left",
  value: "vue",
  items: [
    {
      ...SimpleChip.args,
      label: "Label 1",
      value: "react",
    },
    {
      ...SimpleChip.args,
      label: "Label 2",
      value: "vue",
    },
    {
      ...SimpleChip.args,
      label: "Label 3",
      value: "angular",
    }
  ]
};
