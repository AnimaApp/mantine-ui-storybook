import React from "react";
import * as MantineDates from "@mantine/dates";

export default {
  title: "Mantine UI/Calendar",
  component: MantineDates.Calendar,
  parameters: {
    docs: {
      description: {
        component: "Calendar",
      },
    },
  },
};

export const Default = () => {
  return (
    <MantineDates.Calendar />
  );
};

Default.args = {

};
