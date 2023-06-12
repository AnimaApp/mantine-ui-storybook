import React from "react";
import * as MantineCore from "@mantine/core";
import { color } from "../src/colors/index"

export default {
  title: "Mantine UI/Indicator",
  component: MantineCore.Indicator,
  parameters: {
    docs: {
      description: {
        component: "Indicator",
      },
    },
  },
  argTypes: {
    color: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      },
    },
    position: {
      description: "Position",
      control: {
        type: "select",
        options: ["top-start", "top-end", "top-center", "middle-start", "middle-end", "middle-center", "bottom-start", "bottom-end", "bottom-center" ],
      },
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    withBorder: { description: "With border", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    processing: { description: "Processing", type: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Group position="center">
      <MantineCore.Indicator {...args}>
        <MantineCore.Avatar size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
      </MantineCore.Indicator>
    </MantineCore.Group>
  );
};

Default.args = {
  withBorder: false,
  position: "top-end",
  disabled: false,
  processing: false,
};
