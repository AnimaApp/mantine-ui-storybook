import React, { useEffect } from "react";
import * as MantineCore from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

export default {
  title: "Mantine UI/Modal",
  component: MantineCore.Modal,
  parameters: {
    docs: {
      description: {
        component: "Modal",
      },
    },
  },
  argTypes: {
    withCloseButton: { description: "With Close button", type: "boolean" },
    opened: { description: "Opened", type: "boolean" },
    centered: { description: "Centered", type: "boolean" },
    title: { description: "Title", type: "string" },
  },
};

export const Default = (args) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <MantineCore.Modal onClose={close} {...args}>
      Modal without header, press escape or click on overlay to close
    </MantineCore.Modal>
  );
};

Default.args = {
  opened: true,
  withCloseButton: false,
  centered: false,
};
