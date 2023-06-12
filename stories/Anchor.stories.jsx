import React from "react";
import * as MantineCore from "@mantine/core";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Anchor",
  component: MantineCore.Anchor,
  parameters: {
    docs: {
      description: {
        component: "Anchor",
      },
    },
  },
  argTypes: {
    value: { description: "Value", type: "string" },
    italic: { description: "Italic", type: "boolean" },
    underline: { description: "Underline", type: "boolean" },
    strikethrough: { description: "Strikethrough", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    color: {
      description: "Color",
      control: {
        type: "select",
        options: ["dimmed", "blue"],
      },
    },
    truncate: {
      description: "Truncate",
      control: {
        type: "select",
        options: [true, "end", "start"],
      },
    },
    align: {
      description: "Align",
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    }
  },
  decorators: [withIconMapped],
}

export const Default = (args) => {
  return (
    <MantineCore.Anchor href="https://mantine.dev/" target="_blank" {...args}>
      {args.value}
    </MantineCore.Anchor>
  );
};

Default.args = {
  value: "Mantine docs",
  italic: false,
  strikethrough: false,
};
