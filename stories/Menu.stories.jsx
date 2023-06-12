import React from "react";
import * as MantineCore from "@mantine/core";
import * as TablerIcons from "@tabler/icons";

export default {
  title: "Mantine UI/Menu",
  component: MantineCore.Menu,
  parameters: {
    docs: {
      description: {
        component: "Menu",
      },
    },
  },
  argTypes: {
    position: {
      control: {
        type: "select",
        options: ["left", "left-start", "left-end", "right", "right-start", "right-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"],
      },
    },
    shadow: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
    withArrow: { description: "Show arrow", type: "boolean" },
    offset: { description: "Offset", type: "number" },
    defaultOpened: { description: "Default opened", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    arrowPosition: {
      description: "Arrow position",
      control: {
        type: "select",
        options: ["side", "center"],
      },
    },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Menu {...args} width={200}>
      <MantineCore.Menu.Target>
        <MantineCore.Button>Toggle menu</MantineCore.Button>
      </MantineCore.Menu.Target>

      <MantineCore.Menu.Dropdown>
        <MantineCore.Menu.Label>Application</MantineCore.Menu.Label>
        <MantineCore.Menu.Item icon={<TablerIcons.IconSettings size={14} />}>Settings</MantineCore.Menu.Item>
        <MantineCore.Menu.Item icon={<TablerIcons.IconMessageCircle size={14} />}>Messages</MantineCore.Menu.Item>
        <MantineCore.Menu.Item icon={<TablerIcons.IconPhoto size={14} />}>Gallery</MantineCore.Menu.Item>
        <MantineCore.Menu.Item
          icon={<TablerIcons.IconSearch size={14} />}
          rightSection={<MantineCore.Text size="xs" color="dimmed">⌘K</MantineCore.Text>}
        >
          Search
        </MantineCore.Menu.Item>

        <MantineCore.Menu.Divider />

        <MantineCore.Menu.Label>Danger zone</MantineCore.Menu.Label>
        <MantineCore.Menu.Item icon={<TablerIcons.IconArrowsLeftRight size={14} />}>Transfer my data</MantineCore.Menu.Item>
        <MantineCore.Menu.Item color="red" icon={<TablerIcons.IconTrash size={14} />}>Delete my account</MantineCore.Menu.Item>
      </MantineCore.Menu.Dropdown>
    </MantineCore.Menu>
  );
};

Default.args = {
  position: "bottom",
  shadow: "md",
  withArrow: false,
  offset: 5,
  defaultOpened: false,
  disabled: false,
};
