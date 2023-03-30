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
    orientation: {
      description: "Orientation",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    value: { description: "Value", type: "string" },
    defaultValue: { description: "Default value", type: "string" },
    item: {
      type: "story",
      description: "item",
    },
    item2: {
      type: "story",
      description: "item",
    },
    item3: {
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
  const [activeTab, setActiveTab] = React.useState(args.defaultValue);

  return (
    <MantineCore.Tabs
      {...args}
      value={activeTab}
      onTabChange={setActiveTab}
    >
      <Tab {...args.item} />
      <Tab {...args.item2} />
      <Tab {...args.item3} />
    </MantineCore.Tabs>
  );
};

Default.args = {
  variant: "pills",
  orientation: "vertical",
  defaultValue: "tab1",
  item: {
    ...Tab.args,
    value: "tab1",
    label: "Tab 1",
  },
  item2: {
    ...Tab.args,
    value: "tab2",
    label: "Tab 2",
  },
  item3: {
    ...Tab.args,
    value: "tab3",
    label: "Tab 3",
  },
};
