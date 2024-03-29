import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Accordion",
  component: MantineCore.Accordion,
  parameters: {
    docs: {
      description: {
        component: "Accordion",
      },
    },
  },
  argTypes: {
    chevronPosition: {
      description: "Chevron position",
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    chevronSize: { description: "Chevron size", type: "number" },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["default", "contained", "filled", "separated"],
      },
    },
    value: { description: "Value", type: "string" },
    width: { description: "Width", type: "string" },
    items: {
      type: "story",
      description: "item",
    },
  },
};

const AccordionItem = (args) => {
  return (
    <MantineCore.Accordion.Item value={args.value}>
      <MantineCore.Accordion.Control>
        {args.title}
      </MantineCore.Accordion.Control>
      <MantineCore.Accordion.Panel>
        {args.description}
      </MantineCore.Accordion.Panel>
    </MantineCore.Accordion.Item>
  )
};

export const Default = (args) => {
  const { items } = args;
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Accordion
      {...args}
      value={value}
      onChange={setValue}
      style={{ width: args.width }}
    >
      {items.map((item) => (
        <AccordionItem {...item} />
      ))}
    </MantineCore.Accordion>
  );
};

Default.args = {
  chevronPosition: "right",
  chevronSize: 20,
  variant: "default",
  value: "acc1",
  width: "340px",
  items: [
    {
      ...AccordionItem.args,
      value: "acc1",
      title: "Title 1",
      description: "Description 1",
    },
    {
      ...AccordionItem.args,
      value: "acc2",
      title: "Title 2",
      description: "Description 2",
    },
    {
      ...AccordionItem.args,
      value: "acc3",
      title: "Title 3",
      description: "Description 3",
    }
  ]
};
