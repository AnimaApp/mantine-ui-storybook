import React, { useState } from "react";
import * as MantineCore from "@mantine/core";
import { SimpleAccordionItem } from "./AccordionItem.stories";

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
      control: { type: "select" },
      options: ["left", "right"],
    },
    chevronSize: { description: "Chevron size", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["default", "contained", "filled", "separated"],
    },
    multiple: { description: "Multiple", type: "boolean" },
    value: { description: "Value", type: "string" },
    width: { description: "Width", type: "string" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleAccordionItem.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleAccordionItem.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleAccordionItem.storyInfo,
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <MantineCore.Accordion
      chevronPosition={args.chevronPosition}
      chevronSize={args.chevronSize}
      variant={args.variant}
      multiple={args.multiple}
      value={value}
      onChange={setValue}
      style={{ width: args.width }}
    >
      <SimpleAccordionItem {...args.item} />
      <SimpleAccordionItem {...args.item2} />
      <SimpleAccordionItem {...args.item3} />
    </MantineCore.Accordion>
  );
};

export const SimpleAccordion = Template.bind({});

SimpleAccordion.args = {
  chevronPosition: "right",
  chevronSize: 20,
  variant: "default",
  multiple: false,
  value: "acc1",
  width: "340px",
  item: {
    ...SimpleAccordionItem.args,
    value: "acc1",
    title: "Title 1",
    description: "Description 1",
  },
  item2: {
    ...SimpleAccordionItem.args,
    value: "acc2",
    title: "Title 2",
    description: "Description 2",
  },
  item3: {
    ...SimpleAccordionItem.args,
    value: "acc3",
    title: "Title 3",
    description: "Description 3",
  },
};
