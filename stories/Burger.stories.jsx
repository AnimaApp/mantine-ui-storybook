import React from "react";
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
    opened: { description: "Opened", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    transitionDuration: { description: "Transition duration", type: "number" },
  },
};

const Template = (args) => {
  const [opened, setOpened] = React.useState(args.opened);

  return (
    <MantineCore.Burger
      opened={opened}
      size={args.size}
      transitionDuration={args.transitionDuration}
      onClick={() => setOpened((o) => !o)}
    />
  );
};

export const SimpleBurger = Template.bind({});

SimpleBurger.args = {
  opened: false,
  size: "md",
  transitionDuration: 100,
};
