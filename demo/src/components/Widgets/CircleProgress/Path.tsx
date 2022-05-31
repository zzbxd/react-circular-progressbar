import * as React from 'react';
import { VIEWBOX_CENTER_X, VIEWBOX_CENTER_Y } from '../constants';

function Path({
  className,
  counterClockwise,
  dashRatio,
  pathRadius,
  strokeWidth,
  style,
  marker,
}: {
  className?: string;
  counterClockwise: boolean;
  dashRatio: number;
  pathRadius: number;
  strokeWidth: number;
  style?: object;
  marker?: string;
}) {
  return (
    <path
      className={className}
      style={Object.assign({}, style, getDashStyle({ pathRadius, dashRatio, counterClockwise }))}
      d={getPathDescription({
        pathRadius,
        counterClockwise,
        dashRatio,
      })}
      strokeWidth={strokeWidth}
      fillOpacity={0}
      markerEnd={marker}
    />
  );
}

// SVG path description specifies how the path should be drawn
function getPathDescription({
  pathRadius,
  counterClockwise,
  dashRatio,
}: {
  pathRadius: number;
  counterClockwise: boolean;
  dashRatio: number;
}) {
  const radius = pathRadius;
  const rotation = counterClockwise ? 1 : 0;

  const degree = dashRatio * 360;
  const calculateDegree = (Math.PI * degree) / 180;
  const deltaX = counterClockwise
    ? -radius * Math.sin(calculateDegree)
    : radius * Math.sin(calculateDegree);
  const deltaY = radius - radius * Math.cos(calculateDegree);

  return `
      M ${VIEWBOX_CENTER_X},${VIEWBOX_CENTER_Y}
      m 0,-${radius}
      a ${radius},${radius} ${rotation} 1 1 0,${2 * radius}
      a ${radius},${radius} ${rotation} 1 1 0,-${2 * radius}
      m ${deltaX},${deltaY}      
    `;
}

function getDashStyle({
  counterClockwise,
  dashRatio,
  pathRadius,
}: {
  counterClockwise: boolean;
  dashRatio: number;
  pathRadius: number;
}) {
  const diameter = Math.PI * 2 * pathRadius;
  const gapLength = (1 - dashRatio) * diameter;

  return {
    // Have dash be full diameter, and gap be full diameter
    strokeDasharray: `${diameter}px ${diameter}px`,
    // Shift dash backward by gapLength, so gap starts appearing at correct distance
    strokeDashoffset: `${counterClockwise ? -gapLength : gapLength}px`,
  };
}

export default Path;
