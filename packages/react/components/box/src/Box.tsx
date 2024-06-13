import { boxStyle } from "./style.css";
import * as React from "react";

const Box = (props: any, ref: React.Ref<HTMLElement>) => {
  console.log("?", boxStyle, "props", props);
  const { as = "div", children } = props;
  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: boxStyle + " " + props.className,
      style: {
        backgroundColor: "pink",
      },
    },
    children
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
