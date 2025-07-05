import React, { useState } from "react";

const Window = () => {
  const [strokeColor, setStrokeColor] = useState("#000000");

  return (
    <div
      className="h-100 w-100"
      onMouseEnter={() => setStrokeColor("#ff00ff")}
      onMouseLeave={() => setStrokeColor("#000000")}
    >
      <svg
        width="119.49mm"
        height="77.448mm"
        version="1.1"
        viewBox="0 0 119.49 77.448"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform="translate(-45.253 -51.102)"
          fill="none"
          stroke={strokeColor}
        >
          <rect
            x="45.68"
            y="51.529"
            width="118.64"
            height="76.594"
            ry="4.9598"
            strokeWidth=".85414"
            style={{ paintOrder: "fill markers stroke" }}
          />
          <path
            d="m45.253 60.138h119.07"
            style={{ paintOrder: "fill markers stroke" }}
          />
          <circle
            cx="71.079"
            cy="89.826"
            r="20.001"
            style={{ paintOrder: "fill markers stroke" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Window;
