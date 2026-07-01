import { useCallback } from "react";
import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";
import React from "react";

export function TextUpdaterNode() {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  return React.createElement(
  "div",
  { className: "text-updater-node" },
  React.createElement("label", { htmlFor: "text" }, "Text:"),
  React.createElement("input", {
    id: "text",
    name: "text",
    onChange: onChange,
    className: "nodrag",
  })
);
}

export const initialNodes: AppNode[] = [
  {
    id: "a",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "node1" },
  },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "node2" },
  },
  {
    id: "c",
    type: "text-updater",
    position: { x: 100, y: 100 },
    data: { label: "node3" },
  },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "node4" },
  },
];

export const nodeEdges = [
  {
    id: 'e1',
    source: 'a',
    target: 'b',
    type: 'smoothstep',
  } ,
  {
    id: 'e2',
    source: 'b',
    target: 'c',
    type: 'smoothstep',
  } ,
  {
    id: 'e3',
    source: 'c',
    target: 'd',
    type: 'smoothstep',
  } ,
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "text-updater": TextUpdaterNode,
} satisfies NodeTypes;