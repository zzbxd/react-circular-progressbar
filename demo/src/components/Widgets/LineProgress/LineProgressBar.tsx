import * as React from 'react';
import {
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  VIEWBOX_HEIGHT_HALF,
  VIEWBOX_CENTER_X,
  VIEWBOX_CENTER_Y,
} from '../constants';
import Path from './PathLine';
import { LineProgressBarDefaultProps, LineProgressBarProps } from './types';

class LineProgressBar extends React.Component<LineProgressBarProps> {
  static defaultProps: LineProgressBarDefaultProps = {
    background: false,
    backgroundPadding: 0,

    classes: {
      root: 'LineProgressBar',
      title: 'LineProgressBar-title',
      content: 'LineProgressBar-content',
      trail: 'LineProgressBar-trail',
      path: 'LineProgressBar-path',
      background: 'LineProgressBar-background',
      marker: 'LineProgressBar-conmarker',
    },
    className: '',
    maxValue: 100,
    minValue: 0,
    strokeWidth: 8,

    styles: {
      root: {},
      title: {},
      content: {},
    },
  };

  getBackgroundPadding() {
    if (!this.props.background) {
      return 0;
    }
    return this.props.backgroundPadding;
  }

  getPathRadius() {
    return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth - this.getBackgroundPadding();
  }

  // Ratio of path length to trail length, as a value between 0 and 1
  getPathRatio() {
    const { value, minValue, maxValue } = this.props;
    const boundedValue = Math.min(Math.max(value, minValue), maxValue);
    return (boundedValue - minValue) / (maxValue - minValue);
  }

  render() {
    const { className, classes, styles, title, strokeWidth } = this.props;
    const pathRadius = this.getPathRadius();
    const pathRatio = this.getPathRatio();

    return (
      <svg
        className={`${classes.root} ${className}`}
        style={styles.root}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        data-test-id="LineProgressbar"
      >
        <defs>
          <marker id="endpoint" refX="1" refY="1">
            <circle cx="1" cy="1" r="1" className={classes.marker} style={styles.marker} />
          </marker>
        </defs>
        <Path
          className={classes.trail}
          dashRatio={1}
          pathRadius={pathRadius}
          strokeWidth={strokeWidth}
          style={styles.trail}
        />
        <Path
          className={classes.path}
          dashRatio={pathRatio}
          pathRadius={pathRadius}
          strokeWidth={strokeWidth}
          style={styles.path}
          marker="url(#endpoint)"
        />
        {title ? (
          <text
            className={classes.title}
            style={styles.title}
            x={VIEWBOX_CENTER_X}
            y={VIEWBOX_CENTER_Y + pathRadius}
          >
            {title}
          </text>
        ) : null}
      </svg>
    );
  }
}

export default LineProgressBar;
