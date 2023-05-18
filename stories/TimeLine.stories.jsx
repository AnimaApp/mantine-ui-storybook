import React from "react";
import { Text } from "@mantine/core";
import * as MantineCore from "@mantine/core";
import * as TablerIcons from "@tabler/icons";
import {color} from "../src/colors";



export default {
  title: "Mantine UI/Timeline",
  component: MantineCore.Timeline,
  parameters: {
    docs: {
      description: {
        component: "Spoiler",
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
    active: { description: "Active", type: "number" },
    bulletSize: { description: "Active", type: "number" },
    lineWidth: { description: "Active", type: "number" },
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Timeline {...args}>
      {args.items.map((item, index) => (
        <MantineCore.Timeline.Item key={index} title={item.title} lineVariant={item.lineVariant} bullet={item.bullet}>
          <Text color="dimmed" size="sm">{item.description}</Text>
          <Text size="xs" mt={4}>{item.date}</Text>
        </MantineCore.Timeline.Item>
      ))}
    </MantineCore.Timeline>
  );
};

Default.args = {
  color: "blue",
  active: 1,
  bulletSize: 24,
  lineWidth: 2,
  items: [
    {
      title: "New branch",
      description: "You've created new branch fix-notifications from master",
      date: "2 hours ago",
      lineVariant: "solid",
      bullet: <TablerIcons.IconGitBranch size={12} />,
    },
    {
      title: "Commits",
      description: "You've pushed 23 commits to fix-notifications branch",
      date: "52 minutes ago",
      lineVariant: "dashed",
      bullet: <TablerIcons.IconGitCommit size={12} />,
    },
    {
      title: "Pull request",
      description: "You've submitted a pull request Fix incorrect notification message (#187)",
      date: "34 minutes ago",
      lineVariant: "solid",
      bullet: <TablerIcons.IconGitPullRequest size={12} />,
    },
    {
      title: "Code review",
      description: "Robert Gluesticker left a code review on your pull request",
      date: "12 minutes ago",
      lineVariant: "solid",
      bullet: <TablerIcons.IconMessageDots size={12} />,
    }
  ],
};
