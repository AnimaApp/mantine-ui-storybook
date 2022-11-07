import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Loader",
  component: MantineCore.Loader,
  parameters: {
    docs: {
      description: {
        component: "Loader",
      },
    },
  },
  argTypes: {
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["bars", "oval", "dots"],
    },
  },
};

const Template = (args) => {
  return <MantineCore.Loader size={args.size} variant={args.variant} />;
};

export const SimpleLoader = Template.bind({});

SimpleLoader.args = {
  size: "md",
  variant: "oval",
};
