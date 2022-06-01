import * as React from 'react';
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
    const { className, classes, styles, title, content } = this.props;

    return (
      <div className={`${classes.root} ${className}`} style={styles.root}>
        <div>
          <p className={classes.title} style={styles.title}>
            {title}
          </p>
          <p className={classes.content} style={styles.content}>
            {content}
          </p>
        </div>
      </div>
    );
  }
}

export default ExceptionCard;
