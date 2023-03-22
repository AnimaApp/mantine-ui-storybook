import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Accordion Item",
  component: MantineCore.Accordion.Item,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    container: MantineCore.Accordion,
    titleArg: "title",
  },
  argTypes: {
    value: { description: "Value", type: "string" },
    title: { description: "Title", type: "string" },
    description: { description: "Description", type: "string" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Accordion>
      <MantineCore.Accordion.Item value={args.value}>
        <MantineCore.Accordion.Control>
          {args.title}
        </MantineCore.Accordion.Control>
        <MantineCore.Accordion.Panel>
          {args.description}
        </MantineCore.Accordion.Panel>
      </MantineCore.Accordion.Item>
    </MantineCore.Accordion>
  );
};

export const SimpleAccordionItem = Template.bind({});

SimpleAccordionItem.args = {
  value: "Value",
  title: "Title",
  description: "Description",
};

SimpleAccordionItem.storyInfo = {
  name: "SimpleAccordionItem",
  kind: "Mantine UI/Accordion Item",
};
