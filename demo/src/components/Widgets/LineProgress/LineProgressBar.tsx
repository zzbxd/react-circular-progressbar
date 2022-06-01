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
    },
    className: '',
    maxValue: 100,
    minValue: 0,
    strokeWidth: 16,

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
    return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth / 2 - this.getBackgroundPadding() - 5;
  }

  getPathRatio() {
    const { value, minValue, maxValue } = this.props;
    const boundedValue = Math.min(Math.max(value, minValue), maxValue);
    return (boundedValue - minValue) / (maxValue - minValue);
  }

  render() {
    const { className, classes, styles, title, content, strokeWidth } = this.props;
    const pathRadius = this.getPathRadius();
    const pathRatio = this.getPathRatio();

    return (
      <svg
        className={`${classes.root} ${className}`}
        style={styles.root}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        data-test-id="LineProgressbar"
      >
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
        />
        {title ? (
          <text className={classes.title} style={styles.title} x={VIEWBOX_CENTER_X} y={12}>
            {title}
          </text>
        ) : null}

        {content ? (
          <text
            className={classes.content}
            style={styles.content}
            x={VIEWBOX_CENTER_X}
            y={VIEWBOX_CENTER_Y + 22}
          >
            {content}
          </text>
        ) : null}
      </svg>
    );
  }
}

export default LineProgressBar;
