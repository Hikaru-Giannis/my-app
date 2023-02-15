import React from "react";
import { Game } from "./components/Game";

export default {
  component: Game,
  title: "Game",
};

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: "Next player: X",
  setStatus: () => {},
};

export const Draw = Template.bind({});
Draw.args = {
  status: "Draw!",
  setStatus: () => {},
};
