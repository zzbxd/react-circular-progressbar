import * as React from 'react';

export type LineProgressBarStyles = {
  root?: React.CSSProperties;
  trail?: React.CSSProperties;
  path?: React.CSSProperties;
  background?: React.CSSProperties;
  marker?: React.CSSProperties;
  title?: React.CSSProperties;
  content?: React.CSSProperties;
};

export type LineProgressBarDefaultProps = {
  background: boolean;
  backgroundPadding: number;
  classes: {
    root: string;
    trail: string;
    path: string;
    background: string;
    marker: string;
    title: string;
    content: string;
  };
  className: string;
  maxValue: number;
  minValue: number;
  strokeWidth: number;
  styles: LineProgressBarStyles;
};

export type LineProgressBarProps = LineProgressBarDefaultProps & {
  title: string;
  content: string;
  value: number;
};
