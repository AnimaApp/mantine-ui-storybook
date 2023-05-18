import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/HoverCard",
  component: MantineCore.HoverCard,
  parameters: {
    docs: {
      description: {
        component: "Hover Card",
      },
    },
  },
  argTypes: {
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    shadow: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    arrowPosition: {
      description: "Radius",
      control: {
        type: "select",
        options: ["side", "center"],
      },
    },
    initiallyOpened: { description: "Initially opened", control: "boolean" },
    withArrow: { description: "Initially opened", control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.HoverCard width={280} {...args}>
      <MantineCore.HoverCard.Target>
        <MantineCore.Button>Hover to reveal the card</MantineCore.Button>
      </MantineCore.HoverCard.Target>
      <MantineCore.HoverCard.Dropdown>
        <MantineCore.Text size="sm">
          Hover card is revealed when user hovers over target element, it will be hidden once
          mouse is not over both target and dropdown elements
        </MantineCore.Text>
      </MantineCore.HoverCard.Dropdown>
    </MantineCore.HoverCard>
  );
};

Default.args = {
  radius: "md",
  shadow: "md",
  initiallyOpened: false,
  withArrow: false,
};
