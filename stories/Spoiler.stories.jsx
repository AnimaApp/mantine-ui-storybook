import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Spoiler",
  component: MantineCore.Spoiler,
  parameters: {
    docs: {
      description: {
        component: "Spoiler",
      },
    },
  },
  argTypes: {
    maxHeight: {description: "Max height", type: "number"},
    showLabel: {description: "Show label", type: "string"},
    hideLabel: {description: "Hide label", type: "string"},
    transitionDuration: {description: "Transition duration", type: "number"},
    initialState: {description: "Initial state", type: "boolean"},
  },
};

export const Default = (args) => {
  return (
    <MantineCore.Spoiler {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur cum deserunt doloribus, eaque, earum
      eveniet harum labore minus nobis soluta temporibus ullam voluptate! Ad autem consectetur consequuntur cum,
      deserunt distinctio dolorem ducimus enim eos et ex excepturi exercitationem expedita harum ipsum labore laborum
      magni minima nam pariatur perferendis quaerat quos ratione recusandae repellat rerum totam ullam ut veniam,
      voluptatum! Accusantium animi aperiam consequuntur corporis cumque delectus dicta dignissimos distinctio dolorem
      dolores doloribus dolorum enim error eum eveniet excepturi facere id impedit itaque laudantium minima
      necessitatibus nihil nulla odio optio placeat praesentium provident quasi repellat rerum sed totam ut vel velit
      veritatis, vero voluptates. Accusantium ad alias aliquam aut beatae consectetur cupiditate doloremque eius et eum
      fugiat fugit illo ipsum, itaque iure laborum, maiores minus modi molestiae natus, nisi obcaecati officiis
      perspiciatis possimus quam qui quibusdam quidem quis rem reprehenderit rerum sapiente tempore temporibus ullam
      vero vitae voluptatum. Adipisci alias aspernatur aut autem, illo laudantium magnam odit ratione reprehenderit!
      Atque aut corporis distinctio dolore doloribus expedita explicabo id ipsa, officia porro repellat saepe sapiente
      soluta ut velit veniam vitae? Ad asperiores iste laboriosam maxime totam! Aliquam animi commodi eveniet excepturi
      magnam maiores natus nemo reprehenderit. Aliquam assumenda, atque error et expedita labore omnis quasi ratione
      sapiente soluta. Consequatur dolore ex molestiae natus, porro sed ut! Aperiam atque, blanditiis dolore dolores
      earum omnis quas repellat sint tenetur. Aspernatur beatae blanditiis, deserunt doloremque eius fugiat magni
      nesciunt odio porro possimus quas unde. Ad alias aperiam architecto autem consectetur culpa delectus dignissimos
      dolor dolore doloribus ducimus error et eum facilis illo ipsa iure labore minus nemo non numquam obcaecati
      pariatur perferendis, porro possimus quaerat quasi repellat saepe soluta tempore ut veritatis vero voluptatum? A,
      dolorum enim esse eum harum iste molestiae vero voluptates! Iusto, maiores obcaecati qui quisquam totam unde
      vitae. Assumenda consectetur consequatur cumque cupiditate dicta dolorem dolorum ea esse explicabo facere fuga
      impedit ipsa itaque iusto labore odit quae quaerat rerum soluta tempora tenetur, unde vero? A aut in ipsam
      repudiandae ut.
    </MantineCore.Spoiler>
  );
};

Default.args = {
  maxHeight: 110,
  showLabel: "Show more",
  hideLabel: "Hide",
  transitionDuration: 0,
  initialState: false,
};
