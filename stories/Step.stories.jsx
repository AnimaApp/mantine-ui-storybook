import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Step",
  component: MantineCore.Stepper.Step,
  parameters: {
    titleArg: "label",
  },
  argTypes: {
    allowStepClick: { description: "Allow step click", type: "boolean" },
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    state: {
      description: "State",
      control: { type: "select" },
      options: ["stepInactive", "stepProgress", "stepCompleted"],
    },
    withIcon: { description: "With Icon", type: "number" },
    label: { description: "Label", type: "string" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Stepper.Step
      allowStepClick={args.allowStepClick}
      orientation={args.orientation}
      size={args.size}
      state={args.state}
      withIcon={args.withIcon}
      label={args.label}
    //add description prop
    >
      {args.label}
    </MantineCore.Stepper.Step>
  );
};

export const SimpleStep = Template.bind({});

SimpleStep.args = {
  allowStepClick: false,
  orientation: "horizontal",
  size: "md",
  state: "stepProgress",
  withIcon: 20,
  label: "Label",
};

SimpleStep.storyInfo = {
  name: "SimpleStep",
  kind: "Mantine UI/Step",
};
