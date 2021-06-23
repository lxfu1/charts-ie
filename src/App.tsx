import { useState } from "react";
import Line from "./line";
import ClassLine from "./line-class";
import DemoRadialTree from "./radial";

export default () => {
  const [count, setCount] = useState(1);
  const LineData = [
    {
      year: "1991",
      value: 3,
    },
    {
      year: "1992",
      value: 4,
    },
    {
      year: "1993",
      value: 3.5,
    },
    {
      year: "1994",
      value: 5,
    },
    {
      year: "1995",
      value: 4.9,
    },
    {
      year: "1996",
      value: 6,
    },
    {
      year: "1997",
      value: 7,
    },
    {
      year: "1998",
      value: 9,
    },
    {
      year: "1999",
      value: 13,
    },
  ];
  return (
    <div style={{ margin: "0 auto" }}>
      <button
        style={{
          padding: "6px 24px",
        }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <div
        style={{
          display: "flex",
        }}
      >
        <Line data={LineData} />
        <ClassLine data={LineData} />
        <DemoRadialTree />
      </div>
    </div>
  );
};
