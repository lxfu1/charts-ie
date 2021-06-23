import { Component } from "react";
import { Line } from "@ant-design/charts";

interface Props {
  data: Array<{
    year: string;
    value: number;
  }>;
}

// 自己判断是否需要更新，data 不同时返回 true
const isEqual = (prevProps: Props, nextProps: Props) => false;
export default class DemoClassLine extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return isEqual(this.props, nextProps);
  }
  render() {
    const { data } = this.props;
    const config = {
      data,
      xField: "year",
      yField: "value",
      label: {},
      point: {
        size: 5,
        shape: "diamond",
        style: {
          fill: "white",
          stroke: "#5B8FF9",
          lineWidth: 2,
        },
      },
      yAxis: {
        label: {
          formatter: (v: string) => v,
        },
      },
      tooltip: { showMarkers: false },
      state: {
        active: {
          style: {
            shadowColor: "yellow",
            shadowBlur: 4,
            stroke: "transparent",
            fill: "red",
          },
        },
      },
    };
    return <Line {...config} />;
  }
}
