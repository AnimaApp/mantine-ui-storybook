import React from "react";
import * as MantineCore from "@mantine/core";
import {color} from "../src/colors";

export default {
  title: "Mantine UI/Highlight",
  component: MantineCore.Highlight,
  parameters: {
    docs: {
      description: {
        component: "Highlight",
      },
    },
  },
  argTypes: {
    highlight: { description: "Highlight", type: "string" },
    label: { description: "Label", type: "string" },
    highlightColor: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Highlight {...args}>
      Highlight This, definitely THIS and also this!
    </MantineCore.Highlight>
  );
};

Default.args = {
  highlight: "this",
  label: "Highlight This, definitely THIS and also this!",
};
