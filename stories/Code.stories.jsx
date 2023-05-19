import React from "react";
import * as MantineCore from "@mantine/core";
import { color } from "../src/colors";

export default {
  title: "Mantine UI/Code",
  component: MantineCore.Code,
  parameters: {
    docs: {
      description: {
        component: "Code",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    block: { description: "Block", type: "boolean" },
    color: {
      description: "Color",
      control: {
        type: "select",
        options: color,
      },
    },
  },
};

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

export const Default = (args) => {
  return (
    <MantineCore.Code {...args}>
      {args.label}
    </MantineCore.Code>
  );
};

Default.args = {
  label: codeForPreviousDemo,
  block: true,
};
