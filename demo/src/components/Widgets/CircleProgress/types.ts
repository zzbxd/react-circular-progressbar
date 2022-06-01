import * as React from 'react';

export type CircularProgressbarStyles = {
  root?: React.CSSProperties;
  trail?: React.CSSProperties;
  path?: React.CSSProperties;
  text?: React.CSSProperties;
  title?: React.CSSProperties;
  background?: React.CSSProperties;
  marker?: React.CSSProperties;
};

export type CircularProgressbarDefaultProps = {
  background: boolean;
  backgroundPadding: number;
  circleRatio: number;
  classes: {
    root: string;
    trail: string;
    path: string;
    text: string;
    title: string;
    background: string;
    marker: string;
  };
  className: string;
  counterClockwise: boolean;
  maxValue: number;
  minValue: number;
  strokeWidth: number;
  styles: CircularProgressbarStyles;
  text: string;
  title: string;
};

export type CircularProgressbarProps = CircularProgressbarDefaultProps & {
  value: number;
};
