import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

/*
* Decorator ????
* */
export default {
  title: "Mantine UI/Autocomplete",
  component: MantineCore.Autocomplete,
  parameters: {
    docs: {
      description: {
        component: "Autocomplete",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    initiallyOpened: { description: "Initially opened", type: "boolean" },
    dropdownPosition: {
      description: "Dropdown position",
      control: {
        type: "select",
        options: ["bottom", "top", "flip"],
      }
    },
    limit: { description: "Limit", type: "number" },
    maxDropdownHeight: { description: "Max dropdown height", type: "number" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      }
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
    defaultValue: { description: "Default value", type: "string" },
  },
  decorators: [withIconMapped],
};

const data = [
  {value:"React"},
  {value:"Angular"},
  {value:"Svelte"},
  {value:"Vue"},
];

export const Default = (args) => {
  const [value, setValue] = React.useState(args.defaultValue);

  return (
    <MantineCore.Autocomplete
      value={value}
      onChange={setValue}
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      initiallyOpened={args.initiallyOpened}
      dropdownPosition={args.dropdownPosition}
      limit={args.limit}
      maxDropdownHeight={args.maxDropdownHeight}
      size={args.size}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      variant={args.variant}
      data={args.data}
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
  initiallyOpened: true,
  dropdownPosition: "bottom",
  limit: 100,
  maxDropdownHeight: 400,
  size: "md",
  iconWidth: 20,
  variant: "filled",
  data: data,
  width: "300px",
  defaultValue: "",
};
