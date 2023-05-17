import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Kbd",
  component: MantineCore.Kbd,
  parameters: {
    docs: {
      description: {
        component: "Kbd",
      },
    },
  },
  argTypes: {
    value: { description: "Value", type: "string" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Kbd {...args}>
      {args.value}
    </MantineCore.Kbd>
  );
};

Default.args = {
  value: "Shift",
};
