import * as React from 'react';

export type ExceptionCardStyles = {
  root?: React.CSSProperties;
  title?: React.CSSProperties;
  content?: React.CSSProperties;
};

export type ExceptionCardDefaultProps = {
  classes: {
    root: string;
    title: string;
    content: string;
  };
  className: string;
  styles: ExceptionCardStyles;
};

export type ExceptionCardProps = ExceptionCardDefaultProps & {
  title: string;
  content: string;
};
