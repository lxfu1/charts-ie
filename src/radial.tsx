import React from "react";
import { RadialGraph } from "@ant-design/charts";

const DemoIndentedTree: React.FC = () => {
  const data = {
    label: "Modeling Methods",
    children: [
      {
        label: "Classification",
        children: [
          {
            label: "Logistic regression",
          },
          {
            label: "Linear discriminant analysis",
          },
          {
            label: "Rules",
          },
          {
            label: "Decision trees",
          },
          {
            label: "Naive Bayes",
          },
          {
            label: "K nearest neighbor",
          },
          {
            label: "Probabilistic neural network",
          },
          {
            label: "Support vector machine",
          },
        ],
      },
      {
        label: "Consensus",
        children: [
          {
            label: "Models diversity",
            children: [
              {
                label: "Different initializations",
              },
              {
                label: "Different parameter choices",
              },
              {
                label: "Different architectures",
              },
              {
                label: "Different modeling methods",
              },
              {
                label: "Different training sets",
              },
              {
                label: "Different feature sets",
              },
            ],
          },
          {
            label: "Methods",
            children: [
              {
                label: "Classifier selection",
              },
              {
                label: "Classifier fusion",
              },
            ],
          },
          {
            label: "Common",
            children: [
              {
                label: "Bagging",
              },
              {
                label: "Boosting",
              },
              {
                label: "AdaBoost",
              },
            ],
          },
        ],
      },
      {
        label: "Regression",
        children: [
          {
            label: "Multiple linear regression",
          },
          {
            label: "Partial least squares",
          },
          {
            label: "Multi-layer feedforward neural network",
          },
          {
            label: "General regression neural network",
          },
          {
            label: "Support vector regression",
          },
        ],
      },
    ],
  };

  const config = {
    data,
    nodeType: "diamond",
    behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
  };

  // @ts-ignore
  return <RadialGraph {...config} />;
};

export default DemoIndentedTree;
