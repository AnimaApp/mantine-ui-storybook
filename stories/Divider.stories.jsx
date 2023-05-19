import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Divider",
  component: MantineCore.Divider,
  parameters: {
    docs: {
      description: {
        component: "Divider",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    labelPosition: {
      description: "Label position",
      control: {
        type: "select",
        options: ["left", "right", "center"],
      },
    },
    my: {
      description: "Vertical margin",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      }
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      }
    },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["solid", "dashed", "dotted"],
      },
    },
    orientation: {
      description: "Orientation",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Divider {...args} labelPosition="left" />
  );
};

Default.args = {
  label: "",
  variant: "solid",
};
