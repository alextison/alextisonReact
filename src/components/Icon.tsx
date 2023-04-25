import React, { useState } from "react";

interface IconProps {
  d: string;
  fill: string;
  hoverFill: string;
  size: string;
}

function Icon({ d, fill, hoverFill, size }: IconProps) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <svg
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill={hover ? fill : hoverFill} d={d} />
    </svg>
  );
}

export default Icon;
