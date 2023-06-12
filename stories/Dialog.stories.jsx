import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Dialog",
  component: MantineCore.Dialog,
  parameters: {
    docs: {
      description: {
        component: "Dialog",
      },
    },
  },
  argTypes: {
    opened: { description: "Opened state", type: 'boolean' },
    withCloseButton: { description: "Opened state", type: 'boolean' },
    withBorder: { description: "Opened state", type: 'boolean' },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    size: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    shadow: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  }
};

export const Default = (args) => {
  return (
    <MantineCore.Dialog withCloseButton position="top" {...args}>
      <MantineCore.Text size="sm" mb="xs" weight={500}>
        Subscribe to email newsletter
      </MantineCore.Text>

      <MantineCore.Group align="flex-end">
        <MantineCore.TextInput placeholder="hello@gluesticker.com" sx={{ flex: 1 }} />
        <MantineCore.Button>Subscribe</MantineCore.Button>
      </MantineCore.Group>
    </MantineCore.Dialog>
  );
};

Default.args = {
  opened: true,
  radius: "md",
  size: "lg",
  withCloseButton: true,
  withBorder: false,
};
