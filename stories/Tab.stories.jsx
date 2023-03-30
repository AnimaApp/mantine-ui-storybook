import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine UI/Tab",
  component: MantineCore.Tabs.Tab,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    container: MantineCore.Tabs,
    titleArg: "label",
  },
  argTypes: {
    value: { description: "Value", type: "string" },
    label: { description: "Label", type: "string" },
    iconName: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <MantineCore.Tabs>
      <MantineCore.Tabs.Tab value={args.value} icon={args.iconName}>
        {args.label}
      </MantineCore.Tabs.Tab>
    </MantineCore.Tabs>

  );
};

Default.args = {
  value: "label",
  //   iconName: "Icon2fa",
  label: "Label",
};

Default.storyInfo = {
  name: "SimpleTab",
  kind: "Mantine UI/Tab",
};
