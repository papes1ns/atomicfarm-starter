// About.stories.ts|tsx

import React from "react";

import {ComponentStory, ComponentMeta} from "@storybook/react";

import {NotFound} from "../views/NotFound";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/NotFound",
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NotFound> = args => (
  <NotFound {...args} />
);

export const NotFoundFirst = Template.bind({});
NotFoundFirst.storyName = "404 Not Found";
NotFoundFirst.args = {
  /*👇 The args you need here will depend on your component */
  notFoundMessage: "404 ERROR. This page was not found!",
  color: "indigo",
};

export const NotFoundSecond = Template.bind({});
NotFoundSecond.storyName = "401 Unauthorized";
NotFoundSecond.args = {
  /*👇 The args you need here will depend on your component */
  notFoundMessage: "401 ERROR. Unauthorized Request Detected!",
  color: "pink",
};

export const NotFoundThird = Template.bind({});
NotFoundThird.storyName = "400 Bad Request";
NotFoundThird.args = {
  /*👇 The args you need here will depend on your component */
  notFoundMessage: "400 ERROR. Bad Request!",
  color: "green",
};
