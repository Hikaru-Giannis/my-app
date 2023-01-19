import React from "react";

import { Board } from "./index";

export default {
  component: Board,
  title: "Board",
};

const Template = (args) => <Board {...args} />;

// TODO 他のストーリーの値を参照できるようにしたい
export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
  onClick: () => {},
};

export const AllTriangle = Template.bind({});
AllTriangle.args = {
  squares: Array(9).fill("△"),
  onClick: () => {},
};
export const AllNoughts = Template.bind({});
AllNoughts.args = {
  squares: Array(9).fill("O"),
  onClick: () => {},
};
export const AllCrosses = Template.bind({});
AllCrosses.args = {
  squares: Array(9).fill("X"),
  onClick: () => {},
};
