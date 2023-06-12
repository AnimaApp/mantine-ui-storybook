import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Paper",
  component: MantineCore.Paper,
  parameters: {
    docs: {
      description: {
        component: "Paper",
      },
    },
  },
  argTypes: {
    shadow: {
      description: "Shadow",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      }
    },
    p: {
      description: "Padding",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      }
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      }
    },
    withBorder: { description: "With border", type: "boolean" },
    label: { description: "Label", type: "string" },
  }
};

export const Default = (args) => {
  return (
    <MantineCore.Paper {...args}>
      {args.label}
    </MantineCore.Paper>
  );
};

Default.args = {
  shadow: "xs",
  p: "md",
  radius: "md",
  withBorder: false,
  label: "Paper is the most basic ui component. Use it to create cards, dropdowns, modals and other components that require background with shadow",
};
