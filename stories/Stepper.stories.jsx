import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Stepper",
  component: MantineCore.Stepper,

  argTypes: {
    iconPosition: {
      description: "Icon Position",
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    iconSize: { description: "Icon Size", type: "number" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    active: { description: "Active", type: "number" },
    value: { description: "Value", type: "number" },
    item: {
      type: "story",
      description: "item",
    },
    item2: {
      type: "story",
      description: "item",
    },
    item3: {
      type: "story",
      description: "item",
    },
  },
};

const styleText = {
  display: "flex",
  justifyContent: "center"
};

export const Default = (args) => {
  const [active, setActive] = React.useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


  return (
    <>
      <MantineCore.Stepper
        {...args}
        active={active}
        onStepClick={setActive}
      >
        <MantineCore.Stepper.Step {...args.item}>
          <div style={styleText}>{args.item.text}</div>
        </MantineCore.Stepper.Step>
        <MantineCore.Stepper.Step {...args.item2}>
          <div style={styleText}>{args.item2.text}</div>
        </MantineCore.Stepper.Step>
        <MantineCore.Stepper.Step {...args.item3}>
          <div style={styleText}>{args.item3.text}</div>
        </MantineCore.Stepper.Step>
        <MantineCore.Stepper.Completed>
          <div style={styleText}>{args.item4.text}</div>
        </MantineCore.Stepper.Completed>
      </MantineCore.Stepper>
      <MantineCore.Group position="center" mt="xl">
        <MantineCore.Button variant="default" onClick={prevStep}>Back</MantineCore.Button>
        <MantineCore.Button onClick={nextStep}>Next step</MantineCore.Button>
      </MantineCore.Group>
    </>
  );
};

Default.args = {
  iconPosition: "left",
  iconSize: 40,
  size: "md",
  radius: "xl",
  active: 1,
  item: {
    label: "Step 1",
    description: "description",
    text: "Step 1 content: Create an account",
  },
  item2: {
    label: "Step 2",
    description: "description",
    text: "Step 2 content: Verify email",
  },
  item3: {
    label: "Step 3",
    description: "description",
    text: "Step 3 content: Get full access",
  },
  item4: {
    text: "Completed, click back button to get to previous step",
  },
};
