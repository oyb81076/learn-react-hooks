import * as React from "react";
const Node0: React.SFC = ({ children }) => {
  console.log("node0 render");
  return <>{children}</>;
}

const Node1: React.SFC = ({ children }) => {
  console.log("node1 render");
  return <>{children}</>;
}

const Node2: React.SFC = ({ children }) => {
  console.log("node2 render");
  return <>{children}</>;
}

export function RenderSequence() {
  return (
    <Node0>
      <Node1>
        <Node2>
          console顺序
          node0, node1, node2
        </Node2>
      </Node1>
    </Node0>
  );
}