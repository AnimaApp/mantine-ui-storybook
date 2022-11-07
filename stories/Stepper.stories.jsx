import React from "react";
import * as MantineCore from "@mantine/core";
import { SimpleStep } from "./Step.stories";

export default {
  title: "Mantine UI/Stepper",
  component: MantineCore.Stepper,

  argTypes: {
    iconPosition: {
      description: "Icon Position",
      control: { type: "select" },
      options: ["left", "right"],
    },
    iconSize: { description: "Icon Size", type: "number" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    radius: {
      description: "Radius",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    active: { description: "Active", type: "number" },
    value: { description: "Value", type: "number" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleStep.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleStep.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleStep.storyInfo,
    },
  },
};

const Template = (args) => {
  const [active, setActive] = React.useState(args.active);

  return (
    <MantineCore.Stepper
      iconPosition={args.iconPosition}
      iconSize={args.iconSize}
      size={args.size}
      radius={args.radius}
      active={active}
    >
      <SimpleStep {...args.item} />
      <SimpleStep {...args.item2} />
      <SimpleStep {...args.item3} />
    </MantineCore.Stepper>
  );
};

export const SimpleStepper = Template.bind({});

SimpleStepper.args = {
  iconPosition: "left",
  iconSize: 20,
  size: "md",
  radius: "md",
  active: 1,
  item: {
    ...SimpleStep.args,
    label: "Step 1",
  },
  item2: {
    ...SimpleStep.args,
    label: "Step 2",
  },
  item3: {
    ...SimpleStep.args,
    label: "Step 3",
  },
};
