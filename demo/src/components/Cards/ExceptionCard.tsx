import * as React from 'react';

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
