import * as React from 'react';
import './styles.css';
import {
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  VIEWBOX_HEIGHT_HALF,
  VIEWBOX_CENTER_X,
  VIEWBOX_CENTER_Y,
} from '../constants';
import { ExceptionCardDefaultProps, ExceptionCardProps } from './types';

class ExceptionCard extends React.Component<ExceptionCardProps> {
  static defaultProps: ExceptionCardDefaultProps = {
    classes: {
      root: 'ExceptionCard',
      title: 'ExceptionCard-title',
      content: 'ExceptionCard-content',
    },
    className: '',
    styles: {
      root: {},
      title: {},
      content: {},
    },
  };

  render() {
    const { className, classes, styles, title1, title2, content } = this.props;

    return (
      <svg
        className={`${classes.root} ${className}`}
        style={styles.root}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        data-test-id="ExceptionCard"
      >
        {title1 ? (
          <text className={classes.title} style={styles.title} x={VIEWBOX_CENTER_X} y={12}>
            {title1}
          </text>
        ) : null}

        {title2 ? (
          <text className={classes.title} style={styles.title} x={VIEWBOX_CENTER_X} y={28}>
            {title2}
          </text>
        ) : null}

        {content ? (
          <text
            className={classes.content}
            style={styles.content}
            x={VIEWBOX_CENTER_X}
            y={VIEWBOX_CENTER_Y + 36}
          >
            {content}
          </text>
        ) : null}
      </svg>
    );
  }
}

export default ExceptionCard;
