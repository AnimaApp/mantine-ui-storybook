import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Select",
  component: MantineCore.Select,
  parameters: {
    docs: {
      description: {
        component: "Select",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    clearable: { description: "Clearable", type: "boolean" },
    initiallyOpened: { description: "Initially opened", type: "boolean" },
    dropdownPosition: {
      description: "Dropdown position",
      control: {
        type: "select",
        options: ["bottom", "top", "flip"],
      },
    },
    limit: { description: "Limit", type: "number" },
    maxDropdownHeight: { description: "Max dropdown height", type: "number" },
    searchable: { description: "Searchable", type: "boolean" },
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
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodríguez",
    value: "Bender Bending Rodríguez",
    description: "Fascinated with cooking",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    value: "Carol Miller",
    description: "One of the richest people on Earth",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
    description: "Not just a sponge",
  },
];

export const Default = (args) => {
  const [value, setValue] = React.useState("");

  return (
    <MantineCore.Select
      {...args}
      value={value}
      onChange={setValue}
      icon={args.iconName}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  label: "Label",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  clearable: false,
  initiallyOpened: false,
  dropdownPosition: "bottom",
  limit: 100,
  maxDropdownHeight: 500,
  searchable: false,
  size: "md",
  variant: "filled",
  data: data,
  width: "300px",
};
