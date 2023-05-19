import React from "react";
import * as MantineDates from "@mantine/dates";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Date Picker",
  component: MantineDates.DatePicker,
  parameters: {
    docs: {
      description: {
        component: "DatePicker",
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
    // level: {
    //   description: "Level",
    //   control: {
    //     type: "select",
    //     options: ["month", "year", "decade"],
    //   },
    // },
    width: { description: "Width", type: "string" },
    allowDeselect: { description: "Allow deselect", type: "boolean" },
    hideWeekdays: { description: "Hide weekdays", type: "boolean" },
  },
  decorators: [withIconMapped],
};


export const Default = (args) => {
  const [value, setValue] = React.useState();
  return (
    <MantineDates.DatePicker
      {...args}
      hasNextLevel={false}
      value={value}
      onChange={setValue}
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  size: "md",
  allowDeselect: false,
  width: "300px",
  hideWeekdays: false,
};
