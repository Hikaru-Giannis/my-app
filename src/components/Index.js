import { useState } from "react";
import { Game } from "./Game";

export const Index = () => {
  const [status, setStatus] = useState("");
  return <Game status={status} setStatus={setStatus} />;
};
