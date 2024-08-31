import { useState } from "react";

export default function HiddenComponent({
  children,
  displaydWord = 10,
  expanded = false,
  color = "#748ffc",
  size = 1.4,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const btnStyle = {
    fontSize: `${size}rem`,
    cursor: "pointer",
    color: `${color}`,
  };
  if (children.length <= displaydWord) return <p>{children}</p>;
  return (
    <p>
      {isExpanded
        ? children
        : children.split(" ").slice(0, displaydWord).join(" ") + "... "}

      <span style={btnStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? " See less" : " See more"}
      </span>
    </p>
  );
}
