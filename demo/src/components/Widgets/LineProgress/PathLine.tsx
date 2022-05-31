import * as React from 'react';
import { VIEWBOX_CENTER_X, VIEWBOX_CENTER_Y } from '../constants';

function Path({
  className,
  dashRatio,
  pathRadius,
  strokeWidth,
  style,
  marker,
}: {
  className?: string;
  dashRatio: number;
  pathRadius: number;
  strokeWidth: number;
  style?: object;
  marker?: string;
}) {
  return (
    <path
      className={className}
      style={Object.assign({}, style, getDashStyle({ pathRadius, dashRatio }))}
      d={getPathDescription({
        pathRadius,
        dashRatio,
      })}
      strokeWidth={strokeWidth}
      fillOpacity={0}
      markerEnd={marker}
    />
  );
}

// SVG path description specifies how the path should be drawn
function getPathDescription({ pathRadius, dashRatio }: { pathRadius: number; dashRatio: number }) {
  const radius = pathRadius;
  const deltaX = 2 * radius * dashRatio - 2 * radius;
  const deltaY = 0;

  return `
      M ${VIEWBOX_CENTER_X},${VIEWBOX_CENTER_Y}
      m -${radius},0
      l 0, 0, ${2 * radius},0
      m ${deltaX},${deltaY}      
    `;
}

function getDashStyle({ dashRatio, pathRadius }: { dashRatio: number; pathRadius: number }) {
  const diameter = 2 * pathRadius;
  const gapLength = (1 - dashRatio) * diameter;

  return {
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${gapLength}px`,
  };
}

export default Path;
