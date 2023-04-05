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
    items: {
      type: "story",
      description: "Items",
    },
  },
};

const styleText = {
  display: "flex",
  justifyContent: "center"
};

export const Default = (args) => {
  const { items } = args;
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
        {items.map((item, index) => (
          items.length -1 === index ?
            <MantineCore.Stepper.Completed>
              <div style={styleText}>{item.text}</div>
            </MantineCore.Stepper.Completed>
            :
            <MantineCore.Stepper.Step {...item}>
              <div style={styleText}>{item.text}</div>
            </MantineCore.Stepper.Step>
        ))}
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
  items: [
    {
      label: "Step 1",
      description: "description",
      text: "Step 1 content: Create an account",
    },
    {
      label: "Step 2",
      description: "description",
      text: "Step 2 content: Verify email",
    },
    {
      label: "Step 3",
      description: "description",
      text: "Step 3 content: Get full access",
    },
    {
      text: "Completed, click back button to get to previous step",
    }
  ]
};
