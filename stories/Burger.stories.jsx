import React from "react";
import { useDisclosure } from '@mantine/hooks';
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Burger",
  component: MantineCore.Burger,
  parameters: {
    docs: {
      description: {
        component: "Burger",
      },
    },
  },
  argTypes: {
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
        type: "color",
      },
    },
    transitionDuration: { description: "Transition duration", type: "number" },
  },
};

export const Default = (args) => {
  const [opened, { toggle }] = useDisclosure(args.opened);

  return (
    <MantineCore.Burger
      opened={opened}
      {...args}
      onClick={toggle}
    />
  );
};

Default.args = {
  size: "md",
  transitionDuration: 100,
  color: "#000000"
};
