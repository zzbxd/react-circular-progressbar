import * as React from 'react';

import {
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  VIEWBOX_HEIGHT_HALF,
  VIEWBOX_CENTER_X,
  VIEWBOX_CENTER_Y,
} from './constants';
import Path from './PathHalfCircle';
import { CircularProgressbarDefaultProps, CircularProgressbarProps } from './types';

class HalfCircularProgressbar extends React.Component<CircularProgressbarProps> {
  static defaultProps: CircularProgressbarDefaultProps = {
    background: false,
    backgroundPadding: 0,
    circleRatio: 1,
    classes: {
      root: 'CircularProgressbar',
      trail: 'CircularProgressbar-trail',
      path: 'CircularProgressbar-path',
      text: 'CircularProgressbar-text',
      background: 'CircularProgressbar-background',
      marker: 'CircularProgressbar-marker',
    },
    counterClockwise: false,
    className: '',
    maxValue: 100,
    minValue: 0,
    strokeWidth: 8,
    styles: {
      root: {},
      trail: {},
      path: {},
      text: {},
      background: {},
    },
    text: '',
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
    const {
      circleRatio,
      className,
      classes,
      counterClockwise,
      styles,
      strokeWidth,
      text,
    } = this.props;

    const pathRadius = this.getPathRadius();
    const pathRatio = this.getPathRatio();

    return (
      <div>
        <svg
          className={`${classes.root} ${className}`}
          style={styles.root}
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          data-test-id="CircularProgressbar"
        >
          <defs>
            <marker id="endpoint" refX="1" refY="1">
              <circle cx="1" cy="1" r="1" className={classes.marker} style={styles.marker} />
            </marker>
          </defs>
          {this.props.background ? (
            <circle
              className={classes.background}
              style={styles.background}
              cx={VIEWBOX_CENTER_X}
              cy={VIEWBOX_CENTER_Y}
              r={VIEWBOX_HEIGHT_HALF}
            />
          ) : null}
          <Path
            className={classes.trail}
            counterClockwise={counterClockwise}
            dashRatio={circleRatio}
            pathRadius={pathRadius}
            strokeWidth={strokeWidth}
            style={styles.trail}
          />
          <Path
            className={classes.path}
            counterClockwise={counterClockwise}
            dashRatio={pathRatio * circleRatio}
            pathRadius={pathRadius}
            strokeWidth={strokeWidth}
            style={styles.path}
            marker="url(#endpoint)"
          />
          {text ? (
            <text
              className={classes.text}
              style={styles.text}
              x={VIEWBOX_CENTER_X}
              y={VIEWBOX_CENTER_Y + pathRadius}
            >
              {text}
            </text>
          ) : null}
        </svg>
      </div>
    );
  }
}

export default HalfCircularProgressbar;
