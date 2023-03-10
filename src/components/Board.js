import React from "react";
import { Square } from "./Square";
export function Board(props) {
  return (
    <div>
      <div className="board-row">
        <Square
          value={props.squares[0]}
          onClick={() => props.onClick(0)}
          position={0}
        />
        <Square
          value={props.squares[1]}
          onClick={() => props.onClick(1)}
          position={1}
        />
        <Square
          value={props.squares[2]}
          onClick={() => props.onClick(2)}
          position={2}
        />
      </div>
      <div className="board-row">
        <Square
          value={props.squares[3]}
          onClick={() => props.onClick(3)}
          position={3}
        />
        <Square
          value={props.squares[4]}
          onClick={() => props.onClick(4)}
          position={4}
        />
        <Square
          value={props.squares[5]}
          onClick={() => props.onClick(5)}
          position={5}
        />
      </div>
      <div className="board-row">
        <Square
          value={props.squares[6]}
          onClick={() => props.onClick(6)}
          position={6}
        />
        <Square
          value={props.squares[7]}
          onClick={() => props.onClick(7)}
          position={7}
        />
        <Square
          value={props.squares[8]}
          onClick={() => props.onClick(8)}
          position={8}
        />
      </div>
    </div>
  );
}
