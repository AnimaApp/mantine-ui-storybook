import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
    title: "Mantine UI/JSON Input",
    component: MantineCore.JsonInput,
    parameters: {
        docs: {
            description: {
                component: "Text Input",
            },
        },
    },
    argTypes: {
        label: { description: "Label", type: "string" },
        description: { description: "Description", type: "string" },
        error: { description: "Error", type: "string" },
        disabled: { description: "Disabled", type: "boolean" },
        withAsterisk: { description: "With Asterisk", type: "boolean" },
        size: {
            description: "Size",
            control: {
                type: "select",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
        iconName: {
            description: "Icon",
            control: {
                type: "select",
                options: iconOptions,
                transform: iconTransform,
                required: false,
            },
        },
        rightIcon: {
            description: "Right  Icon",
            control: {
                type: "select",
                options: iconOptions,
                transform: iconTransform,
                required: false,
            },
        },
        variant: {
            description: "Variant",
            control: {
                type: "select",
                options: ["unstyled", "filled", "default"],
            },
        },
        radius: {
            description: "Radius",
            control: {
                type: "select",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
        width: { description: "Width", type: "string" },
    },
    decorators: [withIconMapped],
};

export const Default = (args) => {
    const [value, setValue] = React.useState("");
    return (
        <MantineCore.JsonInput
            {...args}
            value={value}
            onChange={(value) => setValue(value)}
            icon={args.iconName}
            rightIcon={args.rightIcon}
            style={{ width: args.width }}
        />
    );
};

Default.args = {
    label: "Label",
    description: "Description",
    error: "",
    validationError: "Invalid JSON",
    disabled: false,
    withAsterisk: true,
    size: "md",
    radius: "md",
    variant: "filled",
    width: "300px",
};
