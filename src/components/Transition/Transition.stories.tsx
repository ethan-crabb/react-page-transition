import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Transition from "./Transition";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
export default {
// @ts-ignore
    title: "ReactComponentLibrary/Button",
    // @ts-ignore
  component: Transition,
} as ComponentMeta<typeof Transition>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Transition> = (args) => <Transition {...args} />;
// @ts-ignore
export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    // @ts-ignore
  label: "Hello world!",
};
// @ts-ignore
export const ClickMe = Template.bind({});
ClickMe.args = {
    // @ts-ignore
  label: "Click me!",
};