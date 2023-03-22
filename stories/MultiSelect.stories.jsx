import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Multi Select",
  component: MantineCore.MultiSelect,
  parameters: {
    docs: {
      description: {
        component: "MultiSelect",
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
    dropdownPosition: {
      description: "Dropdown position",
      control: { type: "select" },
      options: ["bottom", "top", "flip"],
    },
    limit: { description: "Limit", type: "number" },
    maxDropdownHeight: { description: "Max dropdown height", type: "number" },
    maxSelectedValues: { description: "Max selected values", type: "number" },
    searchable: { description: "Searchable", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "filled", "default"],
    },
    width: { description: "Width", type: "string" },
    defaultValue: { description: "Default value", type: "string" },

  },
  decorators: [withIconMapped],
};

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

const Template = (args) => {
  const [value, setValue] = React.useState([args.defaultValue]);

  return (
    <MantineCore.MultiSelect
      value={value}
      onChange={setValue}
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      clearable={args.clearable}
      dropdownPosition={args.dropdownPosition}
      limit={args.limit}
      maxDropdownHeight={args.maxDropdownHeight}
      maxSelectedValues={args.maxSelectedValues}
      searchable={args.searchable}
      size={args.size}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      variant={args.variant}
      data={args.data}
      style={{ width: args.width }}
    />
  );
};

export const SimpleMultiSelect = Template.bind({});

SimpleMultiSelect.args = {
  label: "Label",
  description: "",
  error: "",
  disabled: false,
  required: false,
  clearable: false,
  dropdownPosition: "bottom",
  limit: 100,
  maxDropdownHeight: 400,
  maxSelectedValues: 100,
  searchable: false,
  size: "md",
  iconWidth: 20,
  variant: "default",
  data: data,
  width: "300px",
  defaultValue: "react",
};
