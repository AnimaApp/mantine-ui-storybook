import { DecoratorFunction } from "@storybook/addons";
import React from "react";

const transparentStyles =
  "html, body, #root, #story-container { background: transparent !important;";

export const withStoryContainer: DecoratorFunction<React.ReactNode> = (
  story,
  context
) => {
  const { storyContainerMinWidth, container: StoryContainer } =
    context?.parameters || {};

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: transparentStyles }} />
      <div
        id="story-container"
        style={{ display: "inline-block", minWidth: storyContainerMinWidth }}
      >
        {StoryContainer ? <StoryContainer>{story()}</StoryContainer> : story()}
      </div>
    </>
  );
};
