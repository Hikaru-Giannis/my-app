import React from "react";
import { Square } from "./components/Square";

export default {
  component: Square,
  title: "Square",
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: null,
  onClick: () => {},
};

export const Noughts = Template.bind({});
Noughts.args = {
  value: "O",
  onClick: () => {},
};

export const Crosses = Template.bind({});
Crosses.args = {
  value: "X",
  onClick: () => {},
};

export const Triangle = Template.bind({});
Triangle.args = {
  value: "△",
  onClick: () => {},
};
