import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Tabs",
  component: MantineCore.Tabs,
  parameters: {
    docs: {
      description: {
        component: "Tabs",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Variant",
      control: {
        type: "select",
        options: ["outline", "default", "pills"],
      },
    },
    radius: {
      description: "Radius",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    orientation: {
      description: "Orientation",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    value: { description: "Value", type: "string" },
    defaultValue: { description: "Default value", type: "string" },
    items: {
      type: "story",
      description: "item",
    },
  },
};

const Tab = (args) => {
  return (
    <MantineCore.Tabs.Tab value={args.value} icon={args.iconName}>
      {args.label}
    </MantineCore.Tabs.Tab>
  );
};

export const Default = (args) => {
  const { items } = args;
  const [activeTab, setActiveTab] = React.useState(args.defaultValue);

  return (
    <MantineCore.Tabs
      {...args}
      value={activeTab}
      onTabChange={setActiveTab}
    >
      <MantineCore.Tabs.List>
        {items.map((item) => (
          <Tab {...item} />
        ))}
      </MantineCore.Tabs.List>

    </MantineCore.Tabs>
  );
};

Default.args = {
  variant: "pills",
  orientation: "horizontal",
  defaultValue: "tab1",
  radius: "sm",
  items: [
    {
      ...Tab.args,
      value: "tab1",
      label: "Tab 1",
    },
    {
      ...Tab.args,
      value: "tab2",
      label: "Tab 2",
    },
    {
      ...Tab.args,
      value: "tab3",
      label: "Tab 3",
    }
  ]
};
