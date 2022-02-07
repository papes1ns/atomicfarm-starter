// About.stories.ts|tsx

import React from "react";

import {ComponentStory, ComponentMeta} from "@storybook/react";

import {About} from "../views/About";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/About",
  component: About,
} as ComponentMeta<typeof About>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof About> = args => <About {...args} />;

export const FirstStory = Template.bind({});

FirstStory.storyName = "About Us Page";

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
