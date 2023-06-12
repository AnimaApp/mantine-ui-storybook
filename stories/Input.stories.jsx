import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Input",
  component: MantineCore.Input,
  parameters: {
    docs: {
      description: {
        component: "Text Input",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    description: { description: "Description", type: "string" },
    withAsterisk: { description: "With Asterisk", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    iconName: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["unstyled", "filled", "default"],
      },
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  const [value, setValue] = React.useState("");
  return (
    <MantineCore.Input.Wrapper label={args.label} description={args.description} required={args.withAsterisk}>
      <MantineCore.Input
        {...args}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        icon={args.iconName}
        rightIcon={args.rightIcon}
        style={{ width: args.width }}
      />
    </MantineCore.Input.Wrapper>

  );
};

Default.args = {
  label: "Label",
  error: "",
  disabled: false,
  withAsterisk: true,
  description: "Description",
  size: "md",
  radius: "md",
  iconWidth: 36,
  variant: "filled",
  width: "300px",
};
