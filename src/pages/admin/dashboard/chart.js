import React from "react";
import { Line } from "@ant-design/charts";

const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];
const config = {
  data,
  height: 400,
  xField: "year",
  yField: "value",
  point: {
    size: 5,
    shape: "diamond",
  },
  tooltip: {
    formatter: (data) => {
      return {
        name: "",
        value: "",
      };
    },
    customContent: (name, data) =>
      `<div>${data?.map((item) => {
        return `<div class="tooltip-chart" >
              <span class="tooltip-item-name">${item?.name}</span>
              <span class="tooltip-item-value">${item?.value}</span>
            </div>`;
      })}</div>`,
    showMarkers: Boolean,
    showContent: Boolean,
    position: "right | left",
    showCrosshairs: Boolean,
  },
};

export function Chart() {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Line {...config} style={{ width: "100%" }} />
    </div>
  );
}
