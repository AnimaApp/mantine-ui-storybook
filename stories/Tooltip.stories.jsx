import React from "react";
import * as MantineCore from "@mantine/core";
import { color } from "../src/colors";

export default {
  title: "Mantine UI/Tooltip",
  component: MantineCore.Tooltip,
  parameters: {
    docs: {
      description: {
        component: "Menu",
      },
    },
  },
  argTypes: {
    color: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      },
    },
    position: {
      description: "Position",
      control: {
        type: "select",
        options: ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"],
      },
    },
    withArrow: { description: "With arrow", type: "boolean" },
    arrowPosition: {
      description: "Radius",
      control: {
        type: "select",
        options: ["side", "center"],
      },
    },
    arrowRadius: { description: "Arrow Radius", type: "number" },
    offset: { description: "Offset", type: "number" },
    disabled: { description: "Disabled", type: "boolean" },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Group position="center">
      <MantineCore.Tooltip {...args} label="Tooltip">
        <MantineCore.Button>Hover me</MantineCore.Button>
      </MantineCore.Tooltip>
    </MantineCore.Group>

  );
};

Default.args = {
  position: "top",
  withArrow: false,
  disabled: false,
};
