import React from "react";
import * as MantineCore from "@mantine/core";
import { SimpleButton } from "./Button.stories";

export default {
  title: "Mantine UI/Button Group",
  component: MantineCore.Button.Group,
  parameters: {
    docs: {
      description: {
        component: "Button Group",
      },
    },
  },
  argTypes: {
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    buttonBorderWidth: { description: "Button border width", type: "number" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleButton.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleButton.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleButton.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Button.Group
      orientation={args.orientation}
      buttonBorderWidth={args.buttonBorderWidth}
    >
      <SimpleButton {...args.item} />
      <SimpleButton {...args.item2} />
      <SimpleButton {...args.item3} />
    </MantineCore.Button.Group>
  );
};

export const SimpleButtonGroup = Template.bind({});

SimpleButtonGroup.args = {
  orientation: "horizontal",
  buttonBorderWidth: 1,
  item: {
    ...SimpleButton.args,
    label: "Button 1",
    variant: "outline",
  },
  item2: {
    ...SimpleButton.args,
    label: "Button 2",
    variant: "outline",
  },
  item3: {
    ...SimpleButton.args,
    label: "Button 3",
    variant: "outline",
  },
};

SimpleButtonGroup.storyInfo = {
  name: "SimpleButtonGroup",
  kind: "Mantine UI/Button Group",
};
