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
      control: { type: "select" },
      options: ["outline", "default", "pills"],
    },
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
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

const SimpleTab = (args) => {
  return (
    <MantineCore.Tabs.Tab value={args.value} icon={args.iconName}>
      {args.label}
    </MantineCore.Tabs.Tab>
  );
};

const Template = (args) => {
  const [activeTab, setActiveTab] = React.useState(args.defaultValue);

  return (
    <MantineCore.Tabs
      variant={args.variant}
      orientation={args.orientation}
      value={activeTab}
      onTabChange={setActiveTab}
    >
      <SimpleTab {...args.item} />
      <SimpleTab {...args.item2} />
      <SimpleTab {...args.item3} />
    </MantineCore.Tabs>
  );
};

export const SimpleTabs = Template.bind({});

SimpleTabs.args = {
  variant: "pills",
  orientation: "vertical",
  defaultValue: "tab1",
  item: {
    ...SimpleTab.args,
    value: "tab1",
    label: "Tab 1",
  },
  item2: {
    ...SimpleTab.args,
    value: "tab2",
    label: "Tab 2",
  },
  item3: {
    ...SimpleTab.args,
    value: "tab3",
    label: "Tab 3",
  },
};
