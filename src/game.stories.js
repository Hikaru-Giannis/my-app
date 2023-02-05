import React from "react";
import { Game } from "./components/Game";

export default {
  component: Game,
  title: "Game",
};

const Template = () => <Game />;

export const Default = Template.bind({});
Default.args = {};
