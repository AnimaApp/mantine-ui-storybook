import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Table",
  component: MantineCore.Table,
  parameters: {
    docs: {
      description: {
        component: "Table",
      },
    },
  },
  argTypes: {
    horizontalSpacing: {
      description: "Horizontal spacing",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    verticalSpacing: {
      description: "Vertical spacing",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    fontSize: {
      description: "Font size",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    captionSide: {
      description: "Caption side",
      control: {
        type: "select",
        options: ["top", "bottom"],
      },
    },
    striped: { description: "Striped", type: "boolean" },
    highlightOnHover: { description: "Highlight on hover", type: "boolean" },
    withBorder: { description: "With border", type: "boolean" },
    withColumnBorders: { description: "With column borders", type: "boolean" },
  },
};

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

const columns = [
  "Element position",
  "Element name",
  "Symbol",
  "Atomic mass",
];

export const Default = (args) => {
  const rowsContent = (
    args.columns.map((row) => (
      <th>{row}</th>
    ))
  );

  const elementsContent = (
    args.elements.map((element) => (
      <tr key={element.symbol}>
        <td>{element.position}</td>
        <td>{element.name}</td>
        <td>{element.symbol}</td>
        <td>{element.mass}</td>
      </tr>
    ))
  );

  return (
    <MantineCore.Table {...args}>
      <thead>
        <tr>
          {rowsContent}
        </tr>
      </thead>
      <tbody>
        {elementsContent}
      </tbody>
    </MantineCore.Table>
  );
};

Default.args = {
  elements,
  columns,
  striped: false,
  highlightOnHover: false,
  withBorder: false,
  withColumnBorders: false,
};
